import React from 'react';
import { X, Award, CheckCircle, Shield, Cpu, Cloud, Network } from 'lucide-react';
import { Certification } from '../data/portfolioData';

interface CertificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  certifications: Certification[];
}

export const CertificationsModal: React.FC<CertificationsModalProps> = ({
  isOpen,
  onClose,
  certifications,
}) => {
  if (!isOpen) return null;

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Security':
        return <Shield className="w-4 h-4 text-red-400" />;
      case 'Machine Learning':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-amber-400" />;
      case 'Computer Vision':
        return <Award className="w-4 h-4 text-emerald-400" />;
      case 'Networking':
        return <Network className="w-4 h-4 text-blue-400" />;
      default:
        return <Award className="w-4 h-4 text-white" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#0c0c0c] border border-white/20 rounded-xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-xl tracking-wider text-white">CERTIFICATES & ACCREDITATIONS</span>
            <span className="text-xs px-2 py-0.5 bg-white/10 text-white/70 font-mono rounded">
              6 Verified
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
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-4">
          <p className="text-xs text-white/70 leading-relaxed">
            Industry and academic certifications validating proficiency across machine learning, cybersecurity, cloud architecture, image processing, and networking:
          </p>

          <div className="grid grid-cols-1 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-4 bg-black/40 border border-white/10 rounded-lg flex items-center justify-between hover:border-white/25 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/5 rounded border border-white/10 mt-0.5 group-hover:bg-white/10 transition-colors">
                    {getCategoryIcon(cert.category)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-tight">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-mono text-white/60">{cert.issuer}</span>
                      <span className="text-white/30">•</span>
                      <span className="text-[11px] font-mono text-white/40">{cert.category}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono shrink-0 pl-2">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-black/40 text-xs text-white/60">
          <span>NPTEL • AWS Academy • MathWorks MATLAB • CISCO</span>
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
