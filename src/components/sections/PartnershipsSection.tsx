'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Code, Database, Zap } from 'lucide-react';
import Link from 'next/link';

const partners = [
  {
    name: 'Amazon Web Services',
    category: 'Cloud Infrastructure',
    description: 'AWS Partner Network member with certified solutions architects and DevOps engineers.',
    icon: Cloud,
    logo: '/assets/partners/aws.png',
  },
  {
    name: 'Google Cloud',
    category: 'Cloud Platform',
    description: 'Google Cloud Partner with expertise in AI/ML, data analytics, and serverless architecture.',
    icon: Cloud,
    logo: '/assets/partners/gcp.png',
  },
  {
    name: 'Microsoft Azure',
    category: 'Cloud Services',
    description: 'Azure certified partner delivering enterprise cloud solutions and migrations.',
    icon: Cloud,
    logo: '/assets/partners/azure.png',
  },
  {
    name: 'Vercel',
    category: 'Frontend Platform',
    description: 'Official Vercel partner for Next.js deployments and edge computing solutions.',
    icon: Zap,
    logo: '/assets/partners/vercel.png',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    description: 'MongoDB partner with certified developers for scalable NoSQL solutions.',
    icon: Database,
    logo: '/assets/partners/mongodb.png',
  },
  {
    name: 'OpenAI',
    category: 'AI & Machine Learning',
    description: 'Integrating GPT and advanced AI models into enterprise applications.',
    icon: Zap,
    logo: '/assets/partners/openai.png',
  },
];

const technologies = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Python',
  'TensorFlow', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis',
  'GraphQL', 'Flutter', 'React Native', 'Tailwind CSS', 'AWS Lambda',
];

export default function PartnershipsSection() {
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
            Our Technology Partners
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver best-in-class solutions.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" ref={ref}>
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <partner.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-sm font-semibold text-blue-600 mb-4">
                {partner.category}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technologies We Master
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                {tech}
              </span>
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
            Become a Partner
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Interested in partnering with us? Let's explore how we can collaborate to deliver exceptional solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
