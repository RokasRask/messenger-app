import React from 'react';
import MainLayout from './layouts/MainLayout';
import { ChatProvider } from './context/ChatContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <MainLayout />
      </ChatProvider>
    </ThemeProvider>
    
  );
}

export default App;