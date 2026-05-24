import Link from 'next/link'

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://econnector-dashboard-10.vercel.app'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900" style={{ fontFamily: "'Georgia', serif" }}>

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-semibold text-sm tracking-tight" style={{ fontFamily: "system-ui, sans-serif" }}>
              eConnector
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`${DASHBOARD_URL}/sign-in`}
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Sign in
            </a>
            <a
              href={`${DASHBOARD_URL}/sign-up`}
              className="text-sm bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-6"
            style={{ fontFamily: "system-ui, sans-serif" }}>
            KRA eTIMS Compliance
          </p>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] tracking-tight text-zinc-900 mb-8">
            Get your QuickBooks<br />
            <em className="italic text-emerald-700">eTIMS compliant</em><br />
            the easy way.
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "system-ui, sans-serif", fontWeight: 400 }}>
            Connect your accounting system to KRA eTIMS in minutes.
            No technical team required.
          </p>
          <a
            href={`${DASHBOARD_URL}/sign-up`}
            className="inline-block bg-zinc-900 text-white text-sm px-8 py-4 rounded-full hover:bg-zinc-700 transition-colors"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Start for free →
          </a>
          <p className="text-xs text-zinc-400 mt-4" style={{ fontFamily: "system-ui, sans-serif" }}>
            No credit card required
          </p>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal leading-snug text-zinc-900 mb-6">
            eTIMS compliance shouldn&apos;t cost you weeks of your life.
          </h2>
          <p className="text-lg text-zinc-700 leading-relaxed" style={{ fontFamily: "system-ui, sans-serif" }}>
            eConnector is an ERP-agnostic plugin that validates and submits
            your invoices directly to KRA — without the technical headache.
            Sign up, connect your QuickBooks, and your invoices are
            tax-compliant immediately.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase text-center mb-16"
            style={{ fontFamily: "system-ui, sans-serif" }}>
            How it works
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Sign up',
                body: 'Create your account and add your business KRA PIN. Takes under two minutes.',
              },
              {
                step: '02',
                title: 'Connect QuickBooks',
                body: 'Authorise eConnector to read your QBO invoices. No credentials stored — ever.',
              },
              {
                step: '03',
                title: 'Done',
                body: 'Every invoice you raise in QuickBooks is automatically submitted to KRA and stamped with a CU Invoice Number.',
              },
            ].map((item) => (
              <div key={item.step}>
                <p className="text-5xl font-normal text-emerald-500 mb-4 leading-none">{item.step}</p>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2"
                  style={{ fontFamily: "system-ui, sans-serif" }}>{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed"
                  style={{ fontFamily: "system-ui, sans-serif" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase text-center mb-4"
            style={{ fontFamily: "system-ui, sans-serif" }}>
            Pricing
          </p>
          <h2 className="text-3xl font-normal text-center text-zinc-900 mb-4">
            Simple, honest pricing.
          </h2>
          <p className="text-sm text-zinc-600 text-center mb-16"
            style={{ fontFamily: "system-ui, sans-serif" }}>
            All plans include the eTIMS compliance pass-on fee of $30–$50/mo per business KRA PIN.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
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
                className={`rounded-2xl p-8 border ${
                  plan.highlight
                    ? 'bg-zinc-900 border-zinc-900 text-white'
                    : 'bg-white border-zinc-200 text-zinc-900'
                }`}
              >
                <p className={`text-xs font-semibold tracking-widest uppercase mb-4 ${plan.highlight ? 'text-emerald-400' : 'text-zinc-400'}`}
                  style={{ fontFamily: "system-ui, sans-serif" }}>
                  {plan.name}
                </p>
                <p className="text-sm mb-2" style={{ fontFamily: "system-ui, sans-serif", color: plan.highlight ? '#a1a1aa' : '#71717a' }}>
                  {plan.who}
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-normal">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-zinc-400' : 'text-zinc-400'}`}
                    style={{ fontFamily: "system-ui, sans-serif" }}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm"
                      style={{ fontFamily: "system-ui, sans-serif", color: plan.highlight ? '#d4d4d8' : '#52525b' }}>
                      <span className={`text-xs ${plan.highlight ? 'text-emerald-400' : 'text-emerald-600'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${DASHBOARD_URL}/sign-up`}
                  className={`block text-center text-sm py-3 rounded-full transition-colors ${
                    plan.highlight
                      ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                      : 'bg-zinc-900 text-white hover:bg-zinc-700'
                  }`}
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {plan.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-normal text-white mb-6">
            Ready to be compliant?
          </h2>
          <a
            href={`${DASHBOARD_URL}/sign-up`}
            className="inline-block bg-white text-zinc-900 text-sm px-8 py-4 rounded-full hover:bg-zinc-100 transition-colors"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Start for free →
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-100 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="text-sm font-semibold" style={{ fontFamily: "system-ui, sans-serif" }}>eConnector</span>
          </div>
          <p className="text-xs text-zinc-400" style={{ fontFamily: "system-ui, sans-serif" }}>
            Powered by{' '}
            <a href="https://tracksol.co.ke" target="_blank" rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 transition-colors">
              TrackSol
            </a>
            {' '}· Questions?{' '}
            <a href="mailto:info@ezeemoney.co.ke"
              className="text-zinc-600 hover:text-zinc-900 transition-colors">
              info@ezeemoney.co.ke
            </a>
          </p>
          <p className="text-xs text-zinc-400" style={{ fontFamily: "system-ui, sans-serif" }}>
            © {new Date().getFullYear()} eConnector
          </p>
        </div>
      </footer>

    </main>
  )
}