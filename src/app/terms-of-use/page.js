// "use client"
// import React from 'react';
// import { ArrowLeft, Scale, Shield, FileText, AlertCircle, CreditCard, Users, MessageSquare, Globe, Gavel } from 'lucide-react';

// const TermsOfUse = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const sections = [
//     { id: 'introduction', title: 'Introduction', icon: FileText },
//     { id: 'registration', title: 'Registration', icon: Users },
//     { id: 'payment', title: 'Payment Policy', icon: CreditCard },
//     { id: 'conduct', title: 'Fraud and Improper Conduct', icon: AlertCircle },
//     { id: 'feedback', title: 'Feedback', icon: MessageSquare },
//     { id: 'permissions', title: 'Permission to Use Information', icon: Shield },
//     { id: 'jurisdiction', title: 'Governing Law and Jurisdiction', icon: Gavel },
//     { id: 'disclaimer', title: 'General Disclaimer', icon: Scale },
//     { id: 'amendments', title: 'Amendment in Terms of Use', icon: Globe }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <div className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex items-center space-x-4">
//             <button 
//               onClick={() => window.history.back()}
//               className="flex items-center space-x-2 text-gray-600 hover:text-[#08A69A] transition-colors duration-300"
//             >
//               <ArrowLeft className="h-5 w-5" />
//               <span>Back</span>
//             </button>
//             <div className="h-6 w-px bg-gray-300"></div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-[#08A69A] to-[#69C9A1] bg-clip-text text-transparent">
//               Terms and Conditions of Use
//             </h1>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Table of Contents - Sidebar */}
//           <div className="lg:w-1/4">
//             <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
//               <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                 <FileText className="h-5 w-5 mr-2 text-[#08A69A]" />
//                 Table of Contents
//               </h2>
//               <nav className="space-y-2">
//                 {sections.map((section) => {
//                   const IconComponent = section.icon;
//                   return (
//                     <button
//                       key={section.id}
//                       onClick={() => scrollToSection(section.id)}
//                       className="flex items-center space-x-3 w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#08A69A] hover:bg-gradient-to-r hover:from-[#08A69A]/10 hover:to-[#69C9A1]/10 rounded-lg transition-all duration-300"
//                     >
//                       <IconComponent className="h-4 w-4 flex-shrink-0" />
//                       <span>{section.title}</span>
//                     </button>
//                   );
//                 })}
//               </nav>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:w-3/4">
//             <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
//               {/* Introduction Section */}
//               <section id="introduction" className="scroll-mt-8">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
//                     <FileText className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
//                 </div>
                
//                 <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
//                   <div className="bg-gradient-to-r from-[#08A69A]/10 to-[#69C9A1]/10 p-6 rounded-xl border-l-4 border-[#08A69A]">
//                     <p className="font-medium text-gray-900 mb-2">About Black Pebble Education</p>
//                     <p>BLACK PEBBLE EDUCATION provides financial education to kids & teenagers with a mission to cultivate a generation that is financially savvy and confident. Our goal is to inspire curiosity and foster a positive attitude towards money, empowering children to take control of their financial futures.</p>
//                   </div>

//                   <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
//                     <p className="text-yellow-800"><strong>Office Address:</strong> BLACK PEBBLE EDUCATION is a proprietorship firm having its Office at 8th Floor, A Block, WESTGATE BUSINESS BAY, Discrete Chalet 19 at Paragraph, Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051.</p>
//                   </div>

//                   <p>By using or visiting the BLACK PEBBLE EDUCATION website (the "Site"), you ("you", "your", "User") accept and agree to be bound by these Terms and Conditions ("Terms"), which constitute a legally binding agreement between you and BLACK PEBBLE EDUCATION.</p>
                  
//                   <div className="bg-red-50 p-4 rounded-lg border border-red-200">
//                     <p className="text-red-800"><strong>Important:</strong> We are entitled to modify these Terms at any time by updating them on the Site, and such changes come into force immediately. Continued use of the Site constitutes your acceptance of the revised Terms.</p>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-4 mt-6">
//                     <div className="space-y-3">
//                       <h4 className="font-semibold text-gray-900">Key Definitions:</h4>
//                       <ul className="space-y-2 text-sm">
//                         <li><strong>"You", "Your", "User":</strong> Any person using the platform</li>
//                         <li><strong>"We", "Us", "Our":</strong> BLACK PEBBLE EDUCATION</li>
//                         <li><strong>"Platform":</strong> https://blackpebbleeducation.com</li>
//                       </ul>
//                     </div>
//                     <div className="space-y-3">
//                       <h4 className="font-semibold text-gray-900">User Responsibilities:</h4>
//                       <ul className="space-y-2 text-sm">
//                         <li>• Read and understand these terms</li>
//                         <li>• Follow all platform guidelines</li>
//                         <li>• Respect intellectual property rights</li>
//                         <li>• Use platform for legitimate purposes only</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Registration Section */}
//               <section id="registration" className="scroll-mt-8">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
//                     <Users className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">Registration</h2>
//                 </div>
                
