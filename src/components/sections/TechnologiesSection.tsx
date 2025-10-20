'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Cloud,
  Blocks,
  Radio,
  Database,
  Smartphone,
  Shield,
  Cpu,
  ArrowRight,
} from 'lucide-react';

const technologies = [
  {
    id: 1,
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Machine learning, deep learning, and neural networks for intelligent solutions',
    tools: ['TensorFlow', 'PyTorch', 'OpenAI', 'Keras', 'scikit-learn'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    id: 2,
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Scalable, reliable, and secure cloud infrastructure and services',
    tools: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 3,
    icon: Blocks,
    title: 'Blockchain',
    description: 'Decentralized applications and smart contract development',
    tools: ['Ethereum', 'Solidity', 'Web3.js', 'Hyperledger', 'Polygon'],
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
  },
  {
    id: 4,
    icon: Radio,
    title: 'Internet of Things',
    description: 'Connected devices and intelligent automation systems',
    tools: ['Arduino', 'Raspberry Pi', 'MQTT', 'IoT Core', 'Edge Computing'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    id: 5,
    icon: Database,
    title: 'Big Data & Analytics',
    description: 'Process and analyze massive datasets for actionable insights',
    tools: ['Hadoop', 'Spark', 'MongoDB', 'Elasticsearch', 'Tableau'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
  },
  {
    id: 6,
    icon: Smartphone,
    title: 'Mobile Technologies',
    description: 'Native and cross-platform mobile app development frameworks',
    tools: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
  },
  {
    id: 7,
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security protocols and threat protection systems',
    tools: ['OAuth', 'JWT', 'SSL/TLS', 'Encryption', 'Penetration Testing'],
    color: 'from-gray-700 to-gray-900',
    bgColor: 'bg-gray-50',
  },
  {
    id: 8,
    icon: Cpu,
    title: 'DevOps & Automation',
    description: 'Continuous integration and deployment pipelines',
    tools: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'GitHub Actions'],
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50',
  },
];

export default function TechnologiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="py-20 lg:py-32 bg-gray-50 relative">
      <div className="container">
        {/* Sticky Header */}
        <div className="sticky top-20 z-10 mb-16 bg-gray-50/80 backdrop-blur-sm py-8 -mx-4 px-4">
          <div className="text-center">
            <motion.span
              style={{ opacity, scale }}
              className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
            >
              TECHNOLOGIES WE MASTER
            </motion.span>
            <motion.h2
              style={{ opacity, scale }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Cutting-Edge Tech Stack
            </motion.h2>
            <motion.p
              style={{ opacity, scale }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We leverage the latest technologies to build future-ready solutions that scale
            </motion.p>
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${tech.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <tech.icon className="w-8 h-8 text-primary-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {tech.description}
                </p>

                {/* Tools/Technologies */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Tools & Frameworks
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                    {tech.tools.length > 3 && (
                      <span className="px-2 py-1 bg-primary-50 text-primary-600 rounded text-xs font-medium">
                        +{tech.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Need a Custom Technology Solution?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Our experts can help you choose the right tech stack and build a solution tailored to your unique requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">Expert Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">Scalable Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">Latest Technologies</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <button className="group px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2">
                Discuss Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 transition-all">
                View Tech Stack
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: '50+', label: 'Technologies' },
            { value: '200+', label: 'Certified Experts' },
            { value: '1000+', label: 'Tech Projects' },
            { value: '99.9%', label: 'Success Rate' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-md"
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
