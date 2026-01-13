// src/pages/Publication.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  MdDateRange, 
  MdAttachMoney, 
  MdSchool, 
  MdBusiness, 
  MdPublic, 
  MdGroups,
  MdArrowForward
} from "react-icons/md";

// --- DATA (Strictly from Brochure Image 2) ---
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
          HERO SECTION
          Style: Elite Corporate, Purple/Gold
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
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              Timeline & Fees
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6">
              Registration & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                Important Dates
              </span>
            </h1>
            
            <p className="text-lg text-indigo-100 leading-relaxed max-w-2xl mx-auto font-light">
              Secure your spot at ICRAIT-2026. Review the submission timeline and registration details below.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------
          IMPORTANT DATES (Timeline)
      --------------------------------------------------------------------------- */}
      <section className="py-24 container mx-auto px-6">
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
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

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
      </section>

      {/* ---------------------------------------------------------------------------
          REGISTRATION FEES (Pricing Cards)
      --------------------------------------------------------------------------- */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Registration Fees
              </h2>
              <p className="text-slate-600 max-w-xl">
                Choose the category that best describes your participation type. All fees include conference materials and access to sessions.
              </p>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 text-sm font-semibold text-slate-600 flex items-center gap-2">
               <MdDateRange className="text-purple-600 text-lg" />
               Deadline: 22nd Feb, 2026
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {FEES.map((fee, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-purple-200 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-3xl text-slate-400 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors mb-6">
                  {fee.icon}
                </div>

                <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">
                  {fee.type}
                </span>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {fee.category}
                </h3>

                <div className="mt-auto mb-8">
                  <span className="text-4xl font-serif font-bold text-purple-700">
                    {fee.amount}
                  </span>
                </div>

                <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all flex items-center justify-center gap-2">
                  Register Now <MdArrowForward />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
          SUBMISSION NOTE / FOOTER
      --------------------------------------------------------------------------- */}
      <div className="container mx-auto px-6 py-20">
         <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[80px] opacity-20"></div>
            
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 relative z-10">
              Ready to Participate?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 relative z-10">
              Ensure you have prepared your abstract according to the conference standards before proceeding to the payment gateway.
            </p>
            <button className="px-8 py-4 bg-yellow-500 text-slate-900 rounded-full font-bold shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 hover:scale-105 transition-all relative z-10">
              Proceed to Submission
            </button>
         </div>
      </div>

    </div>
  );
}