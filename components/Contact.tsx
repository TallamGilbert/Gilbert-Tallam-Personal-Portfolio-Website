
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; message?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'CHANNEL_REQUIRED';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'INVALID_FORMAT';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'BODY_EMPTY';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-32 border-t border-black/10 dark:border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-8">04_ <br /> Connect.</h2>
            <p className="text-xl font-bold leading-relaxed mb-12 max-w-sm opacity-70">
              Ready to initialize a project or discuss high-availability system requirements.
            </p>
            
            <div className="space-y-8 font-mono">
              <div className="group">
                <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em] mb-2">Endpoint_Email</div>
                <a href="mailto:tallamgilbert02@gmail.com" className="text-lg font-bold hover:line-through transition-all">tallamgilbert02@gmail.com</a>
              </div>
              <div className="group">
                <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em] mb-2">Geo_Location</div>
                <span className="text-lg font-bold uppercase block">Nairobi_Kenya.East_Africa</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900/40 p-8 md:p-12 rounded-[1rem] border border-black/5 dark:border-white/5 shadow-2xl transition-colors">
            <div className="font-mono text-[10px] opacity-40 mb-10 tracking-widest uppercase">/ Communication_Channel_v2 /</div>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="space-y-2">
                <label className="font-mono text-[9px] uppercase tracking-widest block pl-6 opacity-50 font-bold"># User.Name</label>
                <input 
                  type="text" 
                  required
                  className="bg-white dark:bg-black w-full outline-none p-6 rounded-lg border border-black/10 dark:border-white/10 text-lg font-bold focus:border-black dark:focus:border-white transition-all placeholder:text-black/30 dark:placeholder:text-white/20 text-black dark:text-white"
                  placeholder="IDENTIFY YOURSELF"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center pl-6 pr-6">
                  <label className="font-mono text-[9px] uppercase tracking-widest block opacity-50 font-bold"># User.Email</label>
                  {errors.email && <span className="font-mono text-[9px] font-bold text-red-500 uppercase tracking-tighter">ERROR: {errors.email}</span>}
                </div>
                <input 
                  type="email" 
                  required
                  className={`bg-white dark:bg-black w-full outline-none p-6 rounded-lg border text-lg font-bold focus:border-black dark:focus:border-white transition-all placeholder:text-black/30 dark:placeholder:text-white/20 text-black dark:text-white ${errors.email ? 'border-red-500' : 'border-black/10 dark:border-white/10'}`}
                  placeholder="CONTACT_CHANNEL"
                  value={formData.email}
                  onChange={e => {
                    setFormData({...formData, email: e.target.value});
                    if (errors.email) setErrors({...errors, email: undefined});
                  }}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center pl-6 pr-6">
                  <label className="font-mono text-[9px] uppercase tracking-widest block opacity-50 font-bold"># Message_Body</label>
                  {errors.message && <span className="font-mono text-[9px] font-bold text-red-500 uppercase tracking-tighter">ERROR: {errors.message}</span>}
                </div>
                <textarea 
                  rows={4} 
                  required
                  className={`bg-white dark:bg-black w-full outline-none p-8 rounded-lg border text-lg font-bold focus:border-black dark:focus:border-white transition-all placeholder:text-black/30 dark:placeholder:text-white/20 text-black dark:text-white resize-none ${errors.message ? 'border-red-500' : 'border-black/10 dark:border-white/10'}`}
                  placeholder="SPECIFY_REQUIREMENTS"
                  value={formData.message}
                  onChange={e => {
                    setFormData({...formData, message: e.target.value});
                    if (errors.message) setErrors({...errors, message: undefined});
                  }}
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className={`w-full py-6 rounded-lg font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-4 active:scale-[0.98] ${
                  status === 'success' ? 'bg-green-500 text-white' : 'bg-black text-white dark:bg-white dark:text-black hover:opacity-80'
                } ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {status === 'success' ? 'DISPATCHED_SUCCESSFULLY' : status === 'sending' ? 'TRANSMITTING...' : 'INITIALIZE_DISPATCH'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
