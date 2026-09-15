'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

// Names and roles as provided by the team. Bios and LinkedIn URLs are added only when the
// person has supplied them; photos will replace the initials once they exist under /assets/team.
const leaders: Array<{
  name: string;
  role: string;
  email: string;
  bio?: string;
  linkedin?: string;
}> = [
  {
    name: 'Vikas Thakur',
    role: 'Co-founder & Director',
    email: 'vikas@inzint.com',
    bio: 'Founder-led delivery, hands-on in architecture and AI.',
  },
  {
    name: 'Jaideep Goyal',
    role: 'Co-founder & Director',
    email: 'jaideep@inzint.com',
  },
  {
    name: 'Abhiraj Singh',
    role: 'Manager',
    email: 'abhiraj@inzint.com',
  },
  {
    name: 'Parak Kumar',
    role: 'Manager',
    email: 'parak@inzint.com',
  },
  {
    name: 'Adarsh Mishra',
    role: 'Human Resources',
    email: 'adarsh@inzint.com',
  },
  {
    name: 'Twinkle Sharma',
    role: 'Human Resources',
    email: 'twinkle@inzint.com',
  },
];

export default function LeadershipTeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Monogram until photos are supplied */}
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold tracking-wide">
                    {leader.name
                      .split(' ')
                      .map((part) => part.charAt(0))
                      .join('')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {leader.role}
                  </p>
                  {leader.bio && (
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {leader.bio}
                    </p>
                  )}

                  {/* Contact */}
                  <div className="flex gap-3">
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${leader.name} on LinkedIn`}
                        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 group"
                      >
                        <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white" />
                      </a>
                    )}
                    <a
                      href={`mailto:${leader.email}`}
                      aria-label={`Email ${leader.name}`}
                      className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 group"
                    >
                      <Mail className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Work with the people who build your product
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Inzint is founder-led: the people on this page are in the discovery call, the weekly demo
            and the code review.
          </p>
          <Link
            href="/about/company/careers"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            See Open Roles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
