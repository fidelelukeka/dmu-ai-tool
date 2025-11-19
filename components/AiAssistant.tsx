import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Bonjour! Je suis votre assistant virtuel pour ce rapport. Posez-moi des questions sur la formation DMU, les statistiques citées ou les facilitateurs." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');
    
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userText);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center space-x-3">
        <div className="bg-accent p-2 rounded-full">
            <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800">Assistant Virtuel du Rapport</h3>
          <p className="text-xs text-gray-500">Propulsé par Gemini 2.5 Flash</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mx-2 ${
                msg.role === 'user' ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-accent'
              }`}>
                {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              
              <div className={`p-3 rounded-2xl text-sm shadow-sm whitespace-pre-wrap leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="flex flex-row items-center ml-12 bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                <Loader2 className="w-4 h-4 animate-spin text-accent mr-2" />
                <span className="text-xs text-gray-500">Analyse du rapport en cours...</span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Posez une question sur le déroulement de la journée..."
            className="w-full pl-4 pr-12 py-3 bg-gray-100 border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl transition-all outline-none text-sm"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className={`absolute right-2 p-2 rounded-lg transition-colors ${
              isLoading || !input.trim() 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'bg-primary text-white hover:bg-primary/90 shadow-sm'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">
          L'IA répond exclusivement sur la base du contenu du rapport du 13/11/2025.
        </p>
      </div>
    </div>
  );
};