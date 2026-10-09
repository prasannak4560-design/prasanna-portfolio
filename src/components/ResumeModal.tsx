import React, { useState } from 'react';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, data }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const resumeText = `
BITRAGUNTA PRASANNA KUMAR
Email: ${data.contacts.email} | Phone: ${data.contacts.phone} | Location: ${data.contacts.location}
GitHub: ${data.contacts.github} | LinkedIn: ${data.contacts.linkedin}

SUMMARY
Computer Science undergraduate with expertise in Python, C++, SQL, Data Structures & Algorithms (DSA), Machine Learning, and Data Analytics. Experienced in developing AI-driven applications, predictive models, and web-based solutions through academic and personal projects. Seeking a software development or data-focused role to apply analytical, programming, and problem-solving skills in a dynamic environment.

EDUCATION
SRM INSTITUTE OF SCIENCE AND TECHNOLOGY, B.Tech CSE (AIML) (2022 – 2026) | Chennai | CGPA: 8.12/10
Narayana Junior College, Senior Secondary (Science) (2020 – 2022) | Guntur | 96.0%
Sri Chaitanya School, Secondary School (2020) | Guntur | CGPA: 10

SKILLS
Technical Skills: Python, C++, C, SQL, JavaScript, HTML5, CSS3, Django, MySQL, MongoDB
Machine Learning & AI: ML Algorithms, Deep Learning, NLP, Computer Vision, Feature Engineering, Scikit-learn, OpenCV, Pandas, NumPy
Core Subjects: DSA, OOP, DBMS, Computer Networks, Operating Systems (OS)
Software Engineering: SDLC, Software Testing, Risk Management, Project Planning, COCOMO, SQA
Soft Skills: Leadership, Time Management, Effective Communication, Teamwork, Problem-solving

PROJECTS
1. Intelligent Security Model for Real-Time App and URL Phishing Detection (2026)
   (Python, Scikit-learn, Random Forest, Pandas, NumPy, HTML, CSS, JavaScript, SQL)
   - Built a Chrome Extension powered by Machine Learning for phishing URL detection using Random Forest, feature engineering, and data preprocessing techniques.
   - Developed a responsive browser interface that provides real-time threat notifications and security recommendations.

2. Smart Parking Slot Checker (2025)
   (Python, OpenCV, Computer Vision, Image Processing, NumPy, Contour Detection, HTML, CSS, JavaScript, Flask)
   - Built a real-time parking occupancy detection system using OpenCV, Computer Vision, and image processing algorithms.
   - Developed a Flask-based web dashboard for real-time visualization of parking slot status.

3. House Price Prediction System (2024)
   (Python, SQL, Linear Regression)
   - Developed a Machine Learning-based house price prediction system using Linear Regression, feature engineering, and data preprocessing techniques.
   - Analyzed housing datasets to identify significant pricing factors and generated insights to support data-driven decision-making.

CERTIFICATES
- NPTEL - Privacy and Security in Online Social Media
- NPTEL - Data Mining (Python)
- NPTEL - Introduction to Machine Learning
- AWS Academy - Machine Learning Foundations
- MATLAB Onramp – Digital Image Processing
- CISCO - Computer Networking Basics

POSITIONS OF RESPONSIBILITY
- Volunteered at ZPHS (Zilla Parishad High School) 2025 - Computer Concepts and AI fundamentals.
- Member of the College Disciplinary Committee | Aaruush 2024 - Event coordination and hackathons.
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in print:p-0 print:bg-white">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0c0c] border border-white/20 rounded-xl flex flex-col shadow-2xl overflow-hidden print:border-none print:shadow-none print:max-h-none print:bg-white print:text-black">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 print:hidden">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-white" />
            <span className="font-pixel text-xl tracking-wider text-white">RESUME / CURRICULUM VITAE</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors flex items-center gap-1.5 font-mono"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs bg-white text-black font-semibold rounded-md hover:bg-white/90 transition-colors flex items-center gap-1.5 font-mono"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 text-white/90 space-y-6 bg-black/60 print:bg-white print:text-black print:p-0 font-sans text-xs sm:text-sm">
          {/* Top header */}
          <div className="text-center border-b border-white/20 pb-4 print:border-gray-300">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black uppercase">
              Bitragunta Prasanna Kumar
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/70 print:text-gray-600 mt-2 font-mono">
              <span>{data.contacts.email}</span>
              <span>•</span>
              <span>{data.contacts.phone}</span>
              <span>•</span>
              <span>{data.contacts.location}</span>
              <span>•</span>
              <a href={data.contacts.github} target="_blank" rel="noreferrer" className="underline hover:text-white">
                github.com/bprasanna2004
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/60 print:text-gray-700 border-b border-white/10 pb-1">
              SUMMARY
            </h2>
            <p className="text-xs text-white/80 print:text-gray-800 leading-relaxed">
              Computer Science undergraduate with expertise in Python, C++, SQL, Data Structures & Algorithms (DSA), Machine Learning, and Data Analytics. Experienced in developing AI-driven applications, predictive models, and web-based solutions through academic and personal projects. Seeking a software development or data-focused role to apply analytical, programming, and problem-solving skills in a dynamic environment.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/60 print:text-gray-700 border-b border-white/10 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-2">
              {data.education.map((e, idx) => (
                <div key={idx} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-white print:text-black">{e.institution}</span>, {e.degree}
                    <div className="text-[11px] text-white/60 print:text-gray-500">{e.location}</div>
                  </div>
                  <div className="text-right font-mono text-[11px] shrink-0">
                    <div>{e.period}</div>
                    <div className="font-semibold text-white print:text-black">{e.scoreType}: {e.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/60 print:text-gray-700 border-b border-white/10 pb-1">
              SKILLS
            </h2>
            <div className="space-y-1 text-xs">
              <div><strong className="text-white print:text-black">Technical Skills:</strong> <span className="text-white/80 print:text-gray-800">Python, C++, C, SQL, JavaScript, HTML5, CSS3, Django, MySQL, MongoDB</span></div>
              <div><strong className="text-white print:text-black">Machine Learning & AI:</strong> <span className="text-white/80 print:text-gray-800">ML Algorithms, Deep Learning, NLP, Computer Vision, Feature Engineering, Scikit-learn, OpenCV, Pandas, NumPy</span></div>
              <div><strong className="text-white print:text-black">Core Subjects:</strong> <span className="text-white/80 print:text-gray-800">Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Database Management Systems (DBMS), Computer Networks, Operating Systems (OS)</span></div>
              <div><strong className="text-white print:text-black">Software Engineering:</strong> <span className="text-white/80 print:text-gray-800">SDLC, Software Testing, Risk Management, Project Planning, Cost Estimation (COCOMO), SQA</span></div>
              <div><strong className="text-white print:text-black">Soft Skills:</strong> <span className="text-white/80 print:text-gray-800">Leadership, Time Management, Effective Communication, Teamwork, Problem-solving</span></div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/60 print:text-gray-700 border-b border-white/10 pb-1">
              PROJECTS
            </h2>
            {data.projects.map((proj) => (
              <div key={proj.id} className="text-xs space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-white print:text-black">{proj.title}</span>
                  <span className="font-mono text-[11px] text-white/60 print:text-gray-500">({proj.year})</span>
                </div>
                <div className="text-[11px] text-white/50 print:text-gray-600 font-mono">
                  ({proj.technologies.join(', ')})
                </div>
                <p className="text-white/80 print:text-gray-800 leading-relaxed">
                  {proj.description}
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-white/70 print:text-gray-700">
                  {proj.highlights.slice(0, 2).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/60 print:text-gray-700 border-b border-white/10 pb-1">
              CERTIFICATES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-white/80 print:text-gray-800">
              {data.certifications.map((c) => (
                <div key={c.id}>• {c.issuer} - {c.title}</div>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/60 print:text-gray-700 border-b border-white/10 pb-1">
              POSITIONS OF RESPONSIBILITY
            </h2>
            {data.responsibilities.map((r, i) => (
              <div key={i} className="text-xs">
                <div className="flex justify-between font-semibold text-white print:text-black">
                  <span>{r.role} | {r.organization}</span>
                  <span className="font-mono text-[11px] text-white/60 print:text-gray-500">{r.year}</span>
                </div>
                <div className="text-white/70 print:text-gray-700">{r.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-black/40 text-xs text-white/60 print:hidden">
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
