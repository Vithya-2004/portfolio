import React, { useState } from 'react';
import { Globe, Copy, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface DeployedLinkBarProps {
  onShowToast: (msg: string) => void;
}

export const DeployedLinkBar: React.FC<DeployedLinkBarProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : PORTFOLIO_DATA.deployedUrl;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    onShowToast('Deployed portfolio link copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full bg-[#081534]/60 backdrop-blur-md border-y border-white/10 py-3.5 px-5 shadow-[0_4px_25px_rgba(0,10,35,0.4)]">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-300 shrink-0 shadow-inner">
            <Globe className="w-4 h-4 text-sky-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                Live Deployed Portfolio
              </span>
            </div>
            <p className="text-xs text-slate-300 truncate max-w-xs md:max-w-md font-mono">
              {currentUrl}
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button
            onClick={handleCopy}
            className="flex-1 sm:flex-initial btn-glass text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-all"
            title="Copy Portfolio URL"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-sky-300" />}
            <span>{copied ? 'Copied Link' : 'Copy Portfolio Link'}</span>
          </button>

          <a
            href={currentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-all"
          >
            <span>Open in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5 text-sky-200" />
          </a>
        </div>
      </div>
    </div>
  );
};
