import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { magiqContent } from "@/data/content-magiq";

export const metadata = {
  title: "Privacy Policy - MagiQ AI",
  description:
    "MagiQ AI Privacy Policy - Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation {...magiqContent.navigation} />

      <section className="pt-32 pb-24 bg-gradient-to-b from-white to-neutral-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-neutral-600">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8 text-neutral-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  1. Introduction
                </h2>
                <p>
                  MagiQ AI ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our
                  AI-powered sales intelligence platform (the "Service"). By
                  using MagiQ AI, you agree to the collection and use of
                  information in accordance with this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  2. Information We Collect
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                  2.1 Information You Provide
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Account Information:</strong> Name, email address,
                    company name, job title, and password when you create an
                    account
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Credit card details,
                    billing address, and transaction history (processed securely
                    through third-party payment processors)
                  </li>
                  <li>
                    <strong>Profile Information:</strong> Company details,
                    industry, team size, and sales preferences
                  </li>
                  <li>
                    <strong>Content:</strong> Data you upload, including account
                    lists, contact information, and custom configurations
                  </li>
                  <li>
                    <strong>Communications:</strong> Messages, support requests,
                    and feedback you send to us
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                  2.2 Information We Collect Automatically
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Usage Data:</strong> Pages visited, features used,
                    time spent, and interaction patterns
                  </li>
                  <li>
                    <strong>Device Information:</strong> IP address, browser
                    type, operating system, device identifiers
                  </li>
                  <li>
                    <strong>Log Data:</strong> Access times, error logs, and
                    system performance metrics
                  </li>
                  <li>
                    <strong>Cookies and Tracking:</strong> We use cookies and
                    similar technologies to enhance your experience and analyze
                    usage
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                  2.3 Information from Third Parties
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>CRM Integrations:</strong> Data synced from
                    Salesforce, HubSpot, or other CRM systems you connect
                  </li>
                  <li>
                    <strong>Public Data Sources:</strong> Company information,
                    news, and public records we aggregate for intelligence
                  </li>
                  <li>
                    <strong>Authentication Providers:</strong> If you sign in
                    via Google, Microsoft, or other OAuth providers
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Delivery:</strong> To provide, maintain, and
                    improve our AI-powered sales intelligence platform
                  </li>
                  <li>
                    <strong>Account Management:</strong> To manage your account,
                    process payments, and deliver customer support
                  </li>
                  <li>
                    <strong>Personalization:</strong> To customize your
                    experience, including AI-generated sales strategies and
                    recommendations
                  </li>
                  <li>
                    <strong>Data Intelligence:</strong> To generate Win
                    Probability Scores, account intelligence, and personalized
                    outreach
                  </li>
                  <li>
                    <strong>Communication:</strong> To send service updates,
                    security alerts, and respond to your inquiries
                  </li>
                  <li>
                    <strong>Analytics:</strong> To analyze usage patterns,
                    improve our algorithms, and enhance platform performance
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with legal
                    obligations and protect our rights
                  </li>
                  <li>
                    <strong>Marketing:</strong> To send promotional
                    communications (with your consent) and measure campaign
                    effectiveness
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="mb-4">
                  We do not sell your personal information. We may share your
                  information in the following circumstances:
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                  4.1 Service Providers
                </h3>
                <p>
                  We work with trusted third-party service providers who assist
                  in:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cloud hosting and infrastructure (AWS, Google Cloud)</li>
                  <li>Payment processing (Stripe, PayPal)</li>
                  <li>Email delivery and marketing automation</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Customer support tools</li>
                </ul>
                <p className="mt-4">
                  These providers are contractually obligated to protect your
                  data and use it only for specified purposes.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                  4.2 Business Transfers
                </h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred to the acquiring entity.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                  4.3 Legal Requirements
                </h3>
                <p>
                  We may disclose information if required by law, court order,
                  or government regulation, or to protect our rights and prevent
                  fraud.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                  4.4 With Your Consent
                </h3>
                <p>
                  We may share information with your explicit consent or at your
                  direction (e.g., CRM integrations you authorize).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  5. Data Security
                </h2>
                <p className="mb-4">
                  We implement industry-standard security measures to protect
                  your information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Encryption:</strong> Data in transit is encrypted
                    using TLS/SSL, and sensitive data at rest is encrypted
                  </li>
                  <li>
                    <strong>Access Controls:</strong> Role-based access controls
                    and authentication requirements
                  </li>
                  <li>
                    <strong>Security Monitoring:</strong> Continuous monitoring
                    for security threats and vulnerabilities
                  </li>
                  <li>
                    <strong>Regular Audits:</strong> Security audits and
                    penetration testing
                  </li>
                  <li>
                    <strong>Data Backups:</strong> Regular backups with disaster
                    recovery procedures
                  </li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet is 100%
                  secure. While we strive to protect your data, we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  6. Your Rights and Choices
                </h2>
                <p className="mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Access:</strong> Request a copy of your personal
                    data
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct inaccurate
                    information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your data
                    (subject to legal retention requirements)
                  </li>
                  <li>
                    <strong>Portability:</strong> Receive your data in a
                    structured, machine-readable format
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> Unsubscribe from marketing
                    communications
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of
                    processing in certain circumstances
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing based on
                    legitimate interests
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@magiqai.io"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    privacy@magiqai.io
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  7. Data Retention
                </h2>
                <p>
                  We retain your personal information for as long as necessary
                  to provide our services, comply with legal obligations,
                  resolve disputes, and enforce our agreements. When you delete
                  your account, we will delete or anonymize your data within 30
                  days, except where retention is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  8. International Data Transfers
                </h2>
                <p>
                  MagiQ AI operates globally, and your information may be
                  transferred to and processed in countries other than your
                  country of residence. We ensure appropriate safeguards are in
                  place, including standard contractual clauses and adequacy
                  decisions, to protect your data in accordance with this
                  Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  9. Children's Privacy
                </h2>
                <p>
                  Our Service is not intended for individuals under 18 years of
                  age. We do not knowingly collect personal information from
                  children. If you believe we have collected information from a
                  child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  10. Cookies and Tracking Technologies
                </h2>
                <p className="mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintain your session and authentication state</li>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze usage patterns and improve our service</li>
                  <li>Deliver personalized content and advertisements</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings.
                  However, disabling cookies may limit your ability to use
                  certain features of our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  11. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of significant changes by posting the new policy on
                  this page and updating the "Last updated" date. Your continued
                  use of the Service after changes become effective constitutes
                  acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  12. Contact Us
                </h2>
                <p className="mb-4">
                  If you have questions, concerns, or requests regarding this
                  Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                  <p className="font-semibold text-neutral-900 mb-2">
                    MagiQ AI Privacy Team
                  </p>
                  <p className="text-neutral-700 mb-1">
                    Email:{" "}
                    <a
                      href="mailto:privacy@magiqai.io"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      privacy@magiqai.io
                    </a>
                  </p>
                  <p className="text-neutral-700">
                    Address: [Your Company Address]
                  </p>
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
              { label: "Use Cases", href: "/#use-cases" },
            ],
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ],
          },
        ]}
      />
    </main>
  );
}
