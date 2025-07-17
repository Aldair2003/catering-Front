import React, { useState, useRef, useEffect } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatBot: React.FC = () => {
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!minimized && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, minimized]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: 'bot', text: data.response || 'Sin respuesta.' }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error al conectar con el chatbot.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`bg-white shadow-xl rounded-lg border border-gray-200 w-80 max-w-full transition-all duration-300 ${minimized ? 'h-12' : 'h-[400px]'} flex flex-col`}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-gradient-to-r from-orange-500 to-orange-700 rounded-t-lg">
          <span className="font-semibold text-white">ChatBot</span>
          <button
            className="text-white hover:text-orange-200 focus:outline-none"
            onClick={() => setMinimized((m) => !m)}
            aria-label={minimized ? 'Restaurar' : 'Minimizar'}
          >
            {minimized ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            )}
          </button>
        </div>
        {/* Chat body */}
        {!minimized && (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50" style={{ maxHeight: 320 }}>
              {messages.length === 0 && (
                <div className="text-gray-400 text-sm text-center mt-8">¡Hola! ¿En qué puedo ayudarte?</div>
              )}
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-3 py-2 rounded-lg text-sm max-w-[75%] ${msg.sender === 'user' ? 'bg-orange-500 text-white' : 'bg-white border'}`}>{msg.text}</div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            {/* Input */}
            <div className="p-2 border-t border-gray-100 bg-white flex items-center gap-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                placeholder="Escribe tu mensaje..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded disabled:opacity-50"
                onClick={handleSend}
                disabled={loading || !input.trim()}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBot; 