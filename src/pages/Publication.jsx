// src/pages/Publication.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  MdDateRange, 
  MdSchool, 
  MdBusiness, 
  MdPublic, 
  MdGroups,
  MdArrowForward,
  MdLibraryBooks,
  MdFindInPage,
  MdVerifiedUser,
  MdBookmarkAdded,
  MdGavel
} from "react-icons/md";

// --- DATA: TIMELINE & FEES ---
const TIMELINE = [
  {
    date: "20th Feb, 2026",
    title: "Paper Submission",
    desc: "Deadline for submitting your abstract/paper.",
    highlight: false
  },
  {
    date: "20th Feb, 2026",
    title: "Acceptance Notification",
    desc: "Notification of acceptance for submitted works.",
    highlight: false
  },
  {
    date: "22nd Feb, 2026",
    title: "Registration Deadline",
    desc: "Final date to register for the conference.",
    highlight: true
  },
  {
    date: "27th - 28th Feb, 2026",
    title: "Conference Dates",
    desc: "The main event at NIT Puducherry.",
    highlight: true
  }
];

const FEES = [
  {
    category: "Student / Scholar",
    amount: "₹500",
    icon: <MdSchool />,
    type: "Indian Delegate"
  },
  {
    category: "Academia",
    amount: "₹800",
    icon: <MdSchool />,
    type: "Indian Delegate"
  },
  {
    category: "Industry",
    amount: "₹1,000",
    icon: <MdBusiness />,
    type: "Indian Delegate"
  },
  {
    category: "Foreign Delegates",
    amount: "25 USD",
    icon: <MdPublic />,
    type: "International"
  },
  {
    category: "Attendee",
    amount: "₹ 500 / 10 USD",
    icon: <MdGroups />,
    type: "Participation Only"
  }
];

// --- ANIMATION VARIANTS ---
const containerVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Publication() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 selection:bg-yellow-200 selection:text-purple-900">
      
      {/* ---------------------------------------------------------------------------
          HERO SECTION: PUBLICATION FOCUSED
      --------------------------------------------------------------------------- */}
      <div className="relative pt-32 pb-24 bg-[#3d348b] text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-bold tracking-widest uppercase">
              <MdLibraryBooks className="text-lg" /> Official Proceedings
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6">
              Publication <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                & Proceedings
              </span>
            </h1>
            
            <p className="text-lg text-indigo-100 leading-relaxed max-w-3xl mx-auto font-light">
              All accepted extended abstracts will be published in the Conference Proceedings with an assigned <strong>ISBN (International Standard Book Number)</strong>, ensuring academic credibility and global discoverability.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------
          DETAILED PUBLICATION INFORMATION (TOP OF PAGE)
      --------------------------------------------------------------------------- */}
      <section className="py-24 container mx-auto px-6">
         <motion.div 
            variants={containerVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
         >
            {/* Left: Text Info */}
            <div>
               <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                  ISBN-Indexed Proceedings
               </h2>
               <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                     The <strong>ICDTSES-2026</strong> proceedings are designed to serve as a permanent record of the digital innovation and engineering research presented at the conference.
                  </p>
                  <p>
                     An <strong>ISBN (International Standard Book Number)</strong> is a unique numeric commercial book identifier. Publishing with an ISBN ensures that your research is cataloged, searchable, and cited effectively in the global academic community. It transforms your extended abstract into a recognized book chapter or conference paper entry.
                  </p>
                  <ul className="space-y-4 mt-6">
                     <li className="flex items-start gap-3">
                        <MdVerifiedUser className="text-purple-600 text-xl flex-shrink-0 mt-1" />
                        <span><strong>Global Recognition:</strong> The ISBN ensures your work is uniquely identifiable worldwide.</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <MdBookmarkAdded className="text-purple-600 text-xl flex-shrink-0 mt-1" />
                        <span><strong>Academic Value:</strong> ISBN-indexed proceedings are recognized by academic institutions for research scores (API) and career advancement.</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <MdFindInPage className="text-purple-600 text-xl flex-shrink-0 mt-1" />
                        <span><strong>Discoverability:</strong> Enables easier indexing by libraries, digital archives, and aggregators.</span>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Right: Policy Cards */}
            <div className="grid grid-cols-1 gap-6">
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 bg-yellow-100 text-yellow-700 rounded-lg">
                        <MdGavel />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900">Review Policy</h3>
                  </div>
                  <p className="text-slate-600 text-sm">
                     All submissions undergo a rigorous <strong>double-blind peer review process</strong>. Papers are evaluated based on originality, technical depth, correctness, relevance to conference tracks, and readability. Only accepted and presented papers will be included in the proceedings.
                  </p>
               </div>

               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 bg-red-100 text-red-700 rounded-lg">
                        <MdVerifiedUser />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900">Plagiarism Policy</h3>
                  </div>
                  <p className="text-slate-600 text-sm">
                     ICDTSES maintains a zero-tolerance policy towards plagiarism. All submissions will be checked using industry-standard tools (e.g., Turnitin/iThenticate). The similarity index must be <strong>below 15%</strong> (excluding references) to be considered for publication.
                  </p>
               </div>
            </div>
         </motion.div>
      </section>

      {/* ---------------------------------------------------------------------------
          IMPORTANT DATES (Timeline)
      --------------------------------------------------------------------------- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
              Program Schedule
            </h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <motion.div 
            variants={containerVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {TIMELINE.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeUp}
                  className="relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
                >
                  {/* Timeline Dot */}
                  <div className={`w-4 h-4 rounded-full mx-auto mb-6 border-4 border-white shadow-md ${item.highlight ? 'bg-purple-600' : 'bg-yellow-400'}`}></div>
                  
                  <h3 className={`text-lg font-bold mb-2 ${item.highlight ? 'text-purple-700' : 'text-slate-800'}`}>
                    {item.date}
                  </h3>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
          SUBMISSION CTA
      --------------------------------------------------------------------------- */}
      <div className="bg-[#3d348b] py-20 text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Ready to Submit?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button className="px-8 py-4 bg-yellow-500 text-slate-900 rounded-full font-bold shadow-lg hover:bg-yellow-400 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  Proceed to Submission <MdArrowForward />
               </button>
            </div>
         </div>
      </div>

    </div>
  );
}