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
      <div className="max-w-4xl mx-auto px-4 pt-2 pb-6 text-sm leading-relaxed space-y-6">
        
        {/* Introduction */}
        <div className="space-y-4">
          <p className="text-gray-300">
            BLACK PEBBLE EDUCATION is committed to protecting your personal information provided or collected on this website. We want our services to be safe and secure for you. Uniform practices for collecting, using, disclosing, storing, retaining, disposing, accessing, transferring, or otherwise processing such information assist us in processing personal information fairly and appropriately, disclosing it and/or transferring it only under appropriate circumstances. The following privacy policy relates to our use of any personal information we collect from you.
          </p>

          <p className="text-gray-300">
            This privacy policy informs you how we use your personal information collected through this website. This policy will be updated subject to any changes in information collection, activities performed, or any applicable regulations. You are encouraged to review the privacy policy whenever you visit this website, to ensure that you understand how any personal information you provide will be used.
          </p>

          <div>
            <p className="text-gray-300 mb-2">
              <strong>Please Note:</strong>
            </p>
            <p className="text-gray-300 mb-1">
              The privacy practices outlined in this privacy policy are for this website only.
            </p>
            <p className="text-gray-300">
              If there are external links to other websites, please review those privacy policies too, which may differ from those of BLACK PEBBLE EDUCATION.
            </p>
          </div>
        </div>

        {/* Purpose */}
        <div>
          <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>PURPOSE</h2>
          <p className="text-gray-300">
            The purpose of this policy is to highlight various obligations, best practices, and processes that support compliance with data privacy regulations applicable to BLACK PEBBLE EDUCATION in its role as both a data controller and a processor.
          </p>
        </div>

        {/* Applicability */}
        <div>
          <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>APPLICABILITY</h2>
          <p className="text-gray-300">
            This policy applies to all BLACK PEBBLE EDUCATION&apos;s personnel, operating units, and wholly owned subsidiaries worldwide.
          </p>
        </div>

        {/* Collection and Use of Information */}
        <div>
          <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>COLLECTION AND USE OF INFORMATION</h2>
          
          <p className="text-gray-300 mb-4">
            We collect, process, and retain information about you when you visit our website. You may choose to provide us with your name, phone number, and address, or other information to access protected information on the website or so that we can connect with you after your visit, based on your consent.
          </p>

          <p className="text-gray-300 mb-4">
            When you visit our website, we may track, collect, and aggregate information indicating, among other things, which pages of our Site were visited, the order in which they were visited, when they were visited, and which Hyperlinks were &ldquo;clicked.&rdquo;
          </p>

          <p className="text-gray-300 mb-4">
            The information we collect from you may be used in one of the following ways:
          </p>

          <div className="space-y-4 ml-4">
            <p className="text-gray-300">
              <strong>i.</strong> To provide course information: We shall use your personal data to respond to your queries, understand training needs, trends, and resource planning as relevant to training services.
            </p>
            
            <p className="text-gray-300">
              <strong>ii.</strong> To communicate regarding training sessions: Your information helps us keep you posted on your training schedules and communicate with you regarding your training requirements, follow-ups, and feedback.
            </p>
            
            <p className="text-gray-300">
              <strong>iii.</strong> To customize content and improve the quality of service: We may use your personal information to help create and personalize training content.
            </p>
            
            <p className="text-gray-300">
              <strong>iv.</strong> To obtain third-party services: We also share essential personal information with third parties who provide training services. When we share personal information with third-party service providers, we require that they use your personal information and other information only to provide services to us and subject to terms consistent with this policy. Other than for the purpose of providing services, we will not sell or otherwise disclose your information to any other company.
            </p>
            
            <p className="text-gray-300">
              <strong>v.</strong> To contact you: Your information may be used to contact you in response to your request or to provide you with information that we think you may be interested in receiving. We will honor your request that you inform us that you do not want to receive any information that you have not specifically requested.
            </p>
          </div>
        </div>

        {/* Information Disclosure */}
        <div>
          <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>INFORMATION DISCLOSURE</h2>
          <p className="text-gray-300">
            We do not share, sell, rent, or trade personal information collected through our website with third parties for any purpose other than that outlined in this Privacy policy. We may share information with third-party service providers contracted to provide services on our behalf for processing to provide you with training-related services. These third-party service providers may use information we provide to them only as requested and instructed by us.
          </p>
        </div>

        {/* Changes to the Policy */}
        <div>
          <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>CHANGES TO THE POLICY</h2>
          <p className="text-gray-300">
            We reserve the right to make changes to this Privacy Policy at any time. Any such modifications will become effective immediately upon posting to the Platform, and your continued use of the Platform and/or the Services (as defined in the Terms of Use) constitutes your agreement to such modifications. You agree to review the current version of the Privacy Policy periodically as posted on the Platform. If you do not agree with the terms of this Privacy Policy, please do not use the Platform and/or the Services.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;