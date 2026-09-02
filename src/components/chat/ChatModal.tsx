'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useChat } from '@/context/ChatContext';
import { getBotReply, ChatMessage } from './chatKnowledge';

type ViewMode = 'home' | 'chat' | 'faq_detail';

interface FAQArticle {
  id: string;
  title: string;
  avatarLetter: string;
  avatarBg: string;
  content: string;
}

const faqArticles: FAQArticle[] = [
  {
    id: 'getting-started-pay-3',
    title: 'Getting Started with Pay in 3',
    avatarLetter: 'G',
    avatarBg: '#e74c3c',
    content:
      'PayJustNow allows customers to split payments into 3 equal installments: 1/3 upfront, 1/3 next month, and 1/3 the month after. Merchants are paid 100% upfront the following business day with zero credit or fraud risk.',
  },
  {
    id: 'pay-3-12-faq',
    title: 'Pay in 3&12 FAQ',
    avatarLetter: 'P',
    avatarBg: '#8d776e',
    content:
      'Pay in 3 is interest-free for customers. For larger purchases, Pay in 12 provides extended installment terms while keeping checkout friction-free. We support Shopify, WooCommerce, Magento, and POS PayUp integration.',
  },
];

export default function ChatModal() {
  const { isOpen, closeChat } = useChat();
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [activeChannel, setActiveChannel] = useState('Pay in 3 & 12');
  const [activeFaq, setActiveFaq] = useState<FAQArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFaqSearch, setShowFaqSearch] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'bot',
      text: 'Hello 👋 Welcome to PayJustNow Support! How can we help you today?',
      timestamp: '11:53 AM',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && viewMode === 'chat') {
      scrollToBottom();
    }
  }, [messages, isOpen, viewMode, isTyping]);

  if (!isOpen) return null;

  const handleOpenChannel = (channelName: string) => {
    setActiveChannel(channelName);
    setViewMode('chat');
  };

  const handleOpenFaq = (faq: FAQArticle) => {
    setActiveFaq(faq);
    setViewMode('faq_detail');
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotReply(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: reply.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: reply.actions,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const filteredFaqs = faqArticles.filter((f) =>
    f.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        animation: 'chatFadeIn 0.25s ease-out forwards',
      }}
    >
      <style>{`
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Floating Close Button at top-right above widget */}
      <button
        type="button"
        onClick={closeChat}
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#3b4856',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '13px',
          fontWeight: '700',
          marginBottom: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
          transition: 'transform 0.15s, background-color 0.15s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2c3e50')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3b4856')}
        aria-label="Close Chat"
      >
        ✕
      </button>

      {/* Main Chatbot Window Container */}
      <div
        style={{
          width: '370px',
          maxWidth: 'calc(100vw - 32px)',
          height: '590px',
          maxHeight: 'calc(100vh - 100px)',
          backgroundColor: '#f6f7f9',
          borderRadius: '16px',
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.22)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* ===================== VIEW: HOME SCREEN ===================== */}
        {viewMode === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
            {/* Neon Lime Header */}
            <div
              style={{
                backgroundColor: '#bdf500',
                padding: '24px 20px 24px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {/* PayJustNow Logo SVG */}
                <svg width="170" height="34" viewBox="0 0 170 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H14.5V14.5H0V0Z" fill="#000000" />
                  <path d="M4 18H18.5V32.5H4V18Z" fill="#000000" />
                  <text x="26" y="23" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="19" fontWeight="900" fill="#000000" letterSpacing="-0.5">
                    PayJustNow<tspan fontSize="11" dy="-8">®</tspan>
                  </text>
                </svg>
              </div>
            </div>

            {/* Content Body with 2 White Floating Cards */}
            <div style={{ padding: '16px 14px 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* CARD 1: "Chat with us" */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                  border: '1px solid #eaeaea',
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: '14px 18px', fontSize: '15px', fontWeight: '700', color: '#2d3748' }}>
                  Chat with us
                </div>
                <div style={{ height: '1px', backgroundColor: '#f0f0f0' }} />

                {/* Channel 1: Pay in 3 & 12 */}
                <div
                  onClick={() => handleOpenChannel('Pay in 3 & 12')}
                  style={{
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fafafa')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: '#8d776e',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontSize: '16px',
                      }}
                    >
                      P
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748' }}>
                        Pay in 3 & 12
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#666666', marginTop: '2px' }}>
                        Hello 👋
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', color: '#888888' }}>11:53 AM</span>
                </div>

                <div style={{ height: '1px', backgroundColor: '#f0f0f0', margin: '0 18px' }} />

                {/* Channel 2: PJN Mobile */}
                <div
                  onClick={() => handleOpenChannel('PJN Mobile')}
                  style={{
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fafafa')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: '#8d776e',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontSize: '16px',
                      }}
                    >
                      P
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748' }}>
                        PJN Mobile
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#666666', marginTop: '2px' }}>
                        Hi 🖐️ !
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', color: '#888888' }}>11:53 AM</span>
                </div>
              </div>

              {/* CARD 2: "FAQs" */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                  border: '1px solid #eaeaea',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: '700', color: '#2d3748' }}>
                    FAQs
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowFaqSearch(!showFaqSearch)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '1px solid #e2e8f0',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '13px',
                      color: '#718096',
                    }}
                    aria-label="Search FAQs"
                  >
                    🔍
                  </button>
                </div>

                {showFaqSearch && (
                  <div style={{ padding: '0 18px 12px' }}>
                    <input
                      type="text"
                      placeholder="Search questions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        fontSize: '13px',
                        border: '1px solid #cbd5e0',
                        borderRadius: '6px',
                        outline: 'none',
                      }}
                      autoFocus
                    />
                  </div>
                )}

                <div style={{ height: '1px', backgroundColor: '#f0f0f0' }} />

                {/* FAQ Item 1: Getting Started with Pay in 3 */}
                {filteredFaqs.map((faq, idx) => (
                  <React.Fragment key={faq.id}>
                    <div
                      onClick={() => handleOpenFaq(faq)}
                      style={{
                        padding: '14px 18px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        transition: 'background-color 0.15s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fafafa')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                    >
                      <div
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '8px',
                          backgroundColor: faq.avatarBg,
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          fontSize: '15px',
                          flexShrink: 0,
                        }}
                      >
                        {faq.avatarLetter}
                      </div>
                      <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#2b4366' }}>
                        {faq.title}
                      </div>
                    </div>
                    {idx < filteredFaqs.length - 1 && (
                      <div style={{ height: '1px', backgroundColor: '#f0f0f0', margin: '0 18px' }} />
                    )}
                  </React.Fragment>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* ===================== VIEW: ACTIVE CHAT SCREEN ===================== */}
        {viewMode === 'chat' && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Header with Back Button */}
            <div
              style={{
                backgroundColor: '#bdf500',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setViewMode('home')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2px',
                  }}
                  aria-label="Back to channels"
                >
                  ←
                </button>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '14.5px', color: '#000000' }}>
                    {activeChannel}
                  </div>
                  <div style={{ fontSize: '11px', color: '#333333', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2ecc71', display: 'inline-block' }}></span>
                    Online
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Message Stream */}
            <div
              style={{
                flex: 1,
                padding: '16px',
                overflowY: 'auto',
                backgroundColor: '#f8f9fa',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div
                    style={{
                      maxWidth: '82%',
                      padding: '12px 16px',
                      borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                      backgroundColor: msg.sender === 'user' ? '#000000' : '#ffffff',
                      color: msg.sender === 'user' ? '#ffffff' : '#222222',
                      fontSize: '13.5px',
                      lineHeight: '1.45',
                      boxShadow: msg.sender === 'user' ? '0 2px 8px rgba(0,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.06)',
                      border: msg.sender === 'user' ? 'none' : '1px solid #e9ecef',
                    }}
                  >
                    {msg.text}

                    {/* Action Buttons if any */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {msg.actions.map((act) =>
                          act.url?.startsWith('mailto:') ? (
                            <a
                              key={act.label}
                              href={act.url}
                              style={{
                                display: 'inline-block',
                                padding: '6px 12px',
                                backgroundColor: '#bdf500',
                                color: '#000000',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '600',
                                textDecoration: 'none',
                              }}
                            >
                              {act.label} &rarr;
                            </a>
                          ) : (
                            <Link
                              key={act.label}
                              href={act.url || '#'}
                              onClick={closeChat}
                              style={{
                                display: 'inline-block',
                                padding: '6px 12px',
                                backgroundColor: '#bdf500',
                                color: '#000000',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '600',
                                textDecoration: 'none',
                              }}
                            >
                              {act.label} &rarr;
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                  <span style={{ fontSize: '10px', color: '#999999', marginTop: '4px', padding: '0 4px' }}>
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '10px 14px', backgroundColor: '#ffffff', borderRadius: '12px', width: 'fit-content', border: '1px solid #e9ecef' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#999', animation: 'typingBounce 1s infinite 0s' }}></span>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#999', animation: 'typingBounce 1s infinite 0.2s' }}></span>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#999', animation: 'typingBounce 1s infinite 0.4s' }}></span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div
              style={{
                padding: '12px 14px',
                borderTop: '1px solid #e9ecef',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  fontSize: '13.5px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '24px',
                  outline: 'none',
                  backgroundColor: '#f8f9fa',
                  color: '#222222',
                }}
                autoFocus
              />
              <button
                type="button"
                onClick={() => handleSend()}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: inputValue.trim() ? '#000000' : '#e0e0e0',
                  color: inputValue.trim() ? '#bdf500' : '#888888',
                  border: 'none',
                  cursor: inputValue.trim() ? 'pointer' : 'default',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '15px',
                  transition: 'all 0.2s ease',
                }}
                disabled={!inputValue.trim()}
                aria-label="Send Message"
              >
                ➤
              </button>
            </div>
          </div>
        )}

        {/* ===================== VIEW: FAQ DETAIL SCREEN ===================== */}
        {viewMode === 'faq_detail' && activeFaq && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto', backgroundColor: '#ffffff' }}>
            <div
              style={{
                backgroundColor: '#bdf500',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <button
                type="button"
                onClick={() => setViewMode('home')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  color: '#000000',
                }}
                aria-label="Back to FAQs"
              >
                ←
              </button>
              <span style={{ fontWeight: '700', fontSize: '14.5px', color: '#000000' }}>
                FAQs
              </span>
            </div>

            <div style={{ padding: '24px 20px', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: activeFaq.avatarBg,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '16px',
                  }}
                >
                  {activeFaq.avatarLetter}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2d3748', margin: 0 }}>
                  {activeFaq.title}
                </h3>
              </div>

              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#4a5568' }}>
                {activeFaq.content}
              </p>

              <div style={{ marginTop: '30px', padding: '16px', backgroundColor: '#f7fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#2d3748', marginBottom: '8px' }}>
                  Still have questions?
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenChannel('Pay in 3 & 12')}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#000000',
                    color: '#bdf500',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Start Live Chat &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
