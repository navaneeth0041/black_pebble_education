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
            <p className="text-gray-300 mb-4">
              BLACK PEBBLE EDUCATION provides financial education to kids & teenagers with a mission to cultivate a generation that is financially savvy and confident. Our goal is to inspire curiosity and foster a positive attitude towards money, empowering children to take control of their financial futures.
            </p>
            <p className="text-gray-300 mb-4">
              BLACK PEBBLE EDUCATION is a proprietorship firm having its Office at 8th Floor, A Block, WESTGATE BUSINESS BAY, Discrete Chalet 19 at Paragraph, Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051.
            </p>
            <p className="text-gray-300 mb-4">
              By using or visiting the BLACK PEBBLE EDUCATION website (the "Site"), you ("you", "your", "User") accept and agree to be bound by these Terms and Conditions ("Terms"), which constitute a legally binding agreement between you and BLACK PEBBLE EDUCATION.
            </p>
            <p className="text-gray-300 mb-4">
              We are entitled to modify these Terms at any time by updating them on the Site, and such changes come into force immediately. Continued use of the Site constitutes your acceptance of the revised Terms.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>1. General Terms</h2>
            <p className="text-gray-300 mb-4">
              The following terms and conditions will be deemed to have been read, understood, and accepted by the User upon using or visiting the platform/ website https://blackpebbleeducation.com
            </p>
            <p className="text-gray-300 mb-4">
              You are requested to read them carefully before you use the services of this site.
            </p>
            
            <div className="ml-4 space-y-4">
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>a)</strong> For the purpose of these Terms of Use, wherever the context so requires, "you", "your", or "user" shall mean any natural or legal person who uses the Platform to avail the Services. The term "we", "us", "our" shall mean "BLACK PEBBLE EDUCATION"
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>b)</strong> By signing up on the Site, you agree to follow and be bound by the following terms and conditions concerning your use of the services.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>c)</strong> BLACK PEBBLE EDUCATION may terminate a user's account and access to information at any time for any reason.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>d)</strong> All the content present on the platform and on the material provided by BLACK PEBBLE EDUCATION is the exclusive property of BLACK PEBBLE EDUCATION. The software, text, images, graphics, video, and audio used on the Platform belong to BLACK PEBBLE EDUCATION. No material from this Platform may be copied, modified, reproduced, republished, uploaded, transmitted, adopted, posted, or distributed in any form whatsoever without prior written permission from BLACK PEBBLE EDUCATION. All rights not expressly granted herein are reserved.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>e)</strong> Unauthorized use of the materials appearing on this Platform shall constitute a violation of intellectual property rights and other applicable laws and could result in criminal and/or civil actions. BLACK PEBBLE EDUCATION is a registered trademark. This trademark may not be used in any manner without prior written consent/license/authorization from BLACK PEBBLE EDUCATION.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>f)</strong> The User agrees not to decompile or disassemble any content accessible through the Platform, not to insert any code or product, or manipulate the content of the Platform in any way that affects a user's experience, and not to use any data mining, data gathering, or extraction method. We reserve the right to terminate our engagement if we, in our sole and absolute discretion, believe that you are in violation of this clause.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>g)</strong> BLACK PEBBLE EDUCATION does not accept any responsibility towards the contents and/or information practices of third-party Sites that have links through BLACK PEBBLE EDUCATION's Site. The said links to internal or external website locations are only for the purpose of facilitating your visit or clarifying your query.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>h)</strong> The Platform and all content, materials, information, software, products, and services provided on the Site are provided on an "as is" and "as available" basis. BLACK PEBBLE EDUCATION expressly disclaims all warranties of any kind, whether express or implied.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>i)</strong> BLACK PEBBLE EDUCATION shall have no responsibility for any damage to a User's computer system or loss of data that results from the download of any content, materials, or information from the Site.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>j)</strong> BLACK PEBBLE EDUCATION may change or discontinue any aspect of its website at any time, including its content or features. BLACK PEBBLE EDUCATION reserves the right to change the terms and conditions applicable to the use of the Site. Such changes shall be effective immediately upon notice, which shall be placed on the Site.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>k)</strong> The User agrees to indemnify, defend, and hold BLACK PEBBLE EDUCATION harmless from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, arising out of or relating to any misuse by the User of the content and services provided on the Site.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>l)</strong> The information contained in the Site has been obtained from sources believed to be reliable. We disclaim all warranties as to the accuracy, completeness, or adequacy of such information.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>m)</strong> BLACK PEBBLE EDUCATION makes no warranty that:
                </p>
                <div className="ml-6 space-y-1">
                  <p className="text-gray-300">i) the Site will meet your requirements;</p>
                  <p className="text-gray-300">ii) the Site will be available on an uninterrupted, timely, secure, or error-free basis;</p>
                  <p className="text-gray-300">iii) the results that may be obtained from the use of the Site or any services offered through the Site will be accurate or reliable.</p>
                </div>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>n)</strong> The User's right to privacy is of paramount importance to BLACK PEBBLE EDUCATION. Any information provided by the User will not be shared with any third party. BLACK PEBBLE EDUCATION reserves the right to use the information to provide the User a more personalized online experience.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>o)</strong> The Platform provides links to websites and access to content, products, and services from third parties, including users, advertisers, affiliates, and sponsors of the Site. You agree that BLACK PEBBLE EDUCATION is not responsible for the availability of, and content provided on, third-party websites. The User is requested to peruse the policies posted by other websites regarding privacy and other topics before use. BLACK PEBBLE EDUCATION is not responsible for third-party content accessible through the Site, including opinions, advice, statements, and advertisements, and the User shall bear all risks associated with the use of such content. BLACK PEBBLE EDUCATION is not responsible for any loss or damage of any sort that a User may incur from dealing with any third party.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 - Registration */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>2. REGISTRATION</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300">
                  <strong>a.</strong> To enroll in any courses, exams, or programs, you must provide complete and accurate personal and contact details. You are responsible for maintaining the confidentiality of your account credentials and for all activities performed under your account.
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  <strong>b.</strong> Upon successful registration and any required payment, you gain the right to access the educational materials and services offered on the Site. Access to certain materials may be time-limited or subject to course completion. Multiple or false registrations may result in the termination of access.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 - Payment Policy */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>3. PAYMENT POLICY</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300">
                  <strong>a.</strong> All fees/ subscription fees, for courses, competitions, or services, must be paid in full at the time of registration unless otherwise stated. All payments are to be made in Indian Rupees (INR) and are inclusive of applicable taxes. Receipts will be issued electronically upon confirmation.
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  <strong>b.</strong> Fees once paid are non-refundable, unless cancellation is initiated by BLACK PEBBLE EDUCATION due to event/service unavailability or administrative error.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 - Fraud and Improper Conduct */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>4. FRAUD AND IMPROPER CONDUCT</h2>
            <p className="text-gray-300 mb-4">
              The user may only access the Platform to avail of the services that are offered by BLACK PEBBLE EDUCATION.
            </p>
            <p className="text-gray-300 mb-4">
              The user will be solely responsible for the knowledge of and adherence to any and all laws, rules, and regulations pertaining to their use of the services.
            </p>
            <p className="text-gray-300 mb-4">
              You agree that you will not in any manner;
            </p>
            <div className="ml-4 space-y-2">
              <p className="text-gray-300">
                <strong>a.</strong> Interfere with the ability of others to access or use the Platform and the Services;
              </p>
              <p className="text-gray-300">
                <strong>b.</strong> Disrupt the normal flow of communication or otherwise act in a manner that adversely affects other users' ability to use the Platform or the Services;
              </p>
              <p className="text-gray-300">
                <strong>c.</strong> Claim a relationship with or to speak for any individual, business, association, institution, or other organization for which you are not authorized to claim such a relationship;
              </p>
              <p className="text-gray-300">
                <strong>d.</strong> Interfere with or disrupt the Services or servers or networks connected to the Services or disobey any requirements, procedures, policies, or regulations of networks connected to the Services;
              </p>
              <p className="text-gray-300">
                <strong>e.</strong> Upload or use the Service to transfer any content or other material that contains or constitutes viruses, trojans, or other code with malicious, disruptive, and/or destructive features;
              </p>
              <p className="text-gray-300">
                <strong>f.</strong> You shall not attempt to gain unauthorized access to any hardware or software system, or networks associated with the Services, or obtain any services or information not intentionally made available to you by us on or through the Services; and
              </p>
              <p className="text-gray-300">
                <strong>g.</strong> You shall not attempt to gain unauthorized access to the account of any other user or entity, or otherwise interfere with any other user's or entity's use of the Services.
              </p>
            </div>
          </div>

          {/* Section 5 - Feedback */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>5. FEEDBACK</h2>
            <p className="text-gray-300">
              Unless expressly provided otherwise by BLACK PEBBLE EDUCATION, all comments, feedback, information, or materials submitted to BLACK PEBBLE EDUCATION through or in association with the Site shall be considered non-confidential and BLACK PEBBLE EDUCATION's property. By submitting such comments, feedback, information, or materials to BLACK PEBBLE EDUCATION, the visitor of the Site agrees to a no-charge assignment to BLACK PEBBLE EDUCATION of all worldwide rights, title, and interest in copyrights and other intellectual property rights to the comments, feedback, information, or materials. BLACK PEBBLE EDUCATION shall be free to use, copy, publish, or distribute such comments, feedback, information, or materials on an unrestricted basis without accounting to the visitor of the Site.
            </p>
          </div>

          {/* Section 6 - Permission to Use Information */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>6. PERMISSION TO USE INFORMATION/MATERIALS ON THIS WEBSITE</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                <strong>6.1</strong> Permission is hereby granted to electronically copy and to print in hard copy, limited portions of the materials published by BLACK PEBBLE EDUCATION on its platform, for the sole purpose of using the material/information contained therein for personal informational and non-commercial use only.
              </p>
              <p className="text-gray-300">
                <strong>6.2</strong> Except in connection with personal informational and non-commercial use, none of the Contents may be copied, reproduced, distributed, republished, downloaded, displayed, posted electronically or mechanically, transmitted, adopted, recorded, in any manner, mirrored, photocopied, or reproduced without the prior written permission of BLACK PEBBLE EDUCATION or the applicable copyright owner.
              </p>
              <p className="text-gray-300">
                <strong>6.3</strong> Any other use of materials/ information on this Web site, including any commercial use, reproduction for purposes other than that noted above, modification, distribution, or republication without the prior written permission of BLACK PEBBLE EDUCATION is strictly prohibited and shall constitute a violation of the intellectual property rights of BLACK PEBBLE EDUCATION. Except as specifically permitted herein, no portion of the information on this web site may be reproduced in any form, or by any means, without prior written permission from BLACK PEBBLE EDUCATION. Visitors or users are not permitted to modify, distribute, publish, transmit, or create derivative works of any material found on this site for any public or commercial purposes.
              </p>
            </div>
          </div>

          {/* Section 7 - Governing Law */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>7. GOVERNING LAW AND JURISDICTION</h2>
            <p className="text-gray-300">
              Any dispute arising out of the use of the platform/website or in connection therewith shall be governed by the Laws of India, and the Courts of Ahmedabad, Gujarat shall have exclusive jurisdiction to resolve any such dispute.
            </p>
          </div>

          {/* Section 8 - General Disclaimer */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>8. GENERAL DISCLAIMER</h2>
            <p className="text-gray-300">
              The documents and graphics on this website could include technical inaccuracies or typographical errors. Changes are periodically added to the information herein. BLACK PEBBLE EDUCATION may make improvements and/or changes herein at any time. We make no representations about the accuracy of the information contained in the documents and graphics on this website for any purpose. In no event, BLACK PEBBLE EDUCATION, and/or its licensor/ supplier be liable to any party for any direct, indirect, special, or other consequential damages for any use of the sites, the information, or on any other hyperlinked website, including, without limitation, any lost profits, business interruption, loss of programs, or other data on your information handling system or otherwise, even if BLACK PEBBLE EDUCATION is expressly advised of the possibility of such damages.
            </p>
          </div>

          {/* Section 9 - Amendment */}
          <div>
            <h2 className={`${mochiyPopOne.className} text-lg font-bold mb-4 text-white`}>9. AMENDMENT IN TERMS OF USE</h2>
            <p className="text-gray-300">
              Please note that these Terms of Use may change from time to time. We will not reduce your rights under this Policy without your explicit consent, and we expect most such changes will be minor. Regardless, we will post any Policy changes on this page and, if the changes are significant, we will provide a more prominent notice. Each version of this Policy will be identified at the top of the page by its effective date. All rights reserved, without prior written approval from BLACK PEBBLE EDUCATION, no portion of these terms of use may be copied/ reproduced, or adopted in any form, or by any means.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;