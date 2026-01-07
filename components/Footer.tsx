
import React from 'react';
import { Icon } from './Icon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-black/10 dark:border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-8">
          <div className="w-10 h-10 border border-black dark:border-white flex items-center justify-center font-black">GT</div>
          <div className="mono text-[10px] font-bold leading-tight opacity-40">
            SYSTEM_BUILD: {currentYear}.Q1 <br />
            STATUS: DEPLOYED_STABLE
          </div>
        </div>

        <div className="flex gap-12">
          <a href="https://github.com/TallamGilbert" target="_blank" className="hover:opacity-50 transition-opacity">
            <Icon name="github" className="w-5 h-5" />
          </a>
          <a href="mailto:tallamgilbert02@gmail.com" className="hover:opacity-50 transition-opacity">
            <Icon name="mail" className="w-5 h-5" />
          </a>
        </div>

        <div className="mono text-[9px] font-bold uppercase tracking-[0.4em] opacity-40">
          DESIGNED_FOR_PERFORMANCE &copy; {currentYear}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
