
import React from 'react';

const Metrics: React.FC = () => {
  const metrics = [
    { label: 'Avg_Response_Time', value: '88ms', status: 'Optimal' },
    { label: 'Database_Uptime', value: '99.99%', status: 'Nominal' },
    { label: 'System_Scalability', value: '1.2M req/m', status: 'Scale_Ready' },
    { label: 'Code_Integrity', value: '96% Unit', status: 'Validated' },
  ];

  return (
    <section className="py-32 border-t border-black/10 dark:border-white/10 bg-black text-white dark:bg-white dark:text-black">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-4">06_ <br /> Operations.</h2>
            <p className="mono text-[11px] font-medium opacity-50 uppercase tracking-widest">Live Performance Diagnostics</p>
          </div>
          <div className="flex gap-4">
             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
             <span className="mono text-[10px] font-bold uppercase tracking-widest">All_Systems_Nominal</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col gap-6 p-8 border border-white/10 dark:border-black/10 hover:bg-white/5 dark:hover:bg-black/5 transition-colors">
              <span className="mono text-[9px] uppercase tracking-[0.2em] opacity-40">{m.label}</span>
              <div className="text-6xl font-black tracking-tighter">{m.value}</div>
              <div className="flex justify-between items-center mt-4">
                <span className="mono text-[10px] font-bold uppercase text-green-500">[{m.status}]</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(j => (
                    <div key={j} className={`w-1 h-3 ${j <= 4 ? 'bg-green-500' : 'bg-white/10 dark:bg-black/10'}`}></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 h-32 border border-white/5 dark:border-black/5 relative overflow-hidden group">
           <div className="absolute inset-0 flex items-center justify-around opacity-10 group-hover:opacity-20 transition-opacity">
              {Array.from({length: 40}).map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 bg-current" 
                  style={{ 
                    height: `${Math.random() * 80 + 20}%`,
                    animation: `pulse ${Math.random() * 2 + 1}s infinite ease-in-out`
                  }}
                ></div>
              ))}
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
              <span className="mono text-[10px] font-bold uppercase tracking-[1em] opacity-30">Realtime_Traffic_Oscilloscope</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
