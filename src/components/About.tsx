import React from 'react';
import { Award, BookOpen, GraduationCap, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Profile & Background
            </span>
            <h2 className="font-['Montserrat'] text-3xl md:text-[32px] font-bold text-white mt-1">
              About Me
            </h2>
          </div>
          <p className="text-xs md:text-sm text-blue-100/80 max-w-md">
            Academic foundation, technical passions, and continuous journey in software engineering.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 Cols) - Bio & Highlights Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Main Bio Card */}
            <div className="glass-card rounded-2xl p-7 md:p-8 space-y-4 border border-white/12 shadow-[0_10px_30px_rgba(0,10,35,0.4)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-300 shadow-inner">
                  <Sparkles className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <h3 className="font-['Montserrat'] font-bold text-white text-lg">
                    Vithya S
                  </h3>
                  <p className="text-xs text-sky-300">Software Developer & MCA Scholar</p>
                </div>
              </div>

              <p className="font-['Inter'] text-sm text-slate-200 leading-relaxed">
                {PORTFOLIO_DATA.about}
              </p>
            </div>

            {/* Quick Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card glass-card-hover rounded-xl p-5 border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-sky-300">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-white text-sm">Academic Excellence</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Consistent high achiever with an 8.68 / 10 CGPA in Computer Science from Cauvery College and MCA at Holy Cross College.
                </p>
              </div>

              <div className="glass-card glass-card-hover rounded-xl p-5 border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-300">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-white text-sm">Continuous Learner</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Passionate about learning new technologies and applying knowledge to real-world software applications.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols) - Education Cards */}
          <div id="education" className="lg:col-span-7 space-y-5 scroll-mt-28">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-sky-400" />
              <h3 className="font-['Montserrat'] font-bold text-lg text-white">
                Education
              </h3>
            </div>

            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-7 border border-white/12 shadow-[0_8px_30px_rgba(0,10,35,0.35)] relative overflow-hidden group"
              >
                {/* Subtle Accent Glow Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-400 to-blue-600 rounded-l-2xl group-hover:w-2 transition-all" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-sky-300 glass-pill px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                  {edu.grade ? (
                    <span className="text-xs font-bold text-emerald-300 bg-emerald-900/40 border border-emerald-400/30 px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {edu.grade}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-sky-200 bg-blue-500/20 border border-blue-400/30 px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {edu.status}
                    </span>
                  )}
                </div>

                <h4 className="font-['Montserrat'] text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                  {edu.degree}
                </h4>

                <p className="text-xs md:text-sm font-medium text-slate-300 mt-1 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{edu.institution}</span>
                </p>

                {/* Subject highlights */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Key Coursework & Focus Areas
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-[11px] bg-white/5 border border-white/10 text-slate-200 px-2.5 py-0.5 rounded font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
