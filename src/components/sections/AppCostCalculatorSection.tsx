'use client';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { useState } from 'react';

export default function AppCostCalculatorSection() {
  const [platform, setPlatform] = useState('');
  const [complexity, setComplexity] = useState('');
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">App Cost Calculator</h1>
          <p className="text-xl md:text-2xl text-gray-600">Estimate your app development cost in minutes.</p>
        </motion.div>
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Platform</label>
              <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select platform</option>
                <option value="ios">iOS</option>
                <option value="android">Android</option>
                <option value="both">iOS & Android</option>
                <option value="web">Web App</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Complexity</label>
              <select value={complexity} onChange={(e) => setComplexity(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select complexity</option>
                <option value="simple">Simple (Basic features)</option>
                <option value="moderate">Moderate (Standard features)</option>
                <option value="complex">Complex (Advanced features)</option>
              </select>
            </div>
            <button className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Calculator className="w-5 h-5" />
              Calculate Cost
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
