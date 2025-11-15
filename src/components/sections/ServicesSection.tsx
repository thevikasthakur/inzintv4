'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  Smartphone,
  Code,
  Cloud,
  Blocks,
  Cpu,
  Shield,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Brain,
    title: 'AI Development',
    description: 'Leverage cutting-edge AI and machine learning solutions to automate processes and gain insights.',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    slug: 'ai-development',
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Create stunning, high-performance mobile apps for iOS and Android that users love.',
    features: ['Native iOS & Android', 'React Native', 'Flutter', 'Progressive Web Apps'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    slug: 'mobile-app-development',
  },
  {
    id: 3,
    icon: Code,
    title: 'Software Development',
    description: 'Build scalable, secure, and robust software solutions tailored to your business needs.',
    features: ['Custom Software', 'Enterprise Solutions', 'SaaS Products', 'API Development'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    slug: 'software-development',
  },
  {
    id: 4,
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Migrate, optimize, and manage your infrastructure with modern cloud technologies.',
    features: ['AWS', 'Azure', 'Google Cloud', 'DevOps & CI/CD'],
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-50',
    slug: 'cloud-solutions',
  },
  {
    id: 5,
    icon: Blocks,
    title: 'Blockchain Development',
    description: 'Build secure, transparent, and decentralized applications with blockchain technology.',
    features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Web3 Development'],
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    slug: 'blockchain-development',
  },
  {
    id: 6,
    icon: Cpu,
    title: 'IoT Solutions',
    description: 'Connect devices and create intelligent ecosystems with Internet of Things technology.',
    features: ['Smart Devices', 'Industrial IoT', 'Home Automation', 'Wearable Tech'],
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    slug: 'iot-solutions',
  },
  {
    id: 7,
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions and best practices.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Risk Management'],
    color: 'from-gray-700 to-gray-900',
    bgColor: 'bg-gray-50',
    slug: 'cybersecurity',
  },
  {
    id: 8,
    icon: Sparkles,
    title: 'UI/UX Design',
    description: 'Create beautiful, intuitive interfaces that deliver exceptional user experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    slug: 'ui-ux-design',
  },
];

export default function ServicesSection() {
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
            OUR SERVICES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From concept to deployment, we provide end-to-end services to transform your ideas into reality
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${service.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={`bg-gradient-to-br ${service.color} bg-clip-text`}>
                    <service.icon className="w-8 h-8 text-transparent" style={{
                      WebkitTextFillColor: 'transparent',
                      backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                      backgroundClip: 'text',
                    }} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 flex items-center justify-center">
              Explore All Services
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center">
              Schedule a Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
