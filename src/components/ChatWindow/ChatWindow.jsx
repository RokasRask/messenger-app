import React, { useContext, useEffect, useRef } from 'react';
import { ChatContext } from '../../context/ChatContext';
import UserInfo from '../UserInfo/UserInfo';
import Message from '../Message/Message';
import MessageInput from '../MessageInput/MessageInput';
import './ChatWindow.scss';

const ChatWindow = () => {
  const { activeChat, chats, messages, currentUser } = useContext(ChatContext);
  const messagesEndRef = useRef(null);

  const activeChatMessages = activeChat ? messages[activeChat] || [] : [];
  const activeChatData = chats.find(chat => chat.id === activeChat);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeChatMessages]);

  if (!activeChat) {
    return (
      <div className="chat-window chat-window--empty">
        <div className="chat-window__placeholder">
          <h2>Pasirinkite pokalbį pradėti</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-window">
      {activeChatData && (
        <>
          <UserInfo user={activeChatData.user} />
          
          <div className="chat-window__messages">
            {activeChatMessages.map(message => (
              <Message 
                key={message.id} 
                message={message} 
                isOwn={message.senderId === currentUser.id}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default ChatWindow;