import { Metadata } from 'next';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Inzint',
  description: 'Read the terms and conditions for using Inzint services, including software development, VoxReception AI, website hosting, and ERP subscriptions.',
};

export default function TermsOfServicePage() {
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
              <FileText className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Terms of Service
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
                  Welcome to Inzint. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of services provided by <strong>Inzint Private Limited</strong> (CIN: U72900UP2020PTC132960), a company incorporated under the Companies Act, 2013, with its registered office at 2nd Floor, 111, B Block Road, Sector 65, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201301 (collectively, the &ldquo;Services&rdquo;).
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Please read these Terms carefully before using our Services. If you do not agree with these Terms, you must not access or use our Services. By accessing or using our Services, you agree to be bound by these Terms and our{' '}
                  <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700">Privacy Policy</a>.
                </p>
              </div>

              {/* Definitions */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Definitions</h2>
                <p className="text-gray-600 leading-relaxed">
                  For the purposes of these Terms:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li><strong>&ldquo;Company&rdquo;</strong> (also referred to as &ldquo;INZINT&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo;) refers to Inzint Private Limited.</li>
                  <li><strong>&ldquo;Client&rdquo;</strong>, <strong>&ldquo;Customer&rdquo;</strong>, or <strong>&ldquo;You&rdquo;</strong> refers to the individual or entity accessing or using our Services.</li>
                  <li><strong>&ldquo;Services&rdquo;</strong> refers to all services provided by the Company, including software development, website hosting and maintenance, VoxReception AI, and ERP subscriptions.</li>
                  <li><strong>&ldquo;Agreement&rdquo;</strong> refers to these Terms of Service together with any Statement of Work, Order Form, or service-specific agreement.</li>
                  <li><strong>&ldquo;Deliverables&rdquo;</strong> refers to the work product, code, documentation, or other materials created by the Company for the Client.</li>
                  <li><strong>&ldquo;Subscription Term&rdquo;</strong> refers to the period during which the Customer has access to and use of recurring Services.</li>
                </ul>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700">Privacy Policy</a>. If you are accessing or using our Services on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                </p>
              </div>

              {/* Our Services */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Inzint provides the following categories of services:
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Recurring Payment Services</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-3 mt-4">
                  <li><strong>Website Hosting &amp; Maintenance</strong> &mdash; Managed WordPress hosting on secure cloud infrastructure, SSL certificates, daily automated backups (30-day retention), WordPress core and plugin/theme updates, monthly security scans, uptime monitoring, and minor content updates (up to 2 hours per month). Billed monthly, payable in advance.</li>
                  <li><strong>VoxReception AI</strong> &mdash; AI-powered telephony Software as a Service (SaaS), including AI receptionist, automated call handling, appointment scheduling, call forwarding, analytics, CRM integration, and multi-language support. Subscription term is 12 months with monthly billing. Includes allocated call minutes with overage charges for additional usage.</li>
                  <li><strong>ERP Solutions</strong> &mdash; Cloud-based Enterprise Resource Planning platform for managing business operations. Billed monthly or annually as per the applicable Order Form.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">One-Time Payment Service</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-3 mt-4">
                  <li><strong>Website / Software Development</strong> &mdash; Custom software development including web applications, mobile applications, AI/ML solutions, cloud infrastructure, and UI/UX design. Billed as a one-time project fee, which may be divided into milestones. Each milestone is billed individually and payment is collected while the customer is on session.</li>
                </ul>

                <p className="text-gray-600 leading-relaxed mt-4">
                  The specific scope of each service engagement will be detailed in a Statement of Work (SoW), Order Form, or service-specific agreement between the Company and the Client.
                </p>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Terms</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Recurring Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Subscription charges are payable in advance. Monthly Hosting &amp; Maintenance fees are due on the 1st of each month. VoxReception AI subscriptions are billed monthly, prepaid, with payment due within 7 days of invoice. All subscription charges are due in full upon commencement of the Subscription Term unless otherwise specified in an Order Form.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">One-Time Development Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Website/Software Development fees are payable as follows: 50% advance upon project commencement, and 50% upon project completion and customer acceptance. For milestone-based projects, each milestone is billed individually and payment is collected while the customer is on session. Invoices are due within 7 days of the invoice date.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Late Payments</h3>
                <p className="text-gray-600 leading-relaxed">
                  If Customer fails to pay any undisputed amount within 15 days of the due date, INZINT may charge interest at 1.5% per month on the outstanding amount and may suspend Services until payment is received. Suspension shall not relieve Customer of payment obligations.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Taxes</h3>
                <p className="text-gray-600 leading-relaxed">
                  All fees are exclusive of applicable taxes. Customer shall be responsible for payment of all applicable taxes, including GST, sales tax, VAT, or similar charges relating to Customer&apos;s purchase and use of the Services. INZINT shall invoice taxes as a separate line item.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Client-Owned IP</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upon full payment of all fees, the Company assigns to the Client all rights, title, and interest in the custom Deliverables created specifically for the Client, including custom design elements, content, and business-specific customizations.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Company-Owned IP</h3>
                <p className="text-gray-600 leading-relaxed">
                  INZINT retains all intellectual property rights in its proprietary tools, code libraries, frameworks, methodologies, and the VoxReception AI platform. For SaaS services, Customer acknowledges this constitutes a services arrangement and not a license or sale of software.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Third-Party Components</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deliverables may include third-party open-source or licensed components (including WordPress themes and plugins). Client&apos;s use of such components is subject to their respective licenses.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Restriction on AI Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  INZINT has no rights to reproduce or use Customer&apos;s Confidential Information, Customer Content, or Deliverables for purposes of training artificial intelligence technologies without Customer&apos;s specific and express written permission.
                </p>
              </div>

              {/* Confidentiality */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Confidentiality</h2>
                <p className="text-gray-600 leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the engagement. This includes business plans, customer data, pricing, technical specifications, login credentials, and proprietary methods.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Confidential information does not include information that: (a) is or becomes publicly available through no fault of the receiving party, (b) was rightfully known prior to disclosure, (c) is independently developed without use of the confidential information, or (d) is required to be disclosed by law.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Confidentiality obligations survive termination of the agreement for a period of three (3) years for general services, and five (5) years for SaaS services (perpetually in the case of software).
                </p>
              </div>

              {/* Warranties and Disclaimers */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Warranties and Disclaimers</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Company Warranties</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Company warrants that:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Services will be performed in a professional and workmanlike manner by qualified personnel</li>
                  <li>Deliverables will materially conform to the specifications in the applicable SoW</li>
                  <li>Websites will function properly on current versions of major browsers (Chrome, Firefox, Safari, Edge) and be responsive on standard devices</li>
                  <li>VoxReception AI shall substantially perform as specified in the Documentation during the Subscription Term</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Warranty Period</h3>
                <p className="text-gray-600 leading-relaxed">
                  For development projects, the Company provides a <strong>30-day warranty period</strong> following project completion. During this period, the Company will correct bugs, errors, or defects at no additional cost, provided such issues are reported in writing and are not caused by Customer modifications or third-party interference.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Disclaimer</h3>
                <p className="text-gray-600 leading-relaxed">
                  EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, THE SERVICES AND DELIVERABLES ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTY OF ANY KIND. THE COMPANY DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. THE COMPANY DOES NOT WARRANT THE ACCURACY OF AI-GENERATED RESPONSES IN ALL SCENARIOS.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  NEITHER PARTY SHALL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, BUSINESS OPPORTUNITIES, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO THESE TERMS.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  INZINT&apos;S TOTAL AGGREGATE LIABILITY UNDER THESE TERMS SHALL NOT EXCEED THE TOTAL FEES ACTUALLY PAID BY CUSTOMER TO INZINT DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  These limitations shall not apply to: (a) Customer&apos;s payment obligations, (b) either party&apos;s indemnification obligations, (c) breaches of confidentiality, or (d) claims arising from gross negligence or willful misconduct.
                </p>
              </div>

              {/* Client Responsibilities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Client agrees to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Provide timely access to necessary resources, content, information, and personnel</li>
                  <li>Provide timely feedback and approvals at each project milestone (failure to respond within 7 business days shall be deemed acceptance)</li>
                  <li>Maintain the confidentiality and security of all login credentials provided</li>
                  <li>Ensure all content provided is accurate, legal, and does not infringe third-party rights</li>
                  <li>Comply with all applicable laws and regulations, including data privacy and telecom regulations</li>
                  <li>Not use the Services for any illegal, fraudulent, defamatory, or harmful activities</li>
                  <li>Not make unauthorized modifications to website code, themes, or plugins without INZINT&apos;s knowledge</li>
                </ul>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Termination</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Termination of Recurring Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Either party may terminate recurring services by providing not less than <strong>30 days&apos; prior written notice</strong>. Upon such termination, Services shall cease at the end of the current paid period.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Termination for Cause</h3>
                <p className="text-gray-600 leading-relaxed">
                  Either party may terminate immediately upon a material breach that has not been cured within <strong>30 days</strong> after receipt of written notice describing the breach in reasonable detail.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Refunds and Cancellation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Development fees paid are non-refundable once work has commenced. No pro-rata refund shall be provided for mid-period cancellation of recurring services. For complete details, see our{' '}
                  <a href="/cancellation-refund-policy" className="text-primary-600 hover:text-primary-700">Cancellation &amp; Refund Policy</a>.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Effect of Termination</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>For hosting services, INZINT shall provide a 30-day grace period to migrate website data</li>
                  <li>For SaaS services, all usage rights terminate immediately and Customer data will be available for export for 30 days</li>
                  <li>Client must pay all outstanding fees for work performed</li>
                  <li>Each party will return or destroy confidential information</li>
                  <li>Provisions that by their nature should survive will continue (including confidentiality, intellectual property, limitation of liability, and indemnification)</li>
                </ul>
              </div>

              {/* Indemnification */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-600 leading-relaxed">
                  <strong>By INZINT:</strong> INZINT shall indemnify and hold harmless Customer from claims arising from INZINT&apos;s infringement of third-party intellectual property rights through code or designs created solely by INZINT, or INZINT&apos;s gross negligence or willful misconduct.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  <strong>By Customer:</strong> Customer shall indemnify and hold harmless INZINT from claims arising from Customer Content, Customer&apos;s use of Services in violation of applicable laws, Customer&apos;s unauthorized modifications, or Customer&apos;s breach of these Terms.
                </p>
              </div>

              {/* Dispute Resolution */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Negotiation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Before initiating arbitration, the parties shall attempt to resolve any dispute through good faith negotiations by progressively escalating the matter through each party&apos;s senior business representatives for a period of at least 15 days.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Arbitration</h3>
                <p className="text-gray-600 leading-relaxed">
                  If negotiation fails, disputes will be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be Noida/Delhi NCR, India. The arbitration proceedings shall be conducted in English.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Governing Law</h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India. If a dispute is not resolved by arbitration, the parties irrevocably agree to the exclusive jurisdiction of the courts of New Delhi, India.
                </p>
              </div>

              {/* General Provisions */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">General Provisions</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Independent Contractor</h3>
                <p className="text-gray-600 leading-relaxed">
                  INZINT is an independent contractor. Nothing in these Terms creates an employment, partnership, or agency relationship between the parties.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Entire Agreement</h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms, together with any SoW, Order Forms, and related agreements, constitute the entire agreement between the parties and supersede all prior agreements and understandings.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Amendments</h3>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify clients of material changes via email or through our website. Continued use of our Services after changes constitutes acceptance of the modified Terms.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Assignment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Neither party may assign these Terms without the prior written consent of the other party, except that either party may assign in connection with a merger, acquisition, or sale of substantially all its assets.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Severability</h3>
                <p className="text-gray-600 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Force Majeure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, government actions or orders, internet service disruptions, power outages, epidemics, pandemics, strikes, or failures of third-party service providers.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Waiver</h3>
                <p className="text-gray-600 leading-relaxed">
                  No waiver of any provision shall be effective unless in writing and signed by the waiving party.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>

                <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <a href="mailto:legal@inzint.com" className="text-primary-600 hover:text-primary-700">
                        legal@inzint.com
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
