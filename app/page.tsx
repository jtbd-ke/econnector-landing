import Link from 'next/link'

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://econnector-dashboard-10.vercel.app'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-serif antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* Subtle background matrix to eliminate empty space */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] h-[800px] pointer-events-none opacity-70" />

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-3 h-3 rounded-md bg-[#1E3A8A] transform rotate-45 transition-transform group-hover:rotate-90 duration-300" />
            <span className="font-semibold text-sm tracking-tight font-sans">
              eConnector
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`${DASHBOARD_URL}/sign-in`}
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-sans"
            >
              Sign in
            </a>
            <a
              href={`${DASHBOARD_URL}/sign-up`}
              className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-sm font-sans"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-36 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* East African Core Regional Dynamic Compliance Core Banner */}
          <div className="max-w-3xl mx-auto mb-10 font-sans">
            <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-left shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2CA01C] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2CA01C]"></span>
                </span>
                <p className="text-xs font-semibold text-zinc-700 tracking-tight">
                  Regional East Africa QuickBooks Compliance Core
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] font-medium bg-blue-50 text-[#1E3A8A] border border-blue-100 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <span className="font-bold">KE</span> eTIMS Active
                </span>
                <span className="text-[11px] font-medium bg-zinc-100 text-zinc-500 border border-zinc-200 px-2.5 py-1 rounded-md">
                  <span className="font-bold text-zinc-400">UG</span> EFRIS Coming Soon
                </span>
                <span className="text-[11px] font-medium bg-zinc-100 text-zinc-500 border border-zinc-200 px-2.5 py-1 rounded-md">
                  <span className="font-bold text-zinc-400">RW</span> EBM Coming Soon
                </span>
                <span className="text-[11px] font-medium bg-zinc-100 text-zinc-400 border border-zinc-200 border-dashed px-2.5 py-1 rounded-md">
                  TZ TRA/TCRA Next
                </span>
              </div>
            </div>
          </div>

          {/* Cleaned Pain-Point Punchline Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] sm:leading-[1.1] md:leading-[1.05] tracking-tight text-zinc-900 mb-6 sm:mb-8">
            Stop exporting invoices.<br className="hidden sm:block" />
            Automate your eTIMS compliance<br className="hidden sm:block" />
            straight from <span className="text-[#2CA01C] font-semibold">QuickBooks.</span>
          </h1>
          
          {/* Refened localized hero body copy */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed font-sans font-normal px-2">
            Stop wasting hours manually copy-pasting data into KRA portals. 
            eConnector bridges QuickBooks Online directly with eTIMS endpoints—automatically 
            generating valid, eTIMS QR Codes with tax invoice numbers the moment you hit save.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 font-sans">
            <a
              href={`${DASHBOARD_URL}/sign-up`}
              className="w-full sm:w-auto text-center bg-[#2CA01C] text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-[#248a18] transition-all shadow-md shadow-[#2CA01C]/10 hover:shadow-lg"
            >
              Connect QuickBooks Now →
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto text-center text-sm font-medium text-zinc-600 hover:text-zinc-900 px-6 py-3 transition-colors"
            >
              See how it works
            </a>
          </div>

          {/* Upgraded Closed-Loop Pipeline Visual Component with Mirrored Writeback Layout */}
          <div className="relative max-w-5xl mx-auto rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-3 sm:p-4 shadow-xl shadow-zinc-200/40 font-sans">
            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden text-left">
              <div className="px-4 py-3 bg-zinc-50/80 border-b border-zinc-100 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                  <span className="font-mono ml-2 text-zinc-500">pipeline_loop: closed_and_verified</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-green-50 text-green-700 font-medium text-[10px]">Bi-Directional Sync</span>
              </div>
              
              <div className="p-4 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch relative">
                
                {/* Node 1: QBO Origin */}
                <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/30 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-1">01. Source Event</div>
                    <div className="text-sm font-semibold text-zinc-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#2CA01C]" /> QuickBooks Online
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-500">
                    Invoice: <span className="text-zinc-800 font-semibold block mt-0.5">#INV-2026-04</span>
                  </div>
                </div>

                {/* Node 2: Processing Tunnel */}
                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/10 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-blue-500 mb-1">02. Transmission</div>
                    <div className="text-sm font-semibold text-[#1E3A8A] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1E3A8A] animate-pulse" /> eConnector Core
                    </div>
                  </div>
                  <div className="mt-4 text-[11px] text-zinc-500 leading-tight">
                    Parsing metadata mapping schemas securely...
                  </div>
                </div>

                {/* Node 3: Fiscal Endpoint */}
                <div className="p-4 rounded-xl border border-orange-100 bg-orange-50/20 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-orange-600 mb-1">03. Fiscal Gateway</div>
                    <div className="text-sm font-semibold text-orange-700 flex items-center gap-1.5">
                      🏛️ KRA eTIMS API
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-orange-100/50 text-[10px] font-mono text-orange-800">
                    Payload Stamped OK
                  </div>
                </div>

                {/* Node 4: The Loop Closer - Perfectly Mirrored Writeback Layout */}
                <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/30 flex flex-col justify-between relative overflow-hidden">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-green-600 mb-1">04. Writeback Sync</div>
                    <div className="text-sm font-semibold text-zinc-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#2CA01C]" /> QuickBooks Online
                    </div>
                  </div>
                  
                  {/* Metadata precisely attached right underneath original context reference */}
                  <div className="mt-4 pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-500 space-y-1.5">
                    <div>
                      Invoice: <span className="text-zinc-800 font-semibold block mt-0.5">#INV-2026-04</span>
                    </div>
                    <div className="bg-green-50/60 border border-green-100 rounded p-1.5 text-[10px] space-y-0.5 text-green-800 font-medium">
                      <div className="flex items-center gap-1">🟢 QR Code: Attached</div>
                      <div className="truncate font-semibold">CU No: KRACU03000000004</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── PROBLEM STATEMENT ───────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 bg-zinc-50/70 border-y border-zinc-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-zinc-900 mb-6 tracking-tight">
            eTIMS compliance shouldn&apos;t cost you weeks of your life.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed font-sans max-w-2xl mx-auto">
            eConnector is an enterprise-grade, lightweight bridge built exclusively to map your 
            QuickBooks accounts directly into Kenya Revenue Authority endpoints. No custom development, 
            no infrastructure changes, completely seamless.
          </p>
        </div>
      </section>

      {/* ── HIGHLY ENHANCED "HOW IT WORKS" SECTION ─────────────────── */}
      <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6 bg-white relative scroll-mt-12">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
            <span className="text-xs font-bold tracking-widest text-[#1E3A8A] uppercase bg-blue-50/70 border border-blue-100 px-3 py-1.5 rounded-full font-sans">
              The Engine Flow
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-900 mt-5 tracking-tight leading-tight">
              Three steps to absolute <em className="italic font-light text-[#1E3A8A]">automation.</em>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                step: '01',
                title: 'Secure Onboarding',
                body: 'Register your secure administrative profile and declare your official business KRA PIN. Infrastructure provisions immediately inside a two-minute window.',
                icon: (
                  <svg className="w-5 h-5 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Authorize QuickBooks',
                body: 'Establish an immutable handshake with your QuickBooks accounts via official secure protocols. We never manage, touch, or store direct user credentials.',
                icon: (
                  <svg className="w-5 h-5 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Continuous Delivery',
                body: 'Every individual invoice finalized in your system gets dynamically validated, structurally signed, and returned complete with a legitimate KRA CU system number.',
                icon: (
                  <svg className="w-5 h-5 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div 
                key={item.step} 
                className="relative group p-6 sm:p-8 rounded-2xl border border-zinc-200/60 bg-white hover:bg-zinc-50/30 transition-all duration-300 text-left overflow-hidden hover:border-[#1E3A8A]/30 hover:shadow-xl hover:shadow-zinc-100/80"
              >
                <div className="absolute right-4 top-4 font-sans text-7xl font-bold text-blue-900/[0.03] group-hover:text-[#1E3A8A]/[0.06] transition-colors duration-300 select-none pointer-events-none">
                  {item.step}
                </div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100/50 mb-8 transition-transform group-hover:scale-105 duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-3 font-sans tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-normal relative z-10">
                  {item.body}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#1E3A8A] transition-colors duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 bg-zinc-50/80 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase text-center mb-4 font-sans">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl font-normal text-center text-zinc-900 mb-3 tracking-tight">
            Simple, transparent billing.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 text-center mb-16 font-sans max-w-lg mx-auto">
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
                className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-zinc-900 border-zinc-900 text-white md:-translate-y-2 shadow-xl shadow-zinc-900/10'
                    : 'bg-white border-zinc-200 text-zinc-900 hover:border-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4 font-sans">
                  <p className={`text-xs font-bold tracking-widest uppercase ${plan.highlight ? 'text-blue-400' : 'text-zinc-400'}`}>
                    {plan.name}
                  </p>
                  {plan.highlight && (
                    <span className="text-[10px] font-semibold bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">
                      Most Selected
                    </span>
                  )}
                </div>
                
                <p className="text-xs sm:text-sm mb-4 font-sans" style={{ color: plan.highlight ? '#a1a1aa' : '#71717a' }}>
                  {plan.who}
                </p>
                
                <div className="flex items-baseline flex-wrap gap-1 mb-8">
                  <span className="text-3xl sm:text-4xl font-normal tracking-tight">{plan.price}</span>
                  <span className="text-xs font-sans text-zinc-400 font-normal">{plan.period}</span>
                </div>
                
                <ul className="space-y-3.5 mb-8 border-t border-dashed pt-6 font-sans" style={{ borderColor: plan.highlight ? '#3f3f46' : '#e4e4e7' }}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm"
                      style={{ color: plan.highlight ? '#d4d4d8' : '#52525b' }}>
                      <span className={`text-xs font-bold mt-0.5 ${plan.highlight ? 'text-blue-400' : 'text-[#1E3A8A]'}`}>✓</span>
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`${DASHBOARD_URL}/sign-up`}
                  className={`block text-center text-xs sm:text-sm font-medium py-3 rounded-full transition-all font-sans ${
                    plan.highlight
                      ? 'bg-white text-zinc-900 hover:bg-zinc-100 shadow-md'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  {plan.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-normal text-white mb-6 tracking-tight">
            Ready to secure your automated pipeline?
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Connect your current system nodes within minutes and offload processing queues automatically.
          </p>
          <a
            href={`${DASHBOARD_URL}/sign-up`}
            className="inline-block bg-[#2CA01C] text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-[#248a18] transition-all shadow-xl shadow-[#2CA01C]/20 font-sans"
          >
            Connect QuickBooks Now →
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-100 py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-md bg-[#1E3A8A] transform rotate-45" />
            <span className="text-sm font-semibold font-sans">eConnector</span>
          </div>
          <p className="text-xs text-zinc-400 font-sans text-center md:text-left leading-relaxed">
            Powered by{' '}
            <a href="https://tracksol.co.ke" target="_blank" rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-zinc-200">
              TrackSol
            </a>
            {' '}· Inquiry channels:{' '}
            <a href="mailto:info@ezeemoney.co.ke"
              className="text-zinc-600 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-zinc-200">
              info@ezeemoney.co.ke
            </a>
          </p>
          <p className="text-[11px] font-mono text-zinc-400">
            © {new Date().getFullYear()} eConnector Systems Ltd.
          </p>
        </div>
      </footer>

    </main>
  )
}