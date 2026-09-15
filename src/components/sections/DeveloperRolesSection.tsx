'use client';

import { motion } from 'framer-motion';
import { Smartphone, Globe, Brain, Cloud, Database, Shield } from 'lucide-react';

// Squad capabilities map to the stack in company.ts. No role pages: the squad is scoped on a call.
const roles = [
  {
    icon: Globe,
    title: 'Frontend engineers',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Smartphone,
    title: 'Mobile engineers',
    skills: ['React Native', 'iOS', 'Android', 'Store releases'],
  },
  {
    icon: Database,
    title: 'Backend engineers',
    skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis'],
  },
  {
    icon: Brain,
    title: 'AI engineers',
    skills: ['LLM integration', 'RAG', 'Voice (LiveKit)', 'Evaluation'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['AWS Lambda', 'API Gateway', 'CDK / Serverless', 'CI/CD'],
  },
  {
    icon: Shield,
    title: 'QA & delivery',
    skills: ['Jest', 'Playwright', 'Release management', 'Runbooks'],
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What a squad can include</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We compose each squad around your roadmap from these capabilities, all on the stack we ship with every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="block group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <role.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {role.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
