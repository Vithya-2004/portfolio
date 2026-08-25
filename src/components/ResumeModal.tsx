import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, GraduationCap, Code, Briefcase, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generateResumePdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#09183d]/95 backdrop-blur-2xl rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-[0_25px_60px_rgba(0,10,35,0.8)] border border-white/15 overflow-hidden">
        {/* Modal Controls Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#071330]/90 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
            <span className="font-['Montserrat'] font-bold text-sm text-white">
              Curriculum Vitae • Vithya S
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={downloadResumePdf}
              className="btn-royal text-white px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Download actual resume as PDF file"
            >
              <Download className="w-3.5 h-3.5 text-sky-200" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn-glass px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-sky-300" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document with crisp readability */}
        <div className="p-8 md:p-12 overflow-y-auto flex-grow space-y-7 text-[#191c1e] bg-white font-['Inter']">
          {/* Header */}
          <div className="border-b border-[#001f3f]/20 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="font-['Montserrat'] text-3xl font-bold text-[#000613] tracking-tight">
                VITHYA S
              </h1>
              <p className="text-sm font-semibold text-[#1e40af] mt-1">
                MCA Student & Aspiring Software Developer
              </p>
            </div>

            <div className="text-xs text-[#43474e] space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#1e40af]" />
                <span>{PORTFOLIO_DATA.contact.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#1e40af]" />
                <span>{PORTFOLIO_DATA.contact.phone}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#1e40af]" />
                <span>{PORTFOLIO_DATA.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#1e40af] border-b border-[#eceef0] pb-1">
              Career Objective & Summary
            </h2>
            <p className="text-xs md:text-sm text-[#43474e] leading-relaxed">
              {PORTFOLIO_DATA.about}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#1e40af] border-b border-[#eceef0] pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs md:text-sm font-bold text-[#000613]">
                    <span>{edu.degree}</span>
                    <span className="text-[#1e40af] font-mono text-xs">{edu.period}</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#43474e]">
                    <span>{edu.institution}</span>
                    {edu.grade && <span className="font-semibold text-emerald-800">{edu.grade}</span>}
                  </div>
                  <div className="text-[11px] text-[#43474e]/90 flex flex-wrap gap-1 pt-0.5">
                    <span className="font-semibold">Coursework:</span> {edu.highlights.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div className="space-y-3">
            <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#1e40af] border-b border-[#eceef0] pb-1 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>INTERNSHIPS</span>
            </h2>

            <div className="space-y-2.5">
              {PORTFOLIO_DATA.internships.map((internship) => (
                <div key={internship.id} className="space-y-0.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-[#000613]">
                    <span>{internship.company}</span>
                    <span className="text-[#1e40af] font-mono text-xs">{internship.year}</span>
                  </div>
                  <div className="text-[#43474e]">
                    {internship.domain} – {internship.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#1e40af] border-b border-[#eceef0] pb-1 flex items-center gap-1.5">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PORTFOLIO_DATA.skillsCategories.map((cat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-bold text-[#000613] text-xs">{cat.title}:</div>
                  <div className="text-[#43474e]">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#1e40af] border-b border-[#eceef0] pb-1 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Key Software Projects</span>
            </h2>

            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-center font-bold text-[#000613]">
                    <span className="text-sm">{proj.title}</span>
                    <span className="font-mono text-[11px] text-[#43474e]">{proj.tags.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-[#43474e] leading-relaxed">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside space-y-0.5 text-[#43474e] pl-1">
                    {proj.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Preferred Creative Competencies */}
          <div className="space-y-2">
            <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#1e40af] border-b border-[#eceef0] pb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Specialized Creative Interests</span>
            </h2>
            <div className="text-xs text-[#43474e] space-y-1">
              {PORTFOLIO_DATA.preferredInterests.map((interest) => (
                <div key={interest.id} className="flex gap-1.5">
                  <span className="font-semibold text-[#000613]">{interest.title}:</span>
                  <span>{interest.tools.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
