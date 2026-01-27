import { Metadata } from 'next';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Inzint',
  description: 'Learn how Inzint collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
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
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
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
                  At Inzint ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Fill out contact forms or inquiry forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request information about our services</li>
                  <li>Apply for employment opportunities</li>
                  <li>Communicate with us via email, phone, or other channels</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  This information may include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Company name and job title</li>
                  <li>Project requirements and preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device and browsing activity, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Clickstream data and navigation patterns</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Sending you technical notices, updates, and administrative messages</li>
                  <li>Communicating with you about products, services, and events that may interest you</li>
                  <li>Processing and fulfilling your requests</li>
                  <li>Analyzing usage patterns and trends to improve user experience</li>
                  <li>Detecting, preventing, and addressing technical issues and security threats</li>
                  <li>Complying with legal obligations and protecting our rights</li>
                </ul>
              </div>

              {/* Information Sharing and Disclosure */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Service Providers</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. These service providers are contractually obligated to keep your information confidential and use it only for the purposes for which we disclose it to them.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Legal Requirements</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Business Transfers</h3>
                <p className="text-gray-600 leading-relaxed">
                  In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or use of your personal information.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>

              {/* Cookies and Tracking Technologies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website. For more information about cookies and how to manage them, please see our Cookie Policy.
                </p>
              </div>

              {/* Your Rights and Choices */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
                <p className="text-gray-600 leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li><strong>Access:</strong> You can request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> You can request that we correct inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> You can request that we delete your personal information</li>
                  <li><strong>Objection:</strong> You can object to our processing of your personal information</li>
                  <li><strong>Restriction:</strong> You can request that we restrict the processing of your information</li>
                  <li><strong>Portability:</strong> You can request a copy of your information in a structured, machine-readable format</li>
                  <li><strong>Withdraw Consent:</strong> Where we rely on your consent, you can withdraw it at any time</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us using the contact information provided below.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete such information.
                </p>
              </div>

              {/* International Data Transfers */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  If you are located outside the United States and choose to provide information to us, please note that we transfer the information to the United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's website. We strongly advise you to review the privacy policy of every site you visit.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </div>

              {/* Changes to This Privacy Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>

              {/* Contact Us */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>

                <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <a href="mailto:privacy@inzint.com" className="text-primary-600 hover:text-primary-700">
                        privacy@inzint.com
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
                        B-111, Sector 65, Noida<br />
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
