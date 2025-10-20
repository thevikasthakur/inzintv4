'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Trophy, Star, Medal } from 'lucide-react';

const awards = [
  {
    id: 1,
    icon: Trophy,
    title: 'Best Mobile App',
    organization: 'App Excellence Awards',
    year: '2024',
    category: 'Innovation',
    description: 'Recognized for outstanding mobile app development',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 2,
    icon: Star,
    title: 'Top Developer',
    organization: 'Clutch',
    year: '2024',
    category: 'Development',
    description: 'Ranked as top app development company',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    icon: Medal,
    title: 'Excellence in AI',
    organization: 'Tech Innovation Awards',
    year: '2024',
    category: 'Artificial Intelligence',
    description: 'Leading AI solutions provider',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    icon: Award,
    title: 'Best UX Design',
    organization: 'Design Awards',
    year: '2024',
    category: 'User Experience',
    description: 'Outstanding user experience design',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    icon: Trophy,
    title: 'Innovation Leader',
    organization: 'Business Excellence',
    year: '2023',
    category: 'Technology',
    description: 'Leading technology innovation',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 6,
    icon: Star,
    title: 'Client Satisfaction',
    organization: 'GoodFirms',
    year: '2023',
    category: 'Service',
    description: '99% client satisfaction rating',
    color: 'from-indigo-500 to-purple-500',
  },
];

const certifications = [
  { name: 'ISO 9001:2015', type: 'Quality Management' },
  { name: 'ISO 27001:2013', type: 'Information Security' },
  { name: 'CMMI Level 5', type: 'Process Improvement' },
  { name: 'AWS Partner', type: 'Cloud Solutions' },
  { name: 'Google Partner', type: 'Technology' },
  { name: 'Microsoft Partner', type: 'Enterprise Solutions' },
];

export default function AwardsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const maxSlides = Math.ceil(awards.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const visibleAwards = awards.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
          >
            AWARDS & RECOGNITION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Industry Recognition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our commitment to excellence has earned us recognition from industry leaders worldwide
          </motion.p>
        </div>

        {/* Awards Carousel */}
        <div className="relative mb-16">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {visibleAwards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${award.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <award.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-500 mb-2">
                      {award.year} • {award.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {award.title}
                    </h3>
                    <div className="text-primary-600 font-semibold mb-3">
                      {award.organization}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  {/* Badge */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${award.color} text-white`}>
                        Winner
                      </span>
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous awards"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: maxSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-primary-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next awards"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Certifications & Partnerships
            </h3>
            <p className="text-gray-600">
              Certified and trusted by leading technology organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition-colors">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div className="font-bold text-gray-900 mb-1 text-sm">
                  {cert.name}
                </div>
                <div className="text-xs text-gray-600">
                  {cert.type}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: '50+', label: 'Awards Won', icon: Trophy },
            { value: '100+', label: 'Industry Recognition', icon: Star },
            { value: '15+', label: 'Certifications', icon: Medal },
            { value: '99%', label: 'Client Satisfaction', icon: Award },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl"
            >
              <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
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
