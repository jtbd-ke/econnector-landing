import Link from 'next/link'

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://econnector-dashboard-10.vercel.app'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* Stripe-inspired ambient grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_80%,transparent_100%)] h-[900px] pointer-events-none opacity-60" />

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg backdrop-saturate-150 border-b border-zinc-200/50 supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-3 h-3 rounded-md bg-[#0066FF] transform rotate-45 transition-transform group-hover:rotate-90 duration-500 ease-out" />
            <span className="font-semibold text-sm tracking-tight">
              eConnector
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`${DASHBOARD_URL}/sign-in`}
              className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              Sign in
            </a>
            <a
              href={`${DASHBOARD_URL}/sign-up`}
              className="text-xs font-medium bg-zinc-950 text-white px-4 py-2.5 rounded-full hover:bg-zinc-800 active:scale-[0.97] transition-all duration-300 shadow-sm"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative pt-28 sm:pt-40 pb-20 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Apple-style Premium Core Pill */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="bg-blue-50/30 border border-blue-100/70 rounded-2xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-left shadow-[0_2px_12px_rgba(0,102,255,0.03)]">
              <div className="flex items-center gap-2.5 pl-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]"></span>
                </span>
                <p className="text-xs font-medium text-zinc-600 tracking-tight">
                  QuickBooks Compliance Core
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
                <span className="text-[10px] font-bold bg-red-50 text-[#C61B23] border border-red-100/60 px-2.5 py-0.5 rounded-md tracking-tight">
                  KE eTIMS Active
                </span>
                <span className="text-[10px] font-medium bg-zinc-50 text-zinc-500 border border-zinc-200/60 px-2.5 py-0.5 rounded-md tracking-tight">
                  UG EFRIS
                </span>
                <span className="text-[10px] font-medium bg-zinc-50 text-zinc-500 border border-zinc-200/60 px-2.5 py-0.5 rounded-md tracking-tight">
                  RW EBM
                </span>
                <span className="text-[10px] font-medium bg-zinc-50 text-zinc-400 border border-zinc-200/60 border-dashed px-2.5 py-0.5 rounded-md tracking-tight">
                  TZ TRA
                </span>
              </div>
            </div>
          </div>

          {/* Crisp, Balanced Hero Typography */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-zinc-950 mb-6 flex flex-col items-center gap-1 sm:gap-2 leading-[1.2] sm:leading-[1.1]">
            <span className="block max-w-full truncate">Stop exporting invoices.</span>
            <span className="block max-w-full text-zinc-900/90 font-medium">Automate your eTIMS compliance</span>
            <span className="block max-w-full font-medium">
              straight from <span className="text-[#2CA01C] font-semibold">QuickBooks.</span>
            </span>
          </h1>
          
          {/* High-fidelity descriptive sub-text */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed font-normal px-2">
            Stop wasting hours manually copy-pasting data into KRA portals. 
            eConnector bridges QuickBooks Online directly with eTIMS endpoints—automatically 
            generating valid, eTIMS QR Codes with tax invoice numbers the moment you hit save.
          </p>
          
          {/* Tactile Action Framework */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 sm:mb-24">
            <a
              href={`${DASHBOARD_URL}/sign-up`}
              className="w-full sm:w-auto text-center bg-[#2CA01C] text-white text-xs font-semibold tracking-tight px-8 py-4 rounded-full hover:bg-[#248a18] active:scale-[0.98] transition-all duration-300 shadow-[0_8px_16px_-6px_rgba(44,160,28,0.5)]"
            >
              Connect QuickBooks Now
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto text-center text-xs font-medium text-zinc-600 hover:text-zinc-900 px-6 py-3 transition-colors duration-300"
            >
              See how it works →
            </a>
          </div>

          {/* Symmetrical Interface Map */}
          <div className="relative max-w-5xl mx-auto rounded-2xl border border-blue-500/10 bg-blue-50/5 p-1.5 sm:p-2">
            <div className="bg-white rounded-xl border border-zinc-200/60 overflow-hidden text-left shadow-sm">
              <div className="px-4 py-3 bg-zinc-50/50 border-b border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="font-mono ml-1 text-[#0066FF] font-medium tracking-tight bg-blue-50/60 px-2 py-0.5 rounded">
                    pipeline_loop: active_sync
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-blue-50/60 text-[#0066FF] font-medium tracking-tight text-[10px]">Bi-Directional Flow</span>
              </div>
              
              <div className="p-3 sm:p-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 items-stretch bg-zinc-50/20">
                
                {/* Node 1 */}
                <div className="group p-4 rounded-xl border border-zinc-200/70 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.01)] flex flex-col justify-between transition-all duration-500 ease-out hover:border-[#0066FF]/30 hover:shadow-md hover:shadow-blue-50/20">
                  <div>
                    <div className="text-[9px] uppercase font-bold tracking-wider text-zinc-400 mb-2">01. Source Event</div>
                    <div className="text-xs font-semibold text-zinc-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2CA01C]" /> QuickBooks Online
                    </div>
                  </div>
                  <div className="mt-6 text-[11px] font-mono text-zinc-400 border-t border-zinc-100 pt-3">
                    Payload Vector: <span className="text-zinc-800 font-medium">#INV-2026-04</span>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="group p-4 rounded-xl border border-zinc-200/70 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.01)] flex flex-col justify-between transition-all duration-500 ease-out hover:border-[#0066FF]/30 hover:shadow-md hover:shadow-blue-50/20">
                  <div>
                    <div className="text-[9px] uppercase font-bold tracking-wider text-zinc-400 mb-2">02. Transmission</div>
                    <div className="text-xs font-semibold text-zinc-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" /> eConnector Engine
                    </div>
                  </div>
                  <div className="mt-6 text-[11px] text-zinc-400 leading-normal border-t border-zinc-100 pt-3">
                    Parsing account schema maps securely...
                  </div>
                </div>

                {/* Node 3 */}
                <div className="group p-4 rounded-xl border border-zinc-200/70 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.01)] flex flex-col justify-between transition-all duration-500 ease-out hover:border-[#0066FF]/30 hover:shadow-md hover:shadow-blue-50/20">
                  <div>
                    <div className="text-[9px] uppercase font-bold tracking-wider text-zinc-400 mb-2">03. Fiscal Gateway</div>
                    <div className="text-xs font-semibold text-zinc-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C61B23]" /> KRA eTIMS API
                    </div>
                  </div>
                  <div className="mt-6 text-[11px] font-mono text-zinc-500 border-t border-zinc-100 pt-3">
                    Payload Stamped OK
                  </div>
                </div>

                {/* Node 4 */}
                <div className="group p-4 rounded-xl border border-zinc-200/70 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.01)] flex flex-col justify-between transition-all duration-500 ease-out hover:border-[#0066FF]/30 hover:shadow-md hover:shadow-blue-50/20">
                  <div>
                    <div className="text-[9px] uppercase font-bold tracking-wider text-zinc-400 mb-2">04. Writeback Sync</div>
                    <div className="text-xs font-semibold text-zinc-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2CA01C]" /> QuickBooks Online
                    </div>
                  </div>
                  
                  <div className="mt-5 text-[11px] font-mono text-zinc-400 border-t border-zinc-100 pt-3 space-y-2">
                    <div>
                      Appended Vector: <span className="text-zinc-800 font-medium">#INV-2026-04</span>
                    </div>
                    <div className="bg-zinc-50 border border-zinc-200/80 rounded px-2 py-1 text-[10px] text-zinc-600 font-medium flex items-center gap-2">
                      <svg className="w-3 h-3 text-zinc-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 15h6v6H3v-6zm2 2v2h2v-2H5zm10-2h2v2h-2v-2zm2 2h2v2h-2v-2zm0-2h2v2h-2v-2zm-2 4h2v2h-2v-2zm4 0h2v2h-2v-2zM11 11h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-4h2v2h-2v-2zm2 2h2v2h-2v-2z" />
                      </svg>
                      <div className="truncate text-[10px] font-sans tracking-tight text-zinc-500">
                        QR Code Linked
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── PROBLEM STATEMENT ───────────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-6 bg-zinc-50/50 border-y border-zinc-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-950 mb-5">
            eTIMS compliance shouldn&apos;t cost you weeks of your life.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            eConnector is an enterprise-grade, lightweight bridge built exclusively to map your 
            QuickBooks accounts directly into Kenya Revenue Authority endpoints. No custom development, 
            no infrastructure changes, completely seamless.
          </p>
        </div>
      </section>

      {/* ── ENGINE FLOW SECTION ─────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 sm:py-32 px-5 sm:px-6 bg-white relative scroll-mt-12">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-[11px] font-bold tracking-wider text-[#0066FF] uppercase bg-blue-50 px-3 py-1.5 rounded-full">
              The Engine Flow
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-zinc-950 mt-5 tracking-tight">
              Three steps to absolute automation.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {[
              {
                title: 'Secure Onboarding',
                body: 'Register your secure administrative profile and declare your official business KRA PIN. Infrastructure provisions immediately inside a two-minute window.',
                icon: (
                  <svg className="w-4 h-4 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                  </svg>
                ),
              },
              {
                title: 'Authorize QuickBooks',
                body: 'Establish an immutable handshake with your QuickBooks accounts via official secure protocols. We never manage, touch, or store direct user credentials.',
                icon: (
                  <svg className="w-4 h-4 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                title: 'Continuous Delivery',
                body: 'Every individual invoice finalized in your system gets dynamically validated, structurally signed, and returned complete with a legitimate KRA CU system number.',
                icon: (
                  <svg className="w-4 h-4 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div 
                key={item.title} 
                className="relative group p-6 sm:p-8 rounded-2xl border border-zinc-200/80 bg-white transition-all duration-500 ease-out text-left hover:border-[#0066FF]/30 hover:shadow-xl hover:shadow-blue-50/20"
              >
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50/60 border border-blue-100/50 mb-6 transition-transform duration-500 group-hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-zinc-950 mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-zinc-500 leading-relaxed font-normal">
                  {item.body}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#0066FF] transition-colors duration-500 rounded-b-2xl" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-6 bg-zinc-50/40 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase text-center mb-4">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-zinc-950 mb-3 tracking-tight">
            Simple, transparent billing.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 text-center mb-16 max-w-lg mx-auto">
            All tiers transparently pass through the baseline eTIMS dynamic core pass-on infrastructure fees of $30–$50/mo.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {[
              {
                name: 'Starter',
                price: '$15',
                period: '/mo',
                who: 'Individual operators or sole traders',
                features: ['1 unified business profile', '1 pipeline connector', '1 administrative user', 'Fully localized eTIMS pass-through', 'Standard cloud data logging'],
                cta: 'Get started',
                highlight: false,
              },
              {
                name: 'Business',
                price: '$25',
                period: '/mo per connector',
                who: 'Growing SMEs running multiple branches',
                features: ['Up to 3 unique businesses', '1 active connector per unit', 'Up to 5 collaborative seats', 'Fully localized eTIMS pass-through', 'Priority API pipeline queueing'],
                cta: 'Get started',
                highlight: true,
              },
              {
                name: 'Group',
                price: '$20',
                period: '/mo per connector',
                who: 'Holding companies & large portfolios',
                features: ['4+ active entity business configurations', '1 operational connector per unit', 'Unlimited administrative seats', 'Consolidated analytical log map', 'Dedicated priority account lead'],
                cta: 'Talk to us',
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 sm:p-8 border transition-all duration-500 ease-out ${
                  plan.highlight
                    ? 'bg-zinc-950 border-zinc-950 text-white md:-translate-y-2 shadow-xl shadow-zinc-950/10'
                    : 'bg-white border-zinc-200/80 text-zinc-950 hover:border-zinc-300'
                }`}
              >
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
                
                <div className="flex items-baseline flex-wrap gap-1 mb-8">
                  <span className="text-3xl sm:text-4xl font-semibold tracking-tight">{plan.price}</span>
                  <span className="text-xs text-zinc-400 font-normal tracking-tight">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8 border-t border-dashed pt-6 text-xs sm:text-[13px]" style={{ borderColor: plan.highlight ? '#27272a' : '#f4f4f5' }}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5"
                      style={{ color: plan.highlight ? '#d4d4d8' : '#52525b' }}>
                      <span className={`text-xs font-bold ${plan.highlight ? 'text-blue-400' : 'text-[#0066FF]'}`}>✓</span>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`${DASHBOARD_URL}/sign-up`}
                  className="block text-center text-xs font-semibold py-3.5 rounded-full active:scale-[0.98] transition-all duration-300 tracking-tight"
                  style={{
                    backgroundColor: plan.highlight ? '#ffffff' : '#09090b',
                    color: plan.highlight ? '#09090b' : '#ffffff'
                  }}
                >
                  {plan.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-6 bg-zinc-950 relative overflow-hidden">
        {/* Restored and Refined Dot Matrix Mask */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none" />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-5 tracking-tight">
            Ready to secure your automated pipeline?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Connect your current erp or accounting system nodes within minutes and offload processing queues automatically.
          </p>
          <a
            href={`${DASHBOARD_URL}/sign-up`}
            className="inline-block bg-[#2CA01C] text-white text-xs font-semibold tracking-tight px-8 py-4 rounded-full hover:bg-[#248a18] active:scale-[0.98] transition-all duration-300 shadow-[0_8px_16px_-6px_rgba(44,160,28,0.4)]"
          >
            Connect QuickBooks Now
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-100 py-12 px-5 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-md bg-[#0066FF] transform rotate-45" />
            <span className="text-sm font-semibold tracking-tight">eConnector</span>
          </div>
          <p className="text-xs text-zinc-400 text-center md:text-left leading-relaxed">
            Powered by{' '}
            <a href="https://tracksol.co.ke" target="_blank" rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-zinc-200">
              TrackSol
            </a>
            {' '}· Inquiry channels:{' '}
            <a href="mailto:info@ezeemoney.co.ke"
              className="text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-zinc-200">
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