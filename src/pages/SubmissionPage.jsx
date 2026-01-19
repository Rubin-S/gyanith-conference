// src/pages/SubmissionPage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  MdDescription,
  MdVpnKey,
  MdUploadFile,
  MdPublishedWithChanges,
  MdArrowForward,
  MdOpenInNew,
  MdWarning,
  MdHelpOutline,
  MdTimer,
  MdFileDownload
} from "react-icons/md";

// --- ANIMATION VARIANTS ---
const containerVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- COMPONENTS ---
const StepCard = ({ number, title, desc, icon, action, isLast }) => (
  <motion.div variants={fadeUp} className="relative flex gap-6 md:gap-10 pb-16 last:pb-0 group">
    {/* Timeline Line */}
    {!isLast && (
      <div className="absolute left-6 md:left-8 top-16 bottom-0 w-0.5 bg-slate-200 group-hover:bg-purple-200 transition-colors duration-500"></div>
    )}

    {/* Icon Bubble */}
    <div className="relative z-10 flex-shrink-0">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-purple-900/5 flex items-center justify-center text-purple-700 text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-yellow-400 text-slate-900 text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
        {number}
      </div>
    </div>

    {/* Content Card */}
    <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-purple-100 transition-all duration-300">
      <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6 font-light">{desc}</p>
      {action && (
        <div className="mt-4">{action}</div>
      )}
    </div>
  </motion.div>
);

export default function SubmissionPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 selection:bg-yellow-200 selection:text-purple-900">
      
      {/* ---------------------------------------------------------------------------
          HERO HEADER
      --------------------------------------------------------------------------- */}
      <div className="relative pt-32 pb-20 bg-[#3d348b] text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-yellow-500 rounded-full blur-3xl mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-md mb-6 text-yellow-400 text-xs font-bold tracking-widest uppercase">
               <MdPublishedWithChanges className="text-lg" /> Journey to Publication
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
              Submission Process
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-indigo-100 font-light leading-relaxed">
              A streamlined four-step process to share your research. <br className="hidden md:block" />
              Please review the guidelines carefully before starting.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------
          DEADLINE ALERT
      --------------------------------------------------------------------------- */}
      <div className="container mx-auto px-6 -mt-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white border-l-4 border-yellow-400 rounded-r-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
           <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-50 text-yellow-600 rounded-full">
                 <MdTimer size={24} />
              </div>
              <div>
                 <h4 className="text-lg font-bold text-slate-900">Upcoming Deadline</h4>
                 <p className="text-slate-600 text-sm">Paper Submission Deadline is approaching.</p>
              </div>
           </div>
           <div className="text-2xl md:text-3xl font-bold text-purple-700">
              20th Feb, 2026
           </div>
        </motion.div>
      </div>

      {/* ---------------------------------------------------------------------------
          MAIN CONTENT (Timeline & Instructions)
      --------------------------------------------------------------------------- */}
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        
        {/* Important Note */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8"
        >
           <div className="flex gap-4 items-start">
              <MdWarning className="text-yellow-500 text-2xl flex-shrink-0 mt-1" />
              <div>
                 <h4 className="font-bold text-slate-900 mb-2">Prerequisite for Extended Abstracts</h4>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   <strong>Extended Abstract Submission</strong> is strictly restricted to authors with accepted initial abstracts. 
                   You will require your unique <strong>Paper ID</strong> (sent via email) to proceed. 
                   Unsolicited submissions without an ID will not be processed.
                 </p>
              </div>
           </div>
        </motion.div>

        {/* Steps Timeline */}
        <motion.div
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Step 1 */}
          <StepCard 
            number="01"
            title="Submit Initial Abstract"
            desc="All submissions must be in English. Please ensure your abstract includes a Title (max 20 words), a complete List of Authors (Name, Email, Affiliation), and a concise Abstract (max 300 words) outlining your objectives and methodology."
            icon={<MdDescription />}
            action={
              <div className="flex flex-wrap gap-4">
                 <a 
                    href="https://forms.gle/WDckqAecHnAUya848" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold shadow-lg hover:bg-purple-800 transition-all flex items-center gap-2"
                  >
                    Submit Abstract <MdArrowForward />
                  </a>
              </div>
            }
          />

          {/* Step 2 */}
          <StepCard 
            number="02"
            title="Review & Paper ID"
            desc="Our technical committee will review your abstract. Upon acceptance, you will receive an acceptance notification email containing your unique Paper ID. Please preserve this ID for all future correspondence."
            icon={<MdVpnKey />}
          />

          {/* Step 3 */}
          <StepCard 
            number="03"
            title="Submit Extended Abstract"
            desc="Prepare your camera-ready extended abstract according to the conference formatting guidelines (PDF format). The filename must be your Paper ID (e.g., '123.pdf')."
            icon={<MdUploadFile />}
            action={
              <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold shadow-lg hover:bg-slate-800 transition-all flex items-center gap-2">
                Upload Extended Abstract <MdOpenInNew />
              </button>
            }
          />

          {/* Step 4 */}
          <StepCard 
            number="04"
            title="Publication"
            desc="All extended abstracts will be published in ISBN-indexed conference proceedings."
            icon={<MdPublishedWithChanges />}
            isLast={true}
          />

        </motion.div>
      </div>

      {/* ---------------------------------------------------------------------------
          FOOTER / HELP
      --------------------------------------------------------------------------- */}
      <div className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="container mx-auto px-6 text-center">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-600 mx-auto mb-6 shadow-md">
              <MdHelpOutline size={30} />
           </div>
           <h3 className="text-2xl font-bold text-slate-900 mb-2">Need Assistance?</h3>
           <p className="text-slate-500 mb-6">If you encounter issues during the submission process, please contact the secretariat.</p>
           <a href="/contact" className="text-purple-700 font-bold hover:underline">
              Contact Support &rarr;
           </a>
        </div>
      </div>

    </div>
  );
}