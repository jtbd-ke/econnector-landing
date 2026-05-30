"use client";

import React from 'react';

export default function LandingPage() {
  return (
    /* Root container with Framer aesthetic canvas backdrop rules applied */
    <div className="min-h-screen lg:h-screen lg:overflow-y-auto lg:snap-y lg:snap-mandatory scroll-smooth bg-slate-950 text-slate-100 font-sans antialiased bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]">
      
      {/* Self-contained high-end Framer motion physics engine fallback style block */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
        }
        @keyframes laser-beam {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        @keyframes radial-pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-framer-float { animation: float 6s ease-in-out infinite; }
        .animate-laser-beam { animation: laser-beam 3s linear infinite; }
        .animate-ambient-pulse { animation: radial-pulse 8s ease-in-out infinite; }
        .premium-grid-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>

      {/* ========================================== */}
      {/* FLOATING GLASS NAVIGATION HEADER           */}
      {/* ========================================== */}
      <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-900 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]">eC</span>
            <span className="font-bold text-xl tracking-tight text-white">eConnector</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#/connector-dashboard/signin" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Sign In</a>
            <a href="#/connector-dashboard/signup" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
              Sign Up
            </a>
          </div>
        </div>
      </header>

      {/* ========================================== */}
      {/* SECTION 1: THE HIGH-GLOW HERO AREA         */}
      {/* ========================================== */}
      <section className="premium-grid-pattern snap-start scroll-mt-20 min-h-screen flex items-center justify-center px-6 py-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        
        {/* Left Column: Premium Typography Cluster */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full z-10">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-6 border border-emerald-500/20 tracking-wider uppercase shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live QuickBooks Online Sync
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white leading-[1.1] bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400">
            Get eTIMS compliant without moving an inch.
          </h1>

          <p className="text-base md:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
            An elegant background pipeline that intercepts your native <strong className="text-white font-semibold">QuickBooks Online</strong> actions and pairs them instantly to eTIMS. No behavior shifts, no manual data duplication loops.
          </p>

          <div className="flex flex-col items-center lg:items-start w-full sm:w-auto">
            <a 
              href="#/connector-dashboard/signup" 
              className="w-full sm:w-auto text-center bg-white hover:bg-slate-100 text-slate-950 font-bold text-base py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Connect QuickBooks Now
            </a>
            <span className="text-xs text-slate-500 mt-3 font-medium tracking-wide">Automated onboarding takes under 5 minutes.</span>
          </div>
        </div>

        {/* Right Column: Floating Glow Dashboard Box */}
        <div className="lg:col-span-6 w-full flex items-center justify-center h-full relative">
          
          {/* Framer Ambient Glow behind the device card container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none animate-ambient-pulse"></div>
          <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none animate-ambient-pulse" style={{ animationDelay: '-3s' }}></div>

          <div className="w-full max-w-md md:max-w-xl bg-slate-900/80 p-3 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] border border-slate-800/80 transform hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm animate-framer-float">
            {/* Screen Viewport Wrapper with fine custom glass highlight border */}
            <div className="bg-slate-950 rounded-xl p-5 text-xs font-sans relative overflow-hidden aspect-[16/10] flex flex-col justify-between border border-slate-800 shadow-inner">
              
              {/* Top Navigation Frame simulation */}
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="h-5 w-5 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-[10px] shadow-[0_0_10px_rgba(16,185,129,0.3)]">qb</div>
                  <span className="font-bold text-slate-300 tracking-wide">QuickBooks Pipeline</span>
                </div>
                <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">Live Bridge Syncing</span>
                </div>
              </div>

              {/* Central Operational Frame tracking details */}
              <div className="grid grid-cols-3 gap-4 items-start flex-1 relative">
                <div className="col-span-2 space-y-3 border border-slate-900 p-3 rounded-xl bg-slate-900/30">
                  <div className="flex justify-between items-center border-b border-slate-900 pb-2 mb-1">
                    <span className="font-bold text-slate-200 text-[10px]">Tax Document #INV-0482</span>
                    <span className="text-slate-500 text-[8px] font-mono">2026-05-30</span>
                  </div>
                  <div className="h-2 w-3/4 bg-slate-800 rounded-full"></div>
                  <div className="h-2 w-1/2 bg-slate-800 rounded-full"></div>
                  
                  <div className="h-7 w-full bg-blue-500/5 rounded-lg border border-blue-500/10 flex items-center justify-between px-2 text-[10px] text-blue-400 font-bold mt-4">
                    <span>Amount (Tax Incl.)</span>
                    <span className="font-mono text-white">KES 45,000.00</span>
                  </div>
                </div>

                {/* Secure Certified Node Block Container */}
                <div className="col-span-1 border border-emerald-500/20 bg-emerald-500/5 p-3 rounded-xl flex flex-col items-center justify-between h-full space-y-2 text-center relative overflow-hidden">
                  <div className="text-[8px] font-black uppercase tracking-widest text-emerald-400">eTIMS Core</div>
                  
                  {/* Digital Generated Code Frame Block layout */}
                  <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-lg p-1.5 flex flex-wrap items-center justify-center gap-[2px] shadow-inner relative">
                    <div className="w-2.5 h-2.5 bg-white"></div><div className="w-2.5 h-2.5 bg-slate-700"></div><div className="w-2.5 h-2.5 bg-white"></div><div className="w-2.5 h-2.5 bg-white"></div>
                    <div className="w-2.5 h-2.5 bg-slate-600"></div><div className="w-2.5 h-2.5 bg-white"></div><div className="w-2.5 h-2.5 bg-slate-600"></div><div className="w-2.5 h-2.5 bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 bg-white"></div><div className="w-2.5 h-2.5 bg-slate-700"></div><div className="w-2.5 h-2.5 bg-white"></div><div className="w-2.5 h-2.5 bg-slate-600"></div>
                    <span className="absolute inset-0 bg-emerald-500/5 animate-pulse"></span>
                  </div>

                  <span className="text-[8px] text-emerald-400 font-bold uppercase tracking-wider">QR Certified</span>
                </div>
              </div>

              {/* Status Footer pipeline simulation showing laser-beam physics */}
              <div className="mt-3 pt-3 border-t border-slate-900 flex items-center justify-between text-slate-500 text-[9px] font-mono relative overflow-hidden">
                <span className="text-slate-400 font-medium">Automatic verification cycle secure</span>
                
                <div className="flex items-center space-x-1.5 font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full text-[10px] relative overflow-hidden">
                  <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-laser-beam"></div>
                  <span>QBO</span>
                  <span className="text-slate-600 text-[8px]">⇆</span>
                  <span>eTIMS</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: THE ASYMMETRIC BENTO GRID       */}
      {/* ========================================== */}
      <section className="premium-grid-pattern snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-3">Product Infrastructure</h2>
          <p className="text-3xl md:text-5xl font-black text-white tracking-tight bg-clip-text bg-gradient-to-b from-white to-slate-400">
            Engineered for complete workflow invisibility
          </p>
        </div>

        {/* Asymmetric Bento Grid Configuration */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[220px]">
          
          {/* Bento Card 1: Wide Principal Card */}
          <div className="lg:col-span-2 lg:row-span-2 group relative rounded-3xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 backdrop-blur-sm shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[50px] pointer-events-none transition-all group-hover:bg-blue-500/10"></div>
            <div>
              <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm mb-6">01</div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 max-w-md leading-snug">
                Direct QBO link provides accurate 1-to-1 eTIMS validation vectors.
              </h3>
              <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
                Every transaction maps instantly without creating separate external steps or record mismatches. Complete accounting integrity without manual operational interventions.
              </p>
            </div>
            <p className="text-xs font-mono text-slate-500 border-t border-slate-900/60 pt-4 flex items-center">
              <span className="text-emerald-500 mr-2">●</span> Operational status: Eliminating manual ETR dependencies.
            </p>
          </div>

          {/* Bento Card 2: Square Secondary Alert Box */}
          <div className="lg:col-span-1 group relative rounded-3xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 backdrop-blur-sm shadow-xl">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-[30px] pointer-events-none"></div>
            <div>
              <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs mb-4">02</div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                Immutable Data Mapping Matrix
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Locks down structural integrity, permanently eradicating transcription typos or human reporting errors.
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded-md self-start">
              Zero Entry Vulnerabilities
            </span>
          </div>

          {/* Bento Card 3: Square Metric Display Box */}
          <div className="lg:col-span-1 group relative rounded-3xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 backdrop-blur-sm shadow-xl">
            <div>
              <div className="h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs mb-4">03</div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                Background Ledger Engine
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Silently claims wasted administrative hours, allowing accounting nodes to re-allocate focus to strategic objectives.
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400 tracking-tight flex items-center">
              <span className="h-1 w-1 rounded-full bg-blue-500 mr-1.5 animate-ping"></span> Real-time execution metric
            </span>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: PREMIUM DARK CONFIG SYSTEM      */}
      {/* ========================================== */}
      <section className="snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12">
        <div className="max-w-5xl mx-auto bg-slate-900/40 border border-slate-900 rounded-3xl p-8 md:p-16 shadow-2xl w-full relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Onboarding Architecture
            </h2>
            <p className="text-sm md:text-base text-slate-400">Zero engineering skills demanded. Configured in real-time by your core accounting team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col justify-between items-center text-center p-6 bg-slate-950/50 rounded-2xl border border-slate-900 min-h-[250px] transform hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-bold text-white shadow-md">1</div>
              <div>
                <h3 className="font-bold text-base text-white mb-2">Corporate Settings</h3>
                <p className="text-slate-400 text-xs leading-relaxed">Establish base operational definitions and parameter alignments.</p>
              </div>
              <span className="inline-block text-[9px] font-mono tracking-widest uppercase bg-blue-500/10 text-blue-400 px-3 py-1 rounded border border-blue-500/20 mt-4">
                Est. Time: 2 Mins
              </span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col justify-between items-center text-center p-6 bg-slate-950/50 rounded-2xl border border-slate-900 min-h-[250px] transform hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-bold text-white shadow-md">2</div>
              <div>
                <h3 className="font-bold text-base text-white mb-2">OAuth Linkage</h3>
                <p className="text-slate-400 text-xs leading-relaxed">Securely authorize the eConnector background relay matrix via QuickBooks protocols.</p>
              </div>
              <span className="inline-block text-[9px] font-mono tracking-widest uppercase bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded border border-emerald-500/20 mt-4">
                Secure Handshake
              </span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col justify-between items-center text-center p-6 bg-slate-950/50 rounded-2xl border border-slate-900 min-h-[250px] transform hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-bold text-white shadow-md">3</div>
              <div>
                <h3 className="font-bold text-base text-white mb-2">Tax Mapping Index</h3>
                <p className="text-slate-400 text-xs leading-relaxed">Map functional business categories directly to eTIMS structural pillars.</p>
              </div>
              <span className="inline-block text-[9px] font-mono tracking-widest uppercase bg-purple-500/10 text-purple-400 px-3 py-1 rounded border border-purple-500/20 mt-4">
                Auto Alignment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: ECOSYSTEM MATRIX & PARTNERS     */}
      {/* ========================================== */}
      <section className="premium-grid-pattern snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900/40 border border-slate-900 p-8 rounded-3xl backdrop-blur-sm">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 block mb-2">Operational Freedom</span>
            <h3 className="text-xl font-bold text-white mb-3">Tailored for Modern Financial Ops</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Your software configuration metrics stay exactly the same. Generate statements, adjustments, and documentation within your legacy workflows while our pipeline executes KRA compliance downstream.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-900 p-8 rounded-3xl backdrop-blur-sm">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 block mb-2">Network Protocol Compliance</span>
            <h3 className="text-xl font-bold text-white mb-3">Approved Vendor Framework</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Automated operations route exclusively over validated, secure structures in compliance with KRA system directives via our underlying integration array, <strong className="text-slate-200">Tracksol Connect</strong>.
            </p>
          </div>
        </div>

        {/* ECOSYSTEM TARGETING COMPONENT */}
        <div className="bg-slate-900/20 border border-slate-900 rounded-3xl p-8 text-center backdrop-blur-sm">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-8">Supported Accounting Ecosystem Arrays</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center space-x-2.5 border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 py-2 px-4 rounded-xl shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-extrabold text-sm tracking-tight text-white">QuickBooks Online</span>
              <span className="text-[9px] font-mono bg-emerald-500 text-slate-950 font-bold px-1.5 py-0.5 rounded">Active</span>
            </div>

            <div className="opacity-20 grayscale font-bold text-slate-400 text-sm tracking-tight select-none">Xero</div>
            <div className="opacity-20 grayscale font-bold text-slate-400 text-sm tracking-tight select-none">Zoho Books</div>
            <div className="opacity-20 grayscale font-bold text-slate-400 text-sm tracking-tight select-none">Sage</div>
            <div className="opacity-20 grayscale font-bold text-slate-400 text-sm tracking-tight select-none">Microsoft Dynamics</div>
          </div>

          <p className="text-xs text-slate-500 mt-8 font-medium">
            Operating outside these core ecosystems? <a href="#inquiry" className="text-blue-400 hover:underline font-semibold">Request deployment mapping ➔</a>
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: HIGH-CONTRAST PRICING GRID      */}
      {/* ========================================== */}
      <section className="premium-grid-pattern snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12 bg-slate-900/20 rounded-[3rem] border-t border-slate-900">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Predictable Operational Tiers</h2>
            <p className="text-slate-400 text-sm md:text-base">Absolute transactional alignment. Zero processing surcharges or surprise operational fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Tier 1 */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-900 shadow-xl flex flex-col justify-between transform hover:scale-[1.01] transition-transform">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Starter</h3>
                <p className="text-xs text-slate-500 mb-6">Optimized for single operators.</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-white">$15</span>
                  <span className="text-slate-500 text-sm font-mono"> / mo</span>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">Approx. KES 2,000 / mo</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-400 border-t border-slate-900 pt-6">
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> 1 Business profile configuration</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Active loop synchronization</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Automated background reporting</li>
                </ul>
              </div>
              <a href="#/connector-dashboard/signup" className="w-full text-center bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-semibold py-3 px-4 rounded-xl mt-8 transition-colors block">
                Deploy Node
              </a>
            </div>

            {/* Tier 2: The Premium Featured Block */}
            <div className="bg-slate-900/60 p-8 rounded-3xl border-2 border-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.15)] flex flex-col justify-between relative transform lg:-translate-y-3 transition-all">
              <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-blue-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                Standard Operational Base
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Business</h3>
                <p className="text-xs text-slate-400 mb-6">Designed for expanding metrics.</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-white">$25</span>
                  <span className="text-slate-500 text-sm font-mono"> / mo</span>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">Approx. KES 3,300 / mo</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 border-t border-slate-800 pt-6">
                  <li className="flex items-center font-semibold text-white"><span className="text-emerald-500 mr-2">✓</span> Up to 3 Linked profiles</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Priority processing queues</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Automated background reporting</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Multi-user dashboard tracking</li>
                </ul>
              </div>
              <a href="#/connector-dashboard/signup" className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all shadow-[0_4px_20px_rgba(37,99,235,0.3)] block">
                Select Business Tier
              </a>
            </div>

            {/* Tier 3 */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-900 shadow-xl flex flex-col justify-between transform hover:scale-[1.01] transition-transform">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Group</h3>
                <p className="text-xs text-slate-500 mb-6">Engineered for accounting firms.</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-white">$20</span>
                  <span className="text-slate-500 text-sm font-mono"> / active link / mo</span>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">Approx. KES 2,600 / active link / mo</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-400 border-t border-slate-900 pt-6">
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> 4+ Linked corporate profiles</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Consolidated practice dashboards</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Automated background reporting</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Dedicated engineering contact line</li>
                </ul>
              </div>
              <a href="#/connector-dashboard/signup" className="w-full text-center bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-semibold py-3 px-4 rounded-xl mt-8 transition-colors block">
                Contact Operations
              </a>
            </div>
          </div>

          {/* Payment metadata parameters */}
          <div className="mt-12 text-center px-4 opacity-70">
            <p className="text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
              * Base subscriptions exclude a standard one-time $70 gateway structural configuration fee applied during live ledger environment validation.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3 text-xs">
              <span className="font-mono uppercase tracking-widest text-slate-500">Primary Payment Routing Network:</span>
              <span className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-black text-xs border border-emerald-500/20 shadow-sm">
                M-PESA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 6: INQUIRY CORE & FOOTER ARRAYS    */}
      {/* ========================================== */}
      <section id="inquiry" className="snap-start scroll-mt-20 min-h-screen flex flex-col justify-between bg-slate-950 pt-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 w-full flex-1">
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">Direct Support Routing</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
              Our engineering support line helps verify structural parameters and operational setup protocols. Connect instantly today.
            </p>
            <div className="space-y-3 font-mono text-xs">
              <p className="text-slate-300 flex items-center">
                <span className="text-blue-500 mr-2 text-sm">✉</span> info@ezeemoney.co.ke
              </p>
              <p className="text-slate-300 flex items-center">
                <span className="text-emerald-500 mr-2 text-sm">💬</span> SLA Response Interval: &lt; 15 Mins
              </p>
            </div>
          </div>
          
          <div className="bg-slate-900/30 p-6 md:p-8 rounded-3xl border border-slate-900 backdrop-blur-sm">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Corporate Email</label>
                <input type="email" placeholder="name@company.co.ke" className="w-full bg-slate-950 border border-slate-900 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Technical / Operational Query</label>
                <textarea rows={3} placeholder="How does the indexing protocol treat custom tax exempt items?" className="w-full bg-slate-950 border border-slate-900 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm py-3.5 px-4 rounded-xl transition-all shadow-md">
                  Dispatch Query
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Closing Bumper Core Conversion Array */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6 text-center mt-16 relative overflow-hidden">
          <div className="absolute inset-0 premium-grid-pattern opacity-20"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight">Automate your eTIMS workflow vectors today</h2>
            <p className="text-blue-100 text-sm md:text-base mb-8 max-w-xl mx-auto opacity-90">
              Join accounting personnel scaling operational efficiency via silent, background QuickBooks data links.
            </p>
            <a href="#/connector-dashboard/signup" className="bg-white text-slate-950 font-bold text-base py-4 px-10 rounded-xl shadow-xl hover:bg-slate-50 transition-all inline-block">
              Deploy Your Integration Node
            </a>
          </div>
        </div>

        {/* Global Structural Footer */}
        <footer className="bg-slate-950 text-slate-600 py-12 px-6 text-xs border-t border-slate-900 w-full">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3 text-center md:text-left">
              <div className="h-6 w-6 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-white font-black text-xs">eC</div>
              <p>© 2026 Ezeemoney Ltd. Secure pipeline metrics active.</p>
            </div>
            
            <div className="text-center md:text-right space-y-1 text-slate-500">
              <p>The eConnector application array is a registered utility of <span className="text-slate-400 font-medium">Tracksol</span>.</p>
              <p className="text-slate-600">Tracksol operational frameworks map seamlessly through approved regulatory pathways.</p>
            </div>
          </div>
        </footer>
      </section>

    </div>
  );
}