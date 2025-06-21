"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Scale, Shield, FileText, AlertCircle, CreditCard, Users, MessageSquare, Globe, Gavel } from 'lucide-react';
import { Poppins } from 'next/font/google';

// Mock Poppins font import - replace with your actual font import
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const TermsOfUse = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: FileText },
    { id: 'registration', title: 'Registration', icon: Users },
    { id: 'payment', title: 'Payment Policy', icon: CreditCard },
    { id: 'conduct', title: 'Fraud and Improper Conduct', icon: AlertCircle },
    { id: 'feedback', title: 'Feedback', icon: MessageSquare },
    { id: 'permissions', title: 'Permission to Use Information', icon: Shield },
    { id: 'jurisdiction', title: 'Governing Law and Jurisdiction', icon: Gavel },
    { id: 'disclaimer', title: 'General Disclaimer', icon: Scale },
    { id: 'amendments', title: 'Amendment in Terms of Use', icon: Globe }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const getSectionClassName = (sectionId) => {
    const baseClass = "scroll-mt-8 transition-all duration-700 ease-out";
    const isVisible = visibleSections.has(sectionId);
    
    return `${baseClass} ${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
    }`;
  };

  return (
    <div className={`${poppins.className} min-h-screen bg-[#343434] text-white`}>
      {/* Header */}
      <div className="bg-[#2a2a2a] shadow-lg border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-gray-300 hover:text-[#08A69A] transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            <div className="h-6 w-px bg-gray-500"></div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#08A69A] to-[#69C9A1] bg-clip-text text-transparent">
              Terms and Conditions of Use
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-[#2a2a2a] rounded-xl shadow-lg p-6 sticky top-8 border border-gray-600">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-[#08A69A]" />
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="flex items-center space-x-3 w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-[#08A69A] hover:bg-gradient-to-r hover:from-[#08A69A]/20 hover:to-[#69C9A1]/20 rounded-lg transition-all duration-300"
                    >
                      <IconComponent className="h-4 w-4 flex-shrink-0" />
                      <span>{section.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-[#2a2a2a] rounded-xl shadow-lg p-8 space-y-8 border border-gray-600">
              {/* Introduction Section */}
              <section id="introduction" className={getSectionClassName('introduction')}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Introduction</h2>
                </div>
                
                <div className="prose max-w-none text-gray-300 leading-relaxed space-y-4">
                  <div className="bg-gradient-to-r from-[#08A69A]/20 to-[#69C9A1]/20 p-6 rounded-xl border-l-4 border-[#08A69A]">
                    <p className="font-medium text-white mb-2">About Black Pebble Education</p>
                    <p>BLACK PEBBLE EDUCATION provides financial education to kids &amp; teenagers with a mission to cultivate a generation that is financially savvy and confident. Our goal is to inspire curiosity and foster a positive attitude towards money, empowering children to take control of their financial futures.</p>
                  </div>

                  <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-600">
                    <p className="text-yellow-200"><strong>Office Address:</strong> BLACK PEBBLE EDUCATION is a proprietorship firm having its Office at 8th Floor, A Block, WESTGATE BUSINESS BAY, Discrete Chalet 19 at Paragraph, Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051.</p>
                  </div>

                  <p>By using or visiting the BLACK PEBBLE EDUCATION website (the &quot;Site&quot;), you (&quot;you&quot;, &quot;your&quot;, &quot;User&quot;) accept and agree to be bound by these Terms and Conditions (&quot;Terms&quot;), which constitute a legally binding agreement between you and BLACK PEBBLE EDUCATION.</p>
                  
                  <div className="bg-red-900/30 p-4 rounded-lg border border-red-600">
                    <p className="text-red-200"><strong>Important:</strong> We are entitled to modify these Terms at any time by updating them on the Site, and such changes come into force immediately. Continued use of the Site constitutes your acceptance of the revised Terms.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">Key Definitions:</h4>
                      <ul className="space-y-2 text-sm">
                        <li><strong>&quot;You&quot;, &quot;Your&quot;, &quot;User&quot;:</strong> Any person using the platform</li>
                        <li><strong>&quot;We&quot;, &quot;Us&quot;, &quot;Our&quot;:</strong> BLACK PEBBLE EDUCATION</li>
                        <li><strong>&quot;Platform&quot;:</strong> https://blackpebbleeducation.com</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">User Responsibilities:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Read and understand these terms</li>
                        <li>• Follow all platform guidelines</li>
                        <li>• Respect intellectual property rights</li>
                        <li>• Use platform for legitimate purposes only</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Registration Section */}
              <section id="registration" className={getSectionClassName('registration')}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Registration</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600">
                      <h4 className="font-semibold text-blue-200 mb-2">Registration Requirements</h4>
                      <ul className="space-y-1 text-sm text-blue-300">
                        <li>• Complete and accurate personal details</li>
                        <li>• Valid contact information</li>
                        <li>• Maintain account confidentiality</li>
                        <li>• Take responsibility for all account activities</li>
                      </ul>
                    </div>
                    <div className="bg-green-900/30 p-4 rounded-lg border border-green-600">
                      <h4 className="font-semibold text-green-200 mb-2">Access Rights</h4>
                      <ul className="space-y-1 text-sm text-green-300">
                        <li>• Educational materials and services</li>
                        <li>• Time-limited or course-completion based access</li>
                        <li>• Subject to successful payment</li>
                        <li>• Termination for multiple/false registrations</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p>To enroll in any courses, exams, or programs, you must provide complete and accurate personal and contact details. You are responsible for maintaining the confidentiality of your account credentials and for all activities performed under your account.</p>
                </div>
              </section>

              {/* Payment Policy Section */}
              <section id="payment" className={getSectionClassName('payment')}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Payment Policy</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <div className="bg-yellow-900/30 p-6 rounded-xl border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-yellow-200 mb-3">Payment Terms</h4>
                    <ul className="space-y-2 text-yellow-300">
                      <li>• All fees must be paid in full at registration</li>
                      <li>• Payments in Indian Rupees (INR) only</li>
                      <li>• Prices inclusive of applicable taxes</li>
                      <li>• Electronic receipts issued upon confirmation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-900/30 p-6 rounded-xl border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-200 mb-3">Refund Policy</h4>
                    <p className="text-red-300"><strong>Important:</strong> Fees once paid are non-refundable, unless cancellation is initiated by BLACK PEBBLE EDUCATION due to event/service unavailability or administrative error.</p>
                  </div>
                </div>
              </section>

              {/* Fraud and Improper Conduct Section */}
              <section id="conduct" className={getSectionClassName('conduct')}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Fraud and Improper Conduct</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>The user may only access the Platform to avail of the services that are offered by BLACK PEBBLE EDUCATION. The user will be solely responsible for the knowledge of and adherence to any and all laws, rules, and regulations pertaining to their use of the services.</p>
                  
                  <div className="bg-red-900/30 p-6 rounded-xl border border-red-600">
                    <h4 className="font-semibold text-red-200 mb-4">Prohibited Activities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-red-300 mb-2">Platform Interference:</h5>
                        <ul className="space-y-1 text-sm text-red-400">
                          <li>• Disrupting other users&apos; access</li>
                          <li>• Affecting normal communication flow</li>
                          <li>• Interfering with servers or networks</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-300 mb-2">Security Violations:</h5>
                        <ul className="space-y-1 text-sm text-red-400">
                          <li>• Uploading malicious code/viruses</li>
                          <li>• Unauthorized access attempts</li>
                          <li>• Interfering with other accounts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Feedback Section */}
              <section id="feedback" className={getSectionClassName('feedback')}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Feedback</h2>
                </div>
                
                <div className="bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-500 text-gray-300">
                  <p className="mb-3">Unless expressly provided otherwise by BLACK PEBBLE EDUCATION, all comments, feedback, information, or materials submitted to BLACK PEBBLE EDUCATION through or in association with the Site shall be considered non-confidential and BLACK PEBBLE EDUCATION&apos;s property.</p>
                  <p>By submitting such materials, you agree to a no-charge assignment to BLACK PEBBLE EDUCATION of all worldwide rights, title, and interest in copyrights and other intellectual property rights. BLACK PEBBLE EDUCATION shall be free to use, copy, publish, or distribute such materials on an unrestricted basis.</p>
                </div>
              </section>

              {/* Permission to Use Information Section */}
              <section id="permissions" className={getSectionClassName('permissions')}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Permission to Use Information/Materials</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-900/30 p-4 rounded-lg border border-green-600">
                      <h4 className="font-semibold text-green-200 mb-2">Permitted Use</h4>
                      <ul className="space-y-1 text-sm text-green-300">
                        <li>• Electronic copying for personal use</li>
                        <li>• Printing limited portions</li>
                        <li>• Personal informational purposes</li>
                        <li>• Non-commercial use only</li>
                      </ul>
                    </div>
                    <div className="bg-red-900/30 p-4 rounded-lg border border-red-600">
                      <h4 className="font-semibold text-red-200 mb-2">Prohibited Use</h4>
                      <ul className="space-y-1 text-sm text-red-300">
                        <li>• Commercial reproduction</li>
                        <li>• Distribution without permission</li>
                        <li>• Creating derivative works</li>
                        <li>• Public commercial purposes</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-amber-900/30 p-4 rounded-lg border border-amber-600">
                    <p className="text-amber-200"><strong>Copyright Notice:</strong> Any other use of materials/information on this website without prior written permission from BLACK PEBBLE EDUCATION is strictly prohibited and shall constitute a violation of intellectual property rights.</p>
                  </div>
                </div>
              </section>

              {/* Governing Law Section */}
              <section id="jurisdiction" className={getSectionClassName('jurisdiction')}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
                    <Gavel className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Governing Law and Jurisdiction</h2>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-xl border-l-4 border-gray-500 text-gray-300">
                  <p>Any dispute arising out of the use of the platform/website or in connection therewith shall be governed by the <strong>Laws of India</strong>, and the <strong>Courts of Ahmedabad, Gujarat</strong> shall have exclusive jurisdiction to resolve any such dispute.</p>
                </div>
              </section>

              {/* General Disclaimer Section */}
              <section id="disclaimer" className={getSectionClassName('disclaimer')}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">General Disclaimer</h2>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-xl border-l-4 border-gray-500 text-gray-300">
                  <p>BLACK PEBBLE EDUCATION provides educational content and services on an "as is" basis. We make no warranties or representations about the accuracy, reliability, completeness, or timeliness of the content, services, software, text, graphics, and links.</p>
                </div>
              </section>

              {/* Amendment Section */}
              <section id="amendments" className={getSectionClassName('amendments')}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-[#08A69A] to-[#69C9A1] p-2 rounded-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Amendment in Terms of Use</h2>
                </div>
                
                <div className="bg-purple-900/30 p-6 rounded-xl border-l-4 border-purple-500 text-gray-300">
                  <p>BLACK PEBBLE EDUCATION reserves the right to modify these Terms of Use at any time without prior notice. Users are encouraged to review these terms periodically. Continued use of the platform after any modifications constitutes acceptance of the updated terms.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;