
import React from 'react';

const Infrastructure: React.FC = () => {
  return (
    <section className="py-32 border-t border-black/10 dark:border-white/10 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-8">05_ <br /> Blueprints.</h2>
            <p className="text-xl font-bold leading-relaxed mb-8">
              Visualizing the flow of a standard enterprise-grade deployment.
            </p>
            <div className="mono text-[10px] space-y-2 opacity-40 uppercase">
              <p>// 1. Request Ingress</p>
              <p>// 2. Load Balancing</p>
              <p>// 3. App Logic (Laravel)</p>
              <p>// 4. Persistence Layer</p>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="relative p-12 bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 flex flex-col items-center gap-12 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              {/* Client */}
              <div className="w-40 py-4 border border-black dark:border-white text-center mono text-[10px] font-black uppercase tracking-widest bg-white dark:bg-black relative z-10">
                Client_Interface
              </div>
              
              {/* Line */}
              <div className="w-px h-12 bg-black dark:bg-white relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black dark:bg-white animate-ping"></div>
              </div>

              {/* LB */}
              <div className="w-64 py-6 border border-black/20 dark:border-white/20 text-center mono text-[10px] font-bold uppercase tracking-widest italic bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                Nginx / Load_Balancer
              </div>

              <div className="w-px h-12 bg-black/20 dark:bg-white/20"></div>

              {/* App Cluster */}
              <div className="grid grid-cols-3 gap-8 w-full">
                {[1, 2, 3].map(i => (
                  <div key={i} className="py-8 border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black text-center flex flex-col gap-2 rounded-sm shadow-xl">
                    <span className="mono text-[10px] font-black uppercase">App_Node_0{i}</span>
                    <span className="mono text-[8px] opacity-50 uppercase tracking-tighter">Laravel_v11.x</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex justify-around px-20">
                <div className="w-px h-16 bg-black/20 dark:bg-white/20"></div>
                <div className="w-px h-16 bg-black/20 dark:bg-white/20"></div>
              </div>

              {/* Data Layer */}
              <div className="grid grid-cols-2 gap-12 w-full max-w-2xl">
                <div className="p-8 border border-dashed border-black/40 dark:border-white/40 flex flex-col gap-4 bg-white/30 dark:bg-black/30">
                  <span className="mono text-[9px] font-black uppercase opacity-40">Cache_Layer</span>
                  <span className="text-xl font-black uppercase tracking-tighter italic">Redis_Cluster</span>
                </div>
                <div className="p-8 border border-dashed border-black/40 dark:border-white/40 flex flex-col gap-4 bg-white/30 dark:bg-black/30">
                  <span className="mono text-[9px] font-black uppercase opacity-40">Persistent_Store</span>
                  <span className="text-xl font-black uppercase tracking-tighter italic">MySQL_Relational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
