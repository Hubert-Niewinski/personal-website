'use client';

import { useEffect, useState } from 'react';

export function BackgroundGradient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay animation start to prevent flicker on initial load
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-60 ${
          mounted ? 'animate-gradient-shift' : ''
        }`}
      />
    </div>
  );
}
