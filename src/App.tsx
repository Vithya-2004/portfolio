import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DeployedLinkBar } from './components/DeployedLinkBar';
import { About } from './components/About';
import { PreferredInterests } from './components/PreferredInterests';
import { Skills } from './components/Skills';
import { Internships } from './components/Internships';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Chatbot } from './components/Chatbot';
import { Toast } from './components/Toast';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#060e22] text-[#f1f5f9] flex flex-col selection:bg-blue-600 selection:text-white relative overflow-hidden font-['Inter']">
      {/* Background Decorative Glowing Orbs & Gradients for Royal Blue Depth */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Top-right royal glow */}
        <div className="glow-orb w-[600px] h-[600px] -top-40 -right-40 bg-blue-600/25 animate-pulse [animation-duration:8s]" />
        {/* Top-left electric blue glow */}
        <div className="glow-orb w-[500px] h-[500px] top-40 -left-40 bg-sky-500/20" />
        {/* Middle deep navy / indigo glow */}
        <div className="glow-orb w-[700px] h-[700px] top-[40%] right-[-10%] bg-indigo-700/20" />
        {/* Bottom electric blue glow */}
        <div className="glow-orb w-[600px] h-[600px] bottom-10 left-[10%] bg-blue-500/20" />
        {/* Subtle royal blue background mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(29,78,216,0.18)_0%,_rgba(6,14,34,0.85)_60%,_#050b1a_100%)]" />
      </div>

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Content */}
      <main className="flex-grow z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Deployed Portfolio Live Bar */}
        <DeployedLinkBar onShowToast={showToast} />

        {/* 3. About Section */}
        <About />

        {/* 4. Preferred Interests Section */}
        <PreferredInterests />

        {/* 5. Technical Skills Section */}
        <Skills />

        {/* 6. Internships Section */}
        <Internships />

        {/* 7. Featured Projects Section */}
        <Projects />

        {/* 7. Contact Section */}
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Interactive Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Grounded Portfolio Chatbot Assistant */}
      <Chatbot onOpenResume={() => setIsResumeOpen(true)} />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
