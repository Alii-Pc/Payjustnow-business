'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type TabType = 'email' | 'sms' | 'slack' | 'webhook' | 'rss';

export default function StatusHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('email');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [webhookInput, setWebhookInput] = useState('');
  const [submittedTab, setSubmittedTab] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    setSubmittedTab(type);
    setTimeout(() => {
      setSubmittedTab(null);
      setIsOpen(false);
    }, 2000);
  };

  return (
    <div className="status-masthead">
      <h1>
        <Link href="/" className="brand-link">
          PayJustNow
        </Link>
      </h1>

      {/* Subscribe to Updates Button */}
      <div style={{ position: 'relative' }} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="status-subscribe-btn"
        >
          SUBSCRIBE TO UPDATES
        </button>

        {isOpen && (
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 'calc(100% + 8px)',
              width: '380px',
              backgroundColor: '#ffffff',
              borderRadius: '4px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
              border: '1px solid #E0E0E0',
              zIndex: 1000,
              overflow: 'hidden',
              textAlign: 'left',
            }}
          >
            {/* Tabs Header */}
            <div style={{ display: 'flex', borderBottom: '1px solid #E0E0E0', background: '#fcfcfc' }}>
              <button
                type="button"
                onClick={() => setActiveTab('email')}
                style={{
                  flex: 1,
                  padding: '10px 0',
                  fontSize: '12px',
                  fontWeight: activeTab === 'email' ? '600' : '500',
                  color: activeTab === 'email' ? '#2386c8' : '#666666',
                  borderBottom: activeTab === 'email' ? '2px solid #2386c8' : '2px solid transparent',
                  background: activeTab === 'email' ? '#ffffff' : 'transparent',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                }}
              >
                ✉ Email
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sms')}
                style={{
                  flex: 1,
                  padding: '10px 0',
                  fontSize: '12px',
                  fontWeight: activeTab === 'sms' ? '600' : '500',
                  color: activeTab === 'sms' ? '#2386c8' : '#666666',
                  borderBottom: activeTab === 'sms' ? '2px solid #2386c8' : '2px solid transparent',
                  background: activeTab === 'sms' ? '#ffffff' : 'transparent',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                }}
              >
                📱 SMS
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('slack')}
                style={{
                  flex: 1,
                  padding: '10px 0',
                  fontSize: '12px',
                  fontWeight: activeTab === 'slack' ? '600' : '500',
                  color: activeTab === 'slack' ? '#2386c8' : '#666666',
                  borderBottom: activeTab === 'slack' ? '2px solid #2386c8' : '2px solid transparent',
                  background: activeTab === 'slack' ? '#ffffff' : 'transparent',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                }}
              >
                Slack
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('webhook')}
                style={{
                  flex: 1,
                  padding: '10px 0',
                  fontSize: '12px',
                  fontWeight: activeTab === 'webhook' ? '600' : '500',
                  color: activeTab === 'webhook' ? '#2386c8' : '#666666',
                  borderBottom: activeTab === 'webhook' ? '2px solid #2386c8' : '2px solid transparent',
                  background: activeTab === 'webhook' ? '#ffffff' : 'transparent',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                }}
              >
                Webhook
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('rss')}
                style={{
                  flex: 1,
                  padding: '10px 0',
                  fontSize: '12px',
                  fontWeight: activeTab === 'rss' ? '600' : '500',
                  color: activeTab === 'rss' ? '#2386c8' : '#666666',
                  borderBottom: activeTab === 'rss' ? '2px solid #2386c8' : '2px solid transparent',
                  background: activeTab === 'rss' ? '#ffffff' : 'transparent',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                }}
              >
                RSS
              </button>
            </div>

            {/* Tab Contents */}
            <div style={{ padding: '16px', fontSize: '13px', color: '#333333' }}>
              {activeTab === 'email' && (
                <div>
                  <p style={{ margin: '0 0 10px', color: '#666', fontSize: '12px' }}>
                    Get email notifications whenever PayJustNow creates, updates or resolves an incident.
                  </p>
                  {submittedTab === 'email' ? (
                    <div style={{ padding: '10px', background: '#e8f8f0', color: '#2fcc66', borderRadius: '3px', textAlign: 'center', fontWeight: 'bold' }}>
                      ✓ Thank you! You are now subscribed.
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleSubmit(e, 'email')}>
                      <input
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Email address"
                        style={{
                          width: '100%',
                          padding: '8px 10px',
                          fontSize: '13px',
                          border: '1px solid #ccc',
                          borderRadius: '3px',
                          marginBottom: '10px',
                          outline: 'none',
                        }}
                      />
                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          padding: '8px',
                          background: '#2386c8',
                          color: '#fff',
                          fontWeight: '600',
                          fontSize: '13px',
                          border: 'none',
                          borderRadius: '3px',
                          cursor: 'pointer',
                        }}
                      >
                        Subscribe via Email
                      </button>
                    </form>
                  )}
                </div>
              )}

              {activeTab === 'sms' && (
                <div>
                  <p style={{ margin: '0 0 10px', color: '#666', fontSize: '12px' }}>
                    Get SMS notifications whenever PayJustNow creates or resolves an incident.
                  </p>
                  {submittedTab === 'sms' ? (
                    <div style={{ padding: '10px', background: '#e8f8f0', color: '#2fcc66', borderRadius: '3px', textAlign: 'center', fontWeight: 'bold' }}>
                      ✓ Subscribed! Confirmation sent via SMS.
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleSubmit(e, 'sms')}>
                      <input
                        type="tel"
                        required
                        value={phoneInput}
                        onChange={(e) => setPhoneInput(e.target.value)}
                        placeholder="+27 (0) 82 123 4567"
                        style={{
                          width: '100%',
                          padding: '8px 10px',
                          fontSize: '13px',
                          border: '1px solid #ccc',
                          borderRadius: '3px',
                          marginBottom: '10px',
                          outline: 'none',
                        }}
                      />
                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          padding: '8px',
                          background: '#2386c8',
                          color: '#fff',
                          fontWeight: '600',
                          fontSize: '13px',
                          border: 'none',
                          borderRadius: '3px',
                          cursor: 'pointer',
                        }}
                      >
                        Subscribe via SMS
                      </button>
                    </form>
                  )}
                </div>
              )}

              {activeTab === 'slack' && (
                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                  <p style={{ margin: '0 0 12px', color: '#666', fontSize: '12px' }}>
                    Receive incident updates directly in your team&apos;s Slack channel.
                  </p>
                  <a
                    href="https://slack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '8px 16px',
                      background: '#4A154B',
                      color: '#ffffff',
                      fontWeight: '600',
                      fontSize: '13px',
                      borderRadius: '3px',
                      textDecoration: 'none',
                    }}
                  >
                    Add to Slack
                  </a>
                </div>
              )}

              {activeTab === 'webhook' && (
                <div>
                  <p style={{ margin: '0 0 10px', color: '#666', fontSize: '12px' }}>
                    Receive real-time JSON webhooks for incident updates.
                  </p>
                  {submittedTab === 'webhook' ? (
                    <div style={{ padding: '10px', background: '#e8f8f0', color: '#2fcc66', borderRadius: '3px', textAlign: 'center', fontWeight: 'bold' }}>
                      ✓ Webhook subscribed successfully.
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleSubmit(e, 'webhook')}>
                      <input
                        type="url"
                        required
                        value={webhookInput}
                        onChange={(e) => setWebhookInput(e.target.value)}
                        placeholder="https://your-endpoint.com/webhook"
                        style={{
                          width: '100%',
                          padding: '8px 10px',
                          fontSize: '13px',
                          border: '1px solid #ccc',
                          borderRadius: '3px',
                          marginBottom: '10px',
                          outline: 'none',
                        }}
                      />
                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          padding: '8px',
                          background: '#2386c8',
                          color: '#fff',
                          fontWeight: '600',
                          fontSize: '13px',
                          border: 'none',
                          borderRadius: '3px',
                          cursor: 'pointer',
                        }}
                      >
                        Subscribe to Webhook
                      </button>
                    </form>
                  )}
                </div>
              )}

              {activeTab === 'rss' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                  <p style={{ margin: '0 0 4px', color: '#666' }}>
                    Subscribe to our Atom or RSS feed in your favorite feed reader:
                  </p>
                  <a
                    href="https://status.payjustnow.com/history.atom"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '8px 10px',
                      border: '1px solid #E0E0E0',
                      borderRadius: '3px',
                      color: '#2386c8',
                      textDecoration: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>ATOM Feed</span>
                    <span>↗</span>
                  </a>
                  <a
                    href="https://status.payjustnow.com/history.rss"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '8px 10px',
                      border: '1px solid #E0E0E0',
                      borderRadius: '3px',
                      color: '#2386c8',
                      textDecoration: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>RSS Feed</span>
                    <span>↗</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
