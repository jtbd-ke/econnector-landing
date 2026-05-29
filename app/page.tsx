import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* ========================================== */}
      {/* BLOCK 1: THE HERO SECTION                  */}
      {/* ========================================== */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* The Pill Badge - Hooks QBO users instantly */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6 tracking-wide shadow-sm">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Now Live for QuickBooks Online
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Get eTIMS compliant without changing how you invoice.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
          An automated background bridge that syncs your <strong className="text-gray-900">QuickBooks Online</strong> transactions directly to eTIMS. No manual entries, no workflow changes, and zero IT headaches.
        </p>

        {/* CTA Button & Micro-copy */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-1">
            Connect QuickBooks Now
          </button>
          <span className="text-sm text-gray-500 mt-3 font-medium">Setup takes less than 5 minutes.</span>
        </div>
      </section>

      {/* ========================================== */}
      {/* BLOCK 2: THE CONTRAST (CONTEXT-AWARE)      */}
      {/* ========================================== */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        
        {/* --- DESKTOP VIEW: Split-Screen Matrix (Hidden on Mobile) --- */}
        <div className="hidden md:grid grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          {/* Left Column: The Old Way */}
          <div>
            <h3 className="text-xl font-bold text-gray-400 mb-6 border-b pb-2">The Old Manual Way</h3>
            <ul className="space-y-5 text-gray-600">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">❌</span>
                Double-tax invoicing and double-work effort by creating tax invoices manually.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">❌</span>
                Data entry mistakes stemming from constant, tedious manual entries.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">❌</span>
                Mismatched QBO vs. ETR reconciliations at the end of the month.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">❌</span>
                Lost administrative hours fixing errors and hunting down compliance slips.
              </li>
            </ul>
          </div>

          {/* Right Column: The New Way */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-6 border-b border-blue-100 pb-2">The eConnector Way</h3>
            <ul className="space-y-5 text-gray-900 font-medium">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-3">✅</span>
                Paid transactions trigger automatic, hands-free eTIMS processing in the background.
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-3">✅</span>
                Flawless data mapping directly from your source data without typos or missing fields.
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-3">✅</span>
                Real-time automated ledger balance mapping between QuickBooks and the tax authority.
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-3">✅</span>
                Complete, automated background synchronization loops completed in under 60 seconds.
              </li>
            </ul>
          </div>
        </div>

        {/* --- MOBILE VIEW: USP-First Stack (Hidden on Desktop) --- */}
        <div className="md:hidden flex flex-col space-y-8">
          
          <div className="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Direct QuickBooks Online link provides accurate 1-to-1 eTIMS invoice issuance.</h3>
            <p className="text-gray-600 text-sm mb-3">Eliminates the risk of double-tax invoicing challenges caused by manual ETR tax invoice issuance.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Accurate, hands-free data mapping directly from your QuickBooks source.</h3>
            <p className="text-gray-600 text-sm mb-3">Permanently eliminates tedious manual data entry typos and exhausting month-end QBO reconciliations.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Automated background eTIMS tax invoice generation.</h3>
            <p className="text-gray-600 text-sm mb-3">Reclaims wasted administrative hours spent fixing human errors, giving your finance team more time to focus on higher-value tasks.</p>
          </div>

        </div>

      </section>
    </div>
  );
}