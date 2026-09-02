'use client';

import { useState } from 'react';

interface ComponentItem {
  id: string;
  name: string;
  tooltipText: string;
  status: string;
  uptimePercent: string;
  showTimeline?: boolean;
}

interface ComponentGroup {
  id: string;
  name: string;
  tooltipText: string;
  status: string;
  children: ComponentItem[];
}

const standaloneTop: ComponentItem[] = [
  { id: 'signup', name: 'SignUp', tooltipText: 'The signup process used by our Customers', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
  { id: 'checkout', name: 'Checkout', tooltipText: 'The checkout process used by our Customers', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
  { id: 'core-switching', name: 'Core Switching', tooltipText: 'Core transaction and payment routing', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
];

const componentGroups: ComponentGroup[] = [
  {
    id: 'consumer-platforms',
    name: 'Consumer Platforms',
    tooltipText: 'Consumer facing websites and apps',
    status: 'Operational',
    children: [
      { id: 'cp-web', name: 'Web', tooltipText: 'Web portal and online customer dashboard', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'cp-ios', name: 'IOS APP', tooltipText: 'Apple iOS PayJustNow App', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'cp-android', name: 'Android APP', tooltipText: 'Google Android PayJustNow App', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'cp-huawei', name: 'Huawei APP', tooltipText: 'Huawei AppGallery PayJustNow App', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
    ],
  },
  {
    id: 'merchant-platforms',
    name: 'Merchant Platforms',
    tooltipText: 'Merchant tools and in-store apps',
    status: 'Operational',
    children: [
      { id: 'mp-payup', name: 'PayUp APP', tooltipText: 'PayUp in-store merchant app', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'mp-portal', name: 'Merchant Portal', tooltipText: 'Partner merchant portal and dashboard', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'mp-shopify', name: 'Shopify Checkout', tooltipText: 'Shopify checkout integration plugin', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
    ],
  },
  {
    id: 'support-platforms',
    name: 'Support Platforms',
    tooltipText: 'Support communication systems',
    status: 'Operational',
    children: [
      { id: 'sp-chat', name: 'Chat', tooltipText: 'Live chat support platform', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'sp-email', name: 'Email', tooltipText: 'Merchant and shopper email ticketing', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'sp-phones', name: 'Phones', tooltipText: 'Phone support channels', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
    ],
  },
  {
    id: 'third-party-platforms',
    name: '3rd Party Platforms',
    tooltipText: 'Bank and payment provider integrations',
    status: 'Operational',
    children: [
      { id: 'tp-absa', name: 'ABSA Bank', tooltipText: 'ABSA banking gateway and settlements', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'tp-capitec', name: 'Capitec Bank', tooltipText: 'Capitec banking integration', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'tp-fnb', name: 'FNB Bank', tooltipText: 'First National Bank integration', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'tp-standard', name: 'Standard Bank', tooltipText: 'Standard Bank integration', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'tp-nedbank', name: 'Nedbank Bank', tooltipText: 'Nedbank integration', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'tp-mastercard', name: '3DSecure Authorisation - Mastercard', tooltipText: 'Mastercard 3D Secure verification', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
      { id: 'tp-visa', name: '3DSecure Authorisation - Visa', tooltipText: 'Visa 3D Secure verification', status: 'Operational', uptimePercent: '100.0 %', showTimeline: true },
    ],
  },
];

const standaloneBottom: ComponentItem[] = [
  { id: 'shopify-third-party', name: 'Shopify Third party services', tooltipText: 'Shopify 3rd party extension services', status: 'Operational', uptimePercent: '100.0 %', showTimeline: false },
];

function UptimeHistoryGraph({ componentName }: { componentName: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const totalBars = 90;
  const bars = Array.from({ length: totalBars }, (_, i) => i);

  const getDateLabel = (index: number) => {
    const daysAgo = totalBars - 1 - index;
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="uptime-timeline-container" style={{ position: 'relative' }}>
      {/* 90-Bar SVG Timeline (Larger Height & Spacing) */}
      <svg
        className="uptime-svg"
        preserveAspectRatio="none"
        height="38"
        viewBox="0 0 448 38"
      >
        {bars.map((idx) => {
          const x = idx * 5;
          return (
            <rect
              key={idx}
              height="38"
              width="3.2"
              x={x}
              y="0"
              fill="#2ecc71"
              className="uptime-bar"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          );
        })}
      </svg>

      {/* Floating Tooltip */}
      {hoveredIndex !== null && (
        <div
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 8px)',
            left: `${(hoveredIndex / (totalBars - 1)) * 100}%`,
            transform: 'translateX(-50%)',
            backgroundColor: '#333333',
            color: '#ffffff',
            fontSize: '11px',
            padding: '6px 10px',
            borderRadius: '3px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 100,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}
        >
          <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>{getDateLabel(hoveredIndex)}</div>
          <div style={{ color: '#aaaaaa' }}>No downtime recorded on this day.</div>
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderTop: '4px solid #333333',
            }}
          />
        </div>
      )}

      {/* Axis Line with 90 days ago, 100.0 % uptime, and Today */}
      <div className="uptime-axis-row">
        <span>90 days ago</span>
        <div className="uptime-axis-line" />
        <span className="uptime-axis-middle-text">100.0 % uptime</span>
        <div className="uptime-axis-line" />
        <span>Today</span>
      </div>
    </div>
  );
}

export default function StatusComponentsList({
  onViewUptime,
}: {
  onViewUptime?: () => void;
}) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (groupId: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  return (
    <div>
      {/* Header with View historical uptime link */}
      <div className="components-section-header">
        <span className="components-section-title">About This Site</span>
        <span className="components-section-sub">
          Uptime over the past 90 days.{' '}
          <button
            type="button"
            onClick={() => onViewUptime?.()}
          >
            View historical uptime.
          </button>
        </span>
      </div>

      <div className="status-components-table">
        {/* Standalone Top Components */}
        {standaloneTop.map((comp) => (
          <div key={comp.id} className="status-table-row">
            <div className="status-row-header">
              <span className="status-service-name">
                {comp.name}
                <button
                  type="button"
                  className="status-info-circle"
                  title={comp.tooltipText}
                >
                  ?
                </button>
              </span>
              <span className="status-operational-text">{comp.status}</span>
            </div>
            {comp.showTimeline && <UptimeHistoryGraph componentName={comp.name} />}
          </div>
        ))}

        {/* 4 Expandable Groups */}
        {componentGroups.map((group) => {
          const isExpanded = !!expandedGroups[group.id];
          return (
            <div key={group.id}>
              {/* Group Header Row */}
              <div
                onClick={() => toggleGroup(group.id)}
                className="status-group-row-header"
              >
                <div className="status-group-title-wrap">
                  <span className="status-toggle-box">
                    {isExpanded ? '−' : '+'}
                  </span>
                  <span>{group.name}</span>
                  <button
                    type="button"
                    className="status-info-circle"
                    title={group.tooltipText}
                    onClick={(e) => e.stopPropagation()}
                  >
                    ?
                  </button>
                </div>
                <span className="status-operational-text">{group.status}</span>
              </div>

              {/* Group Summary Timeline (shown when collapsed) */}
              {!isExpanded && (
                <div style={{ padding: '0 22px 18px', borderBottom: '1px solid #e0e0e0' }}>
                  <UptimeHistoryGraph componentName={group.name} />
                </div>
              )}

              {/* Group Children Rows (shown when expanded) */}
              {isExpanded && (
                <div className="status-group-children-wrap">
                  {group.children.map((child) => (
                    <div key={child.id} className="status-group-child-row">
                      <div className="status-row-header">
                        <span className="status-service-name" style={{ fontSize: '13px' }}>
                          {child.name}
                          <button
                            type="button"
                            className="status-info-circle"
                            title={child.tooltipText}
                          >
                            ?
                          </button>
                        </span>
                        <span className="status-operational-text" style={{ fontSize: '12px' }}>
                          {child.status}
                        </span>
                      </div>
                      {child.showTimeline && <UptimeHistoryGraph componentName={child.name} />}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Standalone Bottom Component (Shopify Third party services) */}
        {standaloneBottom.map((comp) => (
          <div key={comp.id} className="status-table-row">
            <div className="status-row-header" style={{ marginBottom: 0 }}>
              <span className="status-service-name">
                {comp.name}
              </span>
              <span className="status-operational-text">{comp.status}</span>
            </div>
            {comp.showTimeline && <UptimeHistoryGraph componentName={comp.name} />}
          </div>
        ))}
      </div>

      {/* Status Legend */}
      <div className="status-legend-bar">
        <div className="legend-dot-item">
          <span className="legend-dot" style={{ backgroundColor: '#2ecc71' }}></span>
          <span>Operational</span>
        </div>
        <div className="legend-dot-item">
          <span className="legend-dot" style={{ backgroundColor: '#f1c40f' }}></span>
          <span>Degraded Performance</span>
        </div>
        <div className="legend-dot-item">
          <span className="legend-dot" style={{ backgroundColor: '#e67e22' }}></span>
          <span>Partial Outage</span>
        </div>
        <div className="legend-dot-item">
          <span className="legend-dot" style={{ backgroundColor: '#e74c3c' }}></span>
          <span>Major Outage</span>
        </div>
        <div className="legend-dot-item">
          <span className="legend-dot" style={{ backgroundColor: '#3498db' }}></span>
          <span>Maintenance</span>
        </div>
      </div>
    </div>
  );
}
