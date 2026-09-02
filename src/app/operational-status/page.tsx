'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import StatusHeader from '@/components/status/StatusHeader';
import StatusBanner from '@/components/status/StatusBanner';
import StatusComponentsList from '@/components/status/StatusComponentsList';
import StatusIncidentsList from '@/components/status/StatusIncidentsList';
import StatusHistoricalIncidents from '@/components/status/StatusHistoricalIncidents';
import StatusHistoricalUptime from '@/components/status/StatusHistoricalUptime';
import StatusFooter from '@/components/status/StatusFooter';
import './status.css';

function OperationalStatusContent() {
  const searchParams = useSearchParams();
  const [currentView, setCurrentView] = useState<'status' | 'incidents' | 'uptime'>('status');

  useEffect(() => {
    const viewParam = searchParams.get('view');
    if (viewParam === 'history' || viewParam === 'incidents') {
      setCurrentView('incidents');
    } else if (viewParam === 'uptime') {
      setCurrentView('uptime');
    }
  }, [searchParams]);

  const handleSwitchView = (view: 'status' | 'incidents' | 'uptime') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="status-page-root">
      <div className="status-page-container">
        <StatusHeader />
        <main>
          {currentView === 'status' && (
            <>
              <StatusBanner />
              <StatusComponentsList onViewUptime={() => handleSwitchView('uptime')} />
              <StatusIncidentsList />
            </>
          )}

          {currentView === 'incidents' && (
            <StatusHistoricalIncidents onSwitchTab={handleSwitchView} />
          )}

          {currentView === 'uptime' && (
            <StatusHistoricalUptime onSwitchTab={handleSwitchView} />
          )}
        </main>
        <StatusFooter currentView={currentView} onSwitchView={handleSwitchView} />
      </div>
    </div>
  );
}

export default function OperationalStatusPage() {
  return (
    <Suspense fallback={<div className="status-page-root"><div className="status-page-container">Loading...</div></div>}>
      <OperationalStatusContent />
    </Suspense>
  );
}
