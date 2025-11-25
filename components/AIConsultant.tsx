import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getTechnicalAdvice } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Ciao! Sono l'assistente virtuale di Deburr. Hai bisogno di consigli su materiali per la stampa 3D o specifiche per il reverse engineering?",
      timestamp: new Date()
    }
  ]);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || status === LoadingState.LOADING) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setStatus(LoadingState.LOADING);

    const responseText = await getTechnicalAdvice(input);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, modelMsg]);
    setStatus(LoadingState.IDLE);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-consultant" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
             <Sparkles className="text-orange-500 w-6 h-6" />
             <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Deburr AI Tech Lab</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Consulenza Tecnica <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Istantanea</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Non sai quale materiale scegliere per il tuo prototipo motorsport? Chiedi al nostro sistema AI addestrato sulle migliori pratiche di Additive Manufacturing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[600px]">
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-orange-600' : 'bg-slate-700'
                }`}>
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-orange-600 text-white rounded-tr-none'
                    : 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700'
                }`}>
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  <span className="text-xs opacity-50 block mt-2">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {status === LoadingState.LOADING && (
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <Bot size={20} />
                 </div>
                 <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700 flex items-center">
                    <Loader2 className="w-5 h-5 animate-spin text-orange-500 mr-2" />
                    <span className="text-slate-400 text-sm">Analisi richiesta...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-900 border-t border-slate-800">
            <div className="flex gap-2 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Es. Qual è il miglior materiale per un condotto di aspirazione resistente al calore?"
                className="w-full bg-slate-950 text-white pl-4 pr-12 py-4 rounded-xl border border-slate-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || status === LoadingState.LOADING}
                className="absolute right-2 top-2 bottom-2 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white p-2.5 rounded-lg transition-colors flex items-center justify-center aspect-square"
              >
                {status === LoadingState.LOADING ? <Loader2 className="animate-spin" /> : <Send size={20} />}
              </button>
            </div>
            <p className="text-center text-slate-600 text-xs mt-3">
              L'AI può commettere errori. Verifica sempre le specifiche critiche con i nostri ingegneri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;