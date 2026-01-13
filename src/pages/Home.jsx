// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MdLocationPin, 
  MdCalendarToday, 
  MdFileDownload, 
  MdArrowForward,
  MdMic,
  MdGroups
} from "react-icons/md";

// --- Assets (Ensure these exist in your assets folder) ---
import nitpy from "../assets/logo/NITPY.png"; 
// Ideally, use a photo of Prof. Pachori here
import pachori from "../assets/logo/NITPY.png"; 

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// --- Data Constants (Strictly from Brochure) ---
const TRACKS = [
  { 
    title: "Robotics & Automation", 
    desc: "Automation & Process Control, Autonomous Robots, Human Robot Collaboration, Industrial Robots, Intelligent Robots, Mechatronics, Trajectory Planning.",
    icon: "🤖"
  },
  { 
    title: "Industrial IoT & Cloud", 
    desc: "Supply Chain 4.0, Resource Management, Cloud-based Smart Manufacturing, Cyber-physical Systems, Lean/Agile Manufacturing, Virtual Manufacturing.",
    icon: "☁️" 
  },
  { 
    title: "Additive Manufacturing", 
    desc: "Process Optimization, Modelling Simulation, Post-processing Advances, 3D Printing of Complex Geometries, Material Minimization, Reverse Engineering.",
    icon: "🖨️"
  },
  { 
    title: "Immersive Engineering", 
    desc: "Augmented Reality, Virtual Reality, Computerized Simulation, Spatial Sensing, Mixed Reality, 3D Displays, Haptics, Behaviorism.",
    icon: "👓"
  },
  { 
    title: "Big Data & IoT", 
    desc: "Algorithms, Cyber-physical Systems, Smart Devices, Performance Evaluation, Information Retrieval, Big Data Acquisition & Analytics.",
    icon: "📊"
  },
  { 
    title: "Artificial Intelligence", 
    desc: "Machine Learning, Image/Video Processing, AI for Cyber Security, Audio Analysis, Deep Learning, AI Based Optimization for Industry.",
    icon: "🧠"
  },
];

const LEADERSHIP = [
    { name: "Prof. Makarand Madhao Ghangrekar", role: "Chief Patron", title: "Director, NIT Puducherry" },
    { name: "Dr. Sundaravarathan S", role: "Patron", title: "Registrar, NIT Puducherry" },
    { name: "Dr. G S Mahapatra", role: "Co-Patron", title: "Dean (R&C), NIT Puducherry" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-white font-sans text-slate-800">
      
      {/* ---------------------------------------------------------------------------
          HERO SECTION
          Style: High-End Corporate, Clean, NITPY Branding
      --------------------------------------------------------------------------- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
        {/* Subtle animated background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2 mix-blend-multiply" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            {/* Top Badge */}
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 px-5 py-2 rounded-full shadow-sm">
               <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
               <span className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase">
                 ICDTSES - Industry 4.0
               </span>
            </motion.div>

            {/* Logos */}
            <motion.div variants={fadeInUp} className="mb-8">
               <img src={nitpy} alt="NIT Puducherry Logo" className="h-24 md:h-32 object-contain drop-shadow-lg" />
            </motion.div>

            {/* Titles */}
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-6">
              ICRAIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">2026</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-3xl font-light text-slate-600 mb-8 leading-snug max-w-3xl">
              International Conference on Recent Advances in <br/>
              <span className="font-semibold text-slate-900">Industry 4.0 Technologies</span>
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-slate-500 mb-10">
              <div className="flex items-center gap-2">
                <MdCalendarToday className="text-purple-600 text-xl" />
                <span>February 27th - 28th, 2026</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-slate-300"></div>
              <div className="flex items-center gap-2">
                <MdLocationPin className="text-purple-600 text-xl" />
                <span>NIT Puducherry, Karaikal, India</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <button 
                onClick={() => navigate('/registration')}
                className="group relative px-8 py-4 bg-purple-900 text-white rounded-full font-semibold shadow-xl shadow-purple-900/20 hover:shadow-2xl hover:shadow-purple-900/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-800 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Register Now <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <a 
                href="/assets/CONFERENCE.pdf" 
                download 
                className="px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-full font-semibold shadow-lg shadow-slate-200/50 hover:border-purple-200 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MdFileDownload className="text-xl" /> Download Brochure
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
          TRACKS SECTION
          Style: Spacious Grid, Yellow/Gold Accents (Brochure)
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-3">Technical Sessions</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Conference Tracks</h3>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 text-lg">
                Exploring cutting-edge developments in automation, data, and manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRACKS.map((track, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  {track.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">
                  {track.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {track.desc}
                </p>
                <div className="flex items-center text-purple-600 font-semibold text-sm">
                  <span>View Details</span>
                  <MdArrowForward className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
          KEYNOTE SPEAKER & LEADERSHIP
          Style: Clean, Authoritative, Profile Cards
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          
          {/* Keynote */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Keynote Speaker</h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl flex flex-col md:flex-row gap-10 items-center"
            >
              <div className="relative w-48 h-48 shrink-0">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-20"></div>
                <img 
                  src={pachori} 
                  alt="Prof. Ram Bilas Pachori" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  onError={(e) => { e.target.src="https://placehold.co/200x200?text=Prof.+Pachori" }}
                />
                <div className="absolute bottom-2 right-2 bg-purple-600 text-white p-2 rounded-full shadow-md">
                   <MdMic />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Prof. Ram Bilas Pachori</h3>
                <p className="text-purple-700 font-medium mb-4">Professor (HAG), Dept. of Electrical Engineering, IIT Indore</p>
                <p className="text-slate-600 leading-relaxed italic">
                  "Distinguished expert bringing insights into signal processing and AI applications for Industry 4.0."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Patrons / Leadership */}
          <div className="border-t border-slate-100 pt-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Chief Patrons & Conveners</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {LEADERSHIP.map((leader, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors"
                    >
                        <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-400">
                            <MdGroups size={30} />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">{leader.name}</h4>
                        <p className="text-purple-600 text-sm font-semibold mb-1">{leader.role}</p>
                        <p className="text-slate-500 text-sm">{leader.title}</p>
                    </motion.div>
                ))}
            </div>
            
            {/* Brief Mention of Conveners */}
            <div className="text-center mt-12 pt-8 border-t border-slate-100">
                <p className="text-slate-500 text-sm uppercase tracking-wide mb-4">Chairpersons & Conveners</p>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-medium text-slate-700">
                    <span>Dr. Ansuman Mahapatra</span>
                    <span className="text-slate-300">•</span>
                    <span>Dr. J Ronald Aseer</span>
                    <span className="text-slate-300">•</span>
                    <span>Dr. Yedukondalarao Veeranki</span>
                </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}