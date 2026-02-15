import { Metadata } from 'next';
import { Headset, Mail, Phone, MapPin, Clock, AlertTriangle, HelpCircle, Globe, Bot, Server, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Support | Inzint',
  description: 'Get help with Inzint services. Find support contacts, report issues, and get answers to frequently asked questions.',
};

export default function CustomerSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
              <Headset className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Customer Support
            </h1>
            <p className="text-lg text-gray-600">
              We are here to help. Find the right support channel for your service, report issues, or browse our FAQs below.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">

              {/* Service Support Contacts */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Support Contacts</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Each of our services has a dedicated support channel. Please reach out to the appropriate team for the fastest resolution.
                </p>

                {/* Recurring Payment Services */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recurring Payment Services</h3>

                <div className="space-y-6 mb-8">
                  {/* Website Hosting & Maintenance */}
                  <div className="border-l-4 border-blue-500 rounded-2xl bg-blue-50/50 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-6 h-6 text-blue-600" />
                      <h4 className="text-xl font-semibold text-gray-900 m-0">Website Hosting &amp; Maintenance</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Managed WordPress hosting including SSL certificates, automated backups, regular updates, security scans, and minor content updates (up to 2 hours per month).
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Support Email: </span>
                        <a href="mailto:support@inzint.com" className="text-primary-600 hover:text-primary-700">support@inzint.com</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Business Hours: 10:00 AM - 7:00 PM IST, Monday - Friday</span>
                      </div>
                    </div>
                  </div>

                  {/* VoxReception AI */}
                  <div className="border-l-4 border-purple-500 rounded-2xl bg-purple-50/50 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Bot className="w-6 h-6 text-purple-600" />
                      <h4 className="text-xl font-semibold text-gray-900 m-0">VoxReception AI</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      AI-powered telephony and virtual receptionist SaaS platform. Automate call handling, appointment scheduling, and customer interactions with intelligent voice AI.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700">Support Email: </span>
                        <a href="mailto:hello@voxreception.com" className="text-primary-600 hover:text-primary-700">hello@voxreception.com</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700">Phone: </span>
                        <a href="tel:+919289909174" className="text-primary-600 hover:text-primary-700">+91 928-990-9174</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700">Business Hours: 9:00 AM - 10:00 PM IST, Monday - Saturday</span>
                      </div>
                    </div>
                  </div>

                  {/* Inzint ERP Subscription */}
                  <div className="border-l-4 border-emerald-500 rounded-2xl bg-emerald-50/50 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Server className="w-6 h-6 text-emerald-600" />
                      <h4 className="text-xl font-semibold text-gray-900 m-0">ERP Solutions</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Cloud-based ERP platform for managing business operations including inventory, accounting, HR, and project management in a unified system.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-emerald-600" />
                        <span className="text-gray-700">Support Email: </span>
                        <a href="mailto:support@inzint.com" className="text-primary-600 hover:text-primary-700">support@inzint.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* One-Time Payment Service */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">One-Time Payment Service</h3>

                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-amber-500 rounded-2xl bg-amber-50/50 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="w-6 h-6 text-amber-600" />
                      <h4 className="text-xl font-semibold text-gray-900 m-0">Website / Software Development</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Custom one-time development projects including websites, web applications, mobile apps, and enterprise software. Projects can be structured with milestone-based payments.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-amber-600" />
                        <span className="text-gray-700">Support Email: </span>
                        <a href="mailto:support@inzint.com" className="text-primary-600 hover:text-primary-700">support@inzint.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* General Support Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">General Support Information</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  For general inquiries or if you are unsure which service your question relates to, please use the contact details below.
                </p>

                <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <a href="mailto:support@inzint.com" className="text-primary-600 hover:text-primary-700">
                        support@inzint.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <a href="tel:+919289909174" className="text-primary-600 hover:text-primary-700">
                        +91 928 990 9174
                      </a>
                      <span className="text-gray-400 mx-2">|</span>
                      <a href="tel:+12067964306" className="text-primary-600 hover:text-primary-700">
                        +1 206 796 4306
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Office Address</div>
                      <p className="text-gray-600">
                        Inzint Private Limited<br />
                        2nd Floor, B-111, Sector 65, Noida<br />
                        Uttar Pradesh, India - 201301
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Report an Issue */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Report an Issue</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To help us resolve your issue as quickly as possible, please include the following information when submitting a support request:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li><strong>Description</strong> &mdash; A clear and concise summary of the issue you are experiencing.</li>
                  <li><strong>Steps to Reproduce</strong> &mdash; A step-by-step guide to replicate the problem, including any specific inputs or conditions.</li>
                  <li><strong>Screenshots or Screen Recordings</strong> &mdash; Visual evidence of the issue, including any error messages displayed on screen.</li>
                  <li><strong>Urgency Level</strong> &mdash; Indicate whether the issue is Critical, High, Medium, or Low priority (see response time expectations below).</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Send your report to the appropriate support email listed above for your service. If unsure, email <a href="mailto:support@inzint.com" className="text-primary-600 hover:text-primary-700">support@inzint.com</a> and we will route it to the right team.
                </p>
              </div>

              {/* Response Time Expectations */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Response Time Expectations</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We aim to acknowledge and respond to all support requests within the following timeframes during business hours:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-red-200 rounded-xl p-4 bg-red-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <span className="font-semibold text-gray-900">Critical</span>
                    </div>
                    <p className="text-gray-600 text-sm">Service outage or complete loss of functionality.</p>
                    <p className="text-red-700 font-semibold mt-2">2 &ndash; 4 hours</p>
                  </div>

                  <div className="border border-orange-200 rounded-xl p-4 bg-orange-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      <span className="font-semibold text-gray-900">High</span>
                    </div>
                    <p className="text-gray-600 text-sm">Major feature impaired but service is operational.</p>
                    <p className="text-orange-700 font-semibold mt-2">4 &ndash; 8 hours</p>
                  </div>

                  <div className="border border-yellow-200 rounded-xl p-4 bg-yellow-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-yellow-600" />
                      <span className="font-semibold text-gray-900">Medium</span>
                    </div>
                    <p className="text-gray-600 text-sm">Minor feature issue or non-urgent request.</p>
                    <p className="text-yellow-700 font-semibold mt-2">1 business day</p>
                  </div>

                  <div className="border border-green-200 rounded-xl p-4 bg-green-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <HelpCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-gray-900">Low</span>
                    </div>
                    <p className="text-gray-600 text-sm">General questions, feedback, or feature requests.</p>
                    <p className="text-green-700 font-semibold mt-2">2 business days</p>
                  </div>
                </div>
              </div>

              {/* Frequently Asked Questions */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I cancel my subscription?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To cancel a recurring subscription (Website Hosting &amp; Maintenance, VoxReception AI, or Inzint ERP), you must provide <strong>30 days&apos; written notice</strong> via email to the support address for your service. Your service will remain active until the end of the current billing period after the notice period has elapsed.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I request a refund?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Refund eligibility and procedures vary by service. Please review our{' '}
                      <a href="/cancellation-refund-policy" className="text-primary-600 hover:text-primary-700 font-medium">
                        Cancellation &amp; Refund Policy
                      </a>{' '}
                      for complete details. To initiate a refund, email <a href="mailto:support@inzint.com" className="text-primary-600 hover:text-primary-700">support@inzint.com</a> with your account details and reason for the request.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I escalate an issue?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      If your issue has not been resolved within the expected response time, or if you are not satisfied with the resolution provided, you can escalate:
                    </p>
                    <ol className="list-decimal pl-6 text-gray-600 space-y-2 mt-4">
                      <li>Reply to your existing support ticket requesting escalation and state why the current resolution is insufficient.</li>
                      <li>If no response within one additional business day, email <a href="mailto:support@inzint.com" className="text-primary-600 hover:text-primary-700">support@inzint.com</a> with the subject line <strong>&quot;Escalation Request&quot;</strong> and include your original ticket reference.</li>
                      <li>For urgent matters, call <a href="tel:+919289909174" className="text-primary-600 hover:text-primary-700">+91 928 990 9174</a> or <a href="tel:+12067964306" className="text-primary-600 hover:text-primary-700">+1 206 796 4306</a> during business hours.</li>
                    </ol>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
