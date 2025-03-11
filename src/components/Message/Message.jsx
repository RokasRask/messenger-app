import React from 'react';
import { formatMessageDate } from '../../utils/dateFormat';
import './Message.scss';

const Message = ({ message, isOwn }) => {
  return (
    <div className={`message ${isOwn ? 'message--own' : ''}`}>
      <div className="message__content">
        <div className="message__text">{message.text}</div>
        <div className="message__meta">
          <span className="message__time">{formatMessageDate(message.timestamp)}</span>
          {isOwn && (
            <span className="message__status">
              {message.read ? (
                <span className="message__status-read">✓✓</span>
              ) : (
                <span className="message__status-sent">✓</span>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;