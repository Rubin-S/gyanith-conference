// src/pages/About.jsx
import { motion } from "framer-motion";
import { 
  AcademicCapIcon, 
  LightBulbIcon, 
  GlobeAltIcon, 
  SparklesIcon 
} from "@heroicons/react/outline";

// --- Assets ---
// You can use the NITPY logo here if available, otherwise we use icons
// import nitLogo from "../assets/logo/NITPY.png";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const textReveal = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export default function About() {
  return (
    <div className="flex flex-col w-full bg-white font-sans text-slate-800 selection:bg-yellow-200 selection:text-purple-900">
      
      {/* --------------------------------------------------
         SECTION 1: HERO / VISION STATEMENT
         Style: Deep Purple, Gold Accents, Authoritative
         -------------------------------------------------- */}
      <section className="relative bg-[#3d348b] text-white pt-32 pb-24 px-6 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-yellow-400"></span>
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">
                About ICRAIT-2026
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8">
              Driving the Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                Industry 4.0
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-indigo-100 leading-relaxed max-w-2xl border-l-2 border-indigo-400/30 pl-6">
              An international platform promoting multidisciplinary collaboration and strengthening the integration of research and education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --------------------------------------------------
         SECTION 2: ABOUT THE CONFERENCE (From Brochure)
         Style: Clean Editorial Layout
         -------------------------------------------------- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left: Sticky Title/Icon */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textReveal}
            className="lg:w-1/3 lg:sticky lg:top-32"
          >
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-700">
              <SparklesIcon className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Conference
            </h2>
            <p className="text-slate-500 font-medium">
              Departments of Mechanical & CSE<br/>
              NIT Puducherry
            </p>
          </motion.div>

          {/* Right: Detailed Content */}
          <motion.div 
            className="lg:w-2/3 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
              The <strong className="font-semibold text-purple-900">International Conference on Recent Advances in Industry 4.0 Technologies (ICRAIT–2026)</strong> is organized by the Departments of Mechanical Engineering and Computer Science & Engineering at the National Institute of Technology, Puducherry, India.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <GlobeAltIcon className="w-5 h-5 text-purple-600"/> Global Platform
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Serving as an international nexus for researchers, academicians, and industry professionals to share and discuss recent developments.
                  </p>
               </div>
               
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <LightBulbIcon className="w-5 h-5 text-purple-600"/> Core Mission
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                     Promoting multidisciplinary collaboration and strengthening the integration of research and education in mechanical engineering and computer science.
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --------------------------------------------------
         SECTION 3: DIVIDER IMAGE / QUOTE
         Style: Parallax feel
         -------------------------------------------------- */}
      <section className="py-20 bg-slate-900 text-center px-6">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
        >
             <h3 className="text-2xl md:text-3xl font-serif italic text-slate-300 leading-relaxed">
              "We aim to share recent developments in Industry 4.0 enabling technologies, promoting multidisciplinary collaboration."
            </h3>
        </motion.div>
      </section>

      {/* --------------------------------------------------
         SECTION 4: ABOUT THE INSTITUTE (From Brochure)
         Style: Reversed Layout, Gold/Warm tones
         -------------------------------------------------- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-start">
          
          {/* Right: Sticky Title/Icon */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textReveal}
            className="lg:w-1/3 lg:sticky lg:top-32"
          >
            <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 text-yellow-600">
              <AcademicCapIcon className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Institute
            </h2>
            <div className="h-1 w-20 bg-yellow-400 rounded-full"></div>
          </motion.div>

          {/* Left: Detailed Content */}
          <motion.div 
            className="lg:w-2/3 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
             <h3 className="text-2xl font-bold text-slate-800">National Institute of Technology Puducherry (NITPY)</h3>
             
             <p className="text-slate-600 leading-relaxed">
               One of the thirty-one National Institutes of Technology in India, established by the Government of India in 2009 under the Eleventh Five-Year Plan (2007–2012).
             </p>

             <p className="text-slate-600 leading-relaxed">
               Located in <span className="font-semibold text-slate-900">Karaikal</span>, a coastal enclave in the Kaveri river basin, it is among the ten newer NITs in the Union Territory of Puducherry.
             </p>

             <div className="bg-yellow-50/50 border-l-4 border-yellow-400 p-6 mt-8 rounded-r-xl">
               <p className="text-slate-700 font-medium italic">
                 "Despite its young age, NITPY is committed to developing competent and responsible technocrats who contribute to national growth, while continuously striving for excellence."
               </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --------------------------------------------------
         SECTION 5: BOTTOM CTA / INFO
         -------------------------------------------------- */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Discover More Details</h2>
            <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => window.location.assign("/committee")}
                  className="px-8 py-3 bg-white text-purple-900 border border-slate-200 rounded-full font-semibold shadow-sm hover:shadow-md hover:border-purple-200 transition-all"
                >
                    View Committee
                </button>
                <button 
                  onClick={() => window.location.assign("/contact")}
                  className="px-8 py-3 bg-purple-900 text-white rounded-full font-semibold shadow-lg shadow-purple-900/20 hover:bg-purple-800 transition-all"
                >
                    Contact Us
                </button>
            </div>
        </div>
      </section>

    </div>
  );
}