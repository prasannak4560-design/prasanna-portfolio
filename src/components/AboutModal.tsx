import React from 'react';
import { X, GraduationCap, HeartHandshake } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c0c0c] border border-white/20 rounded-xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-xl tracking-wider text-white">PROFILE & BACKGROUND</span>
            <span className="text-xs px-2 py-0.5 bg-white/10 text-white/70 font-mono rounded">
              Bitragunta Prasanna Kumar
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Bio statement */}
          <div className="space-y-3">
            <h3 className="font-pixel text-sm uppercase tracking-wider text-white/50">
              Executive Summary
            </h3>
            <p className="text-sm text-white/90 leading-relaxed bg-white/5 p-4 rounded-lg border border-white/10">
              Computer Science undergraduate at SRM Institute of Science and Technology specializing in Artificial Intelligence and Machine Learning (B.Tech AIML, 8.12 CGPA). Experienced in architecting machine learning models, real-time computer vision pipelines, and full-stack web solutions. Seeking software development and data-driven roles to apply analytical rigor, clean engineering, and innovative problem-solving in fast-paced teams.
            </p>
          </div>

          {/* Quick info bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
            <div className="bg-black/40 p-3 rounded border border-white/10">
              <span className="text-white/40 block text-[10px] uppercase">Location</span>
              <span className="text-white font-semibold">Chennai, India</span>
            </div>
            <div className="bg-black/40 p-3 rounded border border-white/10">
              <span className="text-white/40 block text-[10px] uppercase">Degree</span>
              <span className="text-white font-semibold">B.Tech AIML (2026)</span>
            </div>
            <div className="bg-black/40 p-3 rounded border border-white/10">
              <span className="text-white/40 block text-[10px] uppercase">Academic CGPA</span>
              <span className="text-emerald-400 font-bold">8.12 / 10</span>
            </div>
            <div className="bg-black/40 p-3 rounded border border-white/10">
              <span className="text-white/40 block text-[10px] uppercase">Focus</span>
              <span className="text-white font-semibold">AI, ML, CV & Web</span>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-white" />
              <h3 className="font-pixel text-sm uppercase tracking-wider text-white/80">
                Education
              </h3>
            </div>
            <div className="space-y-3">
              {data.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-black/40 border border-white/10 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                    <p className="text-xs text-white/60 mt-0.5">{edu.institution} • {edu.location}</p>
                    <span className="text-[11px] font-mono text-white/40">{edu.period}</span>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="text-xs px-2.5 py-1 bg-white/10 border border-white/20 rounded font-mono text-white font-bold">
                      {edu.scoreType}: {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility & Volunteering */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-white" />
              <h3 className="font-pixel text-sm uppercase tracking-wider text-white/80">
                Leadership & Volunteering
              </h3>
            </div>
            <div className="space-y-3">
              {data.responsibilities.map((resp, idx) => (
                <div key={idx} className="p-4 bg-black/40 border border-white/10 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-semibold text-white">{resp.role}</h4>
                    <span className="text-xs font-mono text-white/50">{resp.year}</span>
                  </div>
                  <span className="text-xs text-white/60 block mb-2">{resp.organization}</span>
                  <p className="text-xs text-white/80 leading-relaxed">{resp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-black/40 text-xs text-white/60">
          <span>Bitragunta Prasanna Kumar • B.Tech CSE (AIML)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white text-black font-semibold rounded hover:bg-white/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
