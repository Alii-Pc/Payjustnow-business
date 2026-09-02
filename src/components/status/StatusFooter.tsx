'use client';

export default function StatusFooter({
  currentView,
  onSwitchView,
}: {
  currentView?: 'status' | 'incidents' | 'uptime';
  onSwitchView?: (view: 'status' | 'incidents' | 'uptime') => void;
}) {
  return (
    <div className="status-page-footer">
      <div>
        {currentView === 'status' ? (
          <button
            type="button"
            onClick={() => onSwitchView?.('incidents')}
            className="footer-nav-link"
          >
            ← Incident History
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onSwitchView?.('status')}
            className="footer-nav-link"
          >
            ← Current Status
          </button>
        )}
      </div>

      <div className="powered-by-text">
        <span>Powered by </span>
        <a
          href="https://www.atlassian.com/software/statuspage"
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{ color: '#666666', textDecoration: 'none' }}
        >
          Atlassian Statuspage
        </a>
      </div>
    </div>
  );
}
