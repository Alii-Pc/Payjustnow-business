'use client';

const historicalMonths = [
  { name: 'September 2026' },
  { name: 'August 2026' },
  { name: 'July 2026' },
];

export default function StatusHistoricalIncidents({
  onSwitchTab,
}: {
  onSwitchTab?: (tab: 'status' | 'incidents' | 'uptime') => void;
}) {
  return (
    <div>
      {/* Sub Navigation Tabs */}
      <div className="history-nav-tabs-container">
        <button
          type="button"
          className="history-nav-tab-btn active"
        >
          Incidents
        </button>
        <button
          type="button"
          onClick={() => onSwitchTab?.('uptime')}
          className="history-nav-tab-btn"
        >
          Uptime
        </button>
      </div>

      {/* Date Range Pager (right-aligned when no component selector) */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
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

      {/* Monthly Incidents Archive */}
      <div>
        {historicalMonths.map((m) => (
          <div key={m.name} className="historical-incident-month-block">
            <h2 className="historical-month-title">{m.name}</h2>
            <p className="historical-month-desc">No incidents reported for this month.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
