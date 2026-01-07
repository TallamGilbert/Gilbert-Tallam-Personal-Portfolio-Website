
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Icon } from './Icon';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the System Log Interface for Gilbert Tallam's Backend Portfolio. 
          Use a technical, command-line tone. Responses should be clear, efficient, and data-focused.
          Gilbert is a Backend Architect specialized in PHP/Laravel.
          Key deployments: Belion Foods, Artisan Furniture, Acacia Nectar.
          Expertise: MySQL tuning, API scalability, Clean Architecture.
          Location: Nairobi, Kenya.`,
          maxOutputTokens: 200,
        }
      });

      const aiText = response.text || "IO_ERROR: Response null.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "NETWORK_EXCEPTION: Failed to connect to node." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-12 right-10 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-6 w-80 md:w-[28rem] h-[32rem] bg-black text-white border border-white/10 flex flex-col overflow-hidden animate-tech rounded-sm shadow-2xl">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-zinc-900">
            <div className="flex items-center gap-3 mono text-[10px] font-bold">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              SYS.CONSOLE_V1.2
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">
              <Icon name="close" className="w-4 h-4" />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 mono text-[11px] selection:bg-white selection:text-black">
            {messages.length === 0 && (
              <p className="opacity-30 italic">Initialize connection to query system data...</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className={`uppercase font-bold ${m.role === 'user' ? 'text-blue-400' : 'text-green-400'}`}>
                  {m.role === 'user' ? '> USER_INPUT' : '> SYS_RESPONSE'}
                </span>
                <p className="pl-4 opacity-80 leading-relaxed whitespace-pre-wrap">{m.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-green-400 animate-pulse">
                <span></span>
                <span className="w-2 h-4 bg-current"></span>
              </div>
            )}
          </div>

          <div className="p-4 bg-zinc-900 border-t border-white/10 flex gap-4">
            <span className="mono text-green-400 font-bold">$</span>
            <input 
              type="text" 
              placeholder="Enter Command..."
              className="flex-1 bg-transparent border-none text-[11px] mono focus:ring-0 outline-none placeholder:opacity-20 text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all rounded-sm border border-white/10"
      >
        <Icon name={isOpen ? "close" : "code"} className="w-6 h-6" />
      </button>
    </div>
  );
};

export default AIChat;
