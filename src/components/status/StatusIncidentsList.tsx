'use client';

export default function StatusIncidentsList() {
  const days = [
    { date: 'Sep 2, 2026', isToday: true },
    { date: 'Sep 1, 2026', isToday: false },
    { date: 'Aug 31, 2026', isToday: false },
    { date: 'Aug 30, 2026', isToday: false },
    { date: 'Aug 29, 2026', isToday: false },
    { date: 'Aug 28, 2026', isToday: false },
    { date: 'Aug 27, 2026', isToday: false },
  ];

  return (
    <div className="past-incidents-section" id="past-incidents">
      <h2 className="past-incidents-main-title">Past Incidents</h2>
      <div>
        {days.map((day) => (
          <div key={day.date} className="past-incident-day-item">
            <div className="past-incident-date-heading">{day.date}</div>
            <p className="past-incident-desc-text">
              {day.isToday ? 'No incidents reported today.' : 'No incidents reported.'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
