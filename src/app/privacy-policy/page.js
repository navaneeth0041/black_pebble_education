"use client"
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const PrivacyPolicy = () => {
  return (
    <div className={`${poppins.className} min-h-screen bg-[#343434] text-white`}>
      {/* Simple Header */}
      <div className="border-b border-gray-700 p-4">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <button 
            onClick={() => window.history.back()}
            className="p-2 rounded bg-gray-800 hover:bg-gray-700 text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-8 text-sm leading-relaxed">
          
          {/* Effective Date */}
          <div>
            <p className="text-gray-400 mb-4">Effective Date: 21-10-2024</p>
          </div>

          {/* Introduction */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Introduction</h2>
            <p className="text-gray-300 mb-4">
              At Practical Doctors, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <p className="text-gray-300">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our website and services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We may collect information about you in various ways, whether you visit our website or other platforms, use our services. The following categories of information may be collected:
            </p>
            
            <h3 className="text-base font-bold mb-3 text-white">Information You Provide</h3>
            <p className="text-gray-300 mb-3">
              We collect personal information that you provide when using our services, including:
            </p>
            <ul className="text-gray-300 ml-6 space-y-1">
              <li>• Name</li>
              <li>• Email address</li>
              <li>• Phone number</li>
              <li>• Address</li>
              <li>• Payment information</li>
              <li>• Professional, medical and relevant health information</li>
              <li>• Any other details you voluntarily provide, such as feedback or user-generated content</li>
            </ul>

            <h3 className="text-base font-bold mb-3 mt-6 text-white">Usage and Analytics Information</h3>
            <p className="text-gray-300 mb-3">
              When you interact with our services, we collect about your device and usage patterns, including:
            </p>
            <ul className="text-gray-300 ml-6 space-y-1">
              <li>• Internet Protocol (IP) address</li>
              <li>• Browser type and version</li>
              <li>• Operating system</li>
              <li>• Referring and exit pages</li>
              <li>• Date and time stamps</li>
              <li>• Clickstream data on specific pages and user interactions (e.g., videos, scrolling)</li>
            </ul>

            <h3 className="text-base font-bold mb-3 mt-6 text-white">Cookies and Similar Technologies</h3>
            <p className="text-gray-300">
              We use cookies and similar technologies to enhance your experience, analyze usage, and serve tailored marketing content. Cookies are small data files stored on your device. You can control cookie preferences through your browser settings, but disabling cookies may affect website functionality.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">How We Use Your Information</h2>
            <p className="text-gray-300 mb-3">
              We use the information collected for various purposes, including:
            </p>
            <ul className="text-gray-300 ml-6 space-y-1">
              <li>• To provide and manage our services</li>
              <li>• To communicate with you about our services, updates, and promotional content</li>
              <li>• To improve our services based on user feedback and usage patterns</li>
              <li>• To prevent fraud and ensure compliance with legal obligations</li>
              <li>• To analyze trends and optimize our platform&apos;s performance</li>
            </ul>

            <p className="text-gray-300 mt-4">
              If you are located in the European Union, we collect and process your information based on:
            </p>
            <ul className="text-gray-300 ml-6 space-y-1">
              <li>• Necessity for service provision</li>
              <li>• Legitimate interests that do not override your rights</li>
              <li>• Your consent for specific purposes</li>
            </ul>

            <p className="text-gray-300 mt-4">
              You may withdraw consent at any time, although this will not affect prior processing.
            </p>
          </div>

          {/* Information Sharing */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Information Sharing</h2>
            <p className="text-gray-300 mb-3">
              We do not sell or rent your personal information to third parties. Your information may be shared in the following scenarios:
            </p>
            <ul className="text-gray-300 ml-6 space-y-1">
              <li>• With your consent</li>
              <li>• With service providers who assist in our operations (e.g., billing, analytics)</li>
              <li>• To comply with legal requirements or to protect our rights</li>
            </ul>

            <h3 className="text-base font-bold mb-3 mt-6 text-white">Online Analytics and Tailored Marketing</h3>
            <p className="text-gray-300 mb-3">
              We partner with third parties, such as Google Analytics to help us understand how users interact with our website.
            </p>
            <p className="text-gray-300">
              These services may collect information directly from you and use it to evaluate your actual patterns. You can opt out of Google Analytics by installing the Google Analytics Opt-Out Browser Add-on.
            </p>
          </div>

          {/* Access to Your Information */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Access to Your Information</h2>
            <p className="text-gray-300">
              You may request access to or correction of your personal information by contacting us. For EU residents, you have additional rights regarding the processing of your information.
            </p>
          </div>

          {/* Retention of Information */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Retention of Information</h2>
            <p className="text-gray-300">
              We retain your personal information for as long as your account is active or necessary for providing services. If you wish to cancel your account or request that we no longer use your information to provide services, please contact us. Following account cancellation, we will retain your information only as required by law.
            </p>
          </div>

          {/* Security Measures */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Security Measures</h2>
            <p className="text-gray-300">
              We implement reasonable physical, electronic, and managerial safeguards to protect your information from unauthorized access. While we strive to maintain the security of your data, no method of transmission over the internet or primary source solutions can be guaranteed to be 100% secure.
            </p>
          </div>

          {/* Email Communications */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Email Communications</h2>
            <p className="text-gray-300">
              You can choose to opt out of receiving promotional communications from us by following the unsubscribe instructions included in our emails or by contacting us directly.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Third-Party Links</h2>
            <p className="text-gray-300">
              Our website may contain links to third-party sites. We are not responsible for their privacy practices or content. Additionally, third-party advertisers may collect information automatically when you interact with their ads on our site.
            </p>
          </div>

          {/* Data Transfer */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Data Transfer</h2>
            <p className="text-gray-300">
              Your information may be transferred to, and stored at, locations outside of your country. By providing your information, you consent to this transfer.
            </p>
          </div>

          {/* Individual Data Subject Rights */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Individual Data Subject Rights</h2>
            <p className="text-gray-300">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete that information.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Changes to This Policy</h2>
            <p className="text-gray-300 mb-4">
              If there are any questions or concerns about this Privacy Policy, please contact us via email at info@practicaldoctors.com
            </p>
            <p className="text-gray-300">
              We reserve the right to update this Privacy Policy periodically to reflect changes in our practices. Please review this page regularly for updates. Your continued use of our services after any modifications indicates your acceptance of the revised policy.
            </p>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-700 pt-6 mt-8">
            <h2 className="text-lg font-bold mb-4 text-white">Contact Information</h2>
            <div className="text-gray-300 space-y-2">
              <p>Email: blackpebbleeducation@gmail.com</p>
              <p>Phone: +91-8928557529</p>
              <p>Address: 8th Floor, A Block, WESTGATE BUSINESS BAY, Discrete Chalet 19, Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;