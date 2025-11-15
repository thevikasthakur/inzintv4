'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const showcaseData = [
  {
    id: 1,
    brand: 'Adidas',
    title: 'Revolutionizing Retail Experience',
    description: 'Built an AI-powered shopping app that increased customer engagement by 300%',
    metrics: [
      { label: 'User Growth', value: '300%' },
      { label: 'Conversion Rate', value: '85%' },
      { label: 'App Rating', value: '4.8/5' },
    ],
    image: '/showcase/adidas.jpg',
    color: 'from-black to-gray-800',
    slug: 'adidas-retail-experience',
  },
  {
    id: 2,
    brand: 'IKEA',
    title: 'AR Furniture Visualization',
    description: 'Created an immersive AR app for furniture placement and interior design',
    metrics: [
      { label: 'ROI Increase', value: '250%' },
      { label: 'Cart Abandonment', value: '-40%' },
      { label: 'User Satisfaction', value: '96%' },
    ],
    image: '/showcase/ikea.jpg',
    color: 'from-blue-600 to-yellow-500',
    slug: 'ikea-ar-furniture',
  },
  {
    id: 3,
    brand: 'Pizza Hut',
    title: 'Next-Gen Food Ordering Platform',
    description: 'Developed a seamless ordering experience with real-time tracking',
    metrics: [
      { label: 'Order Volume', value: '+180%' },
      { label: 'Delivery Speed', value: '22 min' },
      { label: 'Customer Retention', value: '92%' },
    ],
    image: '/showcase/pizzahut.jpg',
    color: 'from-red-600 to-orange-500',
    slug: 'pizza-hut-ordering-platform',
  },
  {
    id: 4,
    brand: 'Americana',
    title: 'Enterprise Food Management System',
    description: 'Integrated supply chain and inventory management across 500+ locations',
    metrics: [
      { label: 'Cost Reduction', value: '35%' },
      { label: 'Efficiency Gain', value: '70%' },
      { label: 'Error Reduction', value: '95%' },
    ],
    image: '/showcase/americana.jpg',
    color: 'from-green-600 to-blue-600',
    slug: 'americana-food-management',
  },
];

export default function ShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % showcaseData.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds total (100 * 50ms)

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseData.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + showcaseData.length) % showcaseData.length);
    setProgress(0);
  };

  const activeCase = showcaseData[activeIndex];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
          >
            CLIENT SHOWCASE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We've partnered with world-class brands to deliver exceptional digital experiences
          </motion.p>
        </div>

        {/* Stacked Cards Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[600px] flex items-center justify-center">
            <AnimatePresence>
              {showcaseData.map((item, index) => {
                const offset = index - activeIndex;
                const isActive = index === activeIndex;
                const isVisible = Math.abs(offset) <= 2;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ scale: 0.8, opacity: 0, y: 100 }}
                    animate={{
                      scale: isActive ? 1 : 0.9 - Math.abs(offset) * 0.1,
                      opacity: isActive ? 1 : 0.4 - Math.abs(offset) * 0.2,
                      y: offset * 30,
                      x: offset * 100,
                      zIndex: showcaseData.length - Math.abs(offset),
                    }}
                    exit={{ scale: 0.8, opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-full max-w-4xl"
                  >
                    <div className={`bg-gradient-to-br ${item.color} rounded-3xl overflow-hidden shadow-2xl`}>
                      <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
                        {/* Content */}
                        <div className="flex flex-col justify-center text-white">
                          <div className="text-sm font-semibold opacity-80 mb-2">CASE STUDY</div>
                          <h3 className="text-4xl lg:text-5xl font-bold mb-4">{item.brand}</h3>
                          <h4 className="text-xl lg:text-2xl font-semibold mb-4 opacity-90">
                            {item.title}
                          </h4>
                          <p className="text-lg opacity-80 mb-8">{item.description}</p>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-4 mb-8">
                            {item.metrics.map((metric) => (
                              <div key={metric.label}>
                                <div className="text-2xl lg:text-3xl font-bold">{metric.value}</div>
                                <div className="text-sm opacity-80">{metric.label}</div>
                              </div>
                            ))}
                          </div>

                          <Link href={`/case-studies/${item.slug}`} className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all w-fit">
                            View Case Study
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        {/* Visual Placeholder */}
                        <div className="hidden md:flex items-center justify-center">
                          <div className="relative w-full aspect-square bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <div className="text-6xl font-bold opacity-20">{item.brand}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Progress Indicators */}
            <div className="flex gap-2">
              {showcaseData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setProgress(0);
                  }}
                  className="relative w-12 h-1 bg-gray-300 rounded-full overflow-hidden"
                  aria-label={`Go to ${item.brand} case study`}
                >
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-primary-500"
                    initial={{ width: '0%' }}
                    animate={{ width: index === activeIndex ? `${progress}%` : '0%' }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all"
              aria-label="Next case study"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
