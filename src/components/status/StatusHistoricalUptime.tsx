'use client';

import { useState } from 'react';

const componentOptions = [
  'SignUp',
  'Checkout',
  'Core Switching',
  'Consumer Platforms',
  'Consumer Platforms - Web',
  'Consumer Platforms - IOS APP',
  'Consumer Platforms - Android APP',
  'Consumer Platforms - Huawei APP',
  'Merchant Platforms',
  'Merchant Platforms - PayUp APP',
  'Merchant Platforms - Merchant Portal',
  'Merchant Platforms - Shopify Checkout',
  'Support Platforms',
  'Support Platforms - Chat',
  'Support Platforms - Email',
  'Support Platforms - Phones',
  '3rd Party Platforms',
  '3rd Party Platforms - ABSA Bank',
  '3rd Party Platforms - Capitec Bank',
  '3rd Party Platforms - FNB Bank',
  '3rd Party Platforms - Standard Bank',
  '3rd Party Platforms - Nedbank Bank',
  '3rd Party Platforms - 3DSecure Authorisation - Mastercard',
  '3rd Party Platforms - 3DSecure Authorisation - Visa',
  'Shopify Third party services',
];

export default function StatusHistoricalUptime({
  onSwitchTab,
}: {
  onSwitchTab?: (tab: 'status' | 'incidents' | 'uptime') => void;
}) {
  const [selectedComp, setSelectedComp] = useState('SignUp');

  // Days in July (31 days, starts Wednesday = 3 empty slots in Mon-Sun or 3 empty slots in Sun-Sat)
  // July 2026 starts Wednesday (3 empty slots if Sun-Sat: Sun, Mon, Tue, Wed=1)
  const julyEmpty = 3;
  const julyDays = 31;

  // August 2026 (31 days, starts Saturday: 6 empty slots)
  const augEmpty = 6;
  const augDays = 31;

  // September 2026 (30 days, starts Tuesday: 2 empty slots)
  const sepEmpty = 2;
  const sepDays = 30;
  const sepElapsedDays = 2; // Today is Sep 2, 2026

  return (
    <div>
      {/* Sub Navigation Tabs */}
      <div className="history-nav-tabs-container">
        <button
          type="button"
          onClick={() => onSwitchTab?.('incidents')}
          className="history-nav-tab-btn"
        >
          Incidents
        </button>
        <button
          type="button"
          className="history-nav-tab-btn active"
        >
          Uptime
        </button>
      </div>

      {/* Controls Bar: Component Select & Date Range Pager */}
      <div className="history-controls-bar">
        <div className="status-select-wrapper">
          <select
            value={selectedComp}
            onChange={(e) => setSelectedComp(e.target.value)}
            className="status-component-select"
          >
            {componentOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="status-select-arrow">▼</span>
        </div>

        <div className="history-date-pager">
          <button type="button" className="pager-btn" aria-label="Previous Period">
            &lsaquo;
          </button>
          <span>July 2026 to September 2026</span>
          <button type="button" className="pager-btn" disabled aria-label="Next Period">
            &rsaquo;
          </button>
        </div>
      </div>

      {/* 3-Month Calendar Columns Grid */}
      <div className="uptime-3months-grid">
        {/* July 2026 */}
        <div className="uptime-month-col">
          <div className="uptime-month-col-header">
            <span className="uptime-month-col-title">July 2026</span>
            <span className="uptime-month-col-stat">100%</span>
          </div>
          <div className="uptime-month-blocks-grid">
            {Array.from({ length: julyEmpty }).map((_, i) => (
              <div key={`july-empty-${i}`} className="uptime-block empty" />
            ))}
            {Array.from({ length: julyDays }, (_, i) => i + 1).map((d) => (
              <div
                key={`july-${d}`}
                className="uptime-block available"
                title={`July ${d}, 2026: 100% Uptime, No downtime recorded.`}
              />
            ))}
          </div>
        </div>

        {/* August 2026 */}
        <div className="uptime-month-col">
          <div className="uptime-month-col-header">
            <span className="uptime-month-col-title">August 2026</span>
            <span className="uptime-month-col-stat">100%</span>
          </div>
          <div className="uptime-month-blocks-grid">
            {Array.from({ length: augEmpty }).map((_, i) => (
              <div key={`aug-empty-${i}`} className="uptime-block empty" />
            ))}
            {Array.from({ length: augDays }, (_, i) => i + 1).map((d) => (
              <div
                key={`aug-${d}`}
                className="uptime-block available"
                title={`August ${d}, 2026: 100% Uptime, No downtime recorded.`}
              />
            ))}
          </div>
        </div>

        {/* September 2026 */}
        <div className="uptime-month-col">
          <div className="uptime-month-col-header">
            <span className="uptime-month-col-title">September 2026</span>
            <span className="uptime-month-col-stat">100%</span>
          </div>
          <div className="uptime-month-blocks-grid">
            {Array.from({ length: sepEmpty }).map((_, i) => (
              <div key={`sep-empty-${i}`} className="uptime-block empty" />
            ))}
            {Array.from({ length: sepDays }, (_, i) => i + 1).map((d) => {
              const isPast = d <= sepElapsedDays;
              return (
                <div
                  key={`sep-${d}`}
                  className={`uptime-block ${isPast ? 'available' : 'future'}`}
                  title={
                    isPast
                      ? `September ${d}, 2026: 100% Uptime, No downtime recorded.`
                      : `September ${d}, 2026: Future day`
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
