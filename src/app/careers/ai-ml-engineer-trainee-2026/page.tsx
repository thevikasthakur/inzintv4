'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Users,
  Briefcase,
  Clock,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Code,
  Brain,
  Database,
  Cloud,
  GitBranch,
  Mail,
  Phone,
  FileText,
  Award,
  BookOpen,
  Target,
  Shield
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AIMLEngineerTraineePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div {...fadeInUp} className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-semibold">2026 Batch Hiring</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Full Stack AI & ML Engineer
              <span className="block text-3xl lg:text-5xl mt-2 text-primary-200">Trainee Developers</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Launch your career in AI & Machine Learning with us
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Apply Now
              </a>
              <a
                href="#requirements"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 transition-colors border border-white/20"
              >
                View Requirements
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: MapPin, label: 'Location', value: 'Sector 65, Noida' },
              { icon: Calendar, label: 'Start Date', value: <><s>Jan 05, 2026</s> Feb 02, 2026 <span className="text-xs text-gray-500">(Updated due to scheduling adjustments)</span></> },
              { icon: Users, label: 'Positions', value: '6 Openings' },
              { icon: Clock, label: 'Work Mode', value: 'Full-Time, On-site' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <item.icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                <p className="font-bold text-gray-900">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Role */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">About the Role</h2>
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 lg:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We, at Inzint are looking for enthusiastic and self-driven Full Stack AI & ML Engineer – Trainees to join our dynamic team.
                This is a unique opportunity for 2026 graduates who are passionate about Artificial Intelligence, Machine Learning,
                and Full Stack Development to work on cutting-edge technologies and real-world AI applications.
              </p>
              <div className="bg-white rounded-xl p-6 border border-primary-200">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                  6-Month Training Program
                </h3>
                <p className="text-gray-700">
                  During your first six months with us, you will receive extensive training in various technologies including
                  Data Science, AI/ML, DevOps, and AWS among others. This comprehensive training period will prepare you for
                  real-world challenges and cutting-edge projects.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Primary Responsibilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Primary Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Code,
                  title: 'Writing and Maintaining Code',
                  description: 'Develop, test, and maintain high-quality software solutions in alignment with project requirements and coding standards.'
                },
                {
                  icon: Users,
                  title: 'Client Engagement',
                  description: 'Participate in client meetings to gather requirements, provide technical insights, and ensure alignment between development and client expectations.'
                },
                {
                  icon: FileText,
                  title: 'Project Reporting',
                  description: 'Prepare and deliver regular progress reports, document development activities, and communicate updates to internal teams and stakeholders.'
                },
                {
                  icon: Target,
                  title: 'Collaboration',
                  description: 'Work closely with cross-functional teams including designers, QA, and project managers to ensure smooth project execution.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 rounded-lg p-3">
                      <item.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Requirements</h2>

            {/* Education Requirements */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary-600" />
                Education Requirements
              </h3>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-700 mb-4">
                  Bachelor's or Master's degree in Computer Science, Information Technology, Data Science, or related fields.
                </p>
                <p className="font-semibold text-blue-900">
                  ⚠️ The course must be full-time and regular.
                </p>
              </div>
            </div>

            {/* Additional Requirements */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-primary-600" />
                Additional Requirements
              </h3>
              <div className="space-y-3">
                {[
                  'You must have scored at least 60% marks throughout your academics.',
                  <><span>There should be no active backlogs on the day of joining (i.e. on <s>Jan 05, 2026</s> Feb 02, 2026).</span></>,
                  'You must have studied Mathematics in your 10th, 12th, and Graduation for at least two semesters.',
                  'You must have done projects in a Full Stack Web App, Mobile App or an AI/ML project.'
                ].map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Skills Requirements</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Required Skills */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Brain className="h-6 w-6 text-primary-600" />
                  Required Skills
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      category: 'Core ML Concepts',
                      skills: 'Supervised & Unsupervised Learning, Model Selection & Evaluation, Mathematical Foundations, Common ML Algorithms'
                    },
                    {
                      category: 'Programming',
                      skills: 'Python and JavaScript'
                    },
                    {
                      category: 'Frontend',
                      skills: 'ReactJS'
                    },
                    {
                      category: 'Backend Development',
                      skills: 'REST API development using Flask, Django, FastAPI, or Node.js'
                    },
                    {
                      category: 'Databases',
                      skills: 'SQL and NoSQL'
                    },
                    {
                      category: 'AI/ML Libraries',
                      skills: 'scikit-learn, pandas, numpy, TensorFlow, etc.'
                    },
                    {
                      category: 'Version Control',
                      skills: 'GitHub'
                    },
                    {
                      category: 'Deployment Platforms',
                      skills: 'Vercel, Render, Railway'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.category}:</h4>
                      <p className="text-gray-600 text-sm">{item.skills}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Good-to-Have Skills */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary-600" />
                  Good-to-Have Skills
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      category: 'Advanced ML Concepts',
                      skills: 'Feature Engineering, Bias-Variance Tradeoff, Pipeline Thinking, Overfitting & Generalization, Advanced Algorithms'
                    },
                    {
                      category: 'Cloud Services',
                      skills: 'AWS (EC2, Lambda, Amplify)'
                    },
                    {
                      category: 'Big Data Technologies',
                      skills: 'Apache Spark, Hadoop, AWS S3'
                    },
                    {
                      category: 'Data Engineering',
                      skills: 'ETL processes, data pipelines, vector databases'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.category}:</h4>
                      <p className="text-gray-600 text-sm">{item.skills}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compensation Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Compensation Package</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                  <h3 className="text-xl font-bold">During Training Period</h3>
                </div>
                <p className="text-3xl font-bold text-green-700 mb-2">₹12,000</p>
                <p className="text-gray-600">Monthly Stipend</p>
                <p className="text-sm text-gray-500 mt-2">For the first 6 months</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold">After Training Period</h3>
                </div>
                <p className="text-3xl font-bold text-blue-700 mb-2">₹3 LPA</p>
                <p className="text-gray-600">Annual CTC</p>
                <div className="text-sm text-gray-600 mt-2">
                  <p>• Fixed: ₹2.4 LPA</p>
                  <p>• Variable: ₹0.6 LPA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bond Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Service Bond Information</h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">18-Month Service Bond</h3>
                  <p className="text-gray-700 mb-4">
                    The company will invest significant time, resources, and finances into your training and development.
                    This investment aims at upskilling you to meet company standards. The bond ensures mutual commitment
                    and prevents immediate departure after training.
                  </p>
                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <p className="text-gray-800">
                      <strong>Security Requirement:</strong> An undated signed cheque of ₹1.5 lakh as security,
                      which will be returned upon completion of 18 months with the company.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-lg mb-4">Bond Exemptions/Waivers</h4>
                <div className="space-y-3">
                  {[
                    'Unsatisfactory Performance during the training period',
                    'Long-term disability that significantly hampers work capacity',
                    'Internal transfer to a different department with significantly changed roles',
                    'Admission to a top 200 globally ranked university (QS World Rankings)',
                    'Employment with a Global Fortune 500 company',
                    'Employment with a Unicorn startup',
                    'Permanent government employment (Central or State)'
                  ].map((exemption, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{exemption}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Ready to Start Your AI Journey?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Join Inzint and be part of the AI revolution. Apply now for the 2026 batch trainee program.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact HR Team</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5" />
                  <div>
                    <p>adarshmishra@inzint.com</p>
                    <p>twinkle@inzint.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  <p>+91 9289704058</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:adarshmishra@inzint.com?subject=Application for AI ML Engineer Trainee Position - 2026 Batch"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                <Mail className="h-5 w-5" />
                Send Your Resume
              </a>
              <a
                href="tel:+919289704058"
                className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors border border-white/20"
              >
                <Phone className="h-5 w-5" />
                Call HR
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-primary-100">
                Company: Inzint Pvt. Ltd | Location: B111, B Block, Sector 65, Noida, Uttar Pradesh
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}