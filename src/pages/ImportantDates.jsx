// src/pages/ImportantDates.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  MdEventNote, 
  MdNotificationsActive, 
  MdHowToReg, 
  MdTimer,
  MdArrowForward,
  MdDateRange
} from "react-icons/md";

// --- DATA (Strictly from Brochure Image 2) ---
const TIMELINE = [
  {
    id: 1,
    date: "20th Feb, 2026",
    title: "Paper Submission Deadline", // Inferred from standard flow, as date is explicit in brochure
    desc: "Last date to submit your full research paper for review.",
    status: "active", 
    icon: <MdEventNote />
  },
  {
    id: 2,
    date: "20th Feb, 2026",
    title: "Acceptance Notification", // Inferred from standard flow
    desc: "Notification regarding the acceptance status of your submission.",
    status: "upcoming",
    icon: <MdNotificationsActive />
  },
  {
    id: 3,
    date: "22nd Feb, 2026", // Corrected '22th' to '22nd' for professionalism
    title: "Registration Deadline", 
    desc: "Final deadline to register and secure your spot at the conference.",
    status: "upcoming",
    icon: <MdHowToReg />
  },
  {
    id: 4,
    date: "27th - 28th Feb, 2026", 
    title: "Conference Dates", 
    desc: "The main event held at NIT Puducherry.",
    status: "upcoming",
    highlight: true,
    icon: <MdDateRange />
  }
];

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

export default function ImportantDates() {
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-bold tracking-widest uppercase">
               <MdTimer className="text-lg" /> Strict Deadlines
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
              Conference Schedule
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-indigo-100 font-light leading-relaxed">
              Stay ahead of the curve. Mark these critical dates to ensure your participation in ICDTSES-2026.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------
          TIMELINE SECTION
      --------------------------------------------------------------------------- */}
      <div className="container mx-auto px-6 py-20 relative">
        {/* Central Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-20 bottom-20 w-px bg-slate-200 -translate-x-1/2"></div>

        <motion.div 
          className="space-y-12 md:space-y-24 relative z-10"
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {TIMELINE.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={item.id}
                variants={fadeUp}
                className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Date Content */}
                <div className="flex-1 w-full text-center md:text-left">
                  <div className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${
                      item.highlight 
                      ? 'bg-slate-900 border-slate-900 text-white shadow-2xl' 
                      : 'bg-white border-slate-100 shadow-sm hover:border-purple-200'
                    } ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    
                    <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      item.highlight ? 'bg-yellow-500 text-slate-900' : 'bg-purple-50 text-purple-700'
                    } ${isEven ? '' : 'md:ml-auto md:flex-row-reverse'}`}>
                      {item.status === 'active' ? 'Current Phase' : item.status}
                    </div>

                    <h3 className={`text-2xl font-serif font-bold mb-2 ${item.highlight ? 'text-white' : 'text-slate-900'}`}>
                      {item.date}
                    </h3>
                    <h4 className={`text-lg font-bold mb-3 ${item.highlight ? 'text-purple-200' : 'text-purple-700'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${item.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative flex-shrink-0 z-10">
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                    item.highlight 
                    ? 'bg-yellow-500 border-white text-slate-900' 
                    : 'bg-white border-slate-100 text-purple-600'
                  }`}>
                    {item.icon}
                  </div>
                </div>

                {/* Empty Space for Balance */}
                <div className="flex-1 w-full hidden md:block"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ---------------------------------------------------------------------------
          BOTTOM ALERT
      --------------------------------------------------------------------------- */}
      <div className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border border-l-4 border-l-yellow-400 shadow-sm flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 bg-yellow-50 rounded-full text-yellow-600">
               <MdNotificationsActive size={32} />
            </div>
            <div className="text-center md:text-left">
               <h3 className="text-xl font-bold text-slate-900 mb-2">Strict Adherence Policy</h3>
               <p className="text-slate-600 leading-relaxed">
                 Please note that the dates mentioned above are final. Late submissions for papers or registrations will strictly not be entertained to ensure the smooth conduct of the conference.
               </p>
            </div>
            <a href="/registration" className="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors whitespace-nowrap flex items-center gap-2">
               Register Now <MdArrowForward />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}