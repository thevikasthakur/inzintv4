'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Headphones, Play, Clock } from 'lucide-react';

const podcasts = [
  { title: 'The Future of AI in Business', episode: 'Episode 24', duration: '45 min', description: 'Discussion on AI adoption strategies and real-world implementations with industry leaders.', guests: 'Priya Sharma, AI Lead' },
  { title: 'Building Scalable Mobile Apps', episode: 'Episode 23', duration: '38 min', description: 'Best practices for architecting mobile applications that can scale to millions of users.', guests: 'Rahul Verma, VP Engineering' },
  { title: 'Cloud Native Development', episode: 'Episode 22', duration: '42 min', description: 'Deep dive into cloud-native architectures, microservices, and container orchestration.', guests: 'Ananya Reddy, Cloud Architect' },
];

export default function PodcastsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Podcasts</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">Tech talks and industry insights from our experts.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {podcasts.map((podcast, index) => (
            <motion.div key={podcast.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all group">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-105 transition-transform">
                <Headphones className="w-16 h-16 text-white" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <span className="text-sm font-semibold text-blue-600 mb-2 block">{podcast.episode}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{podcast.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{podcast.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4" />
                {podcast.duration}
              </div>
              <p className="text-sm text-gray-500 mb-4">Hosted by: {podcast.guests}</p>
              <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Listen Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
