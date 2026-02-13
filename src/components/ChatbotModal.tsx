import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Loader2 } from 'lucide-react';
import { chatbotApi, ChatbotResponse } from '../services/api';
import clsx from 'clsx';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  suggestions?: string[];
}

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatbotModal: React.FC<ChatbotModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant for CampusOS. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
      suggestions: ['Event scheduling', 'Society analytics', 'Member insights', 'AI recommendations']
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response: ChatbotResponse = await chatbotApi.sendMessage(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isUser: false,
        timestamp: new Date(),
        suggestions: response.suggestions
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '⚠️ Backend server not running!\n\nTo fix this:\n1. Open a new terminal\n2. Run: npm run dev:backend\n\nOr run both together:\nnpm run dev:all',
        isUser: false,
        timestamp: new Date(),
        suggestions: ['Check server status', 'Restart backend']
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-5 sm:right-8 w-[90vw] sm:w-96 h-[70vh] max-h-[600px] z-50 flex flex-col glass-card shadow-glow"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-3xl bg-gradient-to-tr from-neonCyan to-neonPurple flex items-center justify-center shadow-glow">
                  <Bot className="h-5 w-5 text-slate-950" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AI Assistant</h3>
                  <p className="text-xs text-slate-400">CampusOS Helper</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-3xl flex items-center justify-center bg-slate-900/60 border border-slate-700/70 hover:border-neonCyan/60 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={clsx(
                    'flex gap-3',
                    message.isUser ? 'justify-end' : 'justify-start'
                  )}
                >
                  {!message.isUser && (
                    <div className="h-8 w-8 rounded-3xl bg-gradient-to-tr from-neonCyan/20 to-neonPurple/30 flex items-center justify-center border border-white/20 flex-shrink-0">
                      <Bot className="h-4 w-4 text-neonCyan" />
                    </div>
                  )}
                  <div
                    className={clsx(
                      'max-w-[80%] rounded-3xl px-4 py-2.5 text-sm',
                      message.isUser
                        ? 'bg-gradient-to-r from-neonCyan to-neonPurple text-slate-950'
                        : 'bg-slate-900/80 text-slate-200 border border-slate-700/70'
                    )}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                    {message.suggestions && message.suggestions.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.suggestions.map((suggestion, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="block w-full text-left px-3 py-1.5 rounded-3xl bg-white/10 hover:bg-white/20 text-xs border border-white/20 transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="h-8 w-8 rounded-3xl bg-gradient-to-tr from-neonCyan/20 to-neonPurple/30 flex items-center justify-center border border-white/20">
                    <Bot className="h-4 w-4 text-neonCyan" />
                  </div>
                  <div className="bg-slate-900/80 rounded-3xl px-4 py-2.5 border border-slate-700/70">
                    <Loader2 className="h-4 w-4 animate-spin text-neonCyan" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 bg-slate-900/80 border border-slate-700/70 rounded-3xl px-4 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:border-neonCyan/60 transition-colors disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className={clsx(
                    'h-10 w-10 rounded-3xl flex items-center justify-center transition-all',
                    input.trim() && !isLoading
                      ? 'bg-gradient-to-r from-neonCyan to-neonPurple text-slate-950 shadow-glow hover:scale-105'
                      : 'bg-slate-900/60 border border-slate-700/70 text-slate-500 cursor-not-allowed'
                  )}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
