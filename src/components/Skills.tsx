import React, { useState } from 'react';
import { Terminal, Wrench, Lightbulb, Sparkles, X } from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    category: string;
    level?: string;
    description?: string;
  } | null>(null);

  const getIcon = (iconName: SkillCategory['iconName']) => {
    switch (iconName) {
      case 'code':
        return <Terminal className="w-6 h-6 text-sky-300" />;
      case 'wrench':
        return <Wrench className="w-6 h-6 text-sky-300" />;
      case 'lightbulb':
        return <Lightbulb className="w-6 h-6 text-sky-300" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Technical Proficiency</span>
            <h2 className="font-['Montserrat'] text-3xl md:text-[32px] font-bold text-white mt-1">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-xs md:text-sm text-blue-100/80 max-w-md">
            Click on any skill pill to view specific proficiencies and practical project applications.
          </p>
        </div>

        {/* 3 Main Categories in Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-7 md:p-8 flex flex-col justify-between gap-6 border border-white/12 group transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  {getIcon(cat.iconName)}
                </div>

                <h3 className="font-['Montserrat'] text-2xl font-bold text-white mb-4">
                  {cat.title}
                </h3>
              </div>

              {/* Badges / Chips */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.skills.map((skill, sIdx) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <button
                      key={sIdx}
                      onClick={() =>
                        setSelectedSkill(
                          isSelected ? null : { ...skill, category: cat.title }
                        )
                      }
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer text-left ${
                        isSelected
                          ? 'glass-pill-active'
                          : 'bg-white/5 border border-white/12 text-slate-200 hover:bg-blue-500/20 hover:text-sky-200 hover:border-sky-400/30'
                      }`}
                      title="Click for skill info"
                    >
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Skill Detail Callout */}
        {selectedSkill && (
          <div className="mt-8 p-6 glass-panel rounded-2xl border border-sky-400/40 shadow-[0_15px_40px_rgba(14,165,233,0.25)] animate-in fade-in zoom-in-95 duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/30 border border-sky-400/40 flex items-center justify-center text-sky-300 shrink-0 mt-0.5 shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-['Montserrat'] font-bold text-lg text-white">
                    {selectedSkill.name}
                  </h4>
                  <span className="text-xs bg-blue-600/50 border border-blue-400/30 text-sky-200 px-2.5 py-0.5 rounded-full font-medium">
                    {selectedSkill.category}
                  </span>
                  {selectedSkill.level && (
                    <span className="text-xs bg-emerald-900/50 border border-emerald-400/40 text-emerald-300 font-semibold px-2 py-0.5 rounded-md">
                      {selectedSkill.level}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-300 mt-1.5">
                  {selectedSkill.description || 'Core competence applied across academic and practical software projects.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedSkill(null)}
              className="text-xs font-semibold text-sky-300 hover:text-white px-3.5 py-1.5 rounded-lg btn-glass shrink-0 cursor-pointer flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
