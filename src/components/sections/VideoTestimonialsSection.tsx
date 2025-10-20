'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Volume2, VolumeX, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    client: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    company: 'TechCorp Inc.',
    quote: 'Working with Appinventiv transformed our business. Their team delivered a world-class mobile app that exceeded all expectations.',
    videoUrl: '/testimonials/video1.mp4',
    thumbnail: '/testimonials/thumb1.jpg',
    rating: 5,
  },
  {
    id: 2,
    client: 'Michael Chen',
    role: 'CTO, InnovateLabs',
    company: 'InnovateLabs',
    quote: 'The AI solutions they built for us reduced operational costs by 40% and improved efficiency dramatically.',
    videoUrl: '/testimonials/video2.mp4',
    thumbnail: '/testimonials/thumb2.jpg',
    rating: 5,
  },
  {
    id: 3,
    client: 'Emily Rodriguez',
    role: 'Product Manager, RetailX',
    company: 'RetailX',
    quote: 'Outstanding work! They understood our vision and delivered a product that our customers absolutely love.',
    videoUrl: '/testimonials/video3.mp4',
    thumbnail: '/testimonials/thumb3.jpg',
    rating: 5,
  },
  {
    id: 4,
    client: 'David Park',
    role: 'Founder, HealthTech Solutions',
    company: 'HealthTech Solutions',
    quote: 'Professional, responsive, and highly skilled. The app they built is now used by millions of users daily.',
    videoUrl: '/testimonials/video4.mp4',
    thumbnail: '/testimonials/thumb4.jpg',
    rating: 5,
  },
];

export default function VideoTestimonialsSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(new Set());

  const toggleMute = (id: number) => {
    setMutedVideos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
          >
            CLIENT TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from leaders who've transformed their businesses with us.
          </motion.p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Video Container */}
                <div className="relative aspect-video bg-gray-900">
                  {playingVideo === testimonial.id ? (
                    <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
                      {/* Video Player Placeholder */}
                      <div className="text-white text-center">
                        <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-sm opacity-75">Video Player</p>
                      </div>

                      {/* Mute Control */}
                      <button
                        onClick={() => toggleMute(testimonial.id)}
                        className="absolute bottom-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                        aria-label={mutedVideos.has(testimonial.id) ? 'Unmute' : 'Mute'}
                      >
                        {mutedVideos.has(testimonial.id) ? (
                          <VolumeX className="w-5 h-5 text-white" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-white" />
                        )}
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Thumbnail */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20" />

                      {/* Play Button */}
                      <button
                        onClick={() => setPlayingVideo(testimonial.id)}
                        className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-all"
                        aria-label={`Play testimonial from ${testimonial.client}`}
                      >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-primary-500 ml-1" fill="currentColor" />
                        </div>
                      </button>

                      {/* Company Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                        {testimonial.company}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Quote */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary-500 opacity-50 mb-2" />
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.client}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40">
            See More Success Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
}