//                 <div className="space-y-4 text-gray-700">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="bg-blue-50 p-4 rounded-lg">
//                       <h4 className="font-semibold text-blue-900 mb-2">Registration Requirements</h4>
//                       <ul className="space-y-1 text-sm text-blue-800">
//                         <li>• Complete and accurate personal details</li>
//                         <li>• Valid contact information</li>
//                         <li>• Maintain account confidentiality</li>
//                         <li>• Take responsibility for all account activities</li>
//                       </ul>
//                     </div>
//                     <div className="bg-green-50 p-4 rounded-lg">
//                       <h4 className="font-semibold text-green-900 mb-2">Access Rights</h4>
//                       <ul className="space-y-1 text-sm text-green-800">
//                         <li>• Educational materials and services</li>
//                         <li>• Time-limited or course-completion based access</li>
//                         <li>• Subject to successful payment</li>
//                         <li>• Termination for multiple/false registrations</li>
//                       </ul>
//                     </div>
//                   </div>
                  
//                   <p>To enroll in any courses, exams, or programs, you must provide complete and accurate personal and contact details. You are responsible for maintaining the confidentiality of your account credentials and for all activities performed under your account.</p>
//                 </div>
//               </section>

//               {/* Payment Policy Section */}
//               <section id="payment" className="scroll-mt-8">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
//                     <CreditCard className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">Payment Policy</h2>
//                 </div>
                
//                 <div className="space-y-4 text-gray-700">
//                   <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
//                     <h4 className="font-semibold text-yellow-900 mb-3">Payment Terms</h4>
//                     <ul className="space-y-2 text-yellow-800">
//                       <li>• All fees must be paid in full at registration</li>
//                       <li>• Payments in Indian Rupees (INR) only</li>
//                       <li>• Prices inclusive of applicable taxes</li>
//                       <li>• Electronic receipts issued upon confirmation</li>
//                     </ul>
//                   </div>
                  
//                   <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
//                     <h4 className="font-semibold text-red-900 mb-3">Refund Policy</h4>
//                     <p className="text-red-800"><strong>Important:</strong> Fees once paid are non-refundable, unless cancellation is initiated by BLACK PEBBLE EDUCATION due to event/service unavailability or administrative error.</p>
//                   </div>
//                 </div>
//               </section>

//               {/* Fraud and Improper Conduct Section */}
//               <section id="conduct" className="scroll-mt-8">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
//                     <AlertCircle className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">Fraud and Improper Conduct</h2>
//                 </div>
                
//                 <div className="space-y-4 text-gray-700">
//                   <p>The user may only access the Platform to avail of the services that are offered by BLACK PEBBLE EDUCATION. The user will be solely responsible for the knowledge of and adherence to any and all laws, rules, and regulations pertaining to their use of the services.</p>
                  
//                   <div className="bg-red-50 p-6 rounded-xl">
//                     <h4 className="font-semibold text-red-900 mb-4">Prohibited Activities</h4>
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <h5 className="font-medium text-red-800 mb-2">Platform Interference:</h5>
//                         <ul className="space-y-1 text-sm text-red-700">
//                           <li>• Disrupting other users' access</li>
//                           <li>• Affecting normal communication flow</li>
//                           <li>• Interfering with servers or networks</li>
//                         </ul>
//                       </div>
//                       <div>
//                         <h5 className="font-medium text-red-800 mb-2">Security Violations:</h5>
//                         <ul className="space-y-1 text-sm text-red-700">
//                           <li>• Uploading malicious code/viruses</li>
//                           <li>• Unauthorized access attempts</li>
//                           <li>• Interfering with other accounts</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Feedback Section */}
//               <section id="feedback" className="scroll-mt-8">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
//                     <MessageSquare className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">Feedback</h2>
//                 </div>
                
//                 <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400 text-gray-700">
//                   <p className="mb-3">Unless expressly provided otherwise by BLACK PEBBLE EDUCATION, all comments, feedback, information, or materials submitted to BLACK PEBBLE EDUCATION through or in association with the Site shall be considered non-confidential and BLACK PEBBLE EDUCATION's property.</p>
//                   <p>By submitting such materials, you agree to a no-charge assignment to BLACK PEBBLE EDUCATION of all worldwide rights, title, and interest in copyrights and other intellectual property rights. BLACK PEBBLE EDUCATION shall be free to use, copy, publish, or distribute such materials on an unrestricted basis.</p>
//                 </div>
//               </section>

