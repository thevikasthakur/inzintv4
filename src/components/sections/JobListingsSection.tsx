'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'Build scalable web applications using Next.js, Node.js, and cloud technologies.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI Research',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'Develop and deploy AI models for voice recognition, NLP, and computer vision.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'LLMs'],
  },
  {
    title: 'Mobile App Developer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'Create native and cross-platform mobile applications for iOS and Android.',
    skills: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'Manage cloud infrastructure, CI/CD pipelines, and ensure system reliability.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'Design intuitive user experiences for web and mobile applications.',
    skills: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
  },
  {
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'Build robust APIs and microservices using Node.js and NestJS.',
    skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis'],
  },
];

export default function JobListingsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Open Positions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore opportunities to work on cutting-edge projects with a talented team.
          </p>
        </motion.div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 whitespace-nowrap self-start md:self-center"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Position Found CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Don't See the Right Position?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always interested in meeting talented people. Send us your resume and tell us about yourself.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
