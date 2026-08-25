import React, { useState } from 'react';
import { Palette, Sparkles, Film, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, PreferredInterest } from '../data/portfolioData';

export const PreferredInterests: React.FC = () => {
  const [activeInterest, setActiveInterest] = useState<string | null>(null);

  const getIcon = (icon: PreferredInterest['icon']) => {
    switch (icon) {
      case 'palette':
        return <Palette className="w-6 h-6 text-sky-300" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-sky-300" />;
      case 'film':
        return <Film className="w-6 h-6 text-sky-300" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-300" />;
    }
  };

  return (
    <section id="preferred-interests" className="py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Creative & Domain Focus
            </span>
            <h2 className="font-['Montserrat'] text-3xl md:text-[32px] font-bold text-white mt-1">
              Preferred Interests
            </h2>
          </div>
          <p className="text-xs md:text-sm text-blue-100/80 max-w-md">
            Key specialization areas where Vithya combines technical precision with creative problem-solving.
          </p>
        </div>

        {/* 3 Interactive Cards in Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.preferredInterests.map((interest) => {
            const isSelected = activeInterest === interest.id;
            return (
              <div
                key={interest.id}
                onClick={() => setActiveInterest(isSelected ? null : interest.id)}
                className={`glass-card glass-card-hover rounded-2xl p-7 md:p-8 flex flex-col justify-between gap-6 cursor-pointer group transition-all duration-300 ${
                  isSelected
                    ? 'border-sky-400/80 ring-2 ring-sky-400/30 shadow-[0_15px_45px_rgba(14,165,233,0.3)] bg-[#0d2258]/80'
                    : 'border-white/12 hover:border-sky-400/40'
                }`}
              >
                <div>
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                      {getIcon(interest.icon)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 glass-pill px-2.5 py-1 rounded-md">
                      {interest.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Montserrat'] text-xl font-bold text-white mb-2 group-hover:text-sky-200 transition-colors">
                    {interest.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Inter'] text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
                    {interest.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-3 border-t border-white/10">
                    {interest.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tools Pills */}
                <div className="pt-3 border-t border-white/10">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Competencies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {interest.tools.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-white/5 border border-white/10 text-sky-200 px-2.5 py-0.5 rounded text-[11px] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