//               {/* Permission to Use Information Section */}
//               <section id="permissions" className="scroll-mt-8">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
//                     <Shield className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">Permission to Use Information/Materials</h2>
//                 </div>
                
//                 <div className="space-y-4 text-gray-700">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="bg-green-50 p-4 rounded-lg">
//                       <h4 className="font-semibold text-green-900 mb-2">Permitted Use</h4>
//                       <ul className="space-y-1 text-sm text-green-800">
//                         <li>• Electronic copying for personal use</li>
//                         <li>• Printing limited portions</li>
//                         <li>• Personal informational purposes</li>
//                         <li>• Non-commercial use only</li>
//                       </ul>
//                     </div>
//                     <div className="bg-red-50 p-4 rounded-lg">
//                       <h4 className="font-semibold text-red-900 mb-2">Prohibited Use</h4>
//                       <ul className="space-y-1 text-sm text-red-800">
//                         <li>• Commercial reproduction</li>
//                         <li>• Distribution without permission</li>
//                         <li>• Creating derivative works</li>
//                         <li>• Public commercial purposes</li>
//                       </ul>
//                     </div>
//                   </div>
                  
//                   <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
//                     <p className="text-amber-800"><strong>Copyright Notice:</strong> Any other use of materials/information on this website without prior written permission from BLACK PEBBLE EDUCATION is strictly prohibited and shall constitute a violation of intellectual property rights.</p>
//                   </div>
//                 </div>
//               </section>

//               {/* Governing Law Section */}
//               <section id="jurisdiction" className="scroll-mt-8">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
//                     <Gavel className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">Governing Law and Jurisdiction</h2>
//                 </div>
                
//                 <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-400 text-gray-700">
//                   <p>Any dispute arising out of the use of the platform/website or in connection therewith shall be governed by the <strong>Laws of India</strong>, and the <strong>Courts of Ahmedabad, Gujarat</strong> shall have exclusive jurisdiction to resolve any such dispute.</p>
//                 </div>
//               </section>

//               {/* General Disclaimer Section */}
//               <section id="disclaimer" className="scroll-mt-8">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
//                     <Scale className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">General Disclaimer</h2>
//                 </div>
                
//                 <div className="space-y-4 text-gray-700">
//                   <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
//                     <h4 className="font-semibold text-yellow-900 mb-3">Accuracy Disclaimer</h4>
//                     <p className="text-yellow-800">The documents and graphics on this website could include technical inaccuracies or typographical errors. Changes are periodically added to the information herein. BLACK PEBBLE EDUCATION may make improvements and/or changes herein at any time.</p>
//                   </div>
                  
//                   <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
//                     <h4 className="font-semibold text-red-900 mb-3">Limitation of Liability</h4>
//                     <p className="text-red-800">In no event shall BLACK PEBBLE EDUCATION and/or its licensor/supplier be liable to any party for any direct, indirect, special, or other consequential damages for any use of the sites, including any lost profits, business interruption, loss of programs, or other data.</p>
//                   </div>
//                 </div>
//               </section>

//               {/* Amendment Section */}
//               <section id="amendments" className="scroll-mt-8">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
//                     <Globe className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">Amendment in Terms of Use</h2>
//                 </div>
                
//                 <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400 text-gray-700">
//                   <p className="mb-3">Please note that these Terms of Use may change from time to time. We will not reduce your rights under this Policy without your explicit consent, and we expect most such changes will be minor.</p>
//                   <p className="mb-3">Regardless, we will post any Policy changes on this page and, if the changes are significant, we will provide a more prominent notice. Each version of this Policy will be identified at the top of the page by its effective date.</p>
//                   <p><strong>All rights reserved</strong> - without prior written approval from BLACK PEBBLE EDUCATION, no portion of these terms of use may be copied/reproduced, or adopted in any form, or by any means.</p>
//                 </div>
//               </section>

//               {/* Contact Information */}
//               <div className="bg-gradient-to-r from-[#08A69A]/10 to-[#69C9A1]/10 p-6 rounded-xl mt-8">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
//                 <p className="text-gray-700 mb-4">If you have any questions about these Terms and Conditions, please contact us:</p>
//                 <div className="grid md:grid-cols-2 gap-4 text-sm">
//                   <div>
//                     <p><strong>Email:</strong> blackpebbleeducation@gmail.com</p>
//                     <p><strong>Phone:</strong> +91-8928557529</p>
//                   </div>
//                   <div>
//                     <p><strong>Address:</strong> 8th Floor, A Block, WESTGATE BUSINESS BAY, Discrete Chalet 19, Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsOfUse;