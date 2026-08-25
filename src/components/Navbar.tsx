import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Download } from 'lucide-react';
import { downloadResumePdf } from '../utils/generateResumePdf';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'education', 'skills', 'internships', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Internships', href: '#internships', id: 'internships' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#081534]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,10,35,0.6)] py-3'
          : 'bg-[#081534]/50 backdrop-blur-lg border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 flex justify-between items-center h-12 md:h-14">
        <a
          href="#home"
          className="font-['Montserrat'] text-2xl font-bold text-white tracking-tight hover:text-sky-300 transition-colors flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:bg-sky-400 group-hover:shadow-[0_0_10px_#38bdf8] transition-all"></span>
          <span>Vithya S</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-semibold transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-sky-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full shadow-[0_0_8px_#38bdf8]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={downloadResumePdf}
            className="btn-glass px-4 py-2 rounded-lg text-xs font-semibold tracking-wide flex items-center gap-1.5 cursor-pointer"
            title="Download actual resume as PDF"
          >
            <Download className="w-3.5 h-3.5 text-sky-300" />
            <span>Download Resume</span>
          </button>

          <button
            onClick={onOpenResume}
            className="btn-royal text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <FileText className="w-3.5 h-3.5 text-sky-200" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-sky-300" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071330]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-5 shadow-2xl flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200 mt-2 mx-4 rounded-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm py-2 font-medium transition-colors rounded-lg px-3 ${
                activeSection === link.id
                  ? 'bg-blue-600/30 text-sky-300 font-bold border-l-4 border-sky-400'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                downloadResumePdf();
              }}
              className="w-full btn-glass py-2.5 rounded-lg font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-sky-300" />
              <span>Download Resume (PDF)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full btn-royal text-white py-2.5 rounded-lg font-semibold text-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-sky-200" />
              <span>View Resume Document</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
