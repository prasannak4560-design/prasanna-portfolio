import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { PhishingDemo, ParkingDemo, HousePriceDemo } from './InteractiveDemos';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  activeProjectId?: string;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({
  isOpen,
  onClose,
  projects,
  activeProjectId,
}) => {
  const [selectedId, setSelectedId] = useState<string>(activeProjectId || projects[0]?.id || '');

  if (!isOpen) return null;

  const currentProject = projects.find((p) => p.id === selectedId) || projects[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c0c] border border-white/20 rounded-xl flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-xl tracking-wider text-white">SYSTEMS & ARCHITECTURE</span>
            <span className="text-xs px-2 py-0.5 bg-white/10 text-white/70 font-mono rounded">
              3 Featured Systems
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Tab Selector */}
        <div className="flex border-b border-white/10 bg-black/20 overflow-x-auto no-scrollbar">
          {projects.map((proj) => {
            const active = proj.id === currentProject?.id;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedId(proj.id)}
                className={`px-5 py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
                  active
                    ? 'border-white text-white bg-white/5 font-semibold'
                    : 'border-transparent text-white/50 hover:text-white/80 hover:bg-white/[0.02]'
                }`}
              >
                <span>{proj.year}</span>
                <span className="hidden sm:inline">•</span>
                <span className="truncate max-w-[200px]">{proj.title.split(' ')[0]} {proj.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        {currentProject && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
            {/* Title & Metadata */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-pixel text-xs px-2 py-0.5 bg-red-950/60 border border-red-500/40 text-red-300 rounded">
                  {currentProject.year} PROJECT
                </span>
                <span className="text-xs font-mono text-white/50 px-2 py-0.5 border border-white/10 rounded">
                  {currentProject.category}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentProject.title}
              </h2>
              <p className="text-sm text-white/80 leading-relaxed mt-2.5">
                {currentProject.description}
              </p>
            </div>

            {/* Interactive Sandbox Widget */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-2.5">
                <Sparkles className="w-4 h-4 text-white" />
                <h3 className="font-pixel text-sm uppercase tracking-wider text-white">
                  Interactive Live Simulator
                </h3>
              </div>
              {currentProject.demoType === 'phishing' && <PhishingDemo />}
              {currentProject.demoType === 'parking' && <ParkingDemo />}
              {currentProject.demoType === 'housing' && <HousePriceDemo />}
            </div>

            {/* Key Engineering Highlights */}
            <div className="space-y-3 bg-black/40 border border-white/10 p-5 rounded-lg">
              <h4 className="font-pixel text-sm text-white/90 tracking-wide uppercase">
                Engineering Highlights & Implementation Details
              </h4>
              <ul className="space-y-2">
                {currentProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-white/80 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Pills */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-pixel text-white/50 mb-2.5">
                Technologies & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-white/5 border border-white/15 rounded-md font-mono text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-black/40 text-xs text-white/60">
          <span>Click tabs above to switch systems</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white text-black font-semibold rounded hover:bg-white/90 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
