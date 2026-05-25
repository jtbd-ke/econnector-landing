import Link from 'next/link'

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://econnector-dashboard-10.vercel.app'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-serif antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* Subtle background decoration to remove empty space */}
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
              className="text-xs sm:text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-sans"
            >
              Sign in
            </a>
            <a
              href={`${DASHBOARD_URL}/sign-up`}
              className="text-xs sm:text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-sm font-sans"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Elite micro-badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200/80 mb-6 font-sans text-xs font-medium text-zinc-600 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2CA01C] animate-pulse" />
            <span>KRA eTIMS Integrated</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.15] sm:leading-[1.1] md:leading-[1.05] tracking-tight text-zinc-900 mb-6 sm:mb-8">
            Get your <span className="text-[#2CA01C] font-medium tracking-tight">QuickBooks</span><br className="hidden sm:block" />
            {' '}<em className="italic font-light text-zinc-900">eTIMS compliant</em><br className="hidden sm:block" />
            the smart way.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed font-sans font-normal px-2">
            eConnector validates and submits your invoices directly to KRA,
            without the technical headache and long wait times.
            Connect QuickBooks, automate compliance instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 font-sans">
            <a
              href={`${DASHBOARD_URL}/sign-up`}
              className="w-full sm:w-auto text-center bg-[#2CA01C] text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-[#248a18] transition-all shadow-md shadow-[#2CA01C]/10 hover:shadow-lg"
            >
              Connect QuickBooks →
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto text-center text-sm font-medium text-zinc-600 hover:text-zinc-900 px-6 py-3 transition-colors"
            >
              See how it works
            </a>
          </div>

          {/* ── NEW VISUAL UI ANCHOR (Pure Tailwind Mock Dashboard) ── */}
          <div className="relative max-w-3xl mx-auto rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-3 sm:p-4 shadow-xl shadow-zinc-200/40 font-sans">
            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden text-left">
              {/* Header block */}
              <div className="px-4 py-3 bg-zinc-50/80 border-b border-zinc-100 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                  <span className="font-mono ml-2 text-zinc-500">pipeline_status: active</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-green-50 text-green-700 font-medium text-[10px]">Real-time Sync</span>
              </div>
              
              {/* The Pipeline Interface Visual */}
              <div className="p-4 sm:p-6 grid sm:grid-cols-3 gap-4 items-center relative">
                {/* Box 1: Source */}
                <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/30">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-1">Source System</div>
                  <div className="text-sm font-semibold text-zinc-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2CA01C]" /> QuickBooks Online
                  </div>
                  <div className="mt-3 text-xs font-mono text-zinc-500">Invoice #INV-2026-04</div>
                </div>

                {/* Box 2: Connector Step */}
                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/20 relative">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-blue-500 mb-1">eConnector Node</div>
                  <div className="text-sm font-semibold text-[#1E3A8A] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#1E3A8A] animate-pulse" /> Validating JSON...
                  </div>
                  <div className="mt-3 text-[11px] text-zinc-600">Auto-parsing tax codes</div>
                </div>

                {/* Box 3: Destination */}
                <div className="p-4 rounded-xl border border-green-100 bg-green-50/20">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-green-600 mb-1">KRA Response</div>
                  <div className="text-sm font-semibold text-green-700 flex items-center gap-1.5">
                    ✓ eTIMS Approved
                  </div>
                  <div className="mt-3 text-[10px] font-mono text-green-700 bg-green-100/50 px-1.5 py-0.5 rounded truncate">
                    CU-INV: KRA2940284X
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

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 scroll-mt-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase text-center mb-16 font-sans">
            How it works
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                step: '01',
                title: 'Sign up in seconds',
                body: 'Create your secure account profile and input your business KRA PIN. Setup takes less than two minutes.',
                icon: (
                  <svg className="w-6 h-6 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Link QuickBooks',
                body: 'Securely authorize eConnector via standard Intuit OAuth protocol. We access data layout, never passwords.',
                icon: (
                  <svg className="w-6 h-6 text-[#2CA01C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Automated Transmission',
                body: 'Every subsequent invoice you publish is systematically signed, formatted, sent to KRA, and written back.',
                icon: (
                  <svg className="w-6 h-6 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="group p-6 sm:p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 bg-white hover:shadow-xl hover:shadow-zinc-100/50 transition-all duration-300 text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 mb-6 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="font-mono text-xs text-zinc-400 font-semibold mb-2">{item.step}</div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-2 font-sans tracking-tight">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans">{item.body}</p>
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