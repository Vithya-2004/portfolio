import React from 'react';
import { Building2, Calendar, Briefcase, Cpu, BarChart3, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, Internship } from '../data/portfolioData';

export const Internships: React.FC = () => {
  const getInternshipIcon = (id: string) => {
    switch (id) {
      case 'isquare':
        return <Briefcase className="w-5 h-5 text-sky-300" />;
      case 't4teq':
        return <BarChart3 className="w-5 h-5 text-sky-300" />;
      case 'innovation-hub':
        return <Cpu className="w-5 h-5 text-sky-300" />;
      default:
        return <Building2 className="w-5 h-5 text-sky-300" />;
    }
  };

  return (
    <section id="internships" className="py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Industry Experience
            </span>
            <h2 className="font-['Montserrat'] text-3xl md:text-[32px] font-bold text-white mt-1">
              Internships
            </h2>
          </div>
          <p className="text-xs md:text-sm text-blue-100/80 max-w-md">
            Hands-on technical assessment, data analytics training, and emerging technology immersion.
          </p>
        </div>

        {/* 3-Column Glass Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {PORTFOLIO_DATA.internships.map((internship: Internship) => (
            <div
              key={internship.id}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between border border-white/12 shadow-[0_10px_35px_rgba(0,10,35,0.4)] relative overflow-hidden group transition-all duration-300"
            >
              {/* Subtle Blue Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-400 to-blue-600 rounded-l-2xl group-hover:w-2 transition-all" />

              <div className="space-y-4">
                {/* Header: Icon & Year Pill */}
                <div className="flex items-center justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getInternshipIcon(internship.id)}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 glass-pill px-3 py-1 rounded-full border border-sky-400/20">
                    <Calendar className="w-3.5 h-3.5 text-sky-300" />
                    <span>{internship.year}</span>
                  </span>
                </div>

                {/* Company Name */}
                <div>
                  <h3 className="font-['Montserrat'] text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-sky-200 transition-colors">
                    {internship.company}
                  </h3>
                </div>

                {/* Domain / Field */}
                <div className="pt-2 border-t border-white/10">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Domain & Focus</span>
                  </div>
                  <p className="font-['Inter'] text-xs md:text-sm text-slate-200 font-medium leading-relaxed">
                    {internship.domain}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
