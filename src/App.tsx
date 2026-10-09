import React, { useState } from 'react';
import { Play, Menu } from 'lucide-react';
import { prasannaData, adamRobertsTemplateData, PortfolioData } from './data/portfolioData';
import { ProjectsModal } from './components/ProjectsModal';
import { AboutModal } from './components/AboutModal';
import { SkillsModal } from './components/SkillsModal';
import { CertificationsModal } from './components/CertificationsModal';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { ShowreelModal } from './components/ShowreelModal';
import { MobileMenu } from './components/MobileMenu';

export const App: React.FC = () => {
  // Mode toggle: true = Prasanna Kumar (Personal Portfolio from Resumes), false = Adam Roberts (Exact Template)
  const [isPrasannaMode, setIsPrasannaMode] = useState<boolean>(true);
  const data: PortfolioData = isPrasannaMode ? prasannaData : adamRobertsTemplateData;

  // UI state
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [projectsModalOpen, setProjectsModalOpen] = useState<boolean>(false);
  const [aboutModalOpen, setAboutModalOpen] = useState<boolean>(false);
  const [skillsModalOpen, setSkillsModalOpen] = useState<boolean>(false);
  const [certsModalOpen, setCertsModalOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [showreelOpen, setShowreelOpen] = useState<boolean>(false);

  // Navigation Links
  const navLinks = isPrasannaMode
    ? [
        { label: 'ABOUT', action: 'about' },
        { label: 'PROJECTS', action: 'projects' },
        { label: 'SKILLS', action: 'skills' },
        { label: 'CERTS', action: 'certs' },
        { label: 'RESUME', action: 'resume' },
        { label: 'TALK', action: 'contact' },
      ]
    : [
        { label: 'ABOUT', action: 'about' },
        { label: 'PROCESS', action: 'projects' },
        { label: 'PROJECTS', action: 'projects' },
        { label: 'CATALOG', action: 'skills' },
        { label: 'D.O.T', action: 'certs' },
        { label: 'TALK', action: 'contact' },
      ];

  const handleNavAction = (action: string) => {
    switch (action) {
      case 'about':
        setAboutModalOpen(true);
        break;
      case 'projects':
        setProjectsModalOpen(true);
        break;
      case 'skills':
        setSkillsModalOpen(true);
        break;
      case 'certs':
        setCertsModalOpen(true);
        break;
      case 'resume':
        setResumeModalOpen(true);
        break;
      case 'contact':
        setContactModalOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white select-none">
      {/* ═══════════════════════════════════════
          BACKGROUND VIDEO (exact URL — do not substitute)
          ═══════════════════════════════════════ */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover lg:scale-[1.2]"
      />

      {/* ═══════════════════════════════════════
          OUTER CONTENT WRAPPER (above video at z-10)
          ═══════════════════════════════════════ */}
      <div className="relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14">
        
        {/* ── 1. NAVBAR ── */}
        <header className="flex items-center justify-between py-6">
          {/* Left: Geometric Logo SVG */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setAboutModalOpen(true)}
              className="hover:opacity-80 transition-opacity flex items-center gap-3"
              aria-label="Home"
            >
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
            </button>

            {/* Profile Mode Switcher Pill */}
            <button
              onClick={() => setIsPrasannaMode(!isPrasannaMode)}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] font-mono text-white/80 transition-colors"
              title="Toggle between Prasanna Kumar (Resume) and Adam Roberts (Template)"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isPrasannaMode ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
              <span>{isPrasannaMode ? 'Prasanna Kumar' : 'Adam Roberts Spec'}</span>
            </button>
          </div>

          {/* Right desktop (md+): horizontal links, gap-8, text-sm tracking-wide */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavAction(link.action)}
                className="hover:opacity-70 transition-opacity uppercase font-normal text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right mobile (<md): hamburger button (Menu icon size 24), p-2 hover:opacity-70 */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 text-white hover:opacity-70 transition-opacity"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* ── 2. FOUR-COLUMN META GRID ── */}
        <section className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* COL 1 (left) */}
          <div>
            <h2 className="text-lg md:text-xl tracking-wide leading-tight">
              <span className="block font-normal font-sans">{data.name.first}</span>
              <span className="block font-pixel text-2xl md:text-3xl">{data.name.last}</span>
            </h2>
            <div className="text-[10px] text-white/50 mt-3">*</div>
            <p className="font-pixel mt-1 text-xs text-white/60 leading-relaxed whitespace-pre-line">
              {data.brandBlurb.join('\n')}
            </p>
          </div>

          {/* COL 2 (text-right on mobile 2-col, text-left on lg) */}
          <div className="text-right lg:text-left">
            <h2 className="text-lg md:text-xl tracking-wide leading-tight">
              <span className="block font-normal font-sans">{data.roleCategory.line1}</span>
              <span className="block font-pixel text-2xl md:text-3xl">{data.roleCategory.line2Pixel}</span>
            </h2>
          </div>

          {/* COL 3 */}
          <div>
            <h3 className="font-pixel text-base tracking-widest text-white/50 uppercase mb-3">
              {data.whatIDo.label}
            </h3>
            <p className="text-sm text-white/90 leading-relaxed max-w-[220px]">
              {data.whatIDo.content}
            </p>
          </div>

          {/* COL 4 (text-right on mobile 2-col, text-left on lg) */}
          <div className="text-right lg:text-left">
            <h3 className="font-pixel text-base tracking-widest text-white/50 uppercase mb-3">
              {data.services.label}
            </h3>
            <ul className="text-sm text-white/90 leading-relaxed space-y-0.5">
              {data.services.items.map((svc, idx) => (
                <li key={idx}>{svc}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 3. FLEX SPACER ── */}
        <div className="flex-1" />

        {/* ── 4. BOTTOM SECTION (pb-4) ── */}
        <footer className="pb-4">
          {/* ROW A — grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-end */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-end">
            
            {/* LEFT — Hero headline */}
            <div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal"
                style={{ lineHeight: 0.72 }}
              >
                <span className="block">{data.headline.line1}</span>
                <span className="block">
                  <span className="font-pixel font-normal text-[1.25em] inline-block leading-none align-baseline">
                    {data.headline.line2Pixel.split(' ')[0]}
                  </span>{' '}
                  {data.headline.line2Pixel.split(' ').slice(1).join(' ')}
                </span>
                <span className="block">{data.headline.line3}</span>
                <span className="block">
                  <span className="font-pixel font-normal text-[1.25em] inline-block leading-none align-baseline">
                    {data.headline.line4Pixel}
                  </span>
                </span>
              </h1>
            </div>

            {/* RIGHT — column flex flex-col gap-4 sm:gap-6 justify-end */}
            <div className="flex flex-col gap-4 sm:gap-6 justify-end">
              {/* A) PLAY SHOWREEL button (self-start) */}
              <button
                onClick={() => setShowreelOpen(true)}
                className="self-start flex items-center gap-3 border border-white/30 px-6 py-3 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Play size={14} fill="white" />
                <span className="text-sm tracking-wider font-sans">PLAY SHOWREEL</span>
              </button>

              {/* B) Awards / Metrics row (self-start on mobile, lg:self-end) */}
              <div className="self-start lg:self-end flex flex-wrap items-stretch gap-2 sm:gap-3 text-sm text-white/80">
                {isPrasannaMode ? (
                  <>
                    <button
                      onClick={() => setAboutModalOpen(true)}
                      className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
                      title="SRM Institute of Science and Technology B.Tech AIML"
                    >
                      <span className="font-bold text-sm sm:text-base tracking-tight">CGPA</span>
                      <span className="text-white/50 text-xs font-mono">8.12</span>
                    </button>
                    <button
                      onClick={() => setProjectsModalOpen(true)}
                      className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
                      title="View 3+ ML & Security Projects"
                    >
                      <span className="font-bold text-lg sm:text-xl">SYS.</span>
                      <span className="text-white/50 text-xs font-mono">x3</span>
                    </button>
                    <button
                      onClick={() => setCertsModalOpen(true)}
                      className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
                      title="View NPTEL, AWS, MATLAB, CISCO Certifications"
                    >
                      <span className="font-bold text-[10px] sm:text-xs tracking-tight">CERTS</span>
                      <span className="text-white/50 text-xs font-mono">x6</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2">
                      <span className="font-bold text-sm sm:text-base tracking-tight">FWA</span>
                      <span className="text-white/50 text-xs font-mono">x1</span>
                    </div>
                    <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2">
                      <span className="font-bold text-lg sm:text-xl">W.</span>
                      <span className="text-white/50 text-xs font-mono">x7</span>
                    </div>
                    <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2">
                      <span className="font-bold text-[10px] sm:text-xs tracking-tight">CSSDesignAwards</span>
                      <span className="text-white/50 text-xs font-mono">x22</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* ROW B — footer strip */}
          <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pt-4 border-t border-white/10">
            {/* Left */}
            <div className="text-xs text-white/60">
              {data.footerLeft.text}
              <button
                onClick={() => setContactModalOpen(true)}
                className="text-red-500 hover:text-red-400 transition-colors underline-offset-2 hover:underline"
              >
                {data.footerLeft.ctaText}
              </button>
            </div>

            {/* Right */}
            <div className="text-xs text-white/60 sm:text-right font-mono">
              {data.footerRight}
            </div>
          </div>
        </footer>
      </div>

      {/* ═══════════════════════════════════════
          MOBILE FULLSCREEN MENU
          ═══════════════════════════════════════ */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavAction}
        links={navLinks}
      />

      {/* ═══════════════════════════════════════
          INTERACTIVE MODALS
          ═══════════════════════════════════════ */}
      <ProjectsModal
        isOpen={projectsModalOpen}
        onClose={() => setProjectsModalOpen(false)}
        projects={data.projects}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        data={data}
      />

      <SkillsModal
        isOpen={skillsModalOpen}
        onClose={() => setSkillsModalOpen(false)}
        data={data}
      />

      <CertificationsModal
        isOpen={certsModalOpen}
        onClose={() => setCertsModalOpen(false)}
        certifications={data.certifications}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        data={data}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        data={data}
      />

      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onOpenProjects={() => setProjectsModalOpen(true)}
      />
    </div>
  );
};

export default App;
