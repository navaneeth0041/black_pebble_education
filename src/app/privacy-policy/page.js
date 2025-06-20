"use client"
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Eye, Database, Users, Lock, FileText, AlertTriangle, Globe, Phone, Mail, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'purpose', 'applicability', 'collection', 'disclosure', 'changes'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: FileText },
    { id: 'purpose', title: 'Purpose', icon: Eye },
    { id: 'applicability', title: 'Applicability', icon: Globe },
    { id: 'collection', title: 'Collection and Use of Information', icon: Database },
    { id: 'disclosure', title: 'Information Disclosure', icon: Users },
    { id: 'changes', title: 'Changes to the Policy', icon: AlertTriangle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Modern Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.history.back()}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                    Privacy Policy
                  </h1>
                  <p className="text-sm text-slate-500">Black Pebble Education</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-slate-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Last updated: June 2025</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 p-6 sticky top-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-lg font-bold text-slate-800">Contents</h2>
              </div>
              
              <nav className="space-y-1">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center space-x-3 w-full text-left px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105' 
                          : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/80'
                      }`}
                    >
                      <IconComponent className={`h-4 w-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span className="font-medium">{section.title}</span>
                    </button>
                  );
                })}
              </nav>
              
              {/* Enhanced Quick Facts */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-blue-600" />
                  Quick Facts
                </h3>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Your data is protected</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    <span>Educational use only</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>No third-party selling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>You control your data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
              <div className="p-8 space-y-12">
                {/* Introduction Section */}
                <section id="introduction" className="scroll-mt-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
                      <FileText className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        Purpose & Overview
                      </h2>
                      <p className="text-slate-500 mt-1">Understanding our privacy commitment</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl text-white shadow-lg">
                    <h3 className="text-xl font-bold mb-3">Policy Objective</h3>
                    <p className="text-blue-100 leading-relaxed">
                      The purpose of this policy is to highlight various obligations, best practices, and processes that support compliance with data privacy regulations applicable to BLACK PEBBLE EDUCATION in its role as both a data controller and a processor.
                    </p>
                  </div>
                </section>

                {/* Purpose Section */}
                <section id="purpose" className="scroll-mt-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
                      <Eye className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        Purpose
                      </h2>
                      <p className="text-slate-500 mt-1">Why this policy exists</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-200">
                    <p className="text-slate-700 leading-relaxed">
                      This policy establishes comprehensive guidelines for data protection, ensuring we maintain the highest standards of privacy and security while providing exceptional educational services to our community.
                    </p>
                  </div>
                </section>

                {/* Applicability Section */}
                <section id="applicability" className="scroll-mt-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
                      <Globe className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        Applicability
                      </h2>
                      <p className="text-slate-500 mt-1">Who this policy covers</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200">
                    <h4 className="font-bold text-emerald-800 mb-3">Scope of Application</h4>
                    <p className="text-emerald-700 leading-relaxed">
                      This policy applies to all BLACK PEBBLE EDUCATION's personnel, operating units, and wholly owned subsidiaries worldwide.
                    </p>
                  </div>
                </section>

                {/* Collection and Use Section */}
                <section id="collection" className="scroll-mt-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg">
                      <Database className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        Collection and Use of Information
                      </h2>
                      <p className="text-slate-500 mt-1">How we handle your data</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-4">Information We Collect</h4>
                      <p className="text-blue-700 mb-4 leading-relaxed">
                        We collect, process, and retain information about you when you visit our website. You may choose to provide us with your name, phone number, and address, or other information to access protected information on the website or so that we can connect with you after your visit, based on your consent.
                      </p>
      <p className="text-blue-700 leading-relaxed">
        When you visit our website, we may track, collect, and aggregate information indicating, among other things, which pages of our Site were visited, the order in which they were visited, when they were visited, and which hyperlinks were &ldquo;clicked.&rdquo;
      </p>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 shadow-lg">
                      <h4 className="font-bold text-slate-800 mb-6">How We Use Your Information</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          {[
                            { title: 'Course Information', desc: 'Respond to queries, understand training needs, trends, and resource planning', color: 'blue' },
                            { title: 'Training Communications', desc: 'Keep you posted on training schedules and requirements', color: 'indigo' },
                            { title: 'Content Customization', desc: 'Create and personalize training content', color: 'purple' }
                          ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 shadow-md`}>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <div>
                                <h5 className="font-bold text-slate-800">{item.title}</h5>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-4">
                          {[
                            { title: 'Third-party Services', desc: 'Share essential information with service providers', color: 'emerald' },
                            { title: 'Contact You', desc: 'Respond to requests and provide relevant information', color: 'teal' }
                          ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 shadow-md`}>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <div>
                                <h5 className="font-bold text-slate-800">{item.title}</h5>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-2xl border border-amber-200">
                      <h5 className="font-bold text-amber-800 mb-2">Your Choice</h5>
      <p className="text-amber-700 leading-relaxed">
        We will honor your request if you inform us that you do not want to receive any information that you have not specifically requested.
      </p>
                    </div>
                  </div>
                </section>

                {/* Information Disclosure Section */}
                <section id="disclosure" className="scroll-mt-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 shadow-lg">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        Information Disclosure
                      </h2>
                      <p className="text-slate-500 mt-1">How we share your information</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-2xl text-white shadow-lg">
                      <h4 className="font-bold mb-3">Our Commitment</h4>
                      <p className="text-emerald-100 leading-relaxed">
                        We do not share, sell, rent, or trade personal information collected through our website with third parties for any purpose other than that outlined in this Privacy policy.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-2xl border border-blue-200">
                        <h5 className="font-bold text-blue-800 mb-3">When We Share Information</h5>
                        <ul className="space-y-2 text-sm text-blue-700">
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>With third-party service providers</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>Only for training-related services</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>As requested and instructed by us</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>Subject to privacy policy terms</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-5 rounded-2xl border border-rose-200">
                        <h5 className="font-bold text-rose-800 mb-3">What We Don't Do</h5>
                        <ul className="space-y-2 text-sm text-rose-700">
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                            <span>Sell your information</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                            <span>Share for marketing purposes</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                            <span>Trade with other companies</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                            <span>Use beyond outlined purposes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Changes to Policy Section */}
                <section id="changes" className="scroll-mt-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 shadow-lg">
                      <AlertTriangle className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        Changes to the Policy
                      </h2>
                      <p className="text-slate-500 mt-1">How we update this policy</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-200">
                      <h4 className="font-bold text-orange-800 mb-4">Policy Updates</h4>
                      <p className="text-orange-700 mb-4 leading-relaxed">
                        We reserve the right to make changes to this Privacy Policy at any time. Any such modifications will become effective immediately upon posting to the Platform.
                      </p>
      <p className="text-orange-700 leading-relaxed">
        Your continued use of the Platform and/or the Services constitutes your agreement to such modifications.
      </p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-200">
                      <h5 className="font-bold text-blue-800 mb-3">Your Responsibility</h5>
      <p className="text-blue-700 leading-relaxed">
        You agree to review the current version of the Privacy Policy periodically as posted on the Platform. If you do not agree with the terms of this Privacy Policy, please do not use the Platform and/or the Services.
      </p>
                    </div>
                  </div>
                </section>

                {/* Enhanced Contact Information */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Have Privacy Questions?</h3>
      <p className="text-slate-300 mb-6 leading-relaxed">
        If you have any questions about this Privacy Policy or how we handle your personal information, we&rsquo;re here to help.
      </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-white/10">
                        <Mail className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <p className="text-sm text-slate-300">blackpebbleeducation@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-white/10">
                        <Phone className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Phone</p>
                        <p className="text-sm text-slate-300">+91-8928557529</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-white/10 mt-1">
                        <MapPin className="h-5 w-5 text-red-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Address</p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          8th Floor, A Block, WESTGATE BUSINESS BAY, Discrete Chalet 19, Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Footer */}
                <div className="text-center py-6 border-t border-slate-200">
                  <div className="inline-flex items-center space-x-2 text-slate-500 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">This Privacy Policy is effective as of June 2025</span>
                  </div>
      <p className="text-sm text-slate-400">
        Please check this page periodically for updates &bull; All rights reserved
      </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;