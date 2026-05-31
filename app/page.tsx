"use client";

import React, { useState, useEffect } from 'react';

export default function LandingPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [stage, setStage] = useState("entering"); 

  const batchInvoices = [
    { id: "INV-01", date: "31 May 2026", amount: "KES 45,000.00", client: "Acme Corp Ltd" },
    { id: "INV-02", date: "31 May 2026", amount: "KES 128,500.00", client: "Safari Ventures" },
    { id: "INV-03", date: "31 May 2026", amount: "KES 64,200.00", client: "Kilimanjaro Tech" },
    { id: "INV-04", date: "31 May 2026", amount: "KES 19,000.00", client: "Delta Hauliers" },
  ];

  useEffect(() => {
    let timers: any[] = [];
    
    const executeEngineSequence = () => {
      // 1. Document slides into center frame
      setStage("entering");
      
      // 2. Document settles; engine smoothly descends to a ready height
      timers.push(setTimeout(() => setStage("ready"), 600));
      
      // 3. Engine drives downward rapidly; touches the document precisely
      timers.push(setTimeout(() => setStage("impact"), 1500));
      
      // 4. Verification completed; engine ascends with a spring effect
      timers.push(setTimeout(() => setStage("stamped"), 1750));
      
      // 5. Finished document ejects
      timers.push(setTimeout(() => setStage("exiting"), 3200));
    };

    executeEngineSequence();
    
    const masterLoopInterval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % batchInvoices.length);
      executeEngineSequence();
    }, 4000);

    return () => {
      clearInterval(masterLoopInterval);
      timers.forEach(clearTimeout);
    };
  }, []);

  // Determine if the current active invoice is stamped
  const isFiscalised = stage === "stamped" || stage === "exiting";

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-y-auto lg:snap-y lg:snap-mandatory scroll-smooth bg-white text-gray-900 font-sans antialiased bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),transparent)] overflow-x-hidden">
      
      <style>{`
        .perspective-canvas { perspective: 1400px; }
        .preserve-3d-layers { transform-style: preserve-3d; }
        
        .platform-tilt {
          transform: rotateX(55deg) rotateZ(-35deg) translateY(-10px);
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .canvas-grid-dots {
          background-image: radial-gradient(rgba(0, 0, 0, 0.03) 1.5px, transparent 1.5px);
          background-size: 32px 32px;
        }
      `}</style>

      {/* FLOATING NAVIGATION ARRAY */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-[0_4px_15px_rgba(37,99,235,0.2)]">eC</span>
            <span className="font-bold text-xl tracking-tight text-gray-950">eConnector</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#/connector-dashboard/signin" className="text-sm font-semibold text-gray-600 hover:text-gray-950 transition-colors">Sign In</a>
            <a href="#/connector-dashboard/signup" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg">
              Sign Up
            </a>
          </div>
        </div>
      </header>

      {/* ========================================== */}
      {/* SECTION 1: HERO CONTAINER WITH ACTIVE MOCK */}
      {/* ========================================== */}
      <section className="canvas-grid-dots snap-start scroll-mt-20 min-h-screen flex items-center justify-center px-4 md:px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 relative overflow-hidden">
        
        {/* Left Column: Core Value Propositions */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10 pt-10 lg:pt-0">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-6 border border-emerald-200 tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Real-Time eTIMS Sync Loop Active
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight mb-6 text-gray-950 leading-[1.05] bg-clip-text bg-gradient-to-b from-gray-950 to-gray-800 max-w-2xl">
            Get eTIMS compliant without changing how you invoice.
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
            An automated background bridge that syncs your <strong className="text-gray-950 font-semibold">QuickBooks Online</strong> transactions directly to eTIMS. No manual entries, no workflow changes, and zero IT headaches.
          </p>

          <div className="flex flex-col items-center lg:items-start w-full sm:w-auto">
            <button className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-500 text-white font-bold text-base py-4 px-10 rounded-xl shadow-[0_10px_25px_-5px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] transition-all duration-300">
              Connect QuickBooks Now
            </button>
            <span className="text-xs text-gray-500 mt-3 font-medium tracking-wide">Setup takes less than 5 minutes.</span>
          </div>
        </div>

        {/* Right Column: Premium High-End Engine Automation Frame */}
        <div className="lg:col-span-7 w-full flex items-center justify-center min-h-[28rem] md:min-h-[34rem] relative perspective-canvas select-none">
          
          <div className="relative w-72 sm:w-80 md:w-[28rem] h-[28rem] md:h-[30rem] platform-tilt preserve-3d-layers scale-85 sm:scale-90 md:scale-100 lg:scale-95 xl:scale-100 transition-transform origin-center">
            
            {/* STATIC UNDERLYING INVOICE DECK */}
            <div className="absolute inset-0 bg-white/40 rounded-2xl border border-gray-200/40 pointer-events-none shadow-sm" style={{ transform: 'translateZ(-24px) scale(0.92) translateX(18px) translateY(18px)' }}></div>
            <div className="absolute inset-0 bg-white/70 rounded-2xl border border-gray-200/60 pointer-events-none shadow-sm" style={{ transform: 'translateZ(-12px) scale(0.96) translateX(9px) translateY(9px)' }}></div>

            {/* LIVE DOCUMENT ACTIVE INGESTION TRACK */}
            <div 
              style={{
                transition: 'all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: 
                  stage === "entering" ? 'translateZ(-12px) translateX(9px) translateY(9px) opacity(0) scale(0.96)' :
                  stage === "exiting"  ? 'translateZ(60px) translateY(120px) opacity(0) scale(1.05)' :
                  'translateZ(0px) translateX(0px) translateY(0px) opacity(1) scale(1)'
              }}
              className="absolute inset-0 bg-white rounded-2xl shadow-[-20px_20px_45px_rgba(0,0,0,0.06)] border border-gray-200 p-6 md:p-8 flex flex-col justify-between preserve-3d-layers"
            >
              <div>
                <div className="flex justify-between items-start border-b border-gray-100 pb-4 md:pb-5 mb-4 md:mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-inner">qb</div>
                    <div>
                      <span className="text-xs font-black text-gray-950 uppercase tracking-tight block">QuickBooks</span>
                      <span className="text-[9px] font-medium text-gray-400 block mt-0.5">Online Document</span>
                    </div>
                  </div>
                  
                  {/* UNIFIED STATUS BADGE (Fixed in top right) */}
                  <div className="flex flex-col items-end space-y-1.5">
                    <div className={`px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest shadow-sm transition-colors duration-300 flex items-center space-x-1.5 ${
                      isFiscalised ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${isFiscalised ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
                      <span>{isFiscalised ? 'Fiscalised' : 'Pending'}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-4 md:mb-5">
                   <div className="bg-gray-50/80 rounded-xl p-3 md:p-4 border border-gray-100 flex-1 mr-4">
                    <div className="text-[9px] uppercase font-bold tracking-wider text-gray-400">Bill To:</div>
                    <div className="text-sm md:text-base font-bold text-gray-800 mt-1 truncate">{batchInvoices[currentIdx].client}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm md:text-base font-mono font-bold text-gray-900 block">
                      {batchInvoices[currentIdx].id}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium block mt-0.5">
                      {batchInvoices[currentIdx].date}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-gray-50/50 px-3 py-2 md:py-2.5 rounded-lg border border-gray-100/50">
                    <div className="w-24 md:w-32 h-2 md:h-2.5 bg-gray-200 rounded-full"></div>
                    <div className="w-10 md:w-12 h-2 md:h-2.5 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50/50 px-3 py-2 md:py-2.5 rounded-lg border border-gray-100/50">
                    <div className="w-32 md:w-40 h-2 md:h-2.5 bg-gray-200 rounded-full"></div>
                    <div className="w-8 md:w-10 h-2 md:h-2.5 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4 md:pt-5 mb-3">
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">Total Balance Due</span>
                  <span className="text-base md:text-lg font-mono font-black text-blue-600 bg-blue-50/70 px-3 py-1.5 rounded-md border border-blue-100">
                    {batchInvoices[currentIdx].amount}
                  </span>
                </div>

                <div className="flex justify-between items-end mt-4 md:mt-5 pt-4 border-t border-dashed border-gray-200 relative">
                  <div className="text-[9px] md:text-[10px] font-mono tracking-tight text-gray-400 uppercase">
                    Awaiting Sync Sequence
                  </div>
                  
                  {/* Target Imprint Landing Box */}
                  <div className={`relative w-20 md:w-24 h-20 md:h-24 rounded-xl transition-all duration-300 flex items-center justify-center overflow-hidden ${
                    stage === "impact" ? "border-2 border-emerald-500 bg-emerald-50/20 scale-95" :
                    isFiscalised ? "border-2 border-emerald-500/30 bg-white shadow-sm" : "border-2 border-dashed border-gray-300 bg-gray-50/50"
                  }`}>
                    
                    {!isFiscalised && stage !== "impact" && (
                      <div className="text-center p-1 flex flex-col items-center justify-center">
                        <div className="w-2.5 h-2.5 border-t-2 border-l-2 border-gray-300 absolute top-2 left-2"></div>
                        <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-gray-300 absolute top-2 right-2"></div>
                        <div className="w-2.5 h-2.5 border-b-2 border-l-2 border-gray-300 absolute bottom-2 left-2"></div>
                        <div className="w-2.5 h-2.5 border-b-2 border-r-2 border-gray-300 absolute bottom-2 right-2"></div>
                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tight">QR TARGET</span>
                      </div>
                    )}

                    {(stage === "impact" || isFiscalised) && (
                      <div className={`w-14 md:w-16 h-14 md:h-16 p-1 bg-white rounded-md grid grid-cols-4 gap-[2px] transition-all duration-200 ${stage === "impact" ? "scale-110 opacity-90 blur-[0.5px]" : "scale-100 opacity-100"}`}>
                        <div className="bg-neutral-900 rounded-[1px]"></div><div className="bg-neutral-900 rounded-[1px]"></div><div className="bg-gray-200 rounded-[1px]"></div><div className="bg-neutral-900 rounded-[1px]"></div>
                        <div className="bg-neutral-900 rounded-[1px]"></div><div className="bg-gray-200 rounded-[1px]"></div><div className="bg-neutral-900 rounded-[1px]"></div><div className="bg-gray-200 rounded-[1px]"></div>
                        <div className="bg-gray-200 rounded-[1px]"></div><div className="bg-neutral-900 rounded-[1px]"></div><div className="bg-neutral-900 rounded-[1px]"></div><div className="bg-neutral-900 rounded-[1px]"></div>
                        <div className="bg-neutral-900 rounded-[1px]"></div><div className="bg-gray-200 rounded-[1px]"></div><div className="bg-gray-200 rounded-[1px]"></div><div className="bg-neutral-900 rounded-[1px]"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* MINIMALIST BLACK & NEON RED eTIMS MODULE */}
            <div 
              style={{
                bottom: '24px',
                right: '24px',
                /* Pure Bezier Transitions - No Keyframe Glitches */
                transition: 
                  stage === "impact" ? 'transform 120ms cubic-bezier(0.4, 0, 1, 1)' : 
                  stage === "stamped" ? 'transform 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 
                  'transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                transform: 
                  stage === "entering" ? 'translateZ(180px) translateY(-30px) rotateX(-5deg)' :
                  stage === "ready"    ? 'translateZ(80px) translateY(-5px) rotateX(2deg)' :
                  stage === "impact"   ? 'translateZ(2px) translateY(0px) rotateX(0deg) scale(0.98)' :
                  /* stamped/exiting */  'translateZ(100px) translateY(-15px) rotateX(4deg)'
              }}
              className="absolute w-20 md:w-24 h-20 md:h-24 preserve-3d-layers z-30 pointer-events-none flex items-center justify-center"
            >
              {/* Sleek Obsidian Core */}
              <div className={`w-full h-full bg-black rounded-2xl border flex items-center justify-center transition-all duration-300 ${
                stage === "impact" 
                  ? "border-red-500/80 shadow-[0_0_50px_rgba(239,68,68,0.8)]" 
                  : "border-red-900/40 shadow-[0_15px_35px_rgba(239,68,68,0.35)]"
              }`}>
                {/* Simple Neon Abstract Symbol */}
                <div className={`w-6 md:w-8 h-6 md:h-8 relative transition-opacity duration-300 ${stage === "impact" ? "opacity-100" : "opacity-80"}`}>
                  <div className="absolute inset-0 border-[2.5px] border-red-500 rounded-[4px] rotate-45 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                  <div className="absolute inset-0 border-[2.5px] border-red-500 rounded-[4px] -rotate-45 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                  <div className="absolute inset-0 bg-red-500 blur-md opacity-40"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: BENTO FEATURE ARCHITECTURE      */}
      {/* ========================================== */}
      <section className="canvas-grid-dots snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Product Infrastructure</h2>
          <p className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight">
            Engineered for complete invoice invisibility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[220px]">
          
          <div className="lg:col-span-2 lg:row-span-2 group relative rounded-3xl bg-white border border-gray-100 hover:border-gray-200 hover:bg-gray-50 p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[60px] pointer-events-none transition-all group-hover:bg-blue-100"></div>
            <div>
              <div className="h-9 w-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm mb-6 shadow-sm">01</div>
              <h3 className="text-xl md:text-2xl font-black text-gray-950 mb-3 max-w-md leading-snug">
                Direct QBO link stops double-tax invoicing challenges.
              </h3>
              <p className="text-gray-600 text-sm md:text-base max-w-xl leading-relaxed">
                Automatically issues a matching eTIMS invoice directly from your QuickBooks data loop. No manual operational steps are required from your accounting team to remain compliant.
              </p>
            </div>
            <p className="text-xs font-mono text-gray-400 border-t border-gray-100 pt-4 flex items-center">
              <span className="text-emerald-500 mr-2 animate-pulse">●</span> Reclaims wasted administrative hours.
            </p>
          </div>

          <div className="lg:col-span-1 group relative rounded-3xl bg-white border border-gray-100 hover:border-gray-200 hover:bg-gray-50 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-lg">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-50 rounded-full blur-[30px] pointer-events-none"></div>
            <div>
              <div className="h-8 w-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mb-4 shadow-sm">02</div>
              <h3 className="text-base font-extrabold text-gray-950 mb-1.5 leading-snug">
                Zero data duplication vulnerabilities.
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Eradicates transcription typos and mismatched QuickBooks vs. eTIMS data errors permanently.
              </p>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded shadow-inner self-start">
              Absolute Ledger Integrity
            </span>
          </div>

          <div className="lg:col-span-1 group relative rounded-3xl bg-white border border-gray-100 hover:border-gray-200 hover:bg-gray-50 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-lg">
            <div>
              <div className="h-8 w-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs mb-4 shadow-sm">03</div>
              <h3 className="text-base font-extrabold text-gray-950 mb-1.5 leading-snug">
                Designed for invisibility across roles.
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                IT gains zero infrastructure overhead, while accountants enjoy zero workflow changes.
              </p>
            </div>
            <span className="text-[10px] font-mono text-gray-400 tracking-tight flex items-center">
              <span className="h-1 w-1 rounded-full bg-blue-500 mr-1.5 animate-ping"></span> Live network pipeline execution
            </span>
          </div>

        </div>
      </section>
      
      {/* ... (Rest of sections 3, 4, 5, 6 remain unchanged from previous clean version) ... */}
      
    </div>
  );
}