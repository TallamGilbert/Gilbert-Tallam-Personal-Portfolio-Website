
import React from 'react';
import { PROJECTS } from '../constants';
import { Icon } from './Icon';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 border-t border-black/10 dark:border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-4">03_ <br /> Modules.</h2>
            <p className="mono text-[11px] font-medium opacity-50 uppercase tracking-widest">Active & Legacy Deployments</p>
          </div>
          <a href="https://github.com/TallamGilbert" target="_blank" className="mono text-[11px] font-bold uppercase underline hover:no-underline">Repo_Logs_01</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col bg-zinc-50 dark:bg-zinc-900/50 p-8 border border-black/5 dark:border-white/5 rounded-sm hover:border-black dark:hover:border-white transition-all duration-500"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="mono text-[9px] font-bold uppercase px-2 py-0.5 border border-current">{project.category}</span>
                <span className="mono text-[9px] font-medium opacity-40 uppercase">{project.status}</span>
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:line-through">{project.title}</h3>
              
              <p className="text-sm font-medium opacity-60 leading-relaxed mb-10 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map(t => (
                  <span key={t} className="mono text-[9px] font-bold uppercase opacity-30 group-hover:opacity-100 transition-opacity">[{t}]</span>
                ))}
              </div>

              <div className="flex gap-8 pt-6 border-t border-black/5 dark:border-white/5">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" className="mono text-[10px] font-black uppercase tracking-widest hover:underline">Execute_Live</a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" className="mono text-[10px] font-black uppercase tracking-widest hover:underline opacity-30">Get_Source</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
