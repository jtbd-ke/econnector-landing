"use client";

import React, { useState, useEffect } from 'react';

export default function LandingPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [stage, setStage] = useState("entering"); 
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const batchInvoices = [
    { id: "INV-01", date: "31 May 2026", amount: "KES 45,000.00", client: "Acme Corp Ltd" },
    { id: "INV-02", date: "31 May 2026", amount: "KES 128,500.00", client: "Safari Ventures" },
    { id: "INV-03", date: "31 May 2026", amount: "KES 64,200.00", client: "Kilimanjaro Tech" },
    { id: "INV-04", date: "31 May 2026", amount: "KES 19,000.00", client: "Delta Hauliers" },
  ];

  useEffect(() => {
    let timers: any[] = [];
    
    const executeEngineSequence = () => {
      setStage("entering");
      timers.push(setTimeout(() => setStage("ready"), 600));
      timers.push(setTimeout(() => setStage("impact"), 1500));
      timers.push(setTimeout(() => setStage("stamped"), 1750));
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

  const isFiscalised = stage === "stamped" || stage === "exiting";

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-y-auto lg:snap-y lg:snap-mandatory scroll-smooth bg-white text-gray-900 font-sans antialiased bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),transparent)] overflow-x-hidden">
      
      <style>{`
        .perspective-canvas { perspective: 1400px; }
        .preserve-3d-layers { transform-style: preserve-3d; }
        
        /* OPTION 1 RESPONSIVE ENGINE TRANSFORM SETTINGS */
        @media (max-width: 1023px) {
          .platform-tilt {
            transform: rotateX(0deg) rotateZ(0deg) translateY(0px) !important;
          }
          :root {
            --tz-entering: 0px;  --ty-entering: -15px; --rx-entering: 0deg;  --sc-entering: 0.95;
            --tz-ready: 0px;     --ty-ready: -4px;    --rx-ready: 0deg;     --sc-ready: 1;
            --tz-impact: 0px;    --ty-impact: 0px;    --rx-impact: 0deg;    --sc-impact: 0.94;
            --tz-stamped: 0px;   --ty-stamped: -8px;   --rx-stamped: 0deg;   --sc-stamped: 1;
          }
        }

        @media (min-width: 1024px) {
          .platform-tilt {
            transform: rotateX(55deg) rotateZ(-35deg) translateY(-10px);
            transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          :root {
            --tz-entering: 180px; --ty-entering: -30px; --rx-entering: -5deg; --sc-entering: 1;
            --tz-ready: 80px;     --ty-ready: -5px;    --rx-ready: 2deg;    --sc-ready: 1;
            --tz-impact: 2px;      --ty-impact: 0px;     --rx-impact: 0deg;   --sc-impact: 0.98;
            --tz-stamped: 100px;   --ty-stamped: -15px;  --rx-stamped: 4deg;  --sc-stamped: 1;
          }
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

      {/* SECTION 1: HERO CONTAINER WITH ACTIVE MOCK */}
      <section className="canvas-grid-dots snap-start scroll-mt-20 min-h-screen flex items-center justify-center px-4 md:px-6 py-8 lg:py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 relative overflow-hidden">
        
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10 pt-4 lg:pt-0">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-4 lg:mb-6 border border-emerald-200 tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Real-Time eTIMS Sync Loop Active
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight mb-4 lg:mb-6 text-gray-950 leading-[1.1] lg:leading-[1.05] bg-clip-text bg-gradient-to-b from-gray-950 to-gray-800 max-w-2xl">
            Get eTIMS compliant without changing how you invoice.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 lg:mb-8 max-w-md leading-relaxed">
            An automated background bridge that syncs your <strong className="text-gray-950 font-semibold">QuickBooks Online</strong> transactions directly to eTIMS. No manual entries, no workflow changes, and zero IT headaches.
          </p>

          <div className="flex flex-col items-center lg:items-start w-full sm:w-auto">
            <button className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-500 text-white font-bold text-base py-3.5 px-8 lg:py-4 lg:px-10 rounded-xl shadow-[0_10px_25px_-5px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] transition-all duration-300">
              Connect QuickBooks Now
            </button>
            <span className="text-xs text-gray-500 mt-2 lg:mt-3 font-medium tracking-wide">Setup takes less than 5 minutes.</span>
          </div>
        </div>

        {/* Right Column - Rebalanced with Option 1 Flat Engine Stack */}
        <div className="lg:col-span-7 w-full flex items-center justify-center min-h-[22rem] sm:min-h-[26rem] md:min-h-[30rem] lg:min-h-[34rem] relative perspective-canvas select-none">
          
          <div className="relative w-full max-w-[21rem] sm:max-w-[24rem] md:max-w-[28rem] h-[22rem] sm:h-[25rem] md:h-[28rem] lg:h-[30rem] platform-tilt preserve-3d-layers scale-95 sm:scale-100 transition-transform origin-center">
            
            {/* UNDERLYING STATIC INVOICE DECK (Hidden or flattened elegantly depending on context) */}
            <div className="absolute inset-0 bg-white/40 rounded-2xl border border-gray-200/40 pointer-events-none shadow-sm" style={{ transform: 'translateZ(-24px) scale(0.94) translateX(12px) translateY(12px)' }}></div>
            <div className="absolute inset-0 bg-white/70 rounded-2xl border border-gray-200/60 pointer-events-none shadow-sm" style={{ transform: 'translateZ(-12px) scale(0.97) translateX(6px) translateY(6px)' }}></div>

            {/* LIVE DOCUMENT ACTIVE INGESTION TRACK */}
            <div 
              style={{
                transition: 'all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: 
                  stage === "entering" ? 'translateZ(-12px) translateX(6px) translateY(6px) opacity(0) scale(0.97)' :
                  stage === "exiting"  ? 'translateZ(60px) translateY(80px) opacity(0) scale(1.03)' :
                  'translateZ(0px) translateX(0px) translateY(0px) opacity(1) scale(1)'
              }}
              className="absolute inset-0 bg-white rounded-2xl shadow-[-10px_10px_35px_rgba(0,0,0,0.05)] lg:shadow-[-20px_20px_45px_rgba(0,0,0,0.06)] border border-gray-200 p-5 md:p-8 flex flex-col justify-between preserve-3d-layers"
            >
              <div>
                <div className="flex justify-between items-start border-b border-gray-100 pb-3 md:pb-5 mb-3 md:mb-5">
                  <div className="flex items-center space-x-2.5">
                    {/* Neutralized safe brand icon */}
                    <div className="h-7 w-7 md:h-8 md:w-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-inner">
                      <div className="h-2.5 w-2.5 bg-white/90 rounded-sm rotate-45" />
                    </div>
                    <div>
                      {/* Non-copyright generic text */}
                      <span className="text-[11px] md:text-xs font-black text-gray-950 uppercase tracking-wider block">Accounting</span>
                      <span className="text-[8px] md:text-[9px] font-medium text-gray-400 block mt-0.5">Online Document</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-1.5">
                    <div className={`px-2 md:px-2.5 py-1 rounded-md text-[8px] md:text-[9px] font-bold uppercase tracking-widest shadow-sm transition-colors duration-300 flex items-center space-x-1.5 ${
                      isFiscalised ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                    }`}>
                      <span className={`h-1 md:h-1.5 w-1 md:w-1.5 rounded-full ${isFiscalised ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
                      <span>{isFiscalised ? 'Fiscalised' : 'Pending'}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-3 md:mb-5">
                   <div className="bg-gray-50/80 rounded-xl p-2.5 md:p-4 border border-gray-100 flex-1 mr-3 md:mr-4">
                    <div className="text-[8px] md:text-[9px] uppercase font-bold tracking-wider text-gray-400">Bill To:</div>
                    <div className="text-xs md:text-base font-bold text-gray-800 mt-0.5 md:mt-1 truncate">{batchInvoices[currentIdx].client}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs md:text-base font-mono font-bold text-gray-900 block">
                      {batchInvoices[currentIdx].id}
                    </span>
                    <span className="text-[9px] md:text-[10px] text-gray-400 font-medium block mt-0.5">
                      {batchInvoices[currentIdx].date}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex justify-between items-center bg-gray-50/50 px-3 py-2 md:py-2.5 rounded-lg border border-gray-100/50">
                    <div className="w-20 md:w-32 h-1.5 md:h-2.5 bg-gray-200 rounded-full"></div>
                    <div className="w-8 md:w-12 h-1.5 md:h-2.5 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50/50 px-3 py-2 md:py-2.5 rounded-lg border border-gray-100/50">
                    <div className="w-28 md:w-40 h-1.5 md:h-2.5 bg-gray-200 rounded-full"></div>
                    <div className="w-6 md:w-10 h-1.5 md:h-2.5 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center border-t border-gray-100 pt-3 md:pt-5 mb-2 md:mb-3">
                  <span className="text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">Total Balance Due</span>
                  <span className="text-sm md:text-lg font-mono font-black text-blue-600 bg-blue-50/70 px-2.5 py-1 md:px-3 md:py-1.5 rounded-md border border-blue-100">
                    {batchInvoices[currentIdx].amount}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-3 md:mt-5 pt-3 md:pt-4 border-t border-dashed border-gray-200 relative">
                  <div className="text-[8px] md:text-[10px] font-mono tracking-tight text-gray-400 uppercase">
                    Awaiting Sync Sequence
                  </div>
                  
                  <div className={`relative w-16 h-16 md:w-24 md:h-24 rounded-xl transition-all duration-300 flex items-center justify-center overflow-hidden ${
                    stage === "impact" ? "border-2 border-emerald-500 bg-emerald-50/20 scale-95" :
                    isFiscalised ? "border-2 border-emerald-500/30 bg-white shadow-sm" : "border-2 border-dashed border-gray-300 bg-gray-50/50"
                  }`}>
                    
                    {!isFiscalised && stage !== "impact" && (
                      <div className="text-center p-1 flex flex-col items-center justify-center">
                        <div className="w-1.5 h-1.5 border-t-2 border-l-2 border-gray-300 absolute top-1.5 left-1.5"></div>
                        <div className="w-1.5 h-1.5 border-t-2 border-r-2 border-gray-300 absolute top-1.5 right-1.5"></div>
                        <div className="w-1.5 h-1.5 border-b-2 border-l-2 border-gray-300 absolute bottom-1.5 left-1.5"></div>
                        <div className="w-1.5 h-1.5 border-b-2 border-r-2 border-gray-300 absolute bottom-1.5 right-1.5"></div>
                        <span className="text-[7px] md:text-[8px] font-bold text-gray-400 uppercase tracking-tight scale-90">TARGET</span>
                      </div>
                    )}

                    {(stage === "impact" || isFiscalised) && (
                      <div className={`w-11 h-11 md:w-16 md:h-16 p-0.5 md:p-1 bg-white rounded-md grid grid-cols-4 gap-[1.5px] md:gap-[2px] transition-all duration-200 ${stage === "impact" ? "scale-105 opacity-90 blur-[0.3px]" : "scale-100 opacity-100"}`}>
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

            {/* RESPONSIVE STAMPER ENGINE (Reads responsive CSS variables for physics stages) */}
            <div 
              style={{
                bottom: '20px',
                right: '20px',
                transition: 
                  stage === "impact" ? 'transform 120ms cubic-bezier(0.4, 0, 1, 1)' : 
                  stage === "stamped" ? 'transform 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 
                  'transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                transform: 
                  stage === "entering" ? 'translateZ(var(--tz-entering)) translateY(var(--ty-entering)) rotateX(var(--rx-entering)) scale(var(--sc-entering))' :
                  stage === "ready"    ? 'translateZ(var(--tz-ready)) translateY(var(--ty-ready)) rotateX(var(--rx-ready)) scale(var(--sc-ready))' :
                  stage === "impact"   ? 'translateZ(var(--tz-impact)) translateY(var(--ty-impact)) rotateX(var(--rx-impact)) scale(var(--sc-impact))' :
                                         'translateZ(var(--tz-stamped)) translateY(var(--ty-stamped)) rotateX(var(--rx-stamped)) scale(var(--sc-stamped))'
              }}
              className="absolute w-16 h-16 md:w-24 md:h-24 preserve-3d-layers z-30 pointer-events-none flex items-center justify-center"
            >
              <div className={`w-full h-full bg-black rounded-xl md:rounded-2xl border flex items-center justify-center transition-all duration-300 ${
                stage === "impact" 
                  ? "border-red-500/80 shadow-[0_0_40px_rgba(239,68,68,0.7)]" 
                  : "border-red-900/40 shadow-[0_10px_25px_rgba(239,68,68,0.25)] lg:shadow-[0_15px_35px_rgba(239,68,68,0.35)]"
              }`}>
                <div className={`w-5 h-5 md:w-8 md:h-8 relative transition-opacity duration-300 ${stage === "impact" ? "opacity-100" : "opacity-80"}`}>
                  <div className="absolute inset-0 border-[2px] md:border-[2.5px] border-red-500 rounded-[3px] md:rounded-[4px] rotate-45 shadow-[0_0_8px_rgba(239,68,68,0.7)]"></div>
                  <div className="absolute inset-0 border-[2px] md:border-[2.5px] border-red-500 rounded-[3px] md:rounded-[4px] -rotate-45 shadow-[0_0_8px_rgba(239,68,68,0.7)]"></div>
                  <div className="absolute inset-0 bg-red-500 blur-sm md:blur-md opacity-40"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: BENTO FEATURE ARCHITECTURE */}
      <section className="canvas-grid-dots snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Product Infrastructure</h2>
          <p className="text-2xl md:text-5xl font-black text-gray-950 tracking-tight">
            Engineered for complete invoice invisibility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-auto lg:auto-rows-[220px]">
          
          <div className="lg:col-span-2 lg:row-span-2 group relative rounded-3xl bg-white border border-gray-100 hover:border-gray-200 hover:bg-gray-50 p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[60px] pointer-events-none transition-all group-hover:bg-blue-100"></div>
            <div>
              <div className="h-9 w-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm mb-6 shadow-sm">01</div>
              <h3 className="text-lg md:text-2xl font-black text-gray-950 mb-3 max-w-md leading-snug">
                Direct QBO link stops double-tax invoicing challenges.
              </h3>
              <p className="text-gray-600 text-sm md:text-base max-w-xl leading-relaxed">
                Automatically issues a matching eTIMS invoice directly from your QuickBooks data loop. No manual operational steps are required from your accounting team to remain compliant.
              </p>
            </div>
            <p className="text-xs font-mono text-gray-400 border-t border-gray-100 pt-4 mt-6 lg:mt-0 flex items-center">
              <span className="text-emerald-500 mr-2 animate-pulse">●</span> Reclaims wasted administrative hours.
            </p>
          </div>

          <div className="lg:col-span-1 group relative rounded-3xl bg-white border border-gray-100 hover:border-gray-200 hover:bg-gray-50 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-md">
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
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded shadow-inner self-start mt-4 lg:mt-0">
              Absolute Ledger Integrity
            </span>
          </div>

          <div className="lg:col-span-1 group relative rounded-3xl bg-white border border-gray-100 hover:border-gray-200 hover:bg-gray-50 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-md">
            <div>
              <div className="h-8 w-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs mb-4 shadow-sm">03</div>
              <h3 className="text-base font-extrabold text-gray-950 mb-1.5 leading-snug">
                Designed for invisibility across roles.
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                IT gains zero infrastructure overhead, while accountants enjoy zero workflow changes.
              </p>
            </div>
            <span className="text-[10px] font-mono text-gray-400 tracking-tight flex items-center mt-4 lg:mt-0">
              <span className="h-1 w-1 rounded-full bg-blue-500 mr-1.5 animate-ping"></span> Live network pipeline execution
            </span>
          </div>

        </div>
      </section>

      {/* SECTION 3: STEP-BY-STEP OPERATION PIPELINE */}
      <section className="canvas-grid-dots snap-start scroll-mt-20 min-h-screen bg-gray-50/60 border-y border-gray-100 flex flex-col justify-center px-6 py-16">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Sync Framework</h2>
            <p className="text-3xl md:text-4xl font-black text-gray-950 tracking-tight">Three steps to background automation</p>
          </div>

          <div className="relative border-l-2 border-gray-200/80 ml-4 md:ml-32 space-y-12">
            {[
              { step: "01", title: "Create invoice in QuickBooks", desc: "Keep operating exactly as you do today. Your team drafts and saves client invoices inside QuickBooks Online without opening any external portals." },
              { step: "02", title: "Automated eConnector intercept", desc: "Our secure data webhook registers the new transaction instantly, maps the custom item fields to KRA requirements, and requests confirmation safely." },
              { step: "03", title: "Instant eTIMS generation", desc: "The transaction is fully fiscalised in under 2 seconds. A valid QR code and cryptographic signature are appended to your records immediately." }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-xs font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-950 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base max-w-xl leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TRANSPARENT COMPLIANCE PRICING TIERS */}
      <section className="canvas-grid-dots snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-16 max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Simple Pricing</h2>
          <p className="text-3xl md:text-4xl font-black text-gray-950 tracking-tight">Predictable plans for growing businesses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Plan 1 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm relative flex flex-col justify-between min-h-[400px]">
            <div>
              <h3 className="text-xl font-bold text-gray-950 mb-2">Growth Bridge</h3>
              <p className="text-gray-500 text-xs mb-6">Perfect for small to medium setups looking for simple background sync loops.</p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-black text-gray-950 tracking-tight">KES 4,500</span>
                <span className="text-gray-500 text-sm ml-2">/ month</span>
              </div>
              <ul className="space-y-3.5 border-t border-gray-100 pt-6">
                {["Up to 250 synced invoices monthly", "Real-time QR code generation", "Automated customer email attachments", "Standard email support response"].map((f, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center">
                    <span className="text-blue-500 mr-2.5 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full mt-8 bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-colors">
              Get Started Now
            </button>
          </div>

          {/* Plan 2 */}
          <div className="bg-white rounded-3xl p-8 border-2 border-blue-600 shadow-md relative flex flex-col justify-between min-h-[420px]">
            <div className="absolute -top-3.5 left-6 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
              Most Popular
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-950 mb-2">Scale Pipeline</h3>
              <p className="text-gray-500 text-xs mb-6">Built for high-volume enterprise operations requiring absolute infrastructure uptime.</p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-black text-gray-950 tracking-tight">KES 9,500</span>
                <span className="text-gray-500 text-sm ml-2">/ month</span>
              </div>
              <ul className="space-y-3.5 border-t border-gray-100 pt-6">
                {["Unlimited invoices synced monthly", "Multi-user dashboard permissions", "Instant error rollback safety warnings", "24/7 dedicated telephone support loop", "Custom item field mapping settings"].map((f, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center">
                    <span className="text-blue-600 mr-2.5 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full mt-8 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-colors shadow-md">
              Start Scale Trial
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQS MODULE ACCORDION */}
      <section className="canvas-grid-dots snap-start scroll-mt-20 min-h-screen bg-gray-50/60 border-t border-gray-100 flex flex-col justify-center px-6 py-16">
        <div className="max-w-3xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Answering Questions</h2>
            <p className="text-3xl font-black text-gray-950 tracking-tight">Everything you need to know</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Is this tool authorized by the Kenya Revenue Authority?", a: "Yes. eConnector routes all transaction pipelines securely through fully certified KRA eTIMS software frameworks, ensuring total validity." },
              { q: "What happens if our internet network drops out mid-invoice?", a: "QuickBooks saves your data normally. Our automated bridge loop continuously tracks missing stamps and syncs the backlog instantly when connectivity returns." },
              { q: "Do we need to install any heavy internal business infrastructure?", a: "No. eConnector operates completely via native secure cloud webhooks. There are absolutely zero plugins or software programs to install on your computer hardware." }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden transition-all">
                <button 
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full text-left px-6 py-4.5 font-bold text-gray-950 flex justify-between items-center bg-white hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-sm md:text-base pr-4">{faq.q}</span>
                  <span className="text-gray-400 font-mono text-xl transition-transform duration-200">{faqOpen === index ? '−' : '+'}</span>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${faqOpen === index ? 'max-h-40 border-t border-gray-100' : 'max-h-0'}`}>
                  <p className="p-6 text-xs md:text-sm text-gray-600 leading-relaxed bg-gray-50/30">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONVERTING TERMINATION BANNER */}
      <footer className="snap-start bg-gray-950 text-white px-6 py-16 text-center relative overflow-hidden flex flex-col justify-center min-h-[360px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_120%,rgba(37,99,235,0.18),transparent)] pointer-events-none"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-white">Automate your eTIMS workflow today.</h2>
          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Join hundreds of Kenyan businesses processing millions in safe compliance transactions seamlessly every single day.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm md:text-base py-3.5 px-8 rounded-xl transition-all shadow-md hover:scale-[1.02]">
            Connect Your Account
          </button>
          <div className="text-xs text-gray-500 mt-6 font-mono">© 2026 eConnector Systems. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}