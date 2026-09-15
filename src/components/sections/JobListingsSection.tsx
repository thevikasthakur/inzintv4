'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Briefcase, ArrowRight, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { company } from '@/data/company';

// Only real postings belong here. Keep closed roles for a while so applicants
// who bookmarked them see the outcome instead of a dead link.
const jobs = [
  {
    title: 'Full Stack AI & ML Engineer - Trainee (2026 Batch)',
    department: 'AI & ML Engineering',
    location: 'Noida, Sector 65 (on-site)',
    type: 'Full-time trainee',
    status: 'Closed' as const,
    description:
      'A six-month training programme for 2026 graduates covering data science, AI/ML, DevOps and AWS. Applications are closed and the selected candidates joined in February 2026. Recruitment for the 2027 batch opens in November 2026.',
    skills: ['Python', 'ReactJS', 'Machine Learning', 'TensorFlow'],
    link: '/careers/ai-ml-engineer-trainee-2026',
  },
];

export default function JobListingsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openRoles = jobs.filter((job) => job.status !== 'Closed').length;

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
            {openRoles === 0
              ? 'We hire in small batches and list every opening on this page. Nothing is open right now, but we read every CV we receive.'
              : 'We hire in small batches and list every opening on this page.'}
          </p>
        </motion.div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group relative"
            >
              <div className="absolute -top-3 -right-3 bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-bold">
                {job.status}
              </div>
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
                  href={job.link}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 whitespace-nowrap self-start md:self-center"
                >
                  View Details
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Speculative applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Want to work with us anyway?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Send your CV and a short note about something you have built to our HR team. We reply
            to every application.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            {company.contact.hrEmails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                {email}
              </a>
            ))}
            <a
              href={company.contact.phoneJobsHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-xl hover:border-gray-300 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              {company.contact.phoneJobs}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
