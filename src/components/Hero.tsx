import React from 'react';
import { ArrowRight, Mail, Download, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generateResumePdf';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative max-w-[1200px] mx-auto px-5 md:px-16 min-h-[640px] md:min-h-[720px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 pt-28 md:pt-36 pb-16"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-7 text-left z-10">
        <div className="space-y-3">
          {/* Deployed Live Portfolio Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-sky-200 text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
            <span>MCA Student • Aspiring Software Developer</span>
          </div>
          
          <h1 className="font-['Montserrat'] text-4xl sm:text-5xl md:text-[52px] font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-sm">
            VITHYA S
          </h1>

          <p className="font-['Inter'] text-base md:text-xl text-blue-100/90 max-w-lg mt-3 leading-relaxed font-normal">
            {PORTFOLIO_DATA.tagline}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#projects"
            className="btn-royal text-white px-6 py-3 rounded-xl text-xs md:text-sm font-semibold tracking-wide flex items-center gap-2 group cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button
            onClick={downloadResumePdf}
            className="btn-glass px-5 py-3 rounded-xl text-xs md:text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer"
            title="Download resume PDF"
          >
            <Download className="w-4 h-4 text-sky-300" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            className="btn-glass px-5 py-3 rounded-xl text-xs md:text-sm font-medium tracking-wide flex items-center gap-2 cursor-pointer hover:text-sky-300"
          >
            <Mail className="w-4 h-4 text-sky-300" />
            <span>Contact</span>
          </a>
        </div>

        {/* Quick Highlights Pill Badges in Glass Style */}
        <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-blue-100/90">
          <span className="inline-flex items-center gap-1.5 glass-card px-3.5 py-1.5 rounded-lg border border-white/10 shadow-sm font-medium">
            🎓 Holy Cross College & Cauvery College
          </span>
          <span className="inline-flex items-center gap-1.5 glass-card px-3.5 py-1.5 rounded-lg border border-white/10 shadow-sm font-medium">
            ⭐ 8.68 / 10 CGPA (B.Sc. CS)
          </span>
          <span className="inline-flex items-center gap-1.5 glass-card px-3.5 py-1.5 rounded-lg border border-white/10 shadow-sm font-medium">
            ✨ UI/UX • Prompt Eng • Editing
          </span>
        </div>
      </div>

      {/* Right Content - Circular Headshot with Glowing Royal Blue Glass Ring */}
      <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0 relative z-10">
        <div className="relative group">
          {/* Ambient Glowing Glass Rings */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-600/40 via-sky-500/20 to-indigo-600/40 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-500 opacity-40 blur-sm group-hover:opacity-80 transition-opacity" />

          {/* Profile Container */}
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full glass-panel overflow-hidden relative border-2 border-white/25 shadow-[0_20px_50px_rgba(0,10,35,0.7)] transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              className="w-full h-full object-cover object-center"
              alt="Professional headshot of Vithya S"
              src={PORTFOLIO_DATA.profileImage}
              loading="eager"
            />
          </div>

          {/* Floating Open-for-roles Badge in Glass Style */}
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 glass-card px-4 py-2 rounded-xl shadow-[0_8px_25px_rgba(0,12,40,0.6)] border border-white/20 flex items-center gap-2 text-xs font-semibold text-white backdrop-blur-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
            <span>Open to Software Dev Roles</span>
          </div>
        </div>
      </div>
    </section>
  );
};
