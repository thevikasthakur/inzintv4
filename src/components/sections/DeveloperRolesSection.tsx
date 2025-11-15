'use client';

import { motion } from 'framer-motion';
import { Smartphone, Globe, Brain, Cloud, Database, Shield } from 'lucide-react';
import Link from 'next/link';

const roles = [
  {
    icon: Smartphone,
    title: 'Mobile Developers',
    skills: ['iOS', 'Android', 'React Native', 'Flutter'],
    href: '/hire-developers/mobile',
  },
  {
    icon: Globe,
    title: 'Web Developers',
    skills: ['React', 'Vue', 'Angular', 'Node.js'],
    href: '/hire-developers/web',
  },
  {
    icon: Brain,
    title: 'AI/ML Engineers',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
    href: '/hire-developers/ai-ml',
  },
  {
    icon: Cloud,
    title: 'DevOps Engineers',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    href: '/hire-developers/devops',
  },
  {
    icon: Database,
    title: 'Backend Developers',
    skills: ['Node.js', 'Python', 'Java', 'Go'],
    href: '/hire-developers/backend',
  },
  {
    icon: Shield,
    title: 'QA Engineers',
    skills: ['Automation', 'Selenium', 'Jest', 'Cypress'],
    href: '/hire-developers/qa',
  },
];

export default function DeveloperRolesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hire Developers by Role</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our pool of pre-vetted developers across various technologies and domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={role.href}
                className="block group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <role.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {role.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
