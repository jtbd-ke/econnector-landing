'use client'

import { useState, useEffect } from 'react'

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://econnector-dashboard-10.vercel.app'

export default function LandingPage() {
  // Active pipeline step state tracker for the interactive Proof Widget loop
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* Premium Ambient Geometric Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] h-[900px] pointer-events-none opacity-70" />

      {/* ── NAVIGATION BAR ────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-3 h-3 rounded-md bg-[#0066FF] transform rotate-45 transition-transform group-hover:rotate-90 duration-500 ease-out" />
            <span className="font-semibold text-sm tracking-tight text-zinc-900">eConnector</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`${DASHBOARD_URL}/sign-in`} className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-200">
              Sign in
            </a>
            <a href={`${DASHBOARD_URL}/sign-up`} className="text-xs font-medium bg-zinc-950 text-white px-4 py-2 rounded-full hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200 shadow-sm">
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ───────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-44 pb-20 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Top Status Pill - Re-engineered for Instant Domain Authenticity */}
          <div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-full px-3.5 py-1.5 mb-10 shadow-xs">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2CA01C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2CA01C]"></span>
            </span>
            <span className="text-[11px] font-semibold text-zinc-800 tracking-tight flex items-center gap-1">
              ✓ Certified QuickBooks Online Integration
            </span>
          </div>

          {/* Headline - Rigidly structured for Apple/Stripe Cohesive Aesthetics */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tighter text-zinc-950 mb-8 leading-[1.08] max-w-3xl mx-auto">
            <span className="block">Get eTIMS compliance</span>
            <span className="block text-zinc-900/90">without the headache,</span>
            <span className="block">in <span className="text-[#2CA01C]">a few clicks</span>.</span>
          </h1>
          
          {/* Unified Sub-headline Paragraph */}
          <p className="text-base sm:text-[18px] text-zinc-500 max-w-3xl mx-auto mb-12 tracking-tight leading-relaxed text-center font-normal">
            <span className="text-zinc-900 font-medium">Link your accounting system in just two clicks.</span> Generate your invoices and credit notes normally while the eConnector engine does the heavy lifting. Look back as an official eTIMS QR code and tax invoice number are updated straight onto your original document <span className="text-zinc-900 font-semibold underline underline-offset-4 decoration-2 decoration-green-400 whitespace-nowrap">in under 60 seconds</span>.
          </p>
          
          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <a href={`${DASHBOARD_URL}/sign-up`} className="w-full sm:w-auto text-center bg-[#2CA01C] text-white text-[14px] font-semibold tracking-tight px-8 py-3.5 rounded-full hover:bg-[#248a18] hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 shadow-md shadow-green-700/10">
              Connect QuickBooks Now
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto text-center text-[14px] font-medium text-zinc-500 hover:text-zinc-900 px-6 py-3 transition-colors duration-300 tracking-tight group">
              See how it works 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">&rarr;</span>
            </a>
          </div>

          {/* ── THE PROOF WIDGET ────────────────────────────────────── */}
          <div className="relative max-w-5xl mx-auto rounded-2xl border border-zinc-200 bg-zinc-50/50 p-2 shadow-xs">
            <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden text-left shadow-xs">
              
              <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between text-[11px] text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                  <span className="font-mono text-[#0066FF] font-medium tracking-tight bg-blue-50 px-2 py-0.5 rounded">
                    sync_pipeline: live_writeback
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono">
                    {[0, 1, 2, 3].map((idx) => (
                      <span key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${idx === activeStep ? 'bg-[#2CA01C]' : 'bg-zinc-200'}`} />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 rounded bg-green-50 text-[#2CA01C] font-semibold tracking-tight text-[10px]">60s Automation Loop</span>
                </div>
              </div>
              
              <div className="p-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 items-stretch bg-zinc-50/10">
                
                {/* Node 1 */}
                <div className={`p-4 rounded-xl border transition-all duration-500 bg-white ${activeStep === 0 ? 'border-[#2CA01C] ring-4 ring-green-50 shadow-sm scale-[1.01]' : 'border-zinc-200 opacity-60'}`}>
                  <div className="text-[9px] uppercase font-bold tracking-wider text-zinc-400 mb-2">Step 01 · Trigger</div>
                  <div className="text-xs font-semibold text-zinc-900 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${activeStep === 0 ? 'bg-[#2CA01C] animate-ping' : 'bg-[#2CA01C]'}`} /> QuickBooks Online
                  </div>
                  <div className="mt-5 text-[11px] font-mono bg-zinc-50 p-2 rounded text-zinc-500 border border-zinc-100">
                    Invoice <span className="text-zinc-800 font-medium">#INV-2026-04</span>
                  </div>
                  <div className="mt-4 text-[11px] text-zinc-500 tracking-tight leading-normal">
                    You hit save or send on a standard invoice or sales receipt.
                  </div>
                </div>

                {/* Node 2 */}
                <div className={`p-4 rounded-xl border transition-all duration-500 bg-white ${activeStep === 1 ? 'border-[#0066FF] ring-4 ring-blue-50 shadow-sm scale-[1.01]' : 'border-zinc-200 opacity-60'}`}>
                  <div className="text-[9px] uppercase font-bold tracking-wider text-zinc-400 mb-2">Step 02 · Processing</div>
                  <div className="text-xs font-semibold text-zinc-900 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${activeStep === 1 ? 'bg-[#0066FF] animate-spin' : 'bg-[#0066FF]'}`} /> eConnector Engine
                  </div>
                  <div className="mt-5 h-9 flex items-center text-[10px] font-mono text-[#0066FF] bg-blue-50 border border-blue-100/50 rounded px-2">
                    {activeStep === 1 ? '⚡ Mapping parameters...' : 'Pipeline idle'}
                  </div>
                  <div className="mt-4 text-[11px] text-zinc-500 tracking-tight leading-normal">
                    Instantly extracts metadata, validates formulas, and maps parameters to KRA schema criteria.
                  </div>
                </div>

                {/* Node 3 */}
                <div className={`p-4 rounded-xl border transition-all duration-500 bg-white ${activeStep === 2 ? 'border-red-500 ring-4 ring-red-50 shadow-sm scale-[1.01]' : 'border-zinc-200 opacity-60'}`}>
                  <div className="text-[9px] uppercase font-bold tracking-wider text-zinc-400 mb-2">Step 03 · Handshake</div>
                  <div className="text-xs font-semibold text-zinc-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C61B23]" /> KRA eTIMS Gateway
                  </div>
                  <div className="mt-5 h-9 flex items-center text-[10px] font-mono text-red-600 bg-red-50 border border-red-100/50 rounded px-2">
                    {activeStep >= 2 ? '✓ Payload Stamped OK' : 'Awaiting sync...'}
                  </div>
                  <div className="mt-4 text-[11px] text-zinc-500 tracking-tight leading-normal">
                    Secure channel signs transactions, returning a verified unique serial profile.
                  </div>
                </div>

                {/* Node 4 */}
                <div className={`p-4 rounded-xl border transition-all duration-500 bg-white ${activeStep === 3 ? 'border-[#2CA01C] ring-4 ring-green-50 shadow-sm scale-[1.01]' : 'border-zinc-200 opacity-60'}`}>
                  <div className="text-[9px] uppercase font-bold tracking-wider text-zinc-400 mb-2">Step 04 · Writeback</div>
                  <div className="text-xs font-semibold text-zinc-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2CA01C]" /> QuickBooks Online
                  </div>
                  <div className="mt-4 space-y-1.5">
                    <div className="bg-green-50 border border-green-200/60 rounded p-1.5 text-zinc-600 flex items-center gap-2 text-[10px] font-mono">
                      <svg className="w-3.5 h-3.5 text-[#2CA01C] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 15h6v6H3v-6zm2 2v2h2v-2H5zm10-2h2v2h-2v-2zm2 2h2v2h-2v-2zm0-2h2v2h-2v-2zm-2 4h2v2h-2v-2zm4 0h2v2h-2v-2z" />
                      </svg>
                      <span className="text-[#248a18] font-bold">QR Code Appended</span>
                    </div>
                  </div>
                  <div className="mt-3 text-[11px] text-zinc-500 tracking-tight leading-normal">
                    The valid system QR code and unique signature block map back onto the origin invoice.
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── NEW PRODUCT CAPABILITY MATRIX (REPLACED TEXT BLOCK) ─────── */}
      <section className="py-20 px-5 sm:px-6 bg-zinc-50/60 border-y border-zinc-200/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-[#0066FF]">✦</span> Failsafe Retry Queue
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed tracking-tight">
                If the government eTIMS portal undergoes unexpected latency or downtime, eConnector caches your transmission parameters and retries automatically the second services clear.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-[#0066FF]">✦</span> Full Document Coverage
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed tracking-tight">
                Unlike simple transaction plug-ins, we support standard Invoices, continuous Sales Receipts, and complex multi-item Credit Notes, writing clean audit trails back to each file.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-[#0066FF]">✦</span> Pure Operational Freedom
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed tracking-tight">
                Your accounting staff never leaves QuickBooks. There are zero new terminal procedures to memorize, zero CSV sheets to map manually, and zero portal copy-paste errors.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── ENGINE FLOW SECTION ─────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 sm:py-32 px-5 sm:px-6 bg-white relative scroll-mt-12">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-wider text-[#0066FF] uppercase bg-blue-50 px-3 py-1.5 rounded-full">
              The Engine Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 mt-5 tracking-tight">
              Three steps to complete autonomy.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {[
              {
                title: '1. Sign-up simplified',
                body: 'Register your account and setup your business profile in under two minutes.',
                icon: (
                  <svg className="w-4 h-4 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                  </svg>
                ),
              },
              {
                title: '2. Link to QuickBooks online Securely',
                body: 'Authorise an official secure connection to your accounting system with two simple clicks.',
                icon: (
                  <svg className="w-4.5 h-4.5 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364l1.756 1.756m3.96 1.98l1.5-1.5" />
                  </svg>
                ),
              },
              {
                title: '3. Save and Automate',
                body: 'Continue generating your documents inside QuickBooks normally. Every invoice or sales receipt created is processed seamlessly, verified with KRA, and updated with a valid eTIMs QR Code, Tax Invoice number and signature.',
                icon: (
                  <svg className="w-4 h-4 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="relative group p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-white transition-all duration-300 ease-out text-left hover:border-zinc-300 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-200 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-zinc-500 leading-relaxed font-normal">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PRICING SECTION ────────────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-6 bg-zinc-50/50 border-t border-zinc-200/60">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase text-center mb-4">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-zinc-950 mb-3 tracking-tight">
            Simple, transparent billing.
          </h2>
          
          <p className="text-xs sm:text-sm text-zinc-500 text-center mb-16 max-w-lg mx-auto tracking-tight font-medium bg-white border border-zinc-200 px-4 py-2 rounded-full shadow-2xs">
            All plans incur a one-time pass through setup cost for eTIMS infrastructure fees of $70.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {[
              {
                name: 'Starter',
                price: '$15',
                localPrice: 'Approx. KES 2,000',
                period: '/mo',
                who: 'Individual operators or sole traders',
                features: ['1 unified business profile', '1 active connector link', '1 administrative seat', 'Fully localized eTIMS mapping', 'Standard transaction logs'],
                cta: 'Get started',
                highlight: false,
              },
              {
                name: 'Business',
                price: '$25',
                localPrice: 'Approx. KES 3,300',
                period: '/mo per connector',
                who: 'Growing companies with multiple entities',
                features: ['Up to 3 unique businesses', '1 active connector per unit', 'Up to 5 collaborative seats', 'Fully localized eTIMS mapping', 'Priority transaction routing queue'],
                cta: 'Get started',
                highlight: true,
              },
              {
                name: 'Group',
                price: '$20',
                localPrice: 'Approx. KES 2,600',
                period: '/mo per connector',
                who: 'Holding groups & corporate firms',
                features: ['4+ active business profiles', '1 active connector per unit', 'Unlimited account seats', 'Consolidated analytical map views', 'Dedicated priority account manager'],
                cta: 'Talk to us',
                highlight: false,
              },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 ease-out ${plan.highlight ? 'bg-zinc-950 border-zinc-950 text-white md:-translate-y-2 shadow-xl shadow-zinc-950/10' : 'bg-white border-zinc-200 text-zinc-950 hover:border-zinc-300'}`}>
                <div className="flex items-center justify-between mb-4">
                  <p className={`text-[10px] font-bold tracking-wider uppercase ${plan.highlight ? 'text-blue-400' : 'text-zinc-400'}`}>
                    {plan.name}
                  </p>
                  {plan.highlight && (
                    <span className="text-[10px] font-medium bg-[#0066FF]/10 text-blue-400 px-2.5 py-0.5 rounded-full tracking-tight">
                      Most Selected
                    </span>
                  )}
                </div>
                
                <p className="text-xs mb-4" style={{ color: plan.highlight ? '#a1a1aa' : '#71717a' }}>
                  {plan.who}
                </p>
                
                <div className="flex items-baseline flex-wrap gap-1">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-xs text-zinc-400 font-normal tracking-tight">{plan.period}</span>
                </div>

                <p className={`text-[11px] font-medium mt-1 mb-8 ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {plan.localPrice}
                </p>
                
                <ul className="space-y-4 mb-8 border-t border-dashed pt-6 text-xs sm:text-[13px]" style={{ borderColor: plan.highlight ? '#27272a' : '#f4f4f5' }}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5" style={{ color: plan.highlight ? '#d4d4d8' : '#52525b' }}>
                      <span className={`text-xs font-bold ${plan.highlight ? 'text-blue-400' : 'text-[#0066FF]'}`}>✓</span>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                
                <a href={`${DASHBOARD_URL}/sign-up`} className="block text-center text-xs font-semibold py-3.5 rounded-full active:scale-[0.98] transition-all duration-200 tracking-tight" style={{ backgroundColor: plan.highlight ? '#ffffff' : '#09090b', color: plan.highlight ? '#09090b' : '#ffffff' }}>
                  {plan.cta} &rarr;
                </a>
              </div>
            ))}
          </div>

          {/* M-Pesa Payment Banner */}
          <div className="mt-12 flex items-center justify-center gap-3 bg-white border border-zinc-200 rounded-xl p-4 max-w-sm mx-auto shadow-2xs">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2CA01C]" />
            </span>
            <p className="text-xs text-zinc-600 font-medium tracking-tight text-center">
              We accept payments instantly via <span className="text-[#2CA01C] font-bold">M-Pesa</span> or Credit Card.
            </p>
          </div>

        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-6 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-5 tracking-tight">
            Ready to secure your automated bridge?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Link your QuickBooks profile within minutes and authorize zero-friction automated tax-stamping immediately.
          </p>
          <a href={`${DASHBOARD_URL}/sign-up`} className="inline-block bg-[#2CA01C] text-white text-xs font-semibold tracking-tight px-8 py-4 rounded-full hover:bg-[#248a18] active:scale-[0.98] transition-all duration-200 shadow-md">
            Connect QuickBooks Now
          </a>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-200/60 py-12 px-5 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-md bg-[#0066FF] transform rotate-45" />
            <span className="text-sm font-semibold tracking-tight text-zinc-900">eConnector</span>
          </div>
          <p className="text-xs text-zinc-400 text-center md:text-left leading-relaxed">
            Powered by{' '}
            <a href="https://tracksol.co.ke" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-zinc-200">
              TrackSol
            </a>
            {' '}· Inquiry channels:{' '}
            <a href="mailto:info@ezeemoney.co.ke" className="text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-zinc-200">
              info@ezeemoney.co.ke
            </a>
          </p>
          <p className="text-[11px] font-mono text-zinc-400 tracking-tight">
            © {new Date().getFullYear()} Ezeemoney Ltd.
          </p>
        </div>
      </footer>

    </main>
  )
}