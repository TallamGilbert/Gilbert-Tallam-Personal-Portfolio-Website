
import React from 'react';
import { SKILLS } from '../constants';
import { Icon } from './Icon';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 border-t border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/20">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-4">02_ <br /> Stack.</h2>
            <p className="mono text-[11px] font-medium opacity-50 uppercase tracking-widest">Enterprise Engineering Suite</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name}
              className="group relative p-12 bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 flex flex-col items-center text-center gap-8 overflow-hidden"
            >
              <div className="w-16 h-16 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 border border-black/5 dark:border-white/5 flex items-center justify-center">
                <Icon name={skill.icon} className="w-10 h-10" />
              </div>
              <div className="w-full">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4">{skill.name}</h3>
                <div className="w-0 group-hover:w-full h-px bg-current transition-all duration-500 mx-auto"></div>
              </div>

              {/* Technical Tooltip */}
              <div className="absolute inset-0 p-8 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                <p className="mono text-[10px] uppercase font-bold tracking-tight leading-relaxed">
                  <span className="block mb-2 opacity-40">// Capability.log</span>
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;