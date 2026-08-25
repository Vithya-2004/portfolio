import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, ExternalLink, Sparkles, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopiedEmail(true);
    onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      onShowToast('Please fill in all fields before sending.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset the form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      onShowToast('Message sent successfully!');
    }, 400);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Get In Touch</span>
            <h2 className="font-['Montserrat'] text-3xl md:text-[32px] font-bold text-white mt-1">
              Contact Me
            </h2>
          </div>
          <p className="text-xs md:text-sm text-blue-100/80 max-w-md">
            Have a project, role opening, or collaboration in mind? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Socials (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick Contact Card */}
            <div className="glass-card rounded-2xl p-7 md:p-8 space-y-6 border border-white/12 shadow-[0_10px_30px_rgba(0,10,35,0.4)]">
              <div>
                <h3 className="font-['Montserrat'] text-xl font-bold text-white mb-2">
                  Let's Connect
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  I am currently open to software development positions, full-stack internships, and technical collaborations.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/40 transition-colors group">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-300 shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                      <Mail className="w-5 h-5 text-sky-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email</div>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                        className="text-xs md:text-sm font-semibold text-white hover:text-sky-300 transition-colors truncate block"
                      >
                        {PORTFOLIO_DATA.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-sky-300 rounded-lg hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/40 transition-colors group">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                      <Phone className="w-5 h-5 text-sky-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Phone</div>
                      <a
                        href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                        className="text-xs md:text-sm font-semibold text-white hover:text-sky-300 transition-colors block"
                      >
                        {PORTFOLIO_DATA.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-sky-300 shrink-0 shadow-inner">
                      <MapPin className="w-5 h-5 text-sky-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Location</div>
                      <div className="text-xs md:text-sm font-semibold text-white">
                        {PORTFOLIO_DATA.contact.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links with Electric Blue Accents */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Online Profiles & Repositories
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PORTFOLIO_DATA.contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass p-3 rounded-xl flex items-center justify-between text-xs font-semibold text-white hover:text-sky-300 hover:border-sky-400/50 group cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:shadow-[0_0_8px_#60a5fa]"></span>
                      LinkedIn
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-300" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass p-3 rounded-xl flex items-center justify-between text-xs font-semibold text-white hover:text-sky-300 hover:border-sky-400/50 group cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400 group-hover:shadow-[0_0_8px_#38bdf8]"></span>
                      GitHub
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 md:p-8 border border-white/12 shadow-[0_10px_30px_rgba(0,10,35,0.4)]">
              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                    <Check className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-['Montserrat'] text-2xl font-bold text-white">
                      Message sent successfully!
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 max-w-sm mx-auto">
                      Thank you for reaching out. Your message has been received and Vithya will get back to you soon.
                    </p>
                  </div>
                  <div className="pt-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-royal text-white px-6 py-2.5 text-xs font-semibold rounded-xl cursor-pointer shadow-md"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare className="w-4 h-4 text-sky-400" />
                    <h3 className="font-['Montserrat'] font-bold text-lg text-white">
                      Send a Message
                    </h3>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300 tracking-wide" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="glass-input rounded-xl text-sm p-3 outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300 tracking-wide" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="glass-input rounded-xl text-sm p-3 outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300 tracking-wide" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineering Collaboration"
                      className="glass-input rounded-xl text-sm p-3 outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300 tracking-wide" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message here..."
                      className="glass-input rounded-xl text-sm p-3 outline-none transition-all resize-y placeholder:text-slate-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 btn-royal text-white px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 shadow-lg group"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
