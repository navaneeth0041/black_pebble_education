"use client"
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';
import BlackLogoWithText from '../../components/blacklogo';

const mochiyPopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const TermsOfUse = () => {
  return (
    <div className={`${poppins.className} min-h-screen bg-[#343434] text-white`}>
      {/* Simple Header */}
      <div className="border-b border-gray-700 py-2 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.history.back()}
              className="p-2 rounded bg-gray-800 hover:bg-gray-700 text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className={`${mochiyPopOne.className} text-2xl font-bold`}>Terms and Conditions of Use</h1>
          </div>
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <BlackLogoWithText logoHeight={60} textHeight={120} />
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pt-2 pb-6">
        <div className="space-y-8 text-sm leading-relaxed">
          
          {/* Introduction */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>Introduction</h2>
            <p className="text-gray-300 mb-4">
              BLACK PEBBLE EDUCATION provides financial education to kids & teenagers with a mission to cultivate a generation that is financially savvy and confident. Our goal is to inspire curiosity and foster a positive attitude towards money, empowering children to take control of their financial futures.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Office Address:</strong> BLACK PEBBLE EDUCATION is a proprietorship firm having its Office at 8th Floor, A Block, WESTGATE BUSINESS BAY, Discrete Chalet 19 at Paragraph, Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051.
            </p>
            <p className="text-gray-300 mb-4">
              By using or visiting the BLACK PEBBLE EDUCATION website (the "Site"), you ("you", "your", "User") accept and agree to be bound by these Terms and Conditions ("Terms"), which constitute a legally binding agreement between you and BLACK PEBBLE EDUCATION.
            </p>
            <p className="text-gray-300">
              <strong>Important:</strong> We are entitled to modify these Terms at any time by updating them on the Site, and such changes come into force immediately. Continued use of the Site constitutes your acceptance of the revised Terms.
            </p>
          </div>
          {/* Registration */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>Registration</h2>
            <p className="text-gray-300 mb-4">
              To enroll in any courses, exams, or programs, you must provide complete and accurate personal and contact details. You are responsible for maintaining the confidentiality of your account credentials and for all activities performed under your account.
            </p>
            <p className="text-gray-300 mb-4">
              Access to educational materials and services may be time-limited or based on course completion, subject to successful payment. Multiple or false registrations may result in account termination.
            </p>
          </div>
          {/* Payment Policy */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>Payment Policy</h2>
            <p className="text-gray-300 mb-4">
              All fees must be paid in full at the time of registration. Payments are accepted in Indian Rupees (INR) only. All prices are inclusive of applicable taxes, and electronic receipts will be issued upon payment confirmation.
            </p>
            <p className="text-gray-300">
              <strong>Refund Policy:</strong> Fees once paid are non-refundable, unless cancellation is initiated by BLACK PEBBLE EDUCATION due to event/service unavailability or administrative error.
            </p>
          </div>
          {/* Fraud and Improper Conduct */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>Fraud and Improper Conduct</h2>
            <p className="text-gray-300 mb-4">
              The user may only access the Platform to avail of the services that are offered by BLACK PEBBLE EDUCATION. The user will be solely responsible for the knowledge of and adherence to any and all laws, rules, and regulations pertaining to their use of the services.
            </p>
            
            <h3 className={`${mochiyPopOne.className} text-base font-bold mb-3 text-white`}>Prohibited Activities</h3>
            <p className="text-gray-300 mb-3">
              Users are strictly prohibited from:
            </p>
            <ul className="text-gray-300 ml-6 space-y-1">
              <li>• Disrupting other users' access to the platform</li>
              <li>• Affecting normal communication flow</li>
              <li>• Interfering with servers or networks</li>
              <li>• Uploading malicious code, viruses, or harmful content</li>
              <li>• Making unauthorized access attempts</li>
              <li>• Interfering with other user accounts</li>
            </ul>
          </div>
          {/* Feedback */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>Feedback</h2>
            <p className="text-gray-300 mb-4">
              Unless expressly provided otherwise by BLACK PEBBLE EDUCATION, all comments, feedback, information, or materials submitted to BLACK PEBBLE EDUCATION through or in association with the Site shall be considered non-confidential and BLACK PEBBLE EDUCATION's property.
            </p>
            <p className="text-gray-300">
              By submitting such materials, you agree to a no-charge assignment to BLACK PEBBLE EDUCATION of all worldwide rights, title, and interest in copyrights and other intellectual property rights. BLACK PEBBLE EDUCATION shall be free to use, copy, publish, or distribute such materials on an unrestricted basis.
            </p>
          </div>
          {/* Permission to Use Information */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>Permission to Use Information/Materials</h2>
            <p className="text-gray-300 mb-4">
              Users are permitted to electronically copy and print limited portions of the website content for personal, informational, and non-commercial use only.
            </p>
            
            <h3 className={`${mochiyPopOne.className} text-base font-bold mb-3 text-white`}>Permitted Use</h3>
            <ul className="text-gray-300 ml-6 space-y-1 mb-4">
              <li>• Electronic copying for personal use</li>
              <li>• Printing limited portions</li>
              <li>• Personal informational purposes</li>
              <li>• Non-commercial use only</li>
            </ul>
            <h3 className={`${mochiyPopOne.className} text-base font-bold mb-3 text-white`}>Prohibited Use</h3>
            <ul className="text-gray-300 ml-6 space-y-1 mb-4">
              <li>• Commercial reproduction</li>
              <li>• Distribution without permission</li>
              <li>• Creating derivative works</li>
              <li>• Public commercial purposes</li>
            </ul>
            <p className="text-gray-300">
              <strong>Copyright Notice:</strong> Any other use of materials/information on this website without prior written permission from BLACK PEBBLE EDUCATION is strictly prohibited and shall constitute a violation of intellectual property rights.
            </p>
          </div>
          {/* Governing Law and Jurisdiction */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>Governing Law and Jurisdiction</h2>
            <p className="text-gray-300">
              Any dispute arising out of the use of the platform/website or in connection therewith shall be governed by the <strong>Laws of India</strong>, and the <strong>Courts of Ahmedabad, Gujarat</strong> shall have exclusive jurisdiction to resolve any such dispute.
            </p>
          </div>
          {/* General Disclaimer */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>General Disclaimer</h2>
            <p className="text-gray-300">
              BLACK PEBBLE EDUCATION provides educational content and services on an "as is" basis. We make no warranties or representations about the accuracy, reliability, completeness, or timeliness of the content, services, software, text, graphics, and links.
            </p>
          </div>
          {/* Amendment in Terms of Use */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>Amendment in Terms of Use</h2>
            <p className="text-gray-300">
              BLACK PEBBLE EDUCATION reserves the right to modify these Terms of Use at any time without prior notice. Users are encouraged to review these terms periodically. Continued use of the platform after any modifications constitutes acceptance of the updated terms.
            </p>
          </div>
          {/* Contact Information */}
          <div className="border-t border-gray-700 pt-6 mt-8">
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>Contact Information</h2>
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

export default TermsOfUse;