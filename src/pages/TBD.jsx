// src/pages/TBD.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdRocketLaunch, MdEmail, MdArrowForward, MdConstruction } from "react-icons/md";

// --- ANIMATION VARIANTS ---
const containerVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function TBDPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div className="relative min-h-[90vh] bg-primary-900 overflow-hidden flex items-center justify-center px-6">
      
      {/* ---------------------------------------------------------------------------
          BACKGROUND EFFECTS
      --------------------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0">
        {/* Abstract animated gradient blobs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-700 rounded-full blur-[120px] opacity-30" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary-600 rounded-full blur-[150px] opacity-20" 
        />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />
      </div>

      {/* ---------------------------------------------------------------------------
          CONTENT CARD
      --------------------------------------------------------------------------- */}
      <motion.div 
        variants={containerVar}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-3xl"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          
          {/* Icon Badge */}
          <motion.div variants={itemVar} className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-secondary-500/30 transform rotate-3">
              <MdRocketLaunch className="text-4xl text-white" />
            </div>
          </motion.div>

          {/* Typography */}
          <motion.h1 variants={itemVar} className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
            Something Extraordinary <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500">
              Is On The Horizon
            </span>
          </motion.h1>

          <motion.p variants={itemVar} className="text-lg md:text-xl text-primary-200 mb-10 max-w-xl mx-auto leading-relaxed">
            We are currently curating exclusive content for this section. 
            Be the first to know when we launch our 
            <span className="text-white font-semibold"> Sponsorship Packages</span> & 
            <span className="text-white font-semibold"> Partner Opportunities</span>.
          </motion.p>

          {/* Interactive Form */}
          <motion.div variants={itemVar} className="max-w-md mx-auto">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-green-200 font-medium flex items-center justify-center gap-2"
              >
                <span>You're on the list! We'll be in touch.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative group">
                <div className="absolute inset-0 bg-secondary-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative flex items-center bg-white/10 border border-white/20 rounded-xl p-2 focus-within:border-secondary-400 focus-within:bg-white/15 transition-all">
                  <MdEmail className="text-2xl text-primary-300 ml-3" />
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full bg-transparent border-none text-white placeholder-primary-300 px-4 py-3 focus:ring-0 outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="bg-secondary-500 hover:bg-secondary-400 text-primary-900 font-bold px-6 py-3 rounded-lg transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "..." : "Notify Me"}
                    {status !== "loading" && <MdArrowForward />}
                  </button>
                </div>
              </form>
            )}
            <p className="text-primary-400 text-xs mt-4">
              * No spam. Unsubscribe anytime.
            </p>
          </motion.div>

        </div>

        {/* Footer Note */}
        <motion.div variants={itemVar} className="mt-8 text-center">
          <p className="text-primary-300 text-sm flex items-center justify-center gap-2">
            <MdConstruction className="text-secondary-500" />
            Page under active development by the ICRAIT Technical Team.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}