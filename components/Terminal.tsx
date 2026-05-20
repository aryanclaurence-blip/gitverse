'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Terminal() {
  const [history, setHistory] = useState([
    'Welcome to GitVerse Terminal 🚀',
    'Type: git init',
  ]);

  const [input, setInput] = useState('');

  const commands: Record<string, string> = {
    'git init': '✅ Initialized empty Git repository',
    'git status': '✅ Working tree clean',
    'git add .': '✅ Files added to staging area',
    'git commit -m "first commit"': '✅ First commit created successfully',
  };

  const handleCommand = () => {
    if (!input) return;

    const response = commands[input] || '❌ Unknown command';

    setHistory((prev) => [...prev, `> ${input}`, response]);

    setInput('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto mt-20 rounded-3xl overflow-hidden border border-cyan-500/30 bg-black/60 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.2)]"
    >
      {/* Top Bar */}
      <div className="flex items-center gap-3 px-5 py-4 bg-white/5 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>

        <p className="ml-4 text-sm text-gray-400">GitVerse Terminal</p>
      </div>

      {/* Terminal Content */}
      <div className="p-6 h-[400px] overflow-y-auto font-mono text-sm text-green-400 space-y-2">
        {history.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        {/* Input */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-cyan-400">$</span>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCommand();
              }
            }}
            className="bg-transparent outline-none flex-1 text-white"
            placeholder="Type git command..."
          />
        </div>
      </div>
    </motion.div>
  );
}
