// src/app/page.tsx
import { FileText, Shield, Eye, Lock, Users, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 mb-6">July 04, 2025</p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Privacy Policy for BlaBla VPN
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                Effective Date: July 26, 2025
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                Last Updated: July 26, 2025
              </span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
              <Shield className="h-5 w-5 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Introduction</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Welcome to the Privacy Policy page for BlaBla VPN. We value your
            privacy and are committed to protecting your personal data. This
            Privacy Policy outlines how we collect, use, and safeguard your
            information when you use our mobile application.
          </p>
        </div>

        {/* Section 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
              <Eye className="h-5 w-5 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              1. Information We Collect
            </h3>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              1.1 Data Not Collected
            </h4>
            <p className="text-gray-700 mb-4">
              BlaBla VPN is designed with privacy in mind. We do not collect the
              following data:
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <h5 className="font-semibold text-red-900 mb-2">
                  Browsing History:
                </h5>
                <p className="text-red-800 text-sm">
                  We do not track the websites you visit or your browsing
                  activities.
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <h5 className="font-semibold text-red-900 mb-2">
                  Communication Content:
                </h5>
                <p className="text-red-800 text-sm">
                  We do not collect or monitor the content of your messages,
                  emails, or other communications transmitted through our
                  service.
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <h5 className="font-semibold text-red-900 mb-2">
                  Location Data:
                </h5>
                <p className="text-red-800 text-sm">
                  We do not request or collect any location data.
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <h5 className="font-semibold text-red-900 mb-2">
                  Sensitive Information:
                </h5>
                <p className="text-red-800 text-sm">
                  Our systems do not collect or store sensitive data.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h5 className="font-semibold text-gray-900 mb-3">
                Online Activities: We do not log:
              </h5>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Browsing history
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Traffic destinations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Data content
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  DNS queries
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h5 className="font-semibold text-gray-900 mb-3">
                Connection Logs: We do not store:
              </h5>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Your IP address
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  VPN-assigned IP address
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Connection timestamps
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Session durations
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h5 className="font-semibold text-amber-900 mb-3">
                Personally Identifiable Information: Due to our strict no-logs
                policy, we do not know:
              </h5>
              <ul className="text-amber-800 space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  The websites you access
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  The time you connect
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Your original or temporary IP address
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              1.2 Data Collection Practices
            </h4>
            <p className="text-gray-700 mb-4">
              We collect only the minimal information necessary to maintain and
              improve BlaBla VPN's performance.
            </p>

            <h5 className="text-lg font-semibold text-gray-800 mb-4">
              1.2.1 Data Necessary for Service Quality
            </h5>
            <p className="text-gray-700 mb-4">
              To ensure a reliable and high-quality experience, we collect
              limited and abstracted data, such as:
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h6 className="font-semibold text-blue-900 mb-2">
                  App Version:
                </h6>
                <p className="text-blue-800 text-sm">
                  To help troubleshoot issues and ensure compatibility across
                  devices.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h6 className="font-semibold text-blue-900 mb-2">
                  VPN Connection Metrics:
                </h6>
                <p className="text-blue-800 text-sm">
                  Including success/failure rates, server region selected,
                  country (non-specific), and ISP—none of which can identify
                  individual users.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h6 className="font-semibold text-blue-900 mb-2">
                  Data Transfer Volume:
                </h6>
                <p className="text-blue-800 text-sm">
                  To enforce fair usage policies and maintain server health.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h6 className="font-semibold text-blue-900 mb-2">
                  Anonymous Diagnostics:
                </h6>
                <p className="text-blue-800 text-sm">
                  Aggregated crash logs, error reports, and performance data to
                  improve the app.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              2. How We Use the Data
            </h3>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                2.1 System Diagnostics
              </h4>
              <p className="text-gray-700">
                Data is used to perform internal operations such as identifying
                bugs, monitoring performance, and improving service reliability
                and speed.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                2.2 Research and Development
              </h4>
              <p className="text-gray-700">
                We analyze aggregated usage patterns to develop new features and
                improve the user experience across BlaBla VPN services.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                2.3 Service Providers
              </h4>
              <p className="text-gray-700">
                We may work with trusted third-party service providers to help
                deliver and enhance our services. These providers are required
                to handle your data securely and only for purposes specified in
                this policy.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <Lock className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              3. Data Security
            </h3>
          </div>
          <p className="text-gray-700">
            We implement robust security measures, including encryption and
            secure server infrastructure, to protect all data we process. Your
            activities remain private, and no session logs are retained.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            4. Right to Be Forgotten
          </h3>
          <p className="text-gray-700 mb-4">
            You may request the deletion of your data if:
          </p>
          <ul className="text-gray-700 space-y-3 mb-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              It is no longer needed for the purposes for which it was
              collected;
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              You withdraw your consent and we have no legal basis to continue
              processing;
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              You object to our data use and no overriding legitimate interests
              exist;
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Your data is being used for direct marketing and you wish to opt
              out.
            </li>
          </ul>
          <p className="text-gray-700">
            Please contact us at [insert contact email] to initiate this
            request.
          </p>
        </div>

        {/* Sections 5-8 */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              5. Third-Party Services
            </h3>
            <p className="text-gray-700 text-sm">
              BlaBla VPN may contain links to third-party websites or services.
              We are not responsible for their privacy practices. We encourage
              users to read their privacy policies before engaging with them.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              6. Advertising
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              BlaBla VPN is supported by third-party advertising partners.
              However:
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• We do not use personal data to target ads.</li>
              <li>• We do not sell or share personal data with advertisers.</li>
              <li>
                • Ad partners may use cookies or similar technologies to deliver
                ads and measure their performance.
              </li>
              <li>
                • By offering limited ads, we keep BlaBla VPN free for users.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              7. Children's Privacy
            </h3>
            <p className="text-gray-700 text-sm">
              BlaBla VPN is not intended for children under 13. We do not
              knowingly collect data from users under this age. If you believe a
              child has provided personal data without parental consent, please
              contact us.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              8. Legal Disclosure
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-700">
                We collect very limited information—primarily device identifiers
                and data voluntarily provided by users.
              </p>
              <p className="text-gray-700">
                Because we do not collect sensitive or connection data (like IP
                addresses, DNS requests, or browsing history), we have very
                little to disclose in response to legal requests.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-700 mb-6">
              If you have any questions regarding privacy while using the
              Application, or have questions about the practices, please contact
              the Service Provider via email at:
            </p>
            <a
              href="mailto:caelum2098@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <Mail className="h-5 w-5 mr-2" />
              caelum2098@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
