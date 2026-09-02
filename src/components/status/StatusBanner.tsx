'use client';

import { useState, useEffect } from 'react';

export default function StatusBanner() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }) + ' ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })
      );
    };
    updateTime();
  }, []);

  return (
    <div className="status-banner">
      <h2>All Systems Operational</h2>
      {timeStr && <span className="last-updated">Refreshed {timeStr}</span>}
    </div>
  );
}
