'use client';

import { motion } from 'framer-motion';
import { Calculator, ArrowRight, CheckCircle } from 'lucide-react';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { aiServicePricing, webMobilePricing, type PricingTier } from '@/data/pricing';

const BOOKING_URL =
  'https://outlook.office.com/bookwithme/user/dca57ea980d34c5ba4dd0dac1c5617f7%40inzint.com?anonymous&ismsaljsauthenabled=true';

type Platform = 'web' | 'single' | 'both';
type Complexity = 'simple' | 'moderate' | 'complex';
type AiAddon = 'none' | 'chatbot' | 'voice';

// Every estimate maps to a tier in src/data/pricing.ts, so the calculator can never
// quote a number that is not on the rate card.
const baseTierFor: Record<Platform, Record<Complexity, string>> = {
  web: { simple: 'mvp-rapid', moderate: 'mvp-standard', complex: 'mvp-premium' },
  single: { simple: 'mvp-rapid', moderate: 'mobile-basic', complex: 'mvp-premium' },
  both: { simple: 'mvp-rapid', moderate: 'mobile-cross-platform', complex: 'mvp-premium' },
};

const addonTierFor: Record<AiAddon, string | null> = {
  none: null,
  chatbot: 'chatbot-advanced',
  voice: 'voice-bot-pro',
};

const tiersById = new Map<string, PricingTier>();
for (const group of [...webMobilePricing, ...aiServicePricing]) {
  for (const tier of group.tiers) tiersById.set(tier.id, tier);
}

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const selectClass =
  'w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500';

export default function AppCostCalculatorSection() {
  const [platform, setPlatform] = useState<Platform | ''>('');
  const [complexity, setComplexity] = useState<Complexity | ''>('');
  const [aiAddon, setAiAddon] = useState<AiAddon>('none');
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    if (!platform || !complexity) return null;
    const base = tiersById.get(baseTierFor[platform][complexity]);
    const addonId = addonTierFor[aiAddon];
    const addon = addonId ? tiersById.get(addonId) : undefined;
    if (!base) return null;
    return {
      base,
      addon,
      total: base.price + (addon?.price ?? 0),
    };
  }, [platform, complexity, aiAddon]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">App Cost Calculator</h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Indicative starting prices from our rate card. The exact quote follows a 30-minute discovery call.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="platform" className="block text-sm font-semibold text-gray-700 mb-2">Platform</label>
              <select
                id="platform"
                value={platform}
                onChange={(e) => { setPlatform(e.target.value as Platform | ''); setSubmitted(false); }}
                className={selectClass}
                required
              >
                <option value="">Select platform</option>
                <option value="web">Web application</option>
                <option value="single">Mobile app, one platform (iOS or Android)</option>
                <option value="both">Mobile app, iOS and Android</option>
              </select>
            </div>
            <div>
              <label htmlFor="complexity" className="block text-sm font-semibold text-gray-700 mb-2">Scope of the first release</label>
              <select
                id="complexity"
                value={complexity}
                onChange={(e) => { setComplexity(e.target.value as Complexity | ''); setSubmitted(false); }}
                className={selectClass}
                required
              >
                <option value="">Select scope</option>
                <option value="simple">Prototype: 3 to 5 core screens, no backend</option>
                <option value="moderate">Standard: authentication, backend, deployment</option>
                <option value="complex">Larger: payments, roles, reporting, dedicated team</option>
              </select>
            </div>
            <div>
              <label htmlFor="ai" className="block text-sm font-semibold text-gray-700 mb-2">AI add-on</label>
              <select
                id="ai"
                value={aiAddon}
                onChange={(e) => { setAiAddon(e.target.value as AiAddon); setSubmitted(false); }}
                className={selectClass}
              >
                <option value="none">None</option>
                <option value="chatbot">Chatbot grounded in your data (RAG, multi-channel)</option>
                <option value="voice">Bilingual AI voice receptionist (VoxReception)</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              disabled={!platform || !complexity}
            >
              <Calculator className="w-5 h-5" />
              Calculate Cost
            </button>
          </div>
        </form>

        {submitted && estimate && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">Indicative starting price</p>
            <p className="text-5xl font-bold text-gray-900 mb-2">{usd.format(estimate.total)}</p>
            <p className="text-gray-600 mb-6">
              {estimate.base.name} ({estimate.base.tagline})
              {estimate.addon ? ` plus ${estimate.addon.name} (${estimate.addon.tagline})` : ''}. Prices are in USD, exclusive of taxes,
              and cover the tier as scoped on our rate card. Anything larger is scoped and quoted after the discovery call.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">{estimate.base.name} includes</h3>
                <ul className="space-y-2">
                  {estimate.base.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {estimate.addon && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">{estimate.addon.name} includes</h3>
                  <ul className="space-y-2">
                    {estimate.addon.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={BOOKING_URL}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Book a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-xl hover:border-gray-300 transition-colors"
              >
                Send Us the Details
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
