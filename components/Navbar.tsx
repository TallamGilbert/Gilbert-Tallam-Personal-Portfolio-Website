
import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10' : ''}`}>
      <div className="max-w-screen-2xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-black dark:bg-white flex items-center justify-center rounded-sm">
            <span className="text-white dark:text-black font-black text-xs">GT</span>
          </div>
          <span className="mono text-[10px] font-medium tracking-widest hidden sm:block uppercase opacity-50">System.Architecture.v2.5</span>
        </div>

        <div className="flex items-center gap-12">
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="mono text-[11px] font-bold uppercase tracking-tighter hover:line-through"
              >
                {item}
              </a>
            ))}
          </div>
          <button 
            onClick={toggleTheme}
            className="p-2 border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all rounded-sm"
          >
            <Icon name={darkMode ? 'sun' : 'moon'} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
