
import React, { useState, useEffect } from 'react';

const LocationTicker: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const nairobiTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Nairobi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(new Date());
      setTime(nairobiTime);
    };
    const timer = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-black text-white dark:bg-white dark:text-black z-[90] flex items-center px-6 overflow-hidden border-t border-white/10 dark:border-black/10">
      <div className="flex items-center gap-12 animate-marquee whitespace-nowrap mono text-[9px] font-bold tracking-[0.2em] uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          NODE: NAIROBI_KE_01
        </span>
        <span>LATENCY: 42MS_AVG</span>
        <span>LOCAL_TIME: {time}_EAT</span>
        <span>ENV: PRODUCTION_STABLE</span>
        <span>AVAILABILITY: HIGH_BANDWIDTH_READY</span>
        <span className="opacity-30">|</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          NODE: NAIROBI_KE_01
        </span>
        <span>LATENCY: 42MS_AVG</span>
        <span>LOCAL_TIME: {time}_EAT</span>
        <span>ENV: PRODUCTION_STABLE</span>
      </div>
    </div>
  );
};

export default LocationTicker;
