// src/pages/CallForPapers.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  MdSmartToy, 
  MdCloudSync, 
  MdPrint, 
  MdViewInAr, 
  MdStorage, 
  MdPsychology,
  MdDateRange,
  MdAttachMoney,
  MdArrowForward,
  MdFileDownload
} from "react-icons/md";

// --- DATA: EXTRACTED STRICTLY FROM BROCHURE IMAGE 2 ---

const TRACKS = [
  {
    id: 1,
    title: "Robotics & Automation",
    icon: <MdSmartToy />,
    topics: [
      "Automation and Process Control",
      "Autonomous Robots",
      "Human Robot Collaboration",
      "Industrial Robots",
      "Intelligent Robots",
      "Mechatronics & Mechanisms",
      "Modelling And Simulation",
      "Multi Robot Systems",
      "Trajectory and Path Planning",
      "Sensors Fusion"
    ]
  },
  {
    id: 2,
    title: "Industrial IoT & Cloud",
    subtitle: "& Manufacturing",
    icon: <MdCloudSync />,
    topics: [
      "Supply chain 4.0",
      "Resources management",
      "Cloud-based smart manufacturing",
      "Cyber-physical systems",
      "Industrial case studies",
      "Industry 4.0 and production economics",
      "Lean/Agile Manufacturing",
      "Optimization and decision making",
      "Virtual Manufacturing"
    ]
  },
  {
    id: 3,
    title: "Additive Manufacturing",
    icon: <MdPrint />,
    topics: [
      "Process Optimization",
      "Modelling simulation",
      "Advance in post processing",
      "3D Printing of complex geometries",
      "Design for Additive Manufacturing",
      "Testing and Characterization",
      "Material minimization",
      "Reverse engineering"
    ]
  },
  {
    id: 4,
    title: "Immersive Engineering",
    icon: <MdViewInAr />,
    topics: [
      "Augmented Reality",
      "Virtual Reality",
      "Computerized Simulation",
      "Spatial Sensing",
      "Mixed Reality",
      "Behaviorism",
      "3D Displays",
      "3D Audio & 3D Games",
      "Haptics"
    ]
  },
  {
    id: 5,
    title: "Big Data & IoT",
    icon: <MdStorage />,
    topics: [
      "Algorithms",
      "Cyber-physical System",
      "IoT: Smart Devices",
      "Performance Evaluation and Modelling",
      "Information Retrieval Techniques",
      "Big Data Acquisition",
      "Integration and Cleaning",
      "Big Data Analytics"
    ]
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    icon: <MdPsychology />,
    topics: [
      "Machine learning",
      "Image processing",
      "Video Processing",
      "AI for cyber security",
      "Audio Analysis",
      "Advances in AI techniques",
      "AI Based Optimization for industry",
      "Deep Learning",
      "Text Analysis"
    ]
  }
];

const DATES = [
  { label: "Paper Submission Deadline", date: "20th Feb, 2026" },
  { label: "Acceptance Notification", date: "20th Feb, 2026" }, // As per brochure
  { label: "Registration Deadline", date: "22nd Feb, 2026" },
  { label: "Conference Dates", date: "27th - 28th Feb, 2026", highlight: true },
];

const FEES = [
  { category: "Student / Scholar", amount: "₹ 500" },
  { category: "Academia", amount: "₹ 800" },
  { category: "Industry", amount: "₹ 1,000" },
  { category: "Foreign Delegates", amount: "25 USD" },
  { category: "Attendee", amount: "₹ 500 / 10 USD" },
];

