import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="glass-panel bg-[#09183d]/90 text-white px-5 py-3.5 rounded-xl shadow-[0_15px_40px_rgba(0,10,35,0.7)] border border-sky-400/40 flex items-center gap-3 backdrop-blur-xl">
        <CheckCircle2 className="w-5 h-5 text-sky-300 shrink-0 shadow-[0_0_8px_#38bdf8]" />
        <span className="text-sm font-medium text-slate-100">{message}</span>
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
