import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { magiqContent } from "@/data/content-magiq";

export const metadata = {
  title: "Terms of Service - MagiQ AI",
  description: "MagiQ AI Terms of Service - Read our terms and conditions for using our AI-powered sales intelligence platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation {...magiqContent.navigation} />
      
      <section className="pt-32 pb-24 bg-gradient-to-b from-white to-neutral-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-neutral-600">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8 text-neutral-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using MagiQ AI ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service. These Terms apply to all users, including visitors, customers, and others who access or use the Service.
                </p>
                <p className="mt-4">
                  MagiQ AI is an AI-powered sales intelligence platform that provides account discovery, win probability scoring, sales strategy generation, and personalized outreach capabilities for B2B sales teams.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Eligibility and Account Registration</h2>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">2.1 Eligibility</h3>
                <p>You must be at least 18 years old and have the legal capacity to enter into binding agreements to use our Service.</p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">2.2 Account Creation</h3>
                <p className="mb-4">To access certain features, you must create an account. You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">2.3 Account Responsibility</h3>
                <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We are not liable for any loss or damage arising from your failure to protect your account information.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Service Description</h2>
                <p className="mb-4">MagiQ AI provides the following services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Discovery:</strong> AI-powered matching of accounts to your Ideal Customer Profile</li>
                  <li><strong>Win Probability Scoring:</strong> Predictive scoring algorithm to identify high-probability deals</li>
                  <li><strong>Account Intelligence:</strong> Comprehensive company and stakeholder insights</li>
                  <li><strong>Sales Strategy Generation:</strong> AI-generated sales strategies and battle plans</li>
                  <li><strong>Personalized Outreach:</strong> AI-crafted emails and messaging for stakeholders</li>
                  <li><strong>CRM Integration:</strong> Integration with Salesforce, HubSpot, and other CRM platforms</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Pricing and Payment</h2>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">4.1 Credit-Based Pricing</h3>
                <p>
                  MagiQ AI uses a pay-as-you-go credit system. Credits are purchased in advance and used as you consume features. 1 credit = $1 USD. Credits do not expire and can be used at your own pace.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">4.2 Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All payments are processed securely through third-party payment processors</li>
                  <li>Prices are subject to change with 30 days' notice</li>
                  <li>All fees are non-refundable except as required by law or as explicitly stated</li>
                  <li>You are responsible for any taxes applicable to your purchase</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">4.3 Refunds</h3>
                <p>
                  Credits are non-refundable once purchased. If you believe you are entitled to a refund, please contact our support team at <a href="mailto:support@magiqai.io" className="text-primary-600 hover:text-primary-700 underline">support@magiqai.io</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Acceptable Use</h2>
                <p className="mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Service for any illegal purpose or in violation of any laws</li>
                  <li>Violate any intellectual property rights of MagiQ AI or third parties</li>
                  <li>Upload malicious code, viruses, or harmful content</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                  <li>Use automated systems (bots, scrapers) to access the Service without permission</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                  <li>Resell, redistribute, or sublicense access to the Service</li>
                  <li>Use the Service to send spam, unsolicited messages, or violate anti-spam laws</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Collect or harvest information about other users</li>
                </ul>
                <p className="mt-4">
                  Violation of these terms may result in immediate termination of your account and legal action.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Intellectual Property</h2>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">6.1 Our Rights</h3>
                <p>
                  The Service, including all content, features, functionality, algorithms, and technology, is owned by MagiQ AI and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">6.2 Your Content</h3>
                <p className="mb-4">You retain ownership of any data, content, or materials you upload to the Service ("Your Content"). By uploading Your Content, you grant us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A worldwide, non-exclusive, royalty-free license to use, store, and process Your Content to provide the Service</li>
                  <li>The right to use aggregated, anonymized data for improving our algorithms and services</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">6.3 AI-Generated Content</h3>
                <p>
                  Content generated by our AI (including sales strategies, emails, and recommendations) is provided "as is" for your use. You are responsible for reviewing, editing, and ensuring compliance of AI-generated content before use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Data and Privacy</h2>
                <p>
                  Your use of the Service is also governed by our Privacy Policy, which explains how we collect, use, and protect your information. By using the Service, you consent to the collection and use of your data as described in the Privacy Policy.
                </p>
                <p className="mt-4">
                  You are responsible for ensuring that any data you upload complies with applicable privacy laws, including obtaining necessary consents for processing personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Service Availability and Disclaimers</h2>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">8.1 Availability</h3>
                <p>
                  We strive to maintain high availability but do not guarantee uninterrupted or error-free service. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">8.2 Disclaimers</h3>
                <p className="mb-4">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                  <li>Warranties that the Service will be uninterrupted, secure, or error-free</li>
                  <li>Warranties regarding the accuracy, reliability, or completeness of AI-generated content</li>
                  <li>Warranties that Win Probability Scores or predictions will be accurate</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">8.3 AI Limitations</h3>
                <p>
                  Our AI-powered features are designed to assist your sales process but are not a substitute for professional judgment. You are responsible for verifying all information and making independent business decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Limitation of Liability</h2>
                <p className="mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, MAGIQ AI SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Damages resulting from your use or inability to use the Service</li>
                  <li>Damages resulting from AI-generated content or recommendations</li>
                  <li>Damages resulting from third-party integrations or data sources</li>
                </ul>
                <p className="mt-4">
                  Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim, or $100, whichever is greater.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless MagiQ AI, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Your Content or any content you transmit through the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Termination</h2>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">11.1 Termination by You</h3>
                <p>You may terminate your account at any time by contacting us or using the account deletion feature in your settings.</p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">11.2 Termination by Us</h3>
                <p>We may suspend or terminate your account immediately if:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You violate these Terms</li>
                  <li>You engage in fraudulent or illegal activity</li>
                  <li>You fail to pay fees when due</li>
                  <li>We discontinue the Service</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">11.3 Effect of Termination</h3>
                <p>
                  Upon termination, your right to use the Service ceases immediately. We may delete your account and data in accordance with our Privacy Policy. Unused credits are forfeited upon termination unless required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">12. Third-Party Services</h2>
                <p>
                  The Service may integrate with third-party services (CRM platforms, email providers, etc.). Your use of these integrations is subject to the terms and privacy policies of those third parties. We are not responsible for the availability, accuracy, or practices of third-party services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">13. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of the Service after changes become effective constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">14. Governing Law and Dispute Resolution</h2>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">14.1 Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">14.2 Dispute Resolution</h3>
                <p>
                  Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization], except where prohibited by law. You waive your right to participate in class-action lawsuits or class-wide arbitrations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">15. General Provisions</h2>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">15.1 Entire Agreement</h3>
                <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and MagiQ AI regarding the Service.</p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">15.2 Severability</h3>
                <p>If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full effect.</p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">15.3 Waiver</h3>
                <p>Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">15.4 Assignment</h3>
                <p>You may not assign or transfer these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">16. Contact Information</h2>
                <p className="mb-4">
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                  <p className="font-semibold text-neutral-900 mb-2">MagiQ AI Legal Team</p>
                  <p className="text-neutral-700 mb-1">Email: <a href="mailto:legal@magiqai.io" className="text-primary-600 hover:text-primary-700 underline">legal@magiqai.io</a></p>
                  <p className="text-neutral-700 mb-1">Support: <a href="mailto:support@magiqai.io" className="text-primary-600 hover:text-primary-700 underline">support@magiqai.io</a></p>
                  <p className="text-neutral-700">Address: [Your Company Address]</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer 
        tagline="Empowering sales teams with AI-powered intelligence"
        sections={[
          {
            title: "Product",
            links: [
              { label: "How It Works", href: "/#how-it-works" },
              { label: "Features", href: "/#features" },
              { label: "Pricing", href: "/#pricing" },
              { label: "Use Cases", href: "/#use-cases" }
            ]
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" }
            ]
          }
        ]}
      />
    </main>
  );
}

