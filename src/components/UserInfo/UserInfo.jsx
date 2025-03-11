import React from 'react';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import './UserInfo.scss';

const UserInfo = ({ user }) => {
  const statusText = {
    'online': 'Prisijungęs',
    'offline': 'Atsijungęs',
    'away': 'Pasišalinęs'
  };

  return (
    <div className="user-info">
      <div className="user-info__avatar">
        <img src={user.avatar} alt={user.name} />
        <div className={`status-indicator ${user.status}`}></div>
      </div>
      <div className="user-info__details">
        <h2 className="user-info__name">{user.name}</h2>
        <p className="user-info__status">{statusText[user.status]}</p>
      </div>
      <div className="user-info__actions">
        <button className="user-info__action-btn">
          <span className="icon">📞</span>
        </button>
        <button className="user-info__action-btn">
          <span className="icon">📹</span>
        </button>
        <button className="user-info__action-btn">
          <span className="icon">ℹ️</span>
        </button>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default UserInfo;