import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In production, you'd send this to your email service
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🏊</span>
            <span className="text-xl font-bold text-gray-800">PoolRoute Pro</span>
          </div>
          <a
            href="https://genesigonzalez.gumroad.com/l/orfmt"
            className="px-5 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Only CRM Built for Pool Service Pros
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8">
              Stop using spreadsheets or bloated software. PoolRoute Pro has exactly what you need to manage your route — nothing more, nothing less.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://genesigonzalez.gumroad.com/l/orfmt"
                className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-colors text-center shadow-lg"
              >
                Try It Free — No Credit Card
              </a>
              <a
                href="#features"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors text-center"
              >
                See Features
              </a>
            </div>
            <p className="mt-6 text-cyan-200 text-sm">
              ✓ Free 14-day trial &nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp; ✓ Set up in 2 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Tired of Software That Wasn't Built for You?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-semibold text-gray-800 mb-2">Spreadsheets are a mess</h3>
                <p className="text-gray-600">Hard to update in the field. Easy to lose. No way to filter by route day.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="font-semibold text-gray-800 mb-2">ServiceTitan costs $200+/mo</h3>
                <p className="text-gray-600">Way too expensive and complicated for independent operators.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">🤷</div>
                <h3 className="font-semibold text-gray-800 mb-2">Generic CRMs don't fit</h3>
                <p className="text-gray-600">HubSpot doesn't have fields for pool type, gate codes, or salt systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Built by Pool Pros, for Pool Pros
            </h2>
            <p className="text-xl text-gray-600">
              Every feature exists because you actually need it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                🏊
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pool-Specific Fields</h3>
              <p className="text-gray-600">
                Track pool type (in-ground, above-ground), surface (plaster, pebble tec, vinyl), size in gallons, heater, and salt system.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                📅
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Route Day Management</h3>
              <p className="text-gray-600">
                Assign customers to service days. Filter your list to see just Monday pools, Tuesday pools, etc.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                🔑
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gate Codes & Access</h3>
              <p className="text-gray-600">
                Never forget how to get in. Store gate codes, lock combos, or notes like "side gate unlocked."
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                📝
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Service Notes</h3>
              <p className="text-gray-600">
                "Dog in backyard — call first." "Equipment pad on east side." Keep important details at your fingertips.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                💰
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Revenue Tracking</h3>
              <p className="text-gray-600">
                See your total monthly revenue at a glance. Know exactly what each customer is worth.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                📱
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Works on Any Device</h3>
              <p className="text-gray-600">
                Use it on your phone in the field, tablet in the truck, or computer at home. No app to download.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot/Demo Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Simple. Clean. Fast.
            </h2>
            <p className="text-xl text-gray-600">
              No training required — if you can use Facebook, you can use PoolRoute Pro
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 text-white mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏊</span>
                <div>
                  <div className="font-bold text-xl">PoolRoute Pro</div>
                  <div className="text-cyan-100 text-sm">Customer Management for Pool Pros</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">47</div>
                  <div className="text-xs text-cyan-100">Total Pools</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">$7,050</div>
                  <div className="text-xs text-cyan-100">Monthly Revenue</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-xs text-cyan-100">Pools Today</div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-800">Johnson Family</div>
                  <div className="text-sm text-gray-500">4521 Maple Drive</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Monday</span>
                  <span className="text-green-600 font-semibold">$150/mo</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-800">Martinez Residence</div>
                  <div className="text-sm text-gray-500">892 Oak Lane</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Tuesday</span>
                  <span className="text-green-600 font-semibold">$185/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Simple, Honest Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees. No contracts. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-cyan-300 transition-colors">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Monthly</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-800">$20</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Unlimited customers
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> All features included
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Works on all devices
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Cancel anytime
                </li>
              </ul>
              <a
                href="https://genesigonzalez.gumroad.com/l/orfmt"
                className="block w-full py-3 text-center border-2 border-cyan-500 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
              >
                Start Free Trial
              </a>
            </div>

            {/* Lifetime Plan */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                BEST VALUE
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$299</span>
                <span className="text-cyan-200"> one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-200">✓</span> Unlimited customers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-200">✓</span> All features included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-200">✓</span> Works on all devices
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-200">✓</span> Free updates forever
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-200">✓</span> Pay once, use forever
                </li>
              </ul>
              <a
                href="https://genesigonzalez.gumroad.com/l/orfmt"
                className="block w-full py-3 text-center bg-white text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
              >
                Get Lifetime Access
              </a>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8">
            Both plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Do I need to download an app?</h3>
              <p className="text-gray-600">Nope! PoolRoute Pro works in your web browser. Just go to the website on your phone, tablet, or computer. You can add it to your home screen for quick access.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Is my data safe?</h3>
              <p className="text-gray-600">Yes. Your data is saved securely in your browser. We don't sell or share your customer information with anyone.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Can I try it before paying?</h3>
              <p className="text-gray-600">Absolutely! You get a full 14-day free trial with all features. No credit card required.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">What if I need help?</h3>
              <p className="text-gray-600">Email us anytime. We're pool service people too, so we actually understand your questions.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Can multiple people on my team use it?</h3>
              <p className="text-gray-600">The current version works per device. Team/multi-user features are coming soon!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Simplify Your Route?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join pool service pros who ditched the spreadsheets and expensive software.
          </p>
          <a
            href="https://genesigonzalez.gumroad.com/l/orfmt"
            className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-colors shadow-lg"
          >
            Start Your Free 14-Day Trial
          </a>
          <p className="mt-4 text-cyan-200 text-sm">
            No credit card required • Set up in 2 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏊</span>
              <span className="text-lg font-bold text-white">PoolRoute Pro</span>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="mailto:support@poolroutepro.com" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2025 PoolRoute Pro. Built for pool service professionals. 💧</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
