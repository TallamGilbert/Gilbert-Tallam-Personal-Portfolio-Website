
import React from 'react';
import { Icon } from './Icon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24">
      <div className="max-w-screen-2xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-8">
          <div className="mono text-[10px] font-bold mb-6 flex items-center gap-4">
            <span className="px-2 py-0.5 bg-black dark:bg-white text-white dark:text-black uppercase">Status: 200 OK</span>
            <span className="opacity-40 uppercase tracking-widest">Available for Remote Deployment</span>
          </div>
          
          <h1 className="text-7xl md:text-[8rem] font-black leading-[0.9] tracking-tighter uppercase mb-12">
            Back End <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: '1px currentColor' }}>Systems</span>
          </h1>
          
          <div className="flex flex-wrap gap-8 items-center">
            <a 
              href="#projects" 
              className="px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-bold text-sm uppercase tracking-tighter hover:opacity-80 transition-all rounded-sm"
            >
              Initialize Projects
            </a>
            <div className="hidden sm:block h-[1px] w-24 bg-black/10 dark:bg-white/10"></div>
            <div className="mono text-[11px] font-medium max-w-xs leading-relaxed opacity-60">
              Gilbert Tallam. Specialize in PHP/Laravel ecosystem. Focus on performance tuning and data integrity.
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:flex flex-col gap-1 border-l border-black/5 dark:border-white/5 pl-12">
          {[
            { label: 'Latency', value: '< 100ms' },
            { label: 'Core', value: 'Laravel / PHP' },
            { label: 'Engine', value: 'MySQL / Redis' },
            { label: 'Uptime', value: '99.9%' },
          ].map((stat, i) => (
            <div key={i} className="py-4 group">
              <div className="mono text-[9px] uppercase tracking-widest opacity-40 mb-1">{stat.label}</div>
              <div className="text-3xl font-black group-hover:line-through transition-all">{stat.value}</div>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-10 right-6 flex flex-col items-end gap-2 mono text-[10px] opacity-30">
        <span>SCROLL TO EXPLORE_</span>
        <div className="w-1 h-12 bg-black dark:bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;
