import React, { createContext, useState, useEffect } from 'react';
import { messages as initialMessages, users } from '../mock/messages';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [activeChat, setActiveChat] = useState(null);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState({});
  const [currentUser, setCurrentUser] = useState({
    id: 'user-1',
    name: 'Jonas Jonaitis',
    avatar: '/assets/images/avatar-placeholder.png',
    status: 'online'
  });

  // Initialize chats based on mock data
  useEffect(() => {
    // Extract unique chat IDs from messages
    const chatIds = [...new Set(initialMessages.map(msg => msg.chatId))];
    
    // Create chats array
    const chatList = chatIds.map(chatId => {
      // Find the other user in this chat
      const chatMessages = initialMessages.filter(msg => msg.chatId === chatId);
      const otherUserId = chatMessages.find(msg => msg.senderId !== currentUser.id)?.senderId || '';
      const otherUser = users.find(user => user.id === otherUserId) || {
        id: 'unknown',
        name: 'Nežinomas vartotojas',
        avatar: '/assets/images/avatar-placeholder.png'
      };
      
      // Find last message for preview
      const lastMessage = chatMessages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0] || null;
      
      return {
        id: chatId,
        user: otherUser,
        lastMessage: lastMessage,
        unreadCount: chatMessages.filter(msg => msg.senderId !== currentUser.id && !msg.read).length
      };
    });
    
    setChats(chatList);
    
    // If there are chats, set the first one as active
    if (chatList.length > 0) {
      setActiveChat(chatList[0].id);
    }
    
    // Organize messages by chat ID
    const messagesByChatId = {};
    chatIds.forEach(chatId => {
      messagesByChatId[chatId] = initialMessages.filter(msg => msg.chatId === chatId);
    });
    
    setMessages(messagesByChatId);
  }, [currentUser.id]);

  // Send a new message
  const sendMessage = (text) => {
    if (!text.trim() || !activeChat) return;
    
    const newMessage = {
      id: `msg-${Date.now()}`,
      chatId: activeChat,
      senderId: currentUser.id,
      text: text,
      timestamp: new Date().toISOString(),
      read: false
    };
    
    // Update messages state
    setMessages(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage]
    }));
    
    // Update chats list with new last message
    setChats(prev => 
      prev.map(chat => 
        chat.id === activeChat 
          ? { ...chat, lastMessage: newMessage } 
          : chat
      )
    );

    // In a real app, here we would send the message via WebSocket
    console.log('Sending message via WebSocket:', newMessage);
    
    // Simulate receiving a response after 1-3 seconds
    simulateResponse(activeChat);
  };

  // Simulate receiving a response (for demo purposes)
  const simulateResponse = (chatId) => {
    const responseDelay = 1000 + Math.random() * 2000; // 1-3 seconds
    
    setTimeout(() => {
      const chatUser = chats.find(chat => chat.id === chatId)?.user;
      if (!chatUser) return;
      
      const responseOptions = [
        'Ačiū už žinutę!',
        'Kaip sekasi?',
        'Supratau, patikslinsiu informaciją.',
        'Gerai, sutinku.',
        'Kada galėtume susitikti?',
        'Ok, pasistengsiu padėti.'
      ];
      
      const responseText = responseOptions[Math.floor(Math.random() * responseOptions.length)];
      
      const responseMessage = {
        id: `msg-${Date.now()}`,
        chatId: chatId,
        senderId: chatUser.id,
        text: responseText,
        timestamp: new Date().toISOString(),
        read: true
      };
      
      // Update messages state
      setMessages(prev => ({
        ...prev,
        [chatId]: [...(prev[chatId] || []), responseMessage]
      }));
      
      // Update chats list with new last message
      setChats(prev => 
        prev.map(chat => 
          chat.id === chatId 
            ? { 
                ...chat, 
                lastMessage: responseMessage,
                unreadCount: chat.unreadCount + 1
              } 
            : chat
        )
      );
    }, responseDelay);
  };
  
  // Mark all messages in a chat as read
  const markAsRead = (chatId) => {
    // Update messages
    setMessages(prev => ({
      ...prev,
      [chatId]: prev[chatId].map(msg => ({
        ...msg,
        read: true
      }))
    }));
    
    // Update unread count in chat list
    setChats(prev => 
      prev.map(chat => 
        chat.id === chatId 
          ? { ...chat, unreadCount: 0 } 
          : chat
      )
    );
  };

  // Provide the context
  return (
    <ChatContext.Provider
      value={{
        currentUser,
        chats,
        activeChat,
        setActiveChat,
        messages,
        sendMessage,
        markAsRead
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};