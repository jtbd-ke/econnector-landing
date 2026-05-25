import Link from 'next/link'

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://econnector-dashboard-10.vercel.app'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-serif">

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Swapped brand dot to premium dark blue */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
            <span className="font-semibold text-sm tracking-tight font-sans">
              eConnector
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`${DASHBOARD_URL}/sign-in`}
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-sans"
            >
              Sign in
            </a>
            <a
              href={`${DASHBOARD_URL}/sign-up`}
              className="text-sm bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors font-sans"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Fixed mobile leading and tracking to eliminate text overlay */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight md:leading-[1.1] tracking-normal md:tracking-tight text-zinc-900 mb-6 md:mb-8">
            Get your <span className="text-[#2CA01C] font-medium">QuickBooks</span><br className="hidden md:block" />
            {' '}<em className="italic text-zinc-900">eTIMS compliant</em><br className="hidden md:block" />
            the smart way.
          </h1>
          <p className="text-base md:text-xl text-zinc-500 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-sans font-normal">
            eConnector validates and submits your invoices directly to KRA,
            without the technical headache and long wait.
            Sign up, connect your QuickBooks, and your invoices
            get tax-compliant immediately.
          </p>
          <a
            href={`${DASHBOARD_URL}/sign-up`}
            className="inline-block bg-[#2CA01C] text-white text-sm px-8 py-4 rounded-full hover:bg-[#248a18] transition-colors shadow-lg shadow-[#2CA01C]/20 font-sans"
          >
            Connect QuickBooks →
          </a>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ───────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-snug text-zinc-900 mb-6">
            eTIMS compliance shouldn&apos;t cost you weeks of your life.
          </h2>
          <p className="text-sm md:text-lg text-zinc-700 leading-relaxed font-sans">
            eConnector is an ERP-agnostic plugin that validates and submits
            your invoices directly to KRA — without the technical headache.
            Sign up, connect your QuickBooks, and your invoices are
            tax-compliant immediately.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase text-center mb-12 md:mb-16 font-sans">
            How it works
          </p>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
            {[
              {
                step: '01',
                title: 'Sign up',
                body: 'Create your account and add your business KRA PIN. Takes under two minutes.',
                icon: (
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Connect QuickBooks',
                body: 'Authorise eConnector to read your QBO invoices. No credentials stored — ever.',
                icon: (
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-[#2CA01C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Done',
                body: 'Every invoice you raise in QuickBooks is automatically submitted to KRA and stamped with a CU Invoice Number.',
                icon: (
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="text-center flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-50 mb-5 md:mb-6">
                  {item.icon}
                </div>
                {/* Changed steps color from emerald to clean modern indigo/blue text */}
                <p className="text-4xl md:text-5xl font-normal text-blue-800 mb-3 md:mb-4 leading-none">{item.step}</p>
                <h3 className="text-base md:text-lg font-semibold text-zinc-900 mb-2 font-sans">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-sans max-w-xs">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase text-center mb-4 font-sans">
            Pricing
          </p>
          <h2 className="text-2xl md:text-3xl font-normal text-center text-zinc-900 mb-4">
            Simple, honest pricing.
          </h2>
          <p className="text-sm text-zinc-500 text-center mb-12 md:mb-16 font-sans max-w-xl mx-auto">
            All plans include the eTIMS compliance pass-on fee of $30–$50/mo per business KRA PIN.
          </p>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {[
              {
                name: 'Starter',
                price: '$15',
                period: '/mo',
                who: 'Individual or sole trader',
                features: ['1 business', '1 connector', '1 user', 'Full eTIMS compliance', 'PDF receipt on every invoice'],
                cta: 'Get started',
                highlight: false,
              },
              {
                name: 'Business',
                price: '$25',
                period: '/mo per connector',
                who: 'SME with multiple businesses',
                features: ['Up to 3 businesses', '1 connector per business', 'Up to 5 users', 'Full eTIMS compliance', 'Priority support'],
                cta: 'Get started',
                highlight: true,
              },
              {
                name: 'Group',
                price: '$20',
                period: '/mo per connector',
                who: 'Holding group',
                features: ['4+ businesses', '1 connector per business', 'Unlimited users', 'Consolidated view', 'Dedicated support'],
                cta: 'Talk to us',
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 md:p-8 border transition-all ${
                  plan.highlight
                    ? 'bg-zinc-900 border-zinc-900 text-white md:scale-105 shadow-xl shadow-zinc-900/10'
                    : 'bg-white border-zinc-200 text-zinc-900'
                }`}
              >
                <p className={`text-xs font-semibold tracking-widest uppercase mb-4 font-sans ${plan.highlight ? 'text-blue-400' : 'text-zinc-400'}`}>
                  {plan.name}
                </p>
                <p className="text-sm mb-2 font-sans font-normal" style={{ color: plan.highlight ? '#a1a1aa' : '#71717a' }}>
                  {plan.who}
                </p>
                {/* Added wrap support to prevent cramped overlay on extreme narrow layouts */}
                <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1 mb-6">
                  <span className="text-3xl md:text-4xl font-normal">{plan.price}</span>
                  <span className="text-sm font-sans text-zinc-400 font-normal">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm font-sans"
                      style={{ color: plan.highlight ? '#d4d4d8' : '#52525b' }}>
                      <span className={`text-xs font-bold ${plan.highlight ? 'text-blue-400' : 'text-[#1E3A8A]'}`}>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`${DASHBOARD_URL}/sign-up`}
                  className={`block text-center text-sm py-3 rounded-full transition-colors font-sans font-medium ${
                    plan.highlight
                      ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                      : 'bg-zinc-900 text-white hover:bg-zinc-700'
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
      <section className="py-20 md:py-24 px-4 md:px-6 bg-zinc-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-6">
            Ready to be compliant?
          </h2>
          <a
            href={`${DASHBOARD_URL}/sign-up`}
            className="inline-block bg-[#2CA01C] text-white text-sm px-8 py-4 rounded-full hover:bg-[#248a18] transition-colors shadow-lg shadow-[#2CA01C]/30 font-sans"
          >
            Connect QuickBooks →
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-100 py-12 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
            <span className="text-sm font-semibold font-sans">eConnector</span>
          </div>
          <p className="text-xs text-zinc-400 font-sans text-center md:text-left leading-relaxed">
            Powered by{' '}
            <a href="https://tracksol.co.ke" target="_blank" rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 transition-colors underline underline-offset-2">
              TrackSol
            </a>
            {' '}· Questions?{' '}
            <a href="mailto:info@ezeemoney.co.ke"
              className="text-zinc-600 hover:text-zinc-900 transition-colors underline underline-offset-2">
              info@ezeemoney.co.ke
            </a>
          </p>
          <p className="text-xs text-zinc-400 font-sans">
            © {new Date().getFullYear()} eConnector
          </p>
        </div>
      </footer>

    </main>
  )
}