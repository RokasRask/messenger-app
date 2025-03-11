import React from 'react';
import ChatList from '../components/ChatList/ChatList';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import './MainLayout.scss';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="sidebar">
        <ChatList />
      </div>
      <div className="content">
        <ChatWindow />
      </div>
    </div>
  );
};

export default MainLayout;