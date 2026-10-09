import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PortfolioData } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, data }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSent(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', subject: '', message: '' });
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#0c0c0c] border border-white/20 rounded-xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-xl tracking-wider text-white">GET IN TOUCH / TALK</span>
            <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 font-mono rounded">
              Available
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
          {/* Quick contact channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`mailto:${data.contacts.email}`}
              className="p-3 bg-black/40 border border-white/10 rounded-lg hover:border-white/30 transition-all flex items-center gap-3 group"
            >
              <div className="p-2 bg-white/5 rounded group-hover:bg-white/10">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] uppercase font-mono text-white/40 block">Email Primary</span>
                <span className="text-xs text-white font-mono truncate block">{data.contacts.email}</span>
              </div>
            </a>

            <a
              href={`tel:${data.contacts.phone}`}
              className="p-3 bg-black/40 border border-white/10 rounded-lg hover:border-white/30 transition-all flex items-center gap-3 group"
            >
              <div className="p-2 bg-white/5 rounded group-hover:bg-white/10">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-white/40 block">Phone / Mobile</span>
                <span className="text-xs text-white font-mono">{data.contacts.phone}</span>
              </div>
            </a>

            <a
              href={data.contacts.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-black/40 border border-white/10 rounded-lg hover:border-white/30 transition-all flex items-center gap-3 group"
            >
              <div className="p-2 bg-white/5 rounded group-hover:bg-white/10">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-white/40 block">GitHub Profile</span>
                <span className="text-xs text-white font-mono">github.com/bprasanna2004</span>
              </div>
            </a>

            <div className="p-3 bg-black/40 border border-white/10 rounded-lg flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-white/40 block">Location</span>
                <span className="text-xs text-white font-mono">Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Direct message form */}
          <form onSubmit={handleSubmit} className="space-y-3 bg-black/30 border border-white/10 p-5 rounded-lg">
            <h4 className="font-pixel text-sm text-white uppercase tracking-wider">
              Send a Direct Message
            </h4>

            {sent ? (
              <div className="p-6 bg-emerald-950/40 border border-emerald-500/50 rounded text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h5 className="font-bold text-white text-sm">Message Sent Successfully!</h5>
                <p className="text-xs text-white/70">Thank you for reaching out. Prasanna will reply shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Alex Turner"
                      className="w-full bg-black/70 border border-white/20 rounded px-3 py-2 text-xs text-white placeholder-white/30 focus:border-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1">Your Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-black/70 border border-white/20 rounded px-3 py-2 text-xs text-white placeholder-white/30 focus:border-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-white/60 mb-1">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    className="w-full bg-black/70 border border-white/20 rounded px-3 py-2 text-xs text-white placeholder-white/30 focus:border-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-white/60 mb-1">Message</label>
                  <textarea
                    required
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your note or question here..."
                    className="w-full bg-black/70 border border-white/20 rounded px-3 py-2 text-xs text-white placeholder-white/30 focus:border-white focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-white text-black font-semibold text-xs rounded hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-black/40 text-xs text-white/60">
          <span>Open to Full-Time, Internships & Freelance Projects</span>
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