// --- ANIMATION VARIANTS ---
const containerVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function CallForPapers() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 selection:bg-yellow-200 selection:text-purple-900">
      
      {/* ---------------------------------------------------------------------------
          HERO SECTION
      --------------------------------------------------------------------------- */}
      <div className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-600/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block py-2 px-6 rounded-full border border-yellow-500/50 bg-yellow-500/10 backdrop-blur-md mb-6">
               <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs">Submission Open</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6">
              Call for Papers
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 font-light leading-relaxed">
              We invite researchers, academicians, and industry professionals to submit original research advancing the field of <span className="text-yellow-400 font-medium">Industry 4.0 Technologies</span>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------
          TRACKS GRID
      --------------------------------------------------------------------------- */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">Conference Tracks</h2>
            <div className="h-1 w-24 bg-purple-600 mx-auto rounded-full"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {TRACKS.map((track) => (
              <motion.div 
                key={track.id}
                variants={itemVar}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center text-3xl group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300 shadow-sm">
                    {track.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-purple-700 transition-colors">
                      {track.title}
                    </h3>
                    {track.subtitle && <span className="text-sm text-slate-500">{track.subtitle}</span>}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {track.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                      <span className="leading-snug group-hover:text-slate-900 transition-colors">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------
          IMPORTANT INFO (Dates & Fees)
      --------------------------------------------------------------------------- */}
      <div className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Side Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-full bg-slate-50 skew-x-12 opacity-50 pointer-events-none hidden lg:block"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* LEFT: Dates Timeline */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-10">
                 <div className="p-3 bg-purple-100 text-purple-700 rounded-lg">
                    <MdDateRange size={24} />
                 </div>
                 <h2 className="text-3xl font-serif font-bold text-slate-900">Important Dates</h2>
              </div>

              <div className="space-y-6 relative border-l-2 border-slate-100 ml-4 pl-8">
                 {DATES.map((item, idx) => (
                   <div key={idx} className="relative">
                     {/* Dot */}
                     <span className={`absolute -left-[41px] top-1 w-6 h-6 rounded-full border-4 border-white ${item.highlight ? 'bg-yellow-400 shadow-md' : 'bg-slate-300'}`}></span>
                     
                     <h4 className={`text-lg font-bold ${item.highlight ? 'text-purple-700' : 'text-slate-800'}`}>
                       {item.date}
                     </h4>
                     <p className="text-slate-500 uppercase tracking-wide text-sm font-medium mt-1">
                       {item.label}
                     </p>
                   </div>
                 ))}
              </div>

              <div className="mt-12 p-6 bg-yellow-50 border border-yellow-100 rounded-xl">
                 <p className="text-yellow-800 text-sm italic">
                   * Note: All deadlines are final. Late submissions may not be considered for the primary proceedings.
                 </p>
              </div>
            </div>

            {/* RIGHT: Fees Card */}
            <div className="flex-1">
               <div className="flex items-center gap-3 mb-10">
                 <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                    <MdAttachMoney size={24} />
                 </div>
                 <h2 className="text-3xl font-serif font-bold text-slate-900">Registration Fees</h2>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl">
                 <div className="bg-purple-800 p-6">
                    <h3 className="text-xl font-bold">Standard Registration</h3>
                    <p className="text-purple-200 text-sm">Includes access to all sessions and kit.</p>
                 </div>
                 <div className="p-2">
                    {FEES.map((fee, idx) => (
                       <div key={idx} className={`flex justify-between items-center p-5 ${idx !== FEES.length -1 ? 'border-b border-white/10' : ''}`}>
                          <span className="font-medium text-slate-300">{fee.category}</span>
                          <span className="font-bold text-yellow-400 text-lg">{fee.amount}</span>
                       </div>
                    ))}
                 </div>
                 <div className="bg-slate-800 p-6 text-center border-t border-white/10">
                    <button className="w-full py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-300">
                       Proceed to Payment
                    </button>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------
          BOTTOM CTA
      --------------------------------------------------------------------------- */}
      <div className="bg-[#3d348b] py-20 text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Ready to Submit your Research?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button className="px-8 py-4 bg-yellow-500 text-slate-900 rounded-full font-bold shadow-lg hover:bg-yellow-400 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  Submit Paper <MdArrowForward />
               </button>
               <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <MdFileDownload size={20} /> Download Template
               </button>
            </div>
         </div>
      </div>

    </div>
  );
}