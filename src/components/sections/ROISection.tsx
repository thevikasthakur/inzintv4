'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { TrendingUp, Zap, Lightbulb, ArrowRight } from 'lucide-react';

const roiMetrics = [
  {
    id: 1,
    icon: TrendingUp,
    title: 'Efficiency Boost',
    value: 85,
    suffix: '%',
    description: 'Average increase in operational efficiency for our clients',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    stats: [
      { label: 'Time Saved', value: '40%' },
      { label: 'Cost Reduction', value: '35%' },
    ],
  },
  {
    id: 2,
    icon: Zap,
    title: 'Revenue Growth',
    value: 250,
    suffix: '%',
    description: 'Average revenue increase within first year of implementation',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    stats: [
      { label: 'Customer Acquisition', value: '+180%' },
      { label: 'Conversion Rate', value: '+92%' },
    ],
  },
  {
    id: 3,
    icon: Lightbulb,
    title: 'Innovation Impact',
    value: 98,
    suffix: '%',
    description: 'Client satisfaction rate with digital transformation results',
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-50',
    stats: [
      { label: 'User Engagement', value: '+210%' },
      { label: 'Market Reach', value: '3x' },
    ],
  },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function ROISection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
          >
            MEASURABLE RESULTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Delivering Real ROI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our solutions don't just look good - they drive tangible business results and exceptional returns on investment
          </motion.p>
        </div>

        {/* ROI Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roiMetrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl ${metric.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                  <metric.icon className="w-8 h-8 text-primary-600" />
                </div>

                {/* Main Metric */}
                <div className="mb-4">
                  <div className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* Sub Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  {metric.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg opacity-90 mb-6 lg:mb-0">
                Join hundreds of companies that have achieved remarkable growth with our digital solutions. Let's discuss how we can help you achieve similar results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact?inquiry=roi-calculator" className="group px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2">
                Calculate Your ROI
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 transition-all flex items-center justify-center">
                Book a Consultation
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: '1000+', label: 'Projects Delivered' },
            { value: '500+', label: 'Happy Clients' },
            { value: '50+', label: 'Countries Served' },
            { value: '15+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
