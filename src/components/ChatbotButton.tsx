import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import { ChatbotModal } from './ChatbotModal';

export const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-5 sm:right-8 z-40 ripple-container"
        aria-label="Open AI assistant"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full border border-neonCyan/40 animate-ring-pulse" />
          <div className="absolute inset-2 rounded-full border border-neonPurple/40 animate-ring-pulse" />
          <div className="glass-card rounded-full p-3 bg-slate-900/80 shadow-glow">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-neonCyan to-neonPurple flex items-center justify-center text-slate-950">
              <Bot className="h-5 w-5" />
            </div>
          </div>
        </motion.div>
      </button>
      <ChatbotModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

