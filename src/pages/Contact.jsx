// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MdLocationOn, 
  MdSend,
  MdCheckCircle, 
  MdBusiness,
  MdPerson
} from "react-icons/md";

// --- ANIMATION ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans text-slate-800 selection:bg-yellow-200 selection:text-purple-900">
      
      {/* ---------------------------------------------------------------------------
          LEFT PANEL: CONTACT INFO (Strictly Brochure Content)
          Style: Deep Purple, Luxury
      --------------------------------------------------------------------------- */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="lg:w-5/12 bg-[#3d348b] text-white p-12 lg:p-20 flex flex-col justify-between relative overflow-hidden"
      >
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500 opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="inline-block px-4 py-1 mb-6 border border-yellow-400/30 bg-yellow-400/10 rounded-full">
            <h4 className="text-yellow-400 font-bold uppercase tracking-widest text-xs">
              Get in Touch
            </h4>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-8">
            Conference Secretariat
          </h1>
          
          <p className="text-indigo-100 text-lg font-light leading-relaxed mb-12">
            For queries regarding paper submission, registration, or sponsorship, please reach out to the organizing committee.
          </p>

          <div className="space-y-10">
            {/* Institute Location - */}
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 text-2xl flex-shrink-0 group-hover:bg-yellow-400 group-hover:text-[#3d348b] transition-all duration-300">
                <MdLocationOn />
              </div>
              <div>
                <h5 className="font-bold text-xl mb-2">Host Institute</h5>
                <p className="text-indigo-100 leading-relaxed font-light">
                  National Institute of Technology Puducherry<br/>
                  Karaikal, Union Territory of Puducherry<br/>
                  India
                </p>
              </div>
            </div>

            {/* Conveners - */}
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 text-2xl flex-shrink-0 group-hover:bg-yellow-400 group-hover:text-[#3d348b] transition-all duration-300">
                <MdPerson />
              </div>
              <div>
                <h5 className="font-bold text-xl mb-2">Chairpersons & Conveners</h5>
                <ul className="text-indigo-100 font-light space-y-1">
                  <li>Dr. Ansuman Mahapatra</li>
                  <li>Dr. J Ronald Aseer</li>
                  <li>Dr. Yedukondalarao Veeranki</li>
                </ul>
              </div>
            </div>

             {/* Organization - */}
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 text-2xl flex-shrink-0 group-hover:bg-yellow-400 group-hover:text-[#3d348b] transition-all duration-300">
                <MdBusiness />
              </div>
              <div>
                <h5 className="font-bold text-xl mb-2">Organized By</h5>
                <p className="text-indigo-100 font-light leading-relaxed">
                   Depts. of Mechanical Engineering & <br/>
                   Computer Science Engineering
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer for Panel */}
        <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-indigo-300 uppercase tracking-widest">
            ICDTSES - 2026
          </p>
        </div>
      </motion.div>

      {/* ---------------------------------------------------------------------------
          RIGHT PANEL: FORM
          Style: Clean White, Corporate
      --------------------------------------------------------------------------- */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="lg:w-7/12 bg-white p-12 lg:p-20 flex items-center justify-center relative"
      >
        <div className="max-w-2xl w-full">
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center p-12 bg-green-50 rounded-3xl border border-green-100"
            >
              <MdCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-green-900 mb-4">Inquiry Received</h2>
              <p className="text-green-700 text-lg">
                Thank you for contacting the ICDTSES-2026 secretariat. We will address your query shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 px-6 py-2 bg-white border border-green-200 rounded-full text-green-700 font-semibold hover:bg-green-100 transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">Send a Message</h2>
              <p className="text-slate-500 mb-10">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. John Doe"
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@university.edu"
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Subject</label>
                  <select 
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a topic...</option>
                    <option value="submission">Paper Submission</option>
                    <option value="registration">Registration & Fees</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-purple-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Send Message <MdSend />
                </button>
              </form>
            </>
          )}
        </div>
      </motion.div>

    </div>
  );
}