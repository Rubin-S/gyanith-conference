// src/pages/Registration.jsx
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { 
  MdPerson, 
  MdSchool, 
  MdBusiness, 
  MdPublic, 
  MdCheckCircle, 
  MdArrowForward,
  MdCreditCard,
  MdCloudUpload,
  MdAccessTime
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

// --- DATA ---
const TIERS = [
  {
    id: "student",
    title: "Student / Scholar",
    icon: <MdSchool />,
    priceIn: "₹8,000",
    priceOut: "₹6,000", // Virtual
    features: ["Access to all sessions", "Conference Kit", "Certificate of Participation", "Lunch & Refreshments"],
    color: "border-primary-200 bg-white"
  },
  {
    id: "faculty",
    title: "Faculty / Researcher",
    icon: <MdPerson />,
    priceIn: "₹10,000",
    priceOut: "₹8,000",
    features: ["Access to all sessions", "Conference Kit", "Certificate of Presentation", "Networking Dinner"],
    color: "border-primary-500 bg-primary-50 shadow-xl scale-105 z-10" // Highlighted tier
  },
  {
    id: "industry",
    title: "Industry Professional",
    icon: <MdBusiness />,
    priceIn: "₹24,000",
    priceOut: "₹20,000",
    features: ["Access to all sessions", "VIP Seating", "Company Logo on Website", "Networking Dinner"],
    color: "border-secondary-400 bg-white"
  },
  {
    id: "foreign",
    title: "Foreign Delegate",
    icon: <MdPublic />,
    priceIn: "$250",
    priceOut: "$200",
    features: ["Full Access (Hybrid)", "Digital Certificate", "Proceedings Access", "International Networking"],
    color: "border-neutral-200 bg-neutral-50"
  }
];

// --- ANIMATION ---
const containerVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Registration() {
  const navigate = useNavigate();

  const handleRegister = useCallback((category, mode, price) => {
    navigate("/registration/form", { state: { selection: { category, mode, price } } });
  }, [navigate]);

  return (
    <div className="bg-neutral-50 min-h-screen pt-24 pb-20">
      
      {/* ---------------------------------------------------------------------------
          HEADER & EARLY BIRD
      --------------------------------------------------------------------------- */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Early Bird Banner */}
          <div className="inline-flex items-center gap-2 bg-secondary-100 border border-secondary-300 text-secondary-900 px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-pulse">
            <MdAccessTime className="text-lg" />
            Early Bird Discount ends Jan 15, 2026
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-900 mb-4">
            Secure Your Spot
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Choose the plan that fits your role. All registrations include access to keynote sessions and technical tracks.
          </p>
        </motion.div>
      </div>

      {/* ---------------------------------------------------------------------------
          PRICING CARDS
      --------------------------------------------------------------------------- */}
      <div className="container mx-auto px-6 mb-24">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TIERS.map((tier) => (
            <motion.div 
              key={tier.id}
              variants={cardVar}
              className={`rounded-3xl p-6 border-2 flex flex-col h-full relative ${tier.color}`}
            >
              {/* Icon Header */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl text-primary-600 mb-4 border border-gray-100">
                  {tier.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{tier.title}</h3>
              </div>

              {/* Pricing */}
              <div className="mb-6 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 font-medium">Physical</span>
                  <span className="text-2xl font-extrabold text-primary-700">{tier.priceIn}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 font-medium">Virtual</span>
                  <span className="text-xl font-bold text-gray-400">{tier.priceOut}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <MdCheckCircle className="text-secondary-500 mt-0.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button 
                  onClick={() => handleRegister(tier.title, 'Physical', tier.priceIn)}
                  className="py-2 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors"
                >
                  Attend Live
                </button>
                <button 
                  onClick={() => handleRegister(tier.title, 'Virtual', tier.priceOut)}
                  className="py-2 rounded-lg border border-primary-200 text-primary-700 text-sm font-semibold hover:bg-primary-50 transition-colors"
                >
                  Virtual
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ---------------------------------------------------------------------------
          HOW TO REGISTER (Visual Steps)
      --------------------------------------------------------------------------- */}
      <section className="bg-white border-t border-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900">Registration Process</h2>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 -translate-y-1/2 rounded-full"></div>

            {[
              { title: "Select Plan", icon: <MdCheckCircle />, desc: "Choose your category above." },
              { title: "Make Payment", icon: <MdCreditCard />, desc: "Pay via Bank Transfer / UPI." },
              { title: "Upload Receipt", icon: <MdCloudUpload />, desc: "Attach proof in the form." },
            ].map((step, i) => (
              <div key={i} className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center md:text-left flex flex-col items-center md:items-start">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center text-2xl mb-4">
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}