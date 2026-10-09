import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
  links: { label: string; action: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  links,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6">
        {/* Exact Logo SVG */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 256 256"
            fill="none"
          >
            <path
              d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-2 text-white hover:opacity-70 transition-opacity"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col items-center justify-center flex-1 gap-8">
        {links.map((link, i) => (
          <button
            key={link.label}
            onClick={() => {
              onNavigate(link.action);
              onClose();
            }}
            style={{
              transitionDelay: isOpen ? `${100 + i * 60}ms` : '0ms',
            }}
            className={`text-2xl tracking-widest uppercase transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-70 ${
              isOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
