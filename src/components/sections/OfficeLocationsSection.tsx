'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const offices = [
  {
    city: 'San Francisco',
    country: 'USA',
    address: '123 Tech Street, San Francisco, CA 94102',
    phone: '+1 (206) 796 4306',
    email: 'sf@inzint.com',
  },
  {
    city: 'New York',
    country: 'USA',
    address: '456 Innovation Ave, New York, NY 10001',
    phone: '+1 (555) 987-6543',
    email: 'ny@inzint.com',
  },
  {
    city: 'London',
    country: 'UK',
    address: '789 Digital Lane, London, EC1A 1BB',
    phone: '+44 20 1234 5678',
    email: 'london@inzint.com',
  },
  {
    city: 'Mumbai',
    country: 'India',
    address: '321 Tech Park, Mumbai, MH 400001',
    phone: '+91 92899 09174',
    email: 'mumbai@inzint.com',
  },
];

export default function OfficeLocationsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Global Offices</h2>
          <p className="text-xl text-gray-600">Find us in major cities around the world</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold">{office.city}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">{office.country}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  {office.address}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  {office.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  {office.email}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
