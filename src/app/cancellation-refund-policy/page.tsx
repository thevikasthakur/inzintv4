import { Metadata } from 'next';
import { RotateCcw, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Inzint',
  description: 'Learn about the cancellation and refund terms for Inzint services, including recurring subscriptions and one-time project engagements.',
};

export default function CancellationRefundPolicyPage() {
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
              <RotateCcw className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cancellation &amp; Refund Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: February 4, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  This Cancellation &amp; Refund Policy outlines the cancellation and refund terms for all services provided by <strong>Inzint Private Limited</strong> (CIN: U72900UP2020PTC132960), registered at 2nd Floor, 111, B Block Road, Sector 65, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201301.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  By purchasing our services, you agree to the terms set forth in this policy. Please read this policy carefully before engaging our services.
                </p>
              </div>

              {/* Services Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Services Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Inzint provides services under two billing models:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li><strong>Recurring Payment Services</strong>: Website Hosting &amp; Maintenance, VoxReception AI, and ERP Solutions</li>
                  <li><strong>One-Time Payment Services</strong>: Website/Software Development (may be split into milestones)</li>
                </ul>
              </div>

              {/* Cancellation Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Recurring Services (Website Hosting &amp; Maintenance, VoxReception AI, ERP)</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Either party may cancel by providing <strong>30 days&apos; prior written notice</strong></li>
                  <li>Cancellation takes effect at the end of the current paid billing period</li>
                  <li>For VoxReception AI (12-month subscription): early cancellation before subscription term end does not entitle customer to refunds for the remaining term</li>
                  <li>To cancel, email <a href="mailto:support@inzint.com" className="text-primary-600 hover:text-primary-700">support@inzint.com</a> with your account details and cancellation request</li>
                  <li>Upon cancellation of hosting services, Inzint provides a <strong>30-day grace period</strong> to migrate website data. During this period, Inzint shall provide complete website files, database exports, and migration documentation</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">One-Time Services (Website/Software Development)</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Customer may terminate the engagement by providing <strong>30 days&apos; written notice</strong></li>
                  <li>Customer is responsible for payment of all work performed through the termination date</li>
                  <li>Work in progress will be delivered in its current state</li>
                </ul>
              </div>

              {/* Refund Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Refund Policy</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Recurring Services</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li><strong>No pro-rata refunds</strong> for partial month/period cancellations. If you cancel mid-billing cycle, service continues until the end of the paid period but no refund is issued for remaining days</li>
                  <li><strong>Downtime credits</strong>: For unplanned downtime exceeding 48 continuous hours due to reasons within Inzint&apos;s control, customers receive pro-rata credit against future service fees</li>
                </ul>

                <p className="text-gray-600 leading-relaxed mt-4 mb-2">
                  <strong>VoxReception AI service credits</strong> based on monthly uptime percentage:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full text-sm text-gray-600">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Monthly Uptime</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Service Credit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">99.0% &ndash; 99.49%</td>
                        <td className="py-3 px-4">5% of monthly fee</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">98.0% &ndash; 98.99%</td>
                        <td className="py-3 px-4">10% of monthly fee</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">95.0% &ndash; 97.99%</td>
                        <td className="py-3 px-4">25% of monthly fee</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Below 95.0%</td>
                        <td className="py-3 px-4">50% of monthly fee</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">One-Time Services (Website/Software Development)</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li><strong>Development fees are non-refundable once work has commenced</strong></li>
                  <li>If development has not yet started and customer cancels, any advance payment (minus reasonable administrative costs) may be refunded at Inzint&apos;s discretion</li>
                  <li>For milestone-based projects: each milestone is billed individually. Payment is collected while the customer is on session. Completed milestone fees are non-refundable</li>
                  <li><strong>Warranty defects</strong>: During the 30-day warranty period after project completion, Inzint will correct bugs and defects at no additional cost, provided they are not caused by customer modifications or third-party interference</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">When Refunds May Apply</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>If Inzint terminates the agreement due to its own breach, pre-paid amounts for unperformed services will be refunded</li>
                  <li>If the service is materially non-conforming and Inzint cannot reasonably correct it, fees for the defective portion may be refunded</li>
                  <li>Refund requests are processed within 15 business days</li>
                </ul>
              </div>

              {/* Suspension for Non-Payment */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Suspension for Non-Payment</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Inzint may suspend services if payment is overdue by 15&ndash;30 days after written notice</li>
                  <li>Suspension does not relieve customer of payment obligations</li>
                  <li>Late payment interest: 1.5% per month on outstanding amounts</li>
                </ul>
              </div>

              {/* How to Request Cancellation or Refund */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Request Cancellation or Refund</h2>
                <p className="text-gray-600 leading-relaxed">
                  To request a cancellation or refund, please contact us via:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li><strong>Email</strong>: <a href="mailto:support@inzint.com" className="text-primary-600 hover:text-primary-700">support@inzint.com</a></li>
                  <li><strong>Phone</strong>: <a href="tel:+919289909174" className="text-primary-600 hover:text-primary-700">+91 928 990 9174</a> or <a href="tel:+12067964306" className="text-primary-600 hover:text-primary-700">+1 206 796 4306</a></li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Please include the following in your request:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Your name and company name</li>
                  <li>Service being cancelled</li>
                  <li>Account or invoice reference number</li>
                  <li>Reason for cancellation</li>
                </ul>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  This policy is governed by the laws of India. Any disputes arising under or in connection with this policy shall be resolved in accordance with the dispute resolution provisions set forth in our{' '}
                  <a href="/terms-of-service" className="text-primary-600 hover:text-primary-700 font-medium">Terms of Service</a>.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have any questions about this Cancellation &amp; Refund Policy, please contact us:
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
                      <a href="tel:+12067964306" className="text-primary-600 hover:text-primary-700">
                        +1 206 796 4306
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <p className="text-gray-600">
                        Inzint Private Limited<br />
                        2nd Floor, 111, B Block Road, Sector 65, Noida<br />
                        Gautam Buddha Nagar, Uttar Pradesh, India - 201301
                      </p>
                    </div>
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
