'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { company } from '@/data/company';

const headquarters =
  company.contact.locations.find((office) => office.isHQ) ?? company.contact.locations[0];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: [company.contact.email, company.contact.supportEmail],
    description: 'New projects go to hello@, existing customers to support@',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: [company.contact.phone, company.contact.phoneUS],
    description: 'India and US numbers, during business hours',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: headquarters.addressLines,
    description: "Headquarters. We also have an office in Muscat and a presence in O'Fallon, MO",
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: [company.contact.businessHours],
    description: 'We reply to every inquiry within one business day',
  },
];

export default function ContactInfoSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                <info.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{info.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{info.description}</p>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
