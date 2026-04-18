'use client';

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    // Check if already notified in this session
    if (typeof window !== 'undefined' && !sessionStorage.getItem('visitorNotified')) {
      sessionStorage.setItem('visitorNotified', 'true');

      // Send notification
      fetch('/api/notify-visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        }),
      }).catch((error) => {
        console.error('Failed to send visitor notification:', error);
      });
    }
  }, []);

  return null;
}