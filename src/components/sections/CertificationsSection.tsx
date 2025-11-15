'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Award, CheckCircle, Lock } from 'lucide-react';
import Link from 'next/link';

const certifications = [
  {
    title: 'ISO 27001',
    category: 'Information Security',
    description: 'Certified for implementing and maintaining an Information Security Management System.',
    icon: Shield,
    year: '2022',
  },
  {
    title: 'ISO 9001',
    category: 'Quality Management',
    description: 'Quality management system certification ensuring consistent service delivery.',
    icon: Award,
    year: '2021',
  },
  {
    title: 'SOC 2 Type II',
    category: 'Data Security',
    description: 'Independently verified security, availability, and confidentiality controls.',
    icon: Lock,
    year: '2023',
  },
  {
    title: 'GDPR Compliant',
    category: 'Data Privacy',
    description: 'Full compliance with EU General Data Protection Regulation standards.',
    icon: CheckCircle,
    year: '2020',
  },
  {
    title: 'AWS Partner',
    category: 'Cloud Infrastructure',
    description: 'Certified AWS Solutions Architect and DevOps Professional partners.',
    icon: Award,
    year: '2021',
  },
  {
    title: 'Google Cloud Partner',
    category: 'Cloud Infrastructure',
    description: 'Google Cloud Platform certified developers and architects on team.',
    icon: Award,
    year: '2022',
  },
];

const compliance = [
  'HIPAA Compliant',
  'PCI DSS Certified',
  'OWASP Top 10 Secure',
  'WCAG 2.1 Accessible',
];

export default function CertificationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications & Compliance
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Industry certifications and compliance standards that ensure we deliver secure, high-quality solutions.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" ref={ref}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <cert.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {cert.title}
                </h3>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                  {cert.year}
                </span>
              </div>
              <p className="text-sm font-semibold text-blue-600 mb-3">
                {cert.category}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Additional Compliance Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {compliance.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Security & Compliance Questions?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our team is happy to discuss our security practices and compliance standards in detail.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
