import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Featured Work</span>
            <h2 className="font-['Montserrat'] text-3xl md:text-[32px] font-bold text-white mt-1">
              My Projects
            </h2>
          </div>
          <p className="text-xs md:text-sm text-blue-100/80 max-w-md">
            Real-world web applications and systems engineered using modern full-stack technologies.
          </p>
        </div>

        {/* 2-column Grid of Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl flex flex-col overflow-hidden group border border-white/12 transition-all duration-300 shadow-[0_12px_35px_rgba(0,10,35,0.4)]"
            >
              {/* Image Banner */}
              <div className="h-52 md:h-56 bg-slate-900 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  alt={project.title}
                  src={project.image}
                  loading="lazy"
                />
                {/* Subtle dark gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09183d] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-7 md:p-8 flex flex-col flex-grow gap-4">
                <h3 className="font-['Montserrat'] text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-sky-200 transition-colors">
                  {project.title}
                </h3>

                <p className="font-['Inter'] text-sm text-slate-300 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges with Glass Effect */}
                <div className="flex gap-2 flex-wrap pt-1">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-white/5 text-sky-200 px-2.5 py-1 rounded-md text-xs font-mono border border-white/10 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-white/5 text-slate-300 px-2 py-1 rounded-md text-xs font-mono border border-white/10">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Glowing View Project Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-royal text-white px-6 py-2.5 rounded-xl text-xs md:text-sm font-semibold flex items-center gap-2 cursor-pointer transition-all shadow-md group/btn"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 text-sky-200 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail & Live Simulation Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
