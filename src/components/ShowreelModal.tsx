import React, { useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProjects: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  onOpenProjects,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#080808] border border-white/20 rounded-xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-xl tracking-wider text-white">REEL & HIGHLIGHTS</span>
            <span className="text-xs px-2 py-0.5 bg-red-600/30 text-red-300 font-mono rounded">
              HD 60FPS
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <video
            ref={videoRef}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4"
            autoPlay
            loop
            playsInline
            muted={isMuted}
            className="w-full h-full object-cover"
          />

          {/* Overlay controls */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="font-pixel text-xs text-white/80">
                Bitragunta Prasanna Kumar — Engineering Reel
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenProjects();
              }}
              className="px-4 py-1.5 bg-white text-black font-semibold text-xs rounded hover:bg-white/90 transition-colors font-mono"
            >
              Explore Project Demos →
            </button>
          </div>
        </div>

        {/* Highlights summary */}
        <div className="p-5 bg-black/60 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <span className="font-pixel text-sm text-white block">FEATURED CAPABILITIES IN REEL:</span>
            <span className="text-white/60">
              Random Forest URL Heuristic Scanners • OpenCV Real-Time Contour Segmentation • Multiple Linear Regression Engines
            </span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenProjects();
            }}
            className="px-4 py-2 border border-white/30 hover:border-white text-white rounded transition-colors font-mono"
          >
            Launch Interactive Simulations
          </button>
        </div>
      </div>
    </div>
  );
};
