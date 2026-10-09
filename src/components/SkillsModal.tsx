import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose, data }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', ...data.skills.map((s) => s.category)];

  const filteredSkills =
    activeTab === 'All'
      ? data.skills
      : data.skills.filter((s) => s.category === activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c0c0c] border border-white/20 rounded-xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-xl tracking-wider text-white">TECHNICAL EXPERTISE & SKILLS</span>
            <span className="text-xs px-2 py-0.5 bg-white/10 text-white/70 font-mono rounded">
              Verified Stack
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex border-b border-white/10 bg-black/20 overflow-x-auto no-scrollbar px-4 py-2 gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-1.5 text-xs rounded-md transition-all font-mono whitespace-nowrap ${
                activeTab === cat
                  ? 'bg-white text-black font-semibold'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSkills.map((catGroup, idx) => (
              <div
                key={idx}
                className="bg-black/40 border border-white/10 p-5 rounded-lg space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-pixel text-sm text-white/90 uppercase tracking-wide">
                    {catGroup.category}
                  </h4>
                  <span className="text-[10px] font-mono text-white/40">
                    {catGroup.items.length} skills
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {catGroup.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/15 rounded text-xs text-white/90 font-mono transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Foundations Card */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg text-xs space-y-2">
            <h5 className="font-pixel text-sm text-white uppercase tracking-wider">
              Core Competencies Summary
            </h5>
            <p className="text-white/70 leading-relaxed">
              Demonstrated ability in combining mathematical foundations (linear algebra, probability, calculus) with practical software implementation. Experienced across the full machine learning lifecycle from exploratory data analysis and feature extraction to production model deployment and user-facing web dashboard integration.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-black/40 text-xs text-white/60">
          <span>{data.skills.reduce((acc, c) => acc + c.items.length, 0)} Total Technical & Analytical Skills</span>
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
