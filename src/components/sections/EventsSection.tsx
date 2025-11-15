'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import Link from 'next/link';

const events = [
  { title: 'AI & Machine Learning Summit 2025', date: 'December 15, 2025', time: '9:00 AM - 5:00 PM', location: 'Virtual Event', attendees: '500+', type: 'Webinar', description: 'Join industry leaders discussing the future of AI and ML in enterprise applications.' },
  { title: 'Mobile Dev Conference', date: 'January 20, 2026', time: '10:00 AM - 6:00 PM', location: 'Bangalore, India', attendees: '300+', type: 'Conference', description: 'Latest trends in mobile development, from React Native to Flutter and native platforms.' },
  { title: 'Cloud Architecture Workshop', date: 'January 28, 2026', time: '2:00 PM - 4:00 PM', location: 'Virtual Event', attendees: '150+', type: 'Workshop', description: 'Hands-on workshop on building scalable cloud-native applications with Kubernetes.' },
];

export default function EventsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Events</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">Upcoming webinars, conferences, and workshops.</p>
        </motion.div>
        <div className="space-y-8" ref={ref}>
          {events.map((event, index) => (
            <motion.div key={event.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex flex-col items-center justify-center text-white">
                  <div className="text-3xl font-bold">{event.date.split(' ')[1].replace(',', '')}</div>
                  <div className="text-sm">{event.date.split(' ')[0]}</div>
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-3">{event.type}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{event.date}</div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{event.time}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{event.location}</div>
                    <div className="flex items-center gap-2"><Users className="w-4 h-4" />{event.attendees}</div>
                  </div>
                  <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">Register Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
