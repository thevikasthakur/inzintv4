'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const leaders = [
  {
    name: 'Jaideep Goyal',
    role: 'Director',
    bio: 'Visionary leader driving strategic initiatives and company growth. Expert in business development and client relationships with extensive industry experience.',
    image: '/assets/team/jaideep-goyal.jpg',
    linkedin: '#',
    email: 'jaideep@inzint.com',
  },
  {
    name: 'Vikas Thakur',
    role: 'Director',
    bio: 'Strategic director focused on operational excellence and innovation. Expertise in scaling technology solutions and building high-performing teams.',
    image: '/assets/team/vikas-thakur.jpg',
    linkedin: '#',
    email: 'vikas@inzint.com',
  },
  {
    name: 'Abhiraj Singh',
    role: 'Manager',
    bio: 'Experienced manager overseeing project delivery and team coordination. Specialized in agile methodologies and ensuring quality outcomes.',
    image: '/assets/team/abhiraj-singh.jpg',
    linkedin: '#',
    email: 'abhiraj@inzint.com',
  },
  {
    name: 'Parak Kumar',
    role: 'Manager',
    bio: 'Results-driven manager with expertise in technical project management and client success. Focused on delivering innovative solutions.',
    image: '/assets/team/parak-kumar.jpg',
    linkedin: '#',
    email: 'parak@inzint.com',
  },
  {
    name: 'Adarsh Mishra',
    role: 'Human Resource',
    bio: 'HR professional dedicated to talent acquisition, employee development, and fostering a positive work culture. Building strong teams.',
    image: '/assets/team/adarsh-mishra.jpg',
    linkedin: '#',
    email: 'adarsh@inzint.com',
  },
  {
    name: 'Twinkle Sharma',
    role: 'Human Resource',
    bio: 'HR specialist focused on employee engagement, organizational development, and creating an inclusive workplace environment.',
    image: '/assets/team/twinkle-sharma.jpg',
    linkedin: '#',
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
                {/* Image placeholder */}
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                    {leader.name.charAt(0)}
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
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {leader.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href={leader.linkedin}
                      className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 group"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
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
            Join Our Leadership Team
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're always looking for talented leaders to help us shape the future of technology.
          </p>
          <Link
            href="/careers"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            Explore Opportunities
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
