// src/pages/Committees.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  MdVerified,
  MdGroups,
  MdSchool,
  MdStar,
  MdPerson,
} from "react-icons/md";

import ronald from "../assets/speakers/ronald.jpg";
import yedukondalarao from "../assets/speakers/rao.jpg";
import ansuman from "../assets/images/AnsumanMahapatra.jpg";

// --- DATA (Strictly matched to Brochure) ---

const CHIEF_PATRON = [
  {
    name: "Prof. Makarand Madhao Ghangrekar",
    role: "Chief Patron",
    title: "Director",
    inst: "NIT Puducherry",
  },
];

const PATRONS = [
  {
    name: "Dr. Sundaravarathan S",
    role: "Patron",
    title: "Registrar",
    inst: "NIT Puducherry",
  },
  {
    name: "Dr. G S Mahapatra",
    role: "Co-Patron",
    title: "Dean (R&C)",
    inst: "NIT Puducherry",
  },
];

const CONVENERS = [
  {
    name: "Dr. Ansuman Mahapatra",
    role: "Chairperson & Convener",
    images: ansuman,
  },
  {
    name: "Dr. J Ronald Aseer",
    role: "Chairperson & Convener",
    images: ronald,
  },
  {
    name: "Dr. Yedukondalarao Veeranki",
    role: "Chairperson & Convener",
    images: yedukondalarao,
  },
];

const ADVISORY_BOARD = [
  { name: "Prof. Ramakrishnan Swaminathan", affiliation: "IIT Madras, India" },
  { name: "Dr. Nagarajan Ganapathy", affiliation: "IIT Hyderabad, India" },
  { name: "Dr. A. R. Jac Fredo", affiliation: "IIT (BHU), India" },
  { name: "Dr. Yanumula Venkata Karteek", affiliation: "IIT Mandi, India" },
  { name: "Dr. P. A. Karthick", affiliation: "NIT Tiruchirappalli, India" },
  {
    name: "Dr. Premkumar Borugadda",
    affiliation: "Eratosthenes Centre of Excellence, Limassol, Cyprus",
  },
  {
    name: "Dr. Rangababu Peesapati",
    affiliation: "IIIT Design and Manufacturing Kurnool",
  },
  {
    name: "Dr. Himanshu Kumar",
    affiliation: "Cleveland Clinic, Cleveland, OH, USA",
  },
  {
    name: "Dr. T Kerishna Battula",
    affiliation: "Jawaharlal Nehru Technological University, Kakinada, India",
  },
  {
    name: "Dr. Katakamsetty Venkatakrishna Rao",
    affiliation: "National Institute of Technology Warangal, India",
  },
  {
    name: "Dr. Rohini P",
    affiliation: "IIIT Design and Manufacturing Kancheepuram",
  },
];

// --- ANIMATION ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// --- COMPONENTS ---

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
      {title}
    </h2>
    <div className="h-1 w-24 bg-yellow-400 mx-auto rounded-full mb-4"></div>
    {subtitle && <p className="text-slate-500 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default function CommitteesPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 selection:bg-yellow-200 selection:text-purple-900">
      {/* ---------------------------------------------------------------------------
          HERO HEADER
      --------------------------------------------------------------------------- */}
      <div className="relative pt-32 pb-20 bg-[#3d348b] text-white overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-400 rounded-full blur-3xl mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-yellow-400 text-4xl mb-8 shadow-2xl">
              <MdGroups />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
              Steering Committee
            </h1>
            <p className="text-indigo-100 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              The distinguished visionaries and academic leaders guiding the
              strategic direction of ICRAIT-2026.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------
          SECTION 1: HIGH COMMAND (Chief Patron)
      --------------------------------------------------------------------------- */}
      <div className="container mx-auto px-6 -mt-12 relative z-20 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-slate-100 text-center"
        >
          {CHIEF_PATRON.map((person, idx) => (
            <div key={idx}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {person.name}
              </h2>
              <p className="text-purple-700 font-bold text-lg mb-1">
                {person.role}
              </p>
              <p className="text-slate-500">
                {person.title}, {person.inst}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ---------------------------------------------------------------------------
          SECTION 2: PATRONS (Grid)
      --------------------------------------------------------------------------- */}
      <div className="container mx-auto px-6 mb-24">
        <SectionTitle title="Patrons" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PATRONS.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 text-center group"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                {person.name}
              </h3>
              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-md mb-3">
                {person.role}
              </div>
              <p className="text-slate-500 text-sm">{person.title}</p>
              <p className="text-slate-400 text-sm">{person.inst}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------------------
          SECTION 3: CONVENERS (Brochure Match)
      --------------------------------------------------------------------------- */}
      <div className="bg-[#0B0F19] py-24 relative overflow-hidden">
        {/* Optional: Ambient Background Glow for 'Sleek' look */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-200 mb-6">
              Chairpersons & Conveners
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full shadow-lg shadow-purple-900/50"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {CONVENERS.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="group relative"
              >
                {/* Card Background & Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:border-purple-500/30 shadow-xl">
                  {/* Image Container with Ring Effect */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-br from-white/20 to-white/5">
                      <img
                        src={person.images}
                        alt={person.name}
                        className="w-full h-full rounded-full object-cover border-2 border-slate-900/80"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {person.name}
                  </h3>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-white/10 my-3 group-hover:bg-purple-500/50 transition-colors" />

                  <p className="text-slate-400 text-sm font-medium uppercase tracking-widest group-hover:text-white transition-colors">
                    {person.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------
          SECTION 4: ADVISORY MEMBERS (Exact List)
      --------------------------------------------------------------------------- */}
      <div className="container mx-auto px-6 py-24">
        <SectionTitle
          title="Advisory Members"
          subtitle="Renowned experts from premier institutions across the globe providing technical guidance."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ADVISORY_BOARD.map((member, i) => (
            <motion.div key={i} variants={fadeInUp} className="h-full">
              <div className="h-full bg-white p-6 rounded-xl border border-slate-100 hover:border-purple-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group">
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base mb-2 group-hover:text-purple-800 transition-colors">
                    {member.name}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MdSchool className="shrink-0 text-slate-400" />
                    <span className="leading-snug">{member.affiliation}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
