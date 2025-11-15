import { Metadata } from 'next';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Inzint',
  description: 'Read the terms and conditions for using Inzint services.',
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
              Last updated: November 15, 2025
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
                  Welcome to Inzint. These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Please read these Terms carefully before using our Services. If you do not agree with these Terms, you must not access or use our Services.
                </p>
              </div>

              {/* Definitions */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Definitions</h2>
                <p className="text-gray-600 leading-relaxed">
                  For the purposes of these Terms:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li><strong>"Company"</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to Inzint Private Limited.</li>
                  <li><strong>"Client"</strong> or <strong>"You"</strong> refers to the individual or entity accessing or using our Services.</li>
                  <li><strong>"Services"</strong> refers to the software development, consulting, and related services provided by the Company.</li>
                  <li><strong>"Agreement"</strong> refers to these Terms of Service together with any Statement of Work or project-specific agreements.</li>
                  <li><strong>"Deliverables"</strong> refers to the work product, code, documentation, or other materials created by the Company for the Client.</li>
                </ul>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are accessing or using our Services on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                </p>
              </div>

              {/* Services */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Inzint provides custom software development services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Custom software development and engineering</li>
                  <li>Mobile application development (iOS, Android)</li>
                  <li>Web application development</li>
                  <li>AI and machine learning solutions</li>
                  <li>Cloud infrastructure and DevOps services</li>
                  <li>UI/UX design services</li>
                  <li>Quality assurance and testing</li>
                  <li>IT consulting and technical advisory</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  The specific scope of services will be detailed in a Statement of Work (SOW) or project agreement between the Company and the Client.
                </p>
              </div>

              {/* Project Engagement */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Engagement</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Statement of Work</h3>
                <p className="text-gray-600 leading-relaxed">
                  Each project engagement will be governed by a Statement of Work (SOW) that outlines:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Project scope and deliverables</li>
                  <li>Timeline and milestones</li>
                  <li>Pricing and payment terms</li>
                  <li>Resources and team composition</li>
                  <li>Acceptance criteria and testing procedures</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Changes to Scope</h3>
                <p className="text-gray-600 leading-relaxed">
                  Any changes to the agreed-upon scope of work must be documented in a written change request and approved by both parties. Changes may result in adjustments to timelines and costs.
                </p>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Terms</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Fees</h3>
                <p className="text-gray-600 leading-relaxed">
                  Client agrees to pay the fees specified in the applicable SOW or agreement. Unless otherwise specified, all fees are quoted and payable in USD.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Payment Schedule</h3>
                <p className="text-gray-600 leading-relaxed">
                  Payment terms will be specified in the SOW and may include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Upfront deposit or retainer</li>
                  <li>Milestone-based payments</li>
                  <li>Monthly recurring payments</li>
                  <li>Time and materials billing</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Late Payments</h3>
                <p className="text-gray-600 leading-relaxed">
                  Invoices are due within 30 days of the invoice date unless otherwise specified. Late payments may incur interest charges of 1.5% per month or the maximum rate permitted by law, whichever is lower. The Company reserves the right to suspend services for accounts with overdue balances.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Taxes</h3>
                <p className="text-gray-600 leading-relaxed">
                  All fees are exclusive of applicable taxes, duties, or similar governmental assessments, including VAT, GST, sales tax, or use tax. Client is responsible for paying all such taxes associated with the Services.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Client-Owned IP</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upon full payment of all fees, the Company assigns to the Client all rights, title, and interest in the custom Deliverables created specifically for the Client under the applicable SOW.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Company-Owned IP</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Company retains ownership of:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Pre-existing intellectual property and tools</li>
                  <li>Reusable frameworks, libraries, and components</li>
                  <li>General methodologies and processes</li>
                  <li>Any derivative works based on Company IP</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Third-Party Components</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deliverables may include third-party open-source or licensed components. Client's use of such components is subject to the applicable third-party licenses.
                </p>
              </div>

              {/* Confidentiality */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Confidentiality</h2>
                <p className="text-gray-600 leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the engagement. This obligation survives the termination of the agreement.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Confidential information does not include information that:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Is or becomes publicly available through no breach of this Agreement</li>
                  <li>Was rightfully in the receiving party's possession prior to disclosure</li>
                  <li>Is independently developed without use of the confidential information</li>
                  <li>Is rightfully obtained from a third party without breach of confidentiality</li>
                </ul>
              </div>

              {/* Warranties and Disclaimers */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Warranties and Disclaimers</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Company Warranties</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Company warrants that:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Services will be performed in a professional and workmanlike manner</li>
                  <li>Deliverables will materially conform to the specifications in the SOW</li>
                  <li>We have the right to provide the Services and Deliverables</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Disclaimer</h3>
                <p className="text-gray-600 leading-relaxed">
                  EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, THE SERVICES AND DELIVERABLES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. THE COMPANY DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Warranty Period</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Company provides a warranty period (typically 30-90 days as specified in the SOW) for reported defects in Deliverables. During this period, the Company will correct defects at no additional charge.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  THE COMPANY'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY CLIENT TO THE COMPANY IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
                </p>
              </div>

              {/* Client Responsibilities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Client agrees to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Provide timely access to necessary resources, information, and personnel</li>
                  <li>Provide timely feedback and approvals</li>
                  <li>Maintain appropriate backup of all data</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use the Services for any illegal or unauthorized purpose</li>
                  <li>Not interfere with or disrupt the integrity or performance of the Services</li>
                </ul>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Termination</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Termination for Convenience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Either party may terminate an engagement upon 30 days' written notice. Client will be responsible for payment of all work performed through the termination date.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Termination for Cause</h3>
                <p className="text-gray-600 leading-relaxed">
                  Either party may terminate immediately if the other party:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Materially breaches these Terms and fails to cure within 15 days of written notice</li>
                  <li>Becomes insolvent or subject to bankruptcy proceedings</li>
                  <li>Ceases business operations</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Effect of Termination</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upon termination:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Client must pay all outstanding fees for work performed</li>
                  <li>Company will deliver all completed work product</li>
                  <li>Each party will return or destroy confidential information</li>
                  <li>Provisions that by their nature should survive will continue (including confidentiality, intellectual property, and limitation of liability)</li>
                </ul>
              </div>

              {/* Indemnification */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-600 leading-relaxed">
                  Client agrees to indemnify, defend, and hold harmless the Company from any claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Client's use of the Deliverables</li>
                  <li>Client's breach of these Terms</li>
                  <li>Client's violation of any law or third-party rights</li>
                  <li>Content or data provided by Client</li>
                </ul>
              </div>

              {/* Dispute Resolution */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Negotiation</h3>
                <p className="text-gray-600 leading-relaxed">
                  In the event of any dispute, the parties agree to first attempt to resolve the matter through good-faith negotiation.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Arbitration</h3>
                <p className="text-gray-600 leading-relaxed">
                  If negotiation fails, disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association or equivalent body in the applicable jurisdiction.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Governing Law</h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the Company is registered, without regard to its conflict of law provisions.
                </p>
              </div>

              {/* General Provisions */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">General Provisions</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Entire Agreement</h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms, together with any SOW and related agreements, constitute the entire agreement between the parties and supersede all prior agreements and understandings.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Amendments</h3>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify clients of material changes via email or through our website. Continued use of our Services after changes constitutes acceptance of the modified Terms.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Assignment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Client may not assign or transfer these Terms without the Company's prior written consent. The Company may assign these Terms in connection with a merger, acquisition, or sale of assets.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Severability</h3>
                <p className="text-gray-600 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Waiver</h3>
                <p className="text-gray-600 leading-relaxed">
                  No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Force Majeure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including acts of God, war, terrorism, pandemics, natural disasters, or government actions.
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
                      <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <p className="text-gray-600">
                        Inzint Private Limited<br />
                        [Your Address]<br />
                        [City, State, ZIP Code]
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
