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

const PrivacyPolicy = () => {
  return (
    <div className={`${poppins.className} min-h-screen bg-[#343434] text-white`}>
      {/* Header */}
      <div className="border-b border-gray-700 py-2 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.history.back()}
              className="p-2 rounded bg-gray-800 hover:bg-gray-700 text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className={`${mochiyPopOne.className} text-2xl font-bold`}>Privacy Policy</h1>
          </div>
          <div className="flex-shrink-0">
            <BlackLogoWithText logoHeight={60} textHeight={120} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pt-2 pb-6">
        <div className="space-y-4 text-sm leading-relaxed text-gray-300">
          <p><strong>BLACK PEBBLE EDUCATION</strong> is committed to protecting your personal information provided or collected on this website. We want our services to be safe and secure for you. Uniform practices for collecting, using, disclosing, storing, retaining, disposing, accessing, transferring, or otherwise processing such information assist us in processing personal information fairly and appropriately, disclosing it and/or transferring it only under appropriate circumstances. The following privacy policy relates to our use of any personal information we collect from you.</p>

          <p>This privacy policy informs you how we use your personal information collected through this website. This policy will be updated subject to any changes in information collection, activities performed, or any applicable regulations. You are encouraged to review the privacy policy whenever you visit this website, to ensure that you understand how any personal information you provide will be used.</p>

          <p><strong>Please Note:</strong><br/>
          The privacy practices outlined in this privacy policy are for this website only. If there are external links to other websites, please review those privacy policies too, which may differ from those of BLACK PEBBLE EDUCATION.</p>

          <h2 className="text-white font-bold mt-6">PURPOSE</h2>
          <p>The purpose of this policy is to highlight various obligations, best practices, and processes that support compliance with data privacy regulations applicable to BLACK PEBBLE EDUCATION in its role as both a data controller and a processor.</p>

          <h2 className="text-white font-bold mt-6">APPLICABILITY</h2>
          <p>This policy applies to all BLACK PEBBLE EDUCATION’s personnel, operating units, and wholly owned subsidiaries worldwide.</p>

          <h2 className="text-white font-bold mt-6">COLLECTION AND USE OF INFORMATION</h2>
          <p>We collect, process, and retain information about you when you visit our website. You may choose to provide us with your name, phone number, address, or other information to access protected information or connect with you after your visit, based on your consent.</p>

          <p>When you visit our website, we may track, collect, and aggregate information such as pages visited, visit timing, and links clicked.</p>

          <p><strong>Uses of collected information include:</strong></p>
          <ul className="list-disc ml-6">
            <li>To provide course information and respond to your queries</li>
            <li>To communicate regarding training sessions</li>
            <li>To customize content and improve service quality</li>
            <li>To share essential data with third-party training service providers</li>
            <li>To contact you based on your requests or interest</li>
          </ul>

          <h2 className="text-white font-bold mt-6">INFORMATION DISCLOSURE</h2>
          <p>We do not share, sell, rent, or trade personal information with third parties except as described. Only contracted third-party service providers processing data on our behalf may receive limited personal information to provide training-related services.</p>

          <h2 className="text-white font-bold mt-6">CHANGES TO THE POLICY</h2>
          <p>We reserve the right to modify this Privacy Policy at any time. Changes become effective immediately upon posting on the Platform. Your continued use indicates acceptance of these modifications. Please review the policy regularly. If you do not agree with it, do not use our services.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
