"use client";

import React from 'react';

export default function LandingPage() {
  return (
    /* Root container: Snapping environments are modernly scoped to desktop viewports to protect mobile stacking height */
    <div className="min-h-screen lg:h-screen lg:overflow-y-auto lg:snap-y lg:snap-mandatory scroll-smooth bg-gray-50 text-gray-900 font-sans antialiased">
      
      {/* ========================================== */}
      {/* NAVIGATION BAR (STAYS FLOATING)            */}
      {/* ========================================== */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">eC</span>
            <span className="font-bold text-xl tracking-tight text-gray-900">eConnector</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#/connector-dashboard/signin" 
              className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign In
            </a>
            <a 
              href="#/connector-dashboard/signup" 
              className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>

      {/* ========================================== */}
      {/* SECTION 1: THE HERO VIEWPORT               */}
      {/* ========================================== */}
      <section className="snap-start scroll-mt-20 min-h-screen flex items-center justify-center px-6 py-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        {/* Left Column: Symmetrical Persuasion Stack */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 text-sm font-semibold mb-6 border border-emerald-200 tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Now Live for QuickBooks Online
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 leading-tight">
            Get eTIMS compliant without changing how you invoice.
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            An automated background bridge that syncs your <strong className="text-gray-900">QuickBooks Online</strong> transactions directly to eTIMS. No manual entries, no workflow changes, and zero IT headaches.
          </p>

          <div className="flex flex-col items-center lg:items-start w-full sm:w-auto">
            <a 
              href="#/connector-dashboard/signup" 
              className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-12 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Connect QuickBooks Now
            </a>
            <span className="text-sm text-gray-500 mt-3 font-medium">Setup takes less than 5 minutes.</span>
          </div>
        </div>

        {/* Right Column: Vertically Centered Simplified Theme Dashboard */}
        <div className="lg:col-span-6 w-full flex items-center justify-center h-full">
          <div className="w-full max-w-md md:max-w-xl bg-gray-900 p-3 rounded-2xl shadow-2xl border border-gray-800 transform hover:scale-[1.01] transition-transform duration-300">
            {/* Screen Viewport */}
            <div className="bg-white rounded-lg p-4 text-xs font-sans relative overflow-hidden shadow-inner border border-gray-200 aspect-[16/10] flex flex-col justify-between">
              
              {/* Top Navigation Simulation */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-3">
                <div className="flex items-center space-x-2">
                  <div className="h-5 w-5 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-[10px]">qb</div>
                  <span className="font-bold text-gray-700">QuickBooks Online Dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">Live Bridge Connected</span>
                </div>
              </div>

              {/* Core Invoice Context Loop */}
              <div className="grid grid-cols-3 gap-3 items-start flex-1">
                <div className="col-span-2 space-y-2 border border-gray-100 p-2 rounded bg-gray-50/50">
                  <div className="flex justify-between items-center border-b pb-1 mb-1">
                    <span className="font-bold text-gray-800 text-[10px]">Tax Invoice #INV-0482</span>
                    <span className="text-gray-400 text-[8px]">29 May 2026</span>
                  </div>
                  <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                  <div className="h-3 w-full bg-blue-50/50 rounded border border-blue-100 flex items-center justify-between px-1 text-[9px] text-blue-700 font-semibold mt-4">
                    <span>Total Amount (Tax Incl.)</span>
                    <span>KES 45,000.00</span>
                  </div>
                </div>

                {/* Secure KRA Validation Node */}
                <div className="col-span-1 border border-emerald-200 bg-emerald-50/40 p-2 rounded flex flex-col items-center justify-between h-full space-y-2 relative text-center">
                  <div className="text-[8px] font-extrabold uppercase tracking-wider text-emerald-800">eTIMS Certified</div>
                  
                  {/* Generated QR Code Representation */}
                  <div className="w-14 h-14 bg-white border border-gray-300 rounded p-1 flex flex-wrap items-center justify-center gap-[2px] shadow-sm relative">
                    <div className="w-2 h-2 bg-gray-900"></div><div className="w-2 h-2 bg-gray-400"></div><div className="w-2 h-2 bg-gray-900"></div><div className="w-2 h-2 bg-gray-900"></div>
                    <div className="w-2 h-2 bg-gray-300"></div><div className="w-2 h-2 bg-gray-900"></div><div className="w-2 h-2 bg-gray-300"></div><div className="w-2 h-2 bg-gray-400"></div>
                    <div className="w-2 h-2 bg-gray-900"></div><div className="w-2 h-2 bg-gray-300"></div><div className="w-2 h-2 bg-gray-900"></div><div className="w-2 h-2 bg-gray-300"></div>
                    <div className="w-2 h-2 bg-gray-400"></div><div className="w-2 h-2 bg-gray-900"></div><div className="w-2 h-2 bg-gray-400"></div><div className="w-2 h-2 bg-gray-900"></div>
                    <span className="absolute inset-0 bg-emerald-400/10 animate-pulse"></span>
                  </div>

                  <span className="text-[7px] text-emerald-700 font-bold tracking-tight">KRA QR Affixed</span>
                </div>
              </div>

              {/* Status Tracker */}
              <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-gray-400 text-[9px] font-mono">
                <span className="text-gray-500 font-medium">Auto Updates Complete</span>
                <div className="flex items-center space-x-1 font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full text-[10px]">
                  <span>QBO</span>
                  <span className="tracking-tighter text-blue-400 animate-pulse">◀ ⇆ ▶</span>
                  <span>eTIMS</span>
                </div>
              </div>

            </div>
            {/* Chassis Baserail Accent */}
            <div className="h-1.5 w-1/3 bg-gray-700 mx-auto rounded-b-md"></div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: THE ADVANTAGE CARDS MATRIX      */}
      {/* ========================================== */}
      <section className="snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">The eConnector Advantage</h2>
          <p className="text-3xl font-extrabold text-gray-900 tracking-tight">Engineered to eliminate manual compliance loops</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-500/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold mb-4">01</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug">
                Direct QBO link provides accurate 1-to-1 eTIMS invoice issuance.
              </h3>
            </div>
            <p className="text-gray-500 text-sm md:text-base border-t border-gray-50 pt-4 mt-4 flex items-start">
              <span className="text-red-400 mr-2 font-bold">↳</span>
              No more double-tax invoicing challenges because of manual ETR tax invoice issuance.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-500/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold mb-4">02</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug">
                Accurate data mapping directly from your QBO source data.
              </h3>
            </div>
            <p className="text-gray-500 text-sm md:text-base border-t border-gray-50 pt-4 mt-4 flex items-start">
              <span className="text-red-400 mr-2 font-bold">↳</span>
              Permanently eliminates data entry typos and mismatched QBO vs. ETR reconciliations.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-500/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold mb-4">03</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug">
                Automated background eTIMS tax invoice generation.
              </h3>
            </div>
            <p className="text-gray-500 text-sm md:text-base border-t border-gray-50 pt-4 mt-4 flex items-start">
              <span className="text-red-400 mr-2 font-bold">↳</span>
              Less time spent invoicing manually means reclaiming wasted administrative hours for other tasks.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: THE 3-STEP CONFIG SYSTEM        */}
      {/* ========================================== */}
      <section className="snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12">
        <div className="max-w-5xl mx-auto bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-xl w-full">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-3">Up and running in 3 simple steps</h2>
            <p className="text-gray-400">Zero integration skills required. Fully manageable by your finance team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step Card 1 */}
            <div className="flex flex-col justify-between items-center text-center p-6 bg-gray-800/40 rounded-xl border border-gray-800/80 min-h-[260px]">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-lg font-bold mb-4 shadow-md">1</div>
              <h3 className="font-bold text-lg mb-2">Profile Setup</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Setup your business parameters and profile configurations easily.</p>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-950 text-emerald-400 px-3 py-1 rounded border border-emerald-900/50 mt-auto">
                [ Takes 2 Mins ]
              </span>
            </div>

            {/* Step Card 2 */}
            <div className="flex flex-col justify-between items-center text-center p-6 bg-gray-800/40 rounded-xl border border-gray-800/80 min-h-[260px]">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-lg font-bold mb-4 shadow-md">2</div>
              <h3 className="font-bold text-lg mb-2">Two-Click Linkage</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Securely authorize the QuickBooks Online connector to establish the network background bridge.</p>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-950 text-emerald-400 px-3 py-1 rounded border border-emerald-900/50 mt-auto">
                [ Secure OAuth ]
              </span>
            </div>

            {/* Step Card 3 */}
            <div className="flex flex-col justify-between items-center text-center p-6 bg-gray-800/40 rounded-xl border border-gray-800/80 min-h-[260px]">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-lg font-bold mb-4 shadow-md">3</div>
              <h3 className="font-bold text-lg mb-2">Guided Product Mapper</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Map your existing items and services to eTIMS tax categories for automatic configurations.</p>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-950 text-emerald-400 px-3 py-1 rounded border border-emerald-900/50 mt-auto">
                [ Auto-Match ]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: WHY CHOOSE US & ECOSYSTEM REEL */}
      {/* ========================================== */}
      <section className="snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Why businesses choose eConnector</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Simplified Tax Invoicing</span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Designed for Accountants, Backed by IT</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              No change to your current software or your daily invoicing method. Issue invoices, receipts, and credit notes exactly like you always have. Enjoy zero infrastructure overhead and zero maintenance headaches.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">Secure and Reliable</span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Running on Approved Vendor Rails</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Tax-compliant automated operations running via approved KRA integration vendors using our corporate-grade API invoicing engine, <strong className="text-gray-800">Tracksol Connect</strong>. Your original QuickBooks documents are automatically updated with valid tax invoice numbers and live QR codes in real-time.
            </p>
          </div>
        </div>

        {/* ECOSYSTEM TARGETING MATRIX */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Supported Accounting Ecosystems</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center space-x-2 border border-emerald-200 bg-emerald-50 text-emerald-800 py-2 px-4 rounded-xl shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-extrabold text-sm tracking-tight">QuickBooks Online</span>
              <span className="text-[9px] font-bold uppercase bg-emerald-600 text-white px-1.5 py-0.5 rounded">Active</span>
            </div>

            <div className="opacity-30 grayscale font-bold text-gray-500 text-sm tracking-tight select-none">Xero</div>
            <div className="opacity-30 grayscale font-bold text-gray-500 text-sm tracking-tight select-none">Zoho Books</div>
            <div className="opacity-30 grayscale font-bold text-gray-500 text-sm tracking-tight select-none">Sage</div>
            <div className="opacity-30 grayscale font-bold text-gray-500 text-sm tracking-tight select-none">Microsoft Dynamics</div>
          </div>

          <p className="text-xs text-gray-500 mt-6 font-medium">
            Don't see your accounting platform? <a href="#inquiry" className="text-blue-600 hover:underline font-semibold">Request early access ➔</a>
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: TRANSPARENT PRICING GRID        */}
      {/* ========================================== */}
      <section className="snap-start scroll-mt-20 min-h-screen flex flex-col justify-center px-6 py-12 bg-gray-100 rounded-[3rem]">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-3 text-gray-900 tracking-tight">Simple, transparent pricing</h2>
            <p className="text-gray-600">Choose the perfect path to absolute automation. No hidden processing surcharges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Tier 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Starter</h3>
                <p className="text-xs text-gray-500 mb-6">For individual operators.</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">$15</span>
                  <span className="text-gray-500 text-sm font-medium"> / mo</span>
                  <p className="text-xs text-emerald-600 font-semibold mt-1">Approx. KES 2,000 / mo</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 border-t pt-6">
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> 1 Business profile</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> 1 Active link connector</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Background automated syncing</li>
                </ul>
              </div>
              <a href="#/connector-dashboard/signup" className="w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-xl mt-8 transition-colors block">
                Get Started
              </a>
            </div>

            {/* Tier 2 */}
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-md flex flex-col justify-between relative transform lg:-translate-y-2">
              <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Popular
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Business</h3>
                <p className="text-xs text-gray-500 mb-6">For growing teams.</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">$25</span>
                  <span className="text-gray-500 text-sm font-medium"> / mo</span>
                  <p className="text-xs text-emerald-600 font-semibold mt-1">Approx. KES 3,300 / mo</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 border-t pt-6">
                  <li className="flex items-center font-medium text-gray-900"><span className="text-emerald-500 mr-2">✓</span> Up to 3 Business profiles</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Priority routing queues</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Background automated syncing</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Multi-user dashboard access</li>
                </ul>
              </div>
              <a href="#/connector-dashboard/signup" className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl mt-8 transition-colors shadow-sm block">
                Select Business
              </a>
            </div>

            {/* Tier 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Group</h3>
                <p className="text-xs text-gray-500 mb-6">For corporate firms.</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">$20</span>
                  <span className="text-gray-500 text-sm font-medium"> / connector / mo</span>
                  <p className="text-xs text-emerald-600 font-semibold mt-1">Approx. KES 2,600 / connector / mo</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 border-t pt-6">
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> 4+ Business profiles</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Consolidated firm views</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Background automated syncing</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Dedicated support line</li>
                </ul>
              </div>
              <a href="#/connector-dashboard/signup" className="w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-xl mt-8 transition-colors block">
                Contact Sales
              </a>
            </div>
          </div>

          {/* Payment Disclaimers */}
          <div className="mt-8 text-center px-4">
            <p className="text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
              * Rates exclude a standard one-time $70 eTIMS gateway configuration fee applied securely during your live profile activation.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3 text-xs">
              <span className="font-bold uppercase tracking-wider text-gray-400">Accepted Payment Method:</span>
              <span className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 font-extrabold text-sm border border-emerald-100 shadow-sm">
                M-PESA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 6: INQUIRY MATRIX & FINAL CLOSURE  */}
      {/* ========================================== */}
      <section id="inquiry" className="snap-start scroll-mt-20 min-h-screen flex flex-col justify-between bg-white pt-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-6 w-full flex-1">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Need our help in figuring it out?</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Our support desk is here to understand your setup and eTIMs compliance requirements. Get a direct free consultation today.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700 flex items-center">
                <span className="text-blue-600 mr-2 text-base">✉</span> info@ezeemoney.co.ke
              </p>
              <p className="text-sm font-semibold text-gray-700 flex items-center">
                <span className="text-emerald-600 mr-2 text-base">💬</span> Response time: Under 15 minutes
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Work Email</label>
                <input type="email" placeholder="name@company.co.ke" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Your Question</label>
                <textarea rows={3} placeholder="How does the mapper handle tax-exempt items?" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 resize-none"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 px-4 rounded-lg transition-colors">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Closing conversion bumper element */}
        <div className="bg-blue-600 text-white py-16 px-6 text-center mt-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Ready to put your eTIMS compliance on autopilot?</h2>
            <p className="text-blue-100 text-sm md:text-base mb-6 max-w-xl mx-auto">
              Join accountants and smart business owners running automated QuickBooks eTIMS linkages.
            </p>
            <a href="#/connector-dashboard/signup" className="bg-white text-blue-600 font-bold text-base py-3 px-10 rounded-lg shadow-md hover:bg-gray-50 transition-all duration-200 inline-block">
              Connect Your QuickBooks Profile
            </a>
          </div>
        </div>

        {/* Global Footer element */}
        <footer className="bg-gray-900 text-gray-400 py-10 px-6 text-xs md:text-sm border-t border-gray-800 w-full">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3 text-center md:text-left">
              <div className="h-6 w-6 rounded bg-gray-800 flex items-center justify-center text-white font-black text-xs">eC</div>
              <p>© 2026 Ezeemoney Ltd. All rights reserved.</p>
            </div>
            
            <div className="text-center md:text-right text-gray-400 space-y-1 text-xs">
              <p>The eConnector plugin is a product of <span className="text-gray-200 font-medium">Tracksol</span>.</p>
              <p className="text-gray-500">Tracksol operates securely over approved KRA vendor networks.</p>
            </div>
          </div>
        </footer>
      </section>

    </div>
  );
}