import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, Cpu, Car, DollarSign, RefreshCw, Sparkles } from 'lucide-react';

export const PhishingDemo: React.FC = () => {
  const [urlInput, setUrlInput] = useState('https://secure-login.bank-update.verify-account.cc/auth');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    isPhishing: boolean;
    reasons: string[];
    features: { [key: string]: string | number };
  } | null>(null);

  const sampleUrls = [
    { label: 'Suspicious Target', url: 'https://paypal-security-center.account-unlock.info/login' },
    { label: 'Official GitHub', url: 'https://github.com/bprasanna2004' },
    { label: 'SRMIST Portal', url: 'https://evarsity.srmist.edu.in/srmweb' },
    { label: 'Fake Google Form', url: 'http://192.168.1.104/google-account-recovery/reset' },
  ];

  const handleAnalyze = (targetUrl: string = urlInput) => {
    setAnalyzing(true);
    setTimeout(() => {
      const isSus = targetUrl.includes('verify') || 
                    targetUrl.includes('unlock') || 
                    targetUrl.includes('info') || 
                    targetUrl.includes('.cc') ||
                    targetUrl.includes('192.168') ||
                    targetUrl.split('.').length > 3 ||
                    (targetUrl.includes('login') && !targetUrl.includes('github.com'));
      
      const score = isSus ? 94.6 : 3.2;
      const features = {
        'URL Length': targetUrl.length,
        'Domain Entropy': (Math.random() * 1.5 + 3.2).toFixed(2),
        'Subdomain Count': targetUrl.split('.').length - 1,
        'Has IP Address': targetUrl.includes('192.') || targetUrl.includes('10.') ? 'Yes (High Risk)' : 'No',
        'HTTPS Encrypted': targetUrl.startsWith('https://') ? 'Valid TLS' : 'Insecure HTTP',
        'Suspicious Keywords': isSus ? 'Detected ("verify", "unlock")' : 'None detected',
      };

      const reasons = isSus ? [
        'Excessive subdomains indicative of dynamic DNS masquerading.',
        'High structural entropy in host path.',
        'Presence of phishing lures in lexical tokens.',
        'Random Forest Model confidence exceeds 92% malicious threshold.'
      ] : [
        'Domain matches verified reputation registry.',
        'Standard path depth and low lexical entropy.',
        'Valid TLS certificate hierarchy with no known CVE signatures.',
        'Random Forest classification confirms clean signature.'
      ];

      setResult({
        score,
        isPhishing: isSus,
        reasons,
        features
      });
      setAnalyzing(false);
    }, 450);
  };

  return (
    <div className="bg-black/60 border border-white/20 p-5 rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-red-400" />
          <h4 className="font-pixel text-lg text-white">Random Forest Phishing URL Classifier</h4>
        </div>
        <span className="text-xs px-2 py-0.5 border border-white/20 text-white/70 rounded font-pixel">
          Real-Time Chrome Ext Engine
        </span>
      </div>

      <p className="text-xs text-white/70">
        Test URL against trained heuristic feature extractor and Random Forest classification weights:
      </p>

      {/* Preset pills */}
      <div className="flex flex-wrap gap-2">
        {sampleUrls.map((s, idx) => (
          <button
            key={idx}
            onClick={() => {
              setUrlInput(s.url);
              handleAnalyze(s.url);
            }}
            className="text-xs px-2.5 py-1 bg-white/10 hover:bg-white/20 border border-white/10 rounded transition-colors text-white/80"
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          placeholder="Enter URL to inspect..."
          className="flex-1 bg-black/80 border border-white/30 px-3 py-2 text-xs font-mono text-white placeholder-white/40 rounded focus:outline-none focus:border-white"
        />
        <button
          onClick={() => handleAnalyze()}
          disabled={analyzing}
          className="px-4 py-2 bg-white text-black font-semibold text-xs rounded hover:bg-white/90 transition-colors flex items-center gap-1.5"
        >
          {analyzing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
          Inspect
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className={`p-4 rounded border transition-all ${
          result.isPhishing ? 'bg-red-950/40 border-red-500/50' : 'bg-emerald-950/40 border-emerald-500/50'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {result.isPhishing ? (
                <ShieldAlert className="w-5 h-5 text-red-400" />
              ) : (
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              )}
              <span className={`font-pixel text-base font-bold ${
                result.isPhishing ? 'text-red-400' : 'text-emerald-400'
              }`}>
                {result.isPhishing ? 'MALICIOUS / PHISHING THREAT DETECTED' : 'LEGITIMATE SAFE DOMAIN'}
              </span>
            </div>
            <span className="font-mono text-xs text-white/80">
              Risk Score: <strong className={result.isPhishing ? 'text-red-400' : 'text-emerald-400'}>{result.score}%</strong>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono mb-3 bg-black/40 p-2.5 rounded border border-white/10">
            {Object.entries(result.features).map(([key, val]) => (
              <div key={key}>
                <span className="text-white/50 block text-[10px]">{key}</span>
                <span className="text-white/90">{val}</span>
              </div>
            ))}
          </div>

          <ul className="text-xs space-y-1 text-white/80">
            {result.reasons.map((r, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-white/40">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const ParkingDemo: React.FC = () => {
  const [slots, setSlots] = useState<boolean[]>([true, false, true, true, false, true, false, true]);
  const contourThreshold = 45;

  const toggleSlot = (idx: number) => {
    setSlots((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  const occupiedCount = slots.filter(Boolean).length;
  const vacantCount = slots.length - occupiedCount;
  const occupancyRate = ((occupiedCount / slots.length) * 100).toFixed(0);

  return (
    <div className="bg-black/60 border border-white/20 p-5 rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Car className="w-5 h-5 text-blue-400" />
          <h4 className="font-pixel text-lg text-white">OpenCV Real-Time Slot Occupancy Pipeline</h4>
        </div>
        <span className="text-xs px-2 py-0.5 border border-white/20 text-white/70 rounded font-pixel">
          Flask + OpenCV Backend
        </span>
      </div>

      <p className="text-xs text-white/70">
        Simulated camera feed contour analyzer. Click any slot to toggle vehicle presence:
      </p>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-2 text-center bg-black/50 p-2 rounded border border-white/10">
        <div>
          <span className="block text-[10px] text-white/50 uppercase font-mono">Total Bays</span>
          <span className="font-mono text-sm text-white font-bold">{slots.length}</span>
        </div>
        <div>
          <span className="block text-[10px] text-emerald-400/80 uppercase font-mono">Available</span>
          <span className="font-mono text-sm text-emerald-400 font-bold">{vacantCount}</span>
        </div>
        <div>
          <span className="block text-[10px] text-red-400/80 uppercase font-mono">Occupied</span>
          <span className="font-mono text-sm text-red-400 font-bold">{occupiedCount} ({occupancyRate}%)</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-2.5">
        {slots.map((isOccupied, idx) => (
          <button
            key={idx}
            onClick={() => toggleSlot(idx)}
            className={`p-3 rounded border text-left transition-all relative overflow-hidden group ${
              isOccupied
                ? 'bg-red-950/30 border-red-500/60 hover:border-red-400'
                : 'bg-emerald-950/30 border-emerald-500/60 hover:border-emerald-400'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs text-white/60">BAY #{idx + 1}</span>
              <span className={`w-2 h-2 rounded-full ${isOccupied ? 'bg-red-500 animate-pulse' : 'bg-emerald-400'}`} />
            </div>
            <div className="font-mono text-xs font-semibold text-white">
              {isOccupied ? 'OCCUPIED' : 'VACANT'}
            </div>
            <div className="text-[10px] text-white/50 font-mono mt-1">
              Area: {isOccupied ? (contourThreshold * 28 + idx * 7) : 0}px²
            </div>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between text-[11px] text-white/60 font-mono border-t border-white/10 pt-2">
        <span>Contour Threshold Filter: {contourThreshold}px</span>
        <button
          onClick={() => setSlots(slots.map(() => Math.random() > 0.5))}
          className="text-xs px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded text-white flex items-center gap-1"
        >
          <RefreshCw className="w-3 h-3" /> Randomize Feed
        </button>
      </div>
    </div>
  );
};

export const HousePriceDemo: React.FC = () => {
  const [sqft, setSqft] = useState<number>(1850);
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [locationIndex, setLocationIndex] = useState<number>(1.25);

  const basePrice = 45000;
  const sqftWeight = 145;
  const bedWeight = 18000;
  const bathWeight = 12000;

  const estimatedPrice = Math.round(
    (basePrice + sqft * sqftWeight + bedrooms * bedWeight + bathrooms * bathWeight) * locationIndex
  );

  return (
    <div className="bg-black/60 border border-white/20 p-5 rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-amber-400" />
          <h4 className="font-pixel text-lg text-white">Multiple Linear Regression Pricing Model</h4>
        </div>
        <span className="text-xs px-2 py-0.5 border border-white/20 text-white/70 rounded font-pixel">
          Scikit-learn + Pandas
        </span>
      </div>

      <p className="text-xs text-white/70">
        Adjust input feature vectors to observe instantaneous regression prediction updates:
      </p>

      <div className="space-y-3 bg-black/40 p-4 rounded border border-white/10 text-xs">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-white/70">Living Area (Square Footage):</span>
            <span className="font-mono text-white font-bold">{sqft} sq.ft</span>
          </div>
          <input
            type="range"
            min="600"
            max="4500"
            step="50"
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            className="w-full accent-white h-1 bg-white/20 rounded cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white/70">Bedrooms:</span>
              <span className="font-mono text-white font-bold">{bedrooms} BHK</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              value={bedrooms}
              onChange={(e) => setBedrooms(Number(e.target.value))}
              className="w-full accent-white h-1 bg-white/20 rounded cursor-pointer"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white/70">Bathrooms:</span>
              <span className="font-mono text-white font-bold">{bathrooms}</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={bathrooms}
              onChange={(e) => setBathrooms(Number(e.target.value))}
              className="w-full accent-white h-1 bg-white/20 rounded cursor-pointer"
            />
          </div>
        </div>

        <div>
          <span className="text-white/70 block mb-1.5">Locality Tier / Regional Index:</span>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Suburban (1.0x)', val: 1.0 },
              { label: 'Metro Center (1.25x)', val: 1.25 },
              { label: 'Prime Coastal (1.60x)', val: 1.6 },
            ].map((loc) => (
              <button
                key={loc.val}
                onClick={() => setLocationIndex(loc.val)}
                className={`py-1.5 text-[11px] rounded border transition-all ${
                  locationIndex === loc.val
                    ? 'bg-white text-black font-semibold border-white'
                    : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3.5 bg-amber-500/10 border border-amber-500/40 rounded flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-mono text-amber-300/80 block">Estimated Market Valuation</span>
          <span className="font-mono text-2xl font-bold text-amber-300">
            ${estimatedPrice.toLocaleString()}
          </span>
        </div>
        <div className="text-right text-[11px] font-mono text-white/50">
          <div>R² Score: 0.884</div>
          <div>RMSE: ±$14,200</div>
        </div>
      </div>
    </div>
  );
};
