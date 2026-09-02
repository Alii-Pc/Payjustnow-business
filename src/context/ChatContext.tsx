'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ChatContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
}

const ChatContext = createContext<ChatContextType>({
  isOpen: false,
  openChat: () => {},
  closeChat: () => {},
  toggleChat: () => {},
});

export const useChat = () => useContext(ChatContext);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen((prev) => !prev);

  // Global click listener for any .btn-chatbot elements
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const chatBtn = target.closest('.btn-chatbot, [data-chat-trigger="true"]');
      if (chatBtn) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <ChatContext.Provider value={{ isOpen, openChat, closeChat, toggleChat }}>
      {children}
    </ChatContext.Provider>
  );
}
