
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 border-t border-black/10 dark:border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">
              01_ <br /> Narrative.
            </h2>
            <div className="mono text-[10px] font-medium space-y-4 opacity-50 uppercase">
              <p>// Identity: Gilbert Tallam</p>
              <p>// Status: Architect</p>
              <p>// Focus: Performance & Scale</p>
              <p>// Base: Nairobi, Kenya</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-12 text-2xl md:text-4xl font-bold leading-tight tracking-tight">
              <p className="opacity-20 hover:opacity-100 transition-opacity">
                I am a Backend Architect dedicated to building the invisible foundations of the modern web.
              </p>
              <p>
                My journey in engineering began with a fascination for how data moves. Today, I specialize in the PHP and Laravel ecosystem, transforming complex business logic into high-performance, scalable systems. Based in Nairobi, I bridge the gap between elegant code and commercial reliability.
              </p>
              <div className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black/5 dark:border-white/5">
                <div className="space-y-4">
                  <span className="mono text-[11px] font-bold uppercase tracking-widest block opacity-40">The Mission</span>
                  <p className="text-lg font-medium leading-relaxed">
                    I don't just write scripts; I design resilient architectures. From optimizing relational databases for sub-millisecond lookups to orchestrating seamless M-Pesa integrations, my goal is to ensure that the backend is the strongest link in the chain.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="mono text-[11px] font-bold uppercase tracking-widest block opacity-40">Beyond Code</span>
                  <p className="text-lg font-medium leading-relaxed">
                    With a background rooted in the tech-vibrant landscape of Kenya, I bring a unique perspective on efficiency and resource optimization. I believe that clean code is not a luxury, but a requirement for longevity and scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
