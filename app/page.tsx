"use client";

import React, { useState, useEffect } from 'react';

export default function LandingPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [stage, setStage] = useState("entering"); // entering -> ready -> impact -> stamped -> exiting

  const batchInvoices = [
    { id: "INV-01", date: "31 May 2026", amount: "KES 45,000.00", client: "Acme Corp Ltd" },
    { id: "INV-02", date: "31 May 2026", amount: "KES 128,500.00", client: "Safari Ventures" },
    { id: "INV-03", date: "31 May 2026", amount: "KES 64,200.00", client: "Kilimanjaro Tech" },
    { id: "INV-04", date: "31 May 2026", amount: "KES 19,000.00", client: "Delta Hauliers" },
  ];

  useEffect(() => {
    let timers: any[] = [];
    
    const executeEngineSequence = () => {
      // 1. Document slides into center frame from the stack
      setStage("entering");
      
      // 2. Document settles; engine hovers in position
      timers.push(setTimeout(() => setStage("ready"), 500));
      
      // 3. Engine drives downward rapidly; touches the document precisely
      timers.push(setTimeout(() => setStage("impact"), 1400));
      
      // 4. Verification completed; engine ascends with a spring effect
      timers.push(setTimeout(() => setStage("stamped"), 1650));
      
      // 5. Finished document ejects, pulling the next one up
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

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-y-auto lg:snap-y lg:snap-mandatory scroll-smooth bg-white text-gray-900 font-sans antialiased bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),transparent)]">
      
      <style>{`
        .perspective-canvas { perspective: 1800px; }
        .preserve-3d-layers { transform-style: preserve-3d; }
        
        .platform-tilt {
          transform: rotateX(55deg) rotateZ(-35deg) translateY(-10px);
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        @keyframes stamper-hover-drift {
          0%, 100% { transform: translateZ(90px) translateY(-5px) rotateX(4deg); }
          50% { transform: translateZ(98px) translateY(-8px) rotateX(6deg); }
        }
        .engine-idle-hover {
          animation: stamper-hover-drift 2s ease-in-out infinite;
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
      <section className="canvas-grid-dots snap-start scroll-mt-20 min-h-screen flex items-center justify-center px-6 py-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative overflow-hidden">
        
        {/* Left Column: Core Value Propositions */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-6 border border-emerald-200 tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Real-Time eTIMS Sync Loop Active
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-gray-950 leading-[1.1] bg-clip-text bg-gradient-to-b from-gray-950 to-gray-800">
            Get eTIMS compliant without changing how you invoice.
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            An automated background bridge that syncs your <strong className="text-gray-950 font-semibold">QuickBooks Online</strong> transactions directly to eTIMS. No manual entries, no workflow changes, and zero IT headaches.
          </p>

          <div className="flex flex-col items-center lg:items-start w-full sm:w-auto">
            <a href="#/connector-dashboard/signup" className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-500 text-white font-bold text-base py-4 px-10 rounded-xl shadow-[0_10px_25px_-5px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] transition-all duration-300">
              Connect QuickBooks Now
            </a>
            <span className="text-xs text-gray-500 mt-3 font-medium tracking-wide">Setup takes less than 5 minutes.</span>
          </div>
        </div>

        {/* Right Column: Premium High-End Engine Automation Frame */}
        <div className="lg:col-span-6 w-full flex items-center justify-center min-h-[34rem] relative perspective-canvas select-none">
          
          <div className="relative w-80 md:w-[28rem] h-[30rem] platform-tilt preserve-3d-layers">
            
            {/* DYNAMIC INVOICE BATCH DECK - ANIMATES FORWARD ON EJECT */}
            <div 
              className="absolute inset-0 bg-white/40 rounded-2xl border border-gray-200/40 pointer-events-none shadow-sm"
              style={{
                transition: 'all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: stage === "exiting" 
                  ? 'translateZ(-14px) scale(0.96) translateX(10px) translateY(10px)'
                  : 'translateZ(-28px) scale(0.92) translateX(20px) translateY(20px)'
              }}
            ></div>
            <div 
              className="absolute inset-0 bg-white/70 rounded-2xl border border-gray-200/60 pointer-events-none shadow-sm"
              style={{
                transition: 'all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: stage === "exiting"
                  ? 'translateZ(0px) scale(1) translateX(0px) translateY(0px)'
                  : 'translateZ(-14px) scale(0.96) translateX(10px) translateY(10px)'
              }}
            ></div>

            {/* LIVE DOCUMENT ACTIVE INGESTION TRACK CONTAINER */}
            <div 
              style={{
                transition: 'all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: 
                  stage === "entering" ? 'translateZ(-14px) translateY(-30px) opacity(0) scale(0.96)' :
                  stage === "exiting"  ? 'translateZ(60px) translateY(120px) opacity(0) scale(1.05)' :
                  'translateZ(0px) translateY(0px) opacity(1) scale(1)'
              }}
              className="absolute inset-0 bg-white rounded-2xl shadow-[-20px_20px_45px_rgba(0,0,0,0.06)] border border-gray-200 p-8 flex flex-col justify-between preserve-3d-layers"
            >
              <div>
                <div className="flex justify-between items-start border-b border-gray-100 pb-5 mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-inner">qb</div>
                    <div>
                      <span className="text-xs font-black text-gray-950 uppercase tracking-tight block">QuickBooks</span>
                      <span className="text-[9px] font-medium text-gray-400 block mt-0.5">Online Document</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-mono font-bold text-gray-900 block">
                      {batchInvoices[currentIdx].id}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium block mt-0.5">
                      {batchInvoices[currentIdx].date}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50/80 rounded-xl p-4 border border-gray-100 mb-5">
                  <div className="text-[9px] uppercase font-bold tracking-wider text-gray-400">Bill To:</div>
                  <div className="text-sm font-bold text-gray-800 mt-1">{batchInvoices[currentIdx].client}</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-gray-50/50 px-3 py-2.5 rounded-lg border border-gray-100/50">
                    <div className="w-32 h-2.5 bg-gray-200 rounded-full"></div>
                    <div className="w-12 h-2.5 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50/50 px-3 py-2.5 rounded-lg border border-gray-100/50">
                    <div className="w-40 h-2.5 bg-gray-200 rounded-full"></div>
                    <div className="w-8 h-2.5 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center border-t border-gray-100 pt-5 mb-3">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Balance Due</span>
                  <span className="text-base font-mono font-black text-blue-600 bg-blue-50/70 px-3 py-1.5 rounded-md border border-blue-100">
                    {batchInvoices[currentIdx].amount}
                  </span>
                </div>

                <div className="flex justify-between items-end mt-5 pt-4 border-t border-dashed border-gray-200 relative">
                  <div className="flex items-center space-x-2 text-gray-400 mb-2">
                    <span className={`h-2 w-2 rounded-full transition-colors duration-300 ${stage === "stamped" || stage === "exiting" ? 'bg-emerald-500' : 'bg-amber-400 animate-pulse'}`}></span>
                    <span className="text-[9px] font-mono tracking-tight text-gray-500 uppercase">
                      {stage === "entering" || stage === "ready" ? "Awaiting Data Bridge" : "Pipeline Synced"}
                    </span>
                  </div>
                  
                  {/* Target Imprint Landing Box */}
                  <div className={`relative w-24 h-24 rounded-xl transition-all duration-300 flex items-center justify-center overflow-hidden ${
                    stage === "impact" ? "border-2 border-emerald-500 bg-emerald-50/20 scale-95" :
                    stage === "stamped" || stage === "exiting" ? "border-2 border-emerald-500/30 bg-white shadow-sm" : "border-2 border-dashed border-gray-300 bg-gray-50/50"
                  }`}>
                    
                    {(stage === "entering" || stage === "ready") && (
                      <div className="text-center p-1 flex flex-col items-center justify-center">
                        <div className="w-2.5 h-2.5 border-t-2 border-l-2 border-gray-300 absolute top-2 left-2"></div>
                        <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-gray-300 absolute top-2 right-2"></div>
                        <div className="w-2.5 h-2.5 border-b-2 border-l-2 border-gray-300 absolute bottom-2 left-2"></div>
                        <div className="w-2.5 h-2.5 border-b-2 border-r-2 border-gray-300 absolute bottom-2 right-2"></div>
                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tight">QR TARGET</span>
                      </div>
                    )}

                    {(stage === "impact" || stage === "stamped" || stage === "exiting") && (
                      <div className={`w-16 h-16 p-1 bg-white rounded-md grid grid-cols-4 gap-[2px] transition-all duration-200 ${stage === "impact" ? "scale-110 opacity-90 blur-[0.5px]" : "scale-100 opacity-100"}`}>
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

            {/* REAL-TIME LEDGER DATA TRACK LABELS SIDEBAR */}
            <div className="absolute -left-16 top-10 flex flex-col space-y-3 pointer-events-none translate-z-[40px]">
              {batchInvoices.map((inv, idx) => {
                const isActive = idx === currentIdx;
                const isFiscalised = (isActive && (stage === "stamped" || stage === "exiting" || stage === "impact")) || idx < currentIdx || (currentIdx === 0 && idx === batchInvoices.length - 1 && stage === "entering");
                
                return (
                  <div 
                    key={inv.id}
                    className={`px-3 py-2 rounded-xl border text-[11px] font-mono font-bold tracking-tight shadow-md flex items-center space-x-2.5 transition-all duration-500 bg-white ${
                      isActive 
                        ? 'border-gray-300 scale-105 opacity-100 translate-x-3 ring-1 ring-black/5 shadow-lg' 
                        : 'border-gray-100 opacity-40 scale-95 translate-x-0'
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${isFiscalised ? 'bg-emerald-500' : 'bg-amber-400'}`}></span>
                    <span className="text-gray-800">#{inv.id}</span>
                    <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-md font-sans ${
                      isFiscalised 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                        : 'bg-amber-50 text-amber-700 border border-amber-100'
                    }`}>
                      {isFiscalised ? 'Fiscalised' : 'Pending'}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* MINIMALIST BLACK & NEON RED eTIMS MODULE */}
            <div 
              style={{
                bottom: '24px',
                right: '24px',
                transition: 
                  stage === "impact" ? 'transform 100ms cubic-bezier(0.4, 0, 1, 1)' : 
                  stage === "stamped" ? 'transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 
                  'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 
                  stage === "entering" ? 'translateZ(140px) translateY(-20px) rotateX(-5deg)' :
                  stage === "ready"    ? 'translateZ(90px) translateY(0px) rotateX(4deg)' :
                  stage === "impact"   ? 'translateZ(2px) translateY(0px) rotateX(0deg) scale(0.98)' : // Direct contact, no z-fighting
                  /* stamped/exiting */  'translateZ(100px) translateY(-10px) rotateX(6deg)'
              }}
              className={`absolute w-24 h-24 preserve-3d-layers z-30 pointer-events-none flex items-center justify-center ${stage === "ready" ? "engine-idle-hover" : ""}`}
            >
              {/* Sleek Obsidian Core */}
              <div className={`w-full h-full bg-black rounded-2xl border flex items-center justify-center transition-all duration-300 ${
                stage === "impact" 
                  ? "border-red-500/80 shadow-[0_0_60px_rgba(239,68,68,0.8)]" 
                  : "border-red-900/40 shadow-[0_10px_35px_rgba(239,68,68,0.35)]"
              }`}>
                {/* Simple Neon Abstract Symbol */}
                <div className={`w-8 h-8 relative transition-opacity duration-300 ${stage === "impact" ? "opacity-100" : "opacity-80"}`}>
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

      {/* ========================================== */}
      {/* SECTION 3: STEP CONFIGURATION DECK         */}
      {/* ========================================== */}
      <section className="snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12">
        <div className="max-w-5xl mx-auto bg-gray-950 border border-gray-900 rounded-3xl p-8 md:p-16 shadow-2xl w-full relative overflow-hidden backdrop-blur-sm shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)]">
          
          <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Up and running in 3 simple steps
            </h2>
            <p className="text-sm md:text-base text-gray-400">Zero engineering skills demanded. Configured in real-time by your core accounting team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="flex flex-col justify-between items-center text-center p-6 bg-gray-900/40 rounded-2xl border border-gray-800 min-h-[250px] transform hover:translate-y-[-4px] transition-transform duration-300 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-sm font-bold text-white border border-gray-800 shadow-inner">1</div>
              <div>
                <h3 className="font-bold text-base text-white mb-2">Profile Setup</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Establish base functional definitions and profile parameters smoothly.</p>
              </div>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-950 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-900 mt-4 shadow-inner">
                [ Takes 2 Mins ]
              </span>
            </div>

            <div className="flex flex-col justify-between items-center text-center p-6 bg-gray-900/40 rounded-2xl border border-gray-800 min-h-[250px] transform hover:translate-y-[-4px] transition-transform duration-300 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-sm font-bold text-white border border-gray-800 shadow-inner">2</div>
              <div>
                <h3 className="font-bold text-base text-white mb-2">Two-Click Linkage</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Securely authorize the QuickBooks eConnector via established KRA protocol rails.</p>
              </div>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-950 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-900 mt-4 shadow-inner">
                [ Secure OAuth ]
              </span>
            </div>

            <div className="flex flex-col justify-between items-center text-center p-6 bg-gray-900/40 rounded-2xl border border-gray-800 min-h-[250px] transform hover:translate-y-[-4px] transition-transform duration-300 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-sm font-bold text-white border border-gray-800 shadow-inner">3</div>
              <div>
                <h3 className="font-bold text-base text-white mb-2">Guided Mapper</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Map your native QuickBooks functional definitions directly to structural eTIMS pillars.</p>
              </div>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-950 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-900 mt-4 shadow-inner">
                [ Auto-Match ]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: ECOSYSTEM MATRIX ARRAY          */}
      {/* ========================================== */}
      <section className="canvas-grid-dots snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-gray-100 hover:border-gray-200 p-8 rounded-3xl shadow-lg">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 block mb-2">Operational Integrity</span>
            <h3 className="text-xl font-black text-gray-950 mb-3">Designed for Accountants, Backed by IT</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Your software configuration stays exactly the same. Generate statements, adjustments, and documentation within your legacy workflows while our pipeline executes regulatory compliance downstream. Zero IT friction demanded.
            </p>
          </div>

          <div className="bg-white border border-gray-100 hover:border-gray-200 p-8 rounded-3xl shadow-lg">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 block mb-2">Protocol Compliance</span>
            <h3 className="text-xl font-black text-gray-950 mb-3">Running Approved Vendor Framework</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Automated operations route exclusively over secure, validated structural channels in absolute compliance with KRA regulatory directives via our corporate grade integration array, <strong className="text-gray-800 font-semibold">Tracksol Connect</strong>.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-lg">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Supported Accounting Ecosystem arrays</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center space-x-2.5 border border-emerald-100 bg-emerald-50 text-emerald-800 py-2.5 px-4.5 rounded-xl shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-extrabold text-sm tracking-tight text-gray-950">QuickBooks Online</span>
              <span className="text-[9px] bg-emerald-600 text-white font-black px-1.5 py-0.5 rounded shadow-inner">Active</span>
            </div>

            <div className="opacity-30 grayscale font-bold text-gray-500 text-sm tracking-tight select-none">Xero</div>
            <div className="opacity-30 grayscale font-bold text-gray-500 text-sm tracking-tight select-none">Zoho Books</div>
            <div className="opacity-30 grayscale font-bold text-gray-500 text-sm tracking-tight select-none">Sage</div>
            <div className="opacity-30 grayscale font-bold text-gray-500 text-sm tracking-tight select-none">Microsoft Dynamics</div>
          </div>

          <p className="text-xs text-gray-500 mt-8 font-medium">
            Operating outside these core ecosystems? <a href="#inquiry" className="text-blue-600 hover:underline font-semibold">Request deployment mapping ➔</a>
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: PRICING LEDGER PROFILE TIERS   */}
      {/* ========================================== */}
      <section className="canvas-grid-dots snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12 bg-gray-50 rounded-[3rem] border-t border-gray-100 mt-12">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-4 tracking-tight">Transparent Pricing Matrix</h2>
            <p className="text-gray-600 text-sm md:text-base">Absolute transactional alignment. Zero processing surcharges or surprise operational fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl flex flex-col justify-between transform hover:scale-[1.01] transition-transform">
              <div>
                <h3 className="text-lg font-bold text-gray-950 mb-1">Starter</h3>
                <p className="text-xs text-gray-500 mb-6">Optimized for individual operators.</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-950">$15</span>
                  <span className="text-gray-500 text-sm font-medium"> / mo</span>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">Approx. KES 2,000 / mo</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 border-t border-gray-100 pt-6">
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> 1 Business profile configuration</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Active loop synchronization</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Automated background reporting</li>
                </ul>
              </div>
              <a href="#/connector-dashboard/signup" className="w-full text-center bg-gray-950 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-xl mt-8 transition-colors block shadow-md">
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-blue-600 shadow-[0_15px_40px_-5px_rgba(37,99,235,0.25)] flex flex-col justify-between relative transform lg:-translate-y-3 transition-all">
              <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
                Popular Base
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950 mb-1">Business</h3>
                <p className="text-xs text-gray-500 mb-6">Designed for expanding metrics.</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-950">$25</span>
                  <span className="text-gray-500 text-sm font-medium"> / mo</span>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">Approx. KES 3,300 / mo</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 border-t border-gray-100 pt-6">
                  <li className="flex items-center font-bold text-gray-950"><span className="text-emerald-500 mr-2">✓</span> Up to 3 Linked profiles</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Priority processing queues</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Automated background reporting</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Multi-user dashboard tracking</li>
                </ul>
              </div>
              <a href="#/connector-dashboard/signup" className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-black py-3 px-4 rounded-xl mt-8 transition-all shadow-[0_5px_15px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)] block">
                Select Business Tier
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl flex flex-col justify-between transform hover:scale-[1.01] transition-transform">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Group</h3>
                <p className="text-xs text-gray-500 mb-6">Engineered for accounting firms.</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-950">$20</span>
                  <span className="text-gray-500 text-sm font-medium"> / connector / mo</span>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">Approx. KES 2,600 / connector / mo</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 border-t border-gray-100 pt-6">
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> 4+ Linked corporate profiles</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Consolidated practice dashboards</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Automated background reporting</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Dedicated engineering contact line</li>
                </ul>
              </div>
              <a href="#/connector-dashboard/signup" className="w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-xl mt-8 transition-colors block shadow-md">
                Contact Firm Ops
              </a>
            </div>
          </div>

          <div className="mt-12 text-center px-4 opacity-80">
            <p className="text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
              * Base rates exclude a standard one-time $70 eTIMS structural configuration fee applied during live environment activation.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3 text-xs">
              <span className="font-bold uppercase tracking-widest text-gray-400">Accepted Payment Method:</span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-black text-xs border border-emerald-200 shadow-inner">
                M-PESA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 6: INQUIRY ARRAY & FOOTER CORE     */}
      {/* ========================================== */}
      <section id="inquiry" className="snap-start scroll-mt-20 min-h-screen flex flex-col justify-between bg-white pt-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 w-full flex-1">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">Need our help in figuring it out?</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Our integration support desk handles complex structural cases, deployment exceptions, and consolidated group billing queries. Get a direct consultation today.
            </p>
            <div className="space-y-3 font-medium text-xs text-gray-700">
              <p className="flex items-center">
                <span className="text-blue-600 mr-2 text-sm">✉</span> info@ezeemoney.co.ke
              </p>
              <p className="flex items-center">
                <span className="text-emerald-600 mr-2 text-sm">💬</span> SLA Response Interval: &lt; 15 Mins
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl backdrop-blur-sm">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-2">Work Email</label>
                <input type="email" placeholder="name@company.co.ke" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500 transition-colors shadow-inner" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-2">Question / operational scenario</label>
                <textarea rows={3} placeholder="How does the guided mapper treat tax-exempt items in custom segments?" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500 transition-colors resize-none shadow-inner"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all shadow-md">
                  Dispatch Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white py-16 px-6 text-center mt-20 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 canvas-grid-dots opacity-10"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight">Ready to put your eTIMS workflow on autopilot?</h2>
            <p className="text-blue-50 text-sm md:text-base mb-8 max-w-xl mx-auto opacity-90 leading-relaxed">
              Join accountants and smart business owners already running automated QuickBooks eTIMS linkages silently in the background.
            </p>
            <a href="#/connector-dashboard/signup" className="bg-white text-blue-700 font-bold text-base py-4 px-10 rounded-xl shadow-2xl hover:bg-gray-50 transition-all inline-block">
              Connect Your Integration Node
            </a>
          </div>
        </div>

        <footer className="bg-gray-950 text-gray-500 py-12 px-6 text-xs border-t border-gray-900 w-full">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3 text-center md:text-left">
              <div className="h-6 w-6 rounded bg-gray-900 border border-gray-800 flex items-center justify-center text-white font-black text-xs">eC</div>
              <p>© 2026 Ezeemoney Ltd. Operational metrics active.</p>
            </div>
            
            <div className="text-center md:text-right space-y-1 text-xs text-gray-600">
              <p>The eConnector plugin is a registered utility of <span className="text-gray-400 font-medium">Tracksol</span>.</p>
              <p>Tracksol operations route securely through regulatory approved vendor framework channels.</p>
            </div>
          </div>
        </footer>
      </section>

    </div>
  );
}