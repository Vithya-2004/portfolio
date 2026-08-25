import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050b1a]/90 backdrop-blur-xl border-t border-white/10 py-12 px-5 text-slate-300">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a
            href="#home"
            className="font-['Montserrat'] text-xl font-bold text-white tracking-tight flex items-center gap-2 hover:text-sky-300 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
            <span>Vithya S</span>
          </a>
          <p className="text-xs text-slate-400">
            MCA Graduate Student • Aspiring Software Developer
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs uppercase tracking-wider font-semibold text-slate-300 flex-wrap justify-center">
          <a href="#about" className="hover:text-sky-300 transition-colors">About</a>
          <a href="#education" className="hover:text-sky-300 transition-colors">Education</a>
          <a href="#skills" className="hover:text-sky-300 transition-colors">Skills</a>
          <a href="#internships" className="hover:text-sky-300 transition-colors">Internships</a>
          <a href="#projects" className="hover:text-sky-300 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-sky-300 transition-colors">Contact</a>
        </div>

        {/* Socials & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-300 hover:border-sky-400/50 hover:bg-white/10 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-300 hover:border-sky-400/50 hover:bg-white/10 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.contact.email}`}
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-300 hover:border-sky-400/50 hover:bg-white/10 transition-all"
            aria-label="Email Contact"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl btn-royal text-white flex items-center justify-center cursor-pointer shadow-sm transition-all"
            aria-label="Back to top of page"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-16 mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Vithya S. Built with modern React & Royal Blue Glassmorphism.
      </div>
    </footer>
  );
};
