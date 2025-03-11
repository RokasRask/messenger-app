import React, { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import './MessageInput.scss';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { sendMessage } = useContext(ChatContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <div className="message-input__actions">
        <button type="button" className="message-input__action-btn">
          <span className="icon">📎</span>
        </button>
      </div>
      <input
        type="text"
        className="message-input__field"
        placeholder="Rašyti žinutę..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button 
        type="submit" 
        className="message-input__send"
        disabled={!message.trim()}
      >
        <span className="icon">➤</span>
      </button>
    </form>
  );
};

export default MessageInput;