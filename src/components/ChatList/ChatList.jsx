import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { formatChatListDate } from '../../utils/dateFormat';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import './ChatList.scss';

const ChatList = () => {
  const { chats, activeChat, setActiveChat, markAsRead } = useContext(ChatContext);

  const handleChatSelect = (chatId) => {
    setActiveChat(chatId);
    markAsRead(chatId);
  };

  return (
    <div className="chat-list">
      <div className="chat-list__header">
        <h1>Pokalbiai</h1>
        <ThemeToggler />
      </div>
      <div className="chat-list__search">
        <input type="text" placeholder="Ieškoti..." />
      </div>
      <div className="chat-list__items">
        {chats.map(chat => (
          <div 
            key={chat.id} 
            className={`chat-list__item ${activeChat === chat.id ? 'active' : ''}`}
            onClick={() => handleChatSelect(chat.id)}
          >
            <div className="chat-list__avatar">
              <div className={`status-indicator ${chat.user.status}`}></div>
              <img src={chat.user.avatar} alt={chat.user.name} />
            </div>
            <div className="chat-list__content">
              <div className="chat-list__name-time">
                <h3>{chat.user.name}</h3>
                {chat.lastMessage && (
                  <span className="chat-list__time">
                    {formatChatListDate(chat.lastMessage.timestamp)}
                  </span>
                )}
              </div>
              <div className="chat-list__message-unread">
                {chat.lastMessage && (
                  <p className="chat-list__message-preview">
                    {chat.lastMessage.senderId === 'user-1' ? 'Jūs: ' : ''}
                    {chat.lastMessage.text.length > 30 
                      ? chat.lastMessage.text.substring(0, 30) + '...' 
                      : chat.lastMessage.text}
                  </p>
                )}
                {chat.unreadCount > 0 && (
                  <span className="chat-list__unread-badge">{chat.unreadCount}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;