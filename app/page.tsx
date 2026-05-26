'use client'

import React, { useState, useEffect, FormEvent } from 'react'

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://econnector-dashboard-10.vercel.app'

export default function LandingPage() {
  // Interactive Flow Loop Widget state tracker
  const [activeStep, setActiveStep] = useState<number>(0)
  
  // Contact popup widget visibility and submission state
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false)
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Explicit type signature applied here to resolve Next.js strict build constraints
  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
    }, 2500)
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans antialiased overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* ── AMBIENT VECTOR BACKGROUND ────────────────────────────────── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] h-[1200px] pointer-events-none opacity-40" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[600px] bg-gradient-to-tr from-emerald-200/30 to-blue-200/20 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-[5%] right-[-10%] w-[40%] h-[500px] bg-gradient-to-l from-green-200/20 to-emerald-200/40 rounded-full filter blur-[100px] pointer-events-none" />

      {/* ── NAVIGATION BAR ────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-xl border-b border-zinc-200/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <svg className="w-7 h-7 text-emerald-600 transform group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12C8 9.79086 9.79086 8 12 8H20C22.2091 8 24 9.79086 24 12V20C24 22.2091 22.2091 24 20 24H12C9.79086 24 8 22.2091 8 20V12Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2.5" />
              <path d="M12 14L15 17L21 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-bold text-base tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">eConnector</span>
          </div>
          <div className="flex items-center gap-8">
            <a href={`${DASHBOARD_URL}/sign-in`} className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-200">
              Sign in
            </a>
            <a href={`${DASHBOARD_URL}/sign-up`} className="text-sm font-semibold bg-zinc-950 text-white px-5 py-2.5 rounded-xl hover:bg-zinc-800 hover:shadow-lg active:scale-[0.98] transition-all duration-200 shadow-xs">
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-44 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-800 tracking-tight">Beautifully Simple Tax Automation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-zinc-950 mb-8 leading-[1.05] max-w-3xl mx-auto">
            Get eTIMS compliance 
            <span className="block text-zinc-400 font-medium my-1">without the headache,</span>
            in <span className="relative inline-block text-emerald-600 bg-emerald-50 px-4 py-0.5 rounded-2xl border border-emerald-100">a few clicks</span>
          </h1>
          
          <div className="text-base sm:text-[18px] text-zinc-500 max-w-2xl mx-auto mb-12 tracking-tight leading-relaxed font-normal space-y-4">
            <p className="text-zinc-900 font-medium">
              Link your accounting system in just two clicks.
            </p>
            <p>
              Generate your invoices and credit notes normally while the eConnector engine does the heavy lifting:
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-2.5 py-2">
              {['formatting', 'validating', 'submitting', 'updating'].map((step, idx) => (
                <span key={step} className="inline-flex items-center text-xs font-semibold px-3 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded-xl shadow-xs">
                  <span className={`w-1.5 h-1.5 rounded-full mr-2 ${idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-amber-500' : idx === 2 ? 'bg-purple-500' : 'bg-emerald-500'}`} />
                  {step}
                </span>
              ))}
            </div>

            <p className="pt-2 text-sm sm:text-base">
              Look back as an official eTIMS QR code and tax invoice number are updated straight onto your original document <span className="text-zinc-900 font-semibold underline underline-offset-4 decoration-2 decoration-emerald-500 whitespace-nowrap">in under 60 seconds</span>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a href={`${DASHBOARD_URL}/sign-up`} className="w-full text-center bg-emerald-600 text-white text-sm font-semibold tracking-tight px-8 py-4 rounded-xl hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/10 active:scale-[0.98] transition-all duration-200 shadow-md">
              Connect QuickBooks Now
            </a>
            <a href="#how-it-works" className="w-full text-center text-sm font-semibold text-zinc-600 bg-white border border-zinc-200 hover:text-zinc-900 hover:border-zinc-300 px-6 py-4 rounded-xl transition-all duration-200 tracking-tight shadow-2xs">
              See live demonstration
            </a>
          </div>

        </div>
      </section>

      {/* ── 2. THREE STEPS VECTOR VISUAL SECTION ─────────────────────── */}
      <section className="pb-24 pt-6 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                title: '1. Fast Profile Setup',
                body: 'Register your account securely, input your basic organization parameters, and prepare your dashboard setup in under two minutes.',
                vector: (
                  <svg className="w-full h-28 text-emerald-600/10 mb-2" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="80" y="35" width="40" height="30" rx="6" fill="white" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M90 45H110M90 53H102" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="140" cy="30" r="3" fill="#10B981" />
                    <circle cx="60" cy="70" r="4" fill="#3B82F6" />
                  </svg>
                ),
              },
              {
                title: '2. Secure QuickBooks Link',
                body: 'Authorize a direct, secure connection to your official QuickBooks Online company books with just two clicks.',
                vector: (
                  <svg className="w-full h-28 text-blue-600/10 mb-2" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 50H150" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
                    <rect x="40" y="35" width="30" height="30" rx="8" fill="white" stroke="currentColor" strokeWidth="2.5" />
                    <rect x="130" y="35" width="30" height="30" rx="8" fill="white" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M92 42L108 50L92 58V42Z" fill="#3B82F6" />
                    <circle cx="55" cy="50" r="2" fill="currentColor" />
                    <circle cx="145" cy="50" r="2" fill="currentColor" />
                  </svg>
                ),
              },
              {
                title: '3. Save Invoices Normally',
                body: 'Continue working within QuickBooks without altering your routine. Every sales transaction or credit note updates with legal tax data automatically.',
                vector: (
                  <svg className="w-full h-28 text-emerald-600/10 mb-2" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60 70L90 40L115 55L145 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="135" y="15" width="20" height="20" rx="4" fill="white" stroke="#10B981" strokeWidth="2" />
                    <path d="M142 25L145 28L151 21" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="60" cy="70" r="4" fill="currentColor" />
                    <circle cx="90" cy="40" r="4" fill="currentColor" />
                    <circle cx="115" cy="55" r="4" fill="currentColor" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="group relative p-8 rounded-2xl border border-zinc-200 bg-white transition-all duration-300 text-left hover:border-zinc-300 hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4 overflow-hidden rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                  {item.vector}
                </div>
                <h3 className="text-base font-bold text-zinc-950 mb-2.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed font-normal">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE HOW IT WORKS WIDGET ───────────────────────── */}
      <section id="how-it-works" className="py-24 px-6 bg-white border-y border-zinc-200/70 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-wider text-emerald-600 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
              Interactive Blueprint
            </span>
            <h2 className="text-3xl font-bold text-zinc-950 mt-5 tracking-tight">
              A real-time look at your automated ledger loop.
            </h2>
          </div>

          <div className="relative rounded-3xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden text-left shadow-xs">
              
              <div className="px-5 py-4 bg-zinc-50/80 border-b border-zinc-200/80 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-zinc-600 font-medium tracking-tight bg-zinc-200/60 px-2.5 py-1 rounded-md">
                    automated_accounting_sync: active
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-2 font-mono">
                    {[0, 1, 2, 3].map((idx) => (
                      <span key={idx} className={`w-2 h-2 rounded-full transition-colors duration-300 ${idx === activeStep ? 'bg-emerald-600' : 'bg-zinc-200'}`} />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-bold tracking-tight text-[11px] border border-emerald-100">60s Loop Circuit</span>
                </div>
              </div>
              
              <div className="p-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch bg-zinc-50/20">
                
                {/* Node 1 */}
                <div className={`p-5 rounded-2xl border transition-all duration-500 bg-white ${activeStep === 0 ? 'border-emerald-500 ring-4 ring-emerald-50 shadow-md scale-[1.02]' : 'border-zinc-200/70 opacity-50'}`}>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-3">Step 01 · Entry</div>
                  <div className="text-xs font-bold text-zinc-900 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${activeStep === 0 ? 'bg-emerald-500 animate-ping' : 'bg-emerald-500'}`} /> QuickBooks Online
                  </div>
                  <div className="mt-5 text-[11px] font-mono bg-zinc-50 p-2.5 rounded-lg text-zinc-500 border border-zinc-100">
                    Invoice <span className="text-zinc-800 font-semibold">#INV-2026-04</span>
                  </div>
                  <div className="mt-4 text-[12px] text-zinc-500 tracking-tight leading-normal">
                    Your team saves a normal customer invoice or ledger entry.
                  </div>
                </div>

                {/* Node 2 */}
                <div className={`p-5 rounded-2xl border transition-all duration-500 bg-white ${activeStep === 1 ? 'border-blue-500 ring-4 ring-blue-50 shadow-md scale-[1.02]' : 'border-zinc-200/70 opacity-50'}`}>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-3">Step 02 · Schema Check</div>
                  <div className="text-xs font-bold text-zinc-900 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${activeStep === 1 ? 'bg-blue-500 animate-spin' : 'bg-blue-500'}`} /> eConnector Engine
                  </div>
                  <div className="mt-5 h-9 flex items-center text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-100/40 rounded-lg px-2.5">
                    {activeStep === 1 ? '⚡ Reading tax fields...' : 'Monitoring pipeline'}
                  </div>
                  <div className="mt-4 text-[12px] text-zinc-500 tracking-tight leading-normal">
                    Instantly verifies mathematical alignments and schema compliance structures.
                  </div>
                </div>

                {/* Node 3 */}
                <div className={`p-5 rounded-2xl border transition-all duration-500 bg-white ${activeStep === 2 ? 'border-amber-500 ring-4 ring-amber-50 shadow-md scale-[1.02]' : 'border-zinc-200/70 opacity-50'}`}>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-3">Step 03 · KRA Registry</div>
                  <div className="text-xs font-bold text-zinc-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" /> eTIMS Gateway
                  </div>
                  <div className="mt-5 h-9 flex items-center text-[10px] font-mono text-amber-700 bg-amber-50 border border-amber-100/50 rounded-lg px-2.5">
                    {activeStep >= 2 ? '✓ Stamped Response' : 'Awaiting sync stream...'}
                  </div>
                  <div className="mt-4 text-[12px] text-zinc-500 tracking-tight leading-normal">
                    Secures a safe verification channel and fetches required government parameters.
                  </div>
                </div>

                {/* Node 4 */}
                <div className={`p-5 rounded-2xl border transition-all duration-500 bg-white ${activeStep === 3 ? 'border-emerald-500 ring-4 ring-emerald-50 shadow-md scale-[1.02]' : 'border-zinc-200/70 opacity-50'}`}>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-3">Step 04 · Live Injection</div>
                  <div className="text-xs font-bold text-zinc-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> QuickBooks Online
                  </div>
                  <div className="mt-4">
                    <div className="bg-emerald-50/80 border border-emerald-200 rounded-lg p-2 text-zinc-600 flex items-center gap-2 text-[10px] font-mono">
                      <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 15h6v6H3v-6zm2 2v2h2v-2H5zm10-2h2v2h-2v-2zm2 2h2v2h-2v-2zm0-2h2v2h-2v-2zm-2 4h2v2h-2v-2zm4 0h2v2h-2v-2z" />
                      </svg>
                      <span className="text-emerald-700 font-bold">QR Linked & Saved</span>
                    </div>
                  </div>
                  <div className="mt-3 text-[12px] text-zinc-500 tracking-tight leading-normal">
                    The tax signature parameters populate automatically right into your source document file.
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. BENEFIT / USP MATRIX ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-wider text-emerald-600 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
              Why eConnector
            </span>
            <h2 className="text-3xl font-bold text-zinc-950 mt-5 tracking-tight">
              Three reasons accountants choose our bridge.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="space-y-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center font-bold text-sm text-zinc-800 shadow-xs">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M12 3v16.5M12 19.5l-3-3m3 3l3-3" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                Eliminate Manual Double Entry
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed tracking-tight font-normal">
                Save hours of mechanical data logging every week. By executing updates automatically in the background, your financial staff never have to mirror parameters inside standalone terminals or web portals.
              </p>
            </div>

            <div className="space-y-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center font-bold text-sm text-zinc-800 shadow-xs">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                Guard Bookkeeping Accuracy
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed tracking-tight font-normal">
                Avoid copy-paste ledger errors. eConnector maps multi-line Invoices, continuous Sales Receipts, and Credit Notes accurately, ensuring your regular internal books mirror government balances exactly.
              </p>
            </div>

            <div className="space-y-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center font-bold text-sm text-zinc-800 shadow-xs">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                Uninterrupted Business Safety
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed tracking-tight font-normal">
                Never halt your daily customer billing procedures. If official systems experience server lag or maintenance, eConnector cues the ledger updates safely and completes the verification loop automatically later.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. PRICING MODAL SECTION ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-t border-zinc-200/60">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase text-center mb-4">
            Pricing Models
          </p>
          <h2 className="text-3xl font-bold text-center text-zinc-950 mb-4 tracking-tight">
            Simple, predictable billing.
          </h2>
          
          <p className="text-xs sm:text-sm text-zinc-500 text-center mb-16 max-w-md mx-auto tracking-tight font-medium bg-zinc-50 border border-zinc-200 px-4 py-2.5 rounded-2xl shadow-2xs">
            All plans incur a one-time pass through setup cost for eTIMS infrastructure fees of $70.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
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
              <div key={plan.name} className={`rounded-3xl p-8 border transition-all duration-300 relative ${plan.highlight ? 'bg-zinc-950 border-zinc-950 text-white md:-translate-y-3 shadow-xl shadow-zinc-950/10' : 'bg-white border-zinc-200 text-zinc-950 hover:border-zinc-300'}`}>
                {plan.highlight && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold bg-emerald-500 text-white px-3 py-1 rounded-full tracking-tight">
                    Most Popular
                  </span>
                )}
                <div className="mb-4">
                  <p className={`text-[11px] font-bold tracking-wider uppercase ${plan.highlight ? 'text-emerald-400' : 'text-zinc-400'}`}>
                    {plan.name}
                  </p>
                </div>
                
                <p className="text-xs mb-6" style={{ color: plan.highlight ? '#a1a1aa' : '#71717a' }}>
                  {plan.who}
                </p>
                
                <div className="flex items-baseline flex-wrap gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="text-xs text-zinc-400 font-normal tracking-tight">{plan.period}</span>
                </div>

                <p className={`text-xs font-medium mt-1 mb-8 ${plan.highlight ? 'text-emerald-400/90' : 'text-emerald-600'}`}>
                  {plan.localPrice}
                </p>
                
                <ul className="space-y-4 mb-8 border-t border-dashed pt-6 text-[13px]" style={{ borderColor: plan.highlight ? '#27272a' : '#e4e4e7' }}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3" style={{ color: plan.highlight ? '#d4d4d8' : '#52525b' }}>
                      <span className={`text-sm font-bold ${plan.highlight ? 'text-emerald-400' : 'text-emerald-600'}`}>✓</span>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                
                <a href={`${DASHBOARD_URL}/sign-up`} className="block text-center text-xs font-bold py-4 rounded-xl active:scale-[0.98] transition-all duration-200 tracking-tight shadow-2xs" style={{ backgroundColor: plan.highlight ? '#ffffff' : '#09090b', color: plan.highlight ? '#09090b' : '#ffffff' }}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-14 flex items-center justify-center gap-3 bg-zinc-50 border border-zinc-200 rounded-2xl p-4 max-w-sm mx-auto shadow-3xs">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <p className="text-xs text-zinc-600 font-medium tracking-tight">
              We accept payments instantly via <span className="text-emerald-600 font-bold">M-Pesa</span> or Credit Card.
            </p>
          </div>

        </div>
      </section>

      {/* ── 6. CLOSING CALL TO ACTION BANNER ────────────────────────── */}
      <section className="py-28 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to secure your automated bridge?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto mb-10 leading-relaxed font-normal">
            Link your QuickBooks profile within minutes and authorize zero-friction automated tax-stamping immediately.
          </p>
          <a href={`${DASHBOARD_URL}/sign-up`} className="inline-block bg-emerald-600 text-white text-sm font-bold tracking-tight px-10 py-4 rounded-xl hover:bg-emerald-500 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-emerald-600/10">
            Connect QuickBooks Now
          </a>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="py-14 px-6 bg-white border-t border-zinc-200/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12C8 9.79086 9.79086 8 12 8H20C22.2091 8 24 9.79086 24 12V20C24 22.2091 22.2091 24 20 24H12C9.79086 24 8 22.2091 8 20V12Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2.5" />
            </svg>
            <span className="text-sm font-bold tracking-tight text-zinc-900">eConnector</span>
          </div>
          <p className="text-xs text-zinc-400 text-center md:text-left leading-relaxed font-medium">
            Powered by{' '}
            <a href="https://tracksol.co.ke" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-zinc-200">
              TrackSol
            </a>
            {' '}· Support channels:{' '}
            <a href="mailto:info@ezeemoney.co.ke" className="text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-zinc-200">
              info@ezeemoney.co.ke
            </a>
          </p>
          <p className="text-xs font-mono text-zinc-400 tracking-tight">
            © {new Date().getFullYear()} Ezeemoney Ltd.
          </p>
        </div>
      </footer>

      {/* ── FLOATING CONTACT WIDGET ─────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        
        {!isContactOpen && (
          <button 
            onClick={() => setIsContactOpen(true)}
            className="flex items-center gap-2.5 bg-zinc-950 text-white px-5 py-3.5 rounded-xl hover:bg-zinc-800 active:scale-[0.97] transition-all duration-200 shadow-xl shadow-zinc-950/20 text-xs font-bold tracking-tight"
          >
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            Have questions? Talk to us
          </button>
        )}

        {isContactOpen && (
          <div className="w-80 bg-white border border-zinc-200 rounded-2xl shadow-2xl p-5 overflow-hidden transition-all duration-300 transform">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-4">
              <div>
                <h4 className="text-xs font-bold text-zinc-950 tracking-tight">Direct Support Desk</h4>
                <p className="text-[10px] text-zinc-400 font-mono mt-0.5">info@ezeemoney.co.ke</p>
              </div>
              <button 
                onClick={() => { setIsContactOpen(false); setFormSubmitted(false); }}
                className="text-zinc-400 hover:text-zinc-900 transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-xs font-bold border border-emerald-100">✓</div>
                <h5 className="text-xs font-bold text-zinc-950 tracking-tight">Inquiry transmitted</h5>
                <p className="text-[11px] text-zinc-500 max-w-[200px] mx-auto leading-normal font-normal">Our financial desk will route follow-up documentation to your mailbox shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Jane Doe" 
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-zinc-900 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Business Email</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@company.com" 
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-zinc-900 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Inquiry Message</label>
                  <textarea 
                    rows={3} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How do entities handle multiple active connectors?" 
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-zinc-900 font-medium resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-emerald-600 text-white text-xs font-bold py-3 rounded-xl hover:bg-emerald-700 active:scale-[0.98] transition-all duration-200 shadow-2xs"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        )}
      </div>

    </main>
  )
}