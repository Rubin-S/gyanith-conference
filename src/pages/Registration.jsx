// src/pages/Registration.jsx
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { 
  MdSchool, 
  MdBusiness, 
  MdPublic, 
  MdCheckCircle, 
  MdArrowForward,
  MdGroups,
  MdAccountBalance,
  MdCreditCard,
  MdReceipt
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

// --- DATA (Strictly from Brochure Image 2) ---
const FEES = [
  {
    id: "student",
    title: "Student / Scholar",
    icon: <MdSchool />,
    price: "₹ 200",
    subtitle: "Indian Delegate",
    features: ["Paper Presentation","Certificate"],
    highlight: false
  },
  {
    id: "academia",
    title: "Academia",
    icon: <MdAccountBalance />,
    price: "₹ 400",
    subtitle: "Indian Delegate",
    features: ["Paper Presentation", "Certificate"],
    highlight: true // Giving this a subtle visual pop
  },
  {
    id: "industry",
    title: "Industry",
    icon: <MdBusiness />,
    price: "₹ 800",
    subtitle: "Indian Delegate",
    features: ["Paper Presentation", "Company Representation"],
    highlight: false
  },
  {
    id: "foreign",
    title: "Foreign Delegates",
    icon: <MdPublic />,
    price: "25 USD",
    subtitle: "International",
    features: ["Full Access", "Digital Certificate", "Proceedings"],
    highlight: false
  },
  {
    id: "attendee",
    title: "Attendee",
    icon: <MdGroups />,
    price: "₹ 100 / 10 USD",
    subtitle: "Indian / Foreign",
    features: ["Access to Sessions", "Participation Certificate", "Observer Status", "Knowledge Exchange"],
    highlight: false
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

  const handleRegister = useCallback((category, price) => {
    // Navigate to a form page or payment gateway logic
    console.log(`Registering for ${category} at ${price}`);
    navigate("/contact-us"); // Redirecting to contact for now as per flow
  }, [navigate]);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 selection:bg-yellow-200 selection:text-purple-900">
      
      {/* ---------------------------------------------------------------------------
          HERO SECTION
          Style: Deep Purple & Gold
      --------------------------------------------------------------------------- */}
      <div className="relative pt-32 pb-20 bg-[#3d348b] text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-yellow-500 rounded-full blur-3xl mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 mb-6 border border-yellow-400/30 bg-yellow-400/10 rounded-full">
               <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs">
                 Registration Open
               </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
              Secure Your Spot
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-indigo-100 font-light leading-relaxed">
              Select your participation category below. <br/>
              Registration includes access to all technical tracks and keynote sessions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------
          PRICING CARDS
      --------------------------------------------------------------------------- */}
<div className="container mx-auto px-6 py-24">
  {/* Grid Container */}
  <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16"
    variants={containerVar}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {FEES.map((tier) => (
      <motion.div 
        key={tier.id}
        variants={cardVar}
        className={`relative flex flex-col justify-between rounded-2xl p-6 border transition-all duration-300 group h-full
          ${tier.highlight 
            ? 'bg-white border-purple-200 shadow-xl scale-105 z-10' 
            : 'bg-slate-50 border-slate-100 hover:bg-white hover:shadow-lg hover:border-purple-100'
          }
        `}
      >
        {tier.highlight && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-slate-900 text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md whitespace-nowrap">
            Most Popular
          </div>
        )}

        <div className="flex-grow">
          {/* Header */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors
              ${tier.highlight ? 'bg-purple-100 text-purple-700' : 'bg-white text-slate-400 group-hover:bg-purple-50 group-hover:text-purple-600'}
          `}>
            {tier.icon}
          </div>
          
          <h3 className="text-lg font-bold text-slate-900 mb-1">{tier.title}</h3>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-6">{tier.subtitle}</p>

          {/* Price */}
          <div className="mb-8">
            <span className={`text-2xl font-serif font-bold ${tier.highlight ? 'text-purple-700' : 'text-slate-800'}`}>
              {tier.price}
            </span>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {tier.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-600 leading-snug">
                <MdCheckCircle className={`text-sm flex-shrink-0 mt-0.5 ${tier.highlight ? 'text-yellow-500' : 'text-slate-300 group-hover:text-purple-400'}`} />
                {feat}
              </li>
            ))}
          </ul>
        </div>

      </motion.div>
    ))}
  </motion.div>

  {/* Centered Footer Action */}
  <div className="flex flex-col items-center justify-center space-y-4">
    <a 
      href="https://forms.gle/5svVUi6pBWMhNDjN9" 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:bg-purple-700 transition-all transform hover:-translate-y-1 flex items-center gap-3"
    >
      Register here <MdArrowForward className="text-xl" />
    </a>
  </div>
</div>

      {/* ---------------------------------------------------------------------------
          PROCESS STEPS
      --------------------------------------------------------------------------- */}
      <section className="bg-slate-50 border-t border-slate-200 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Registration Process</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-10"></div>

             {[
                { title: "Choose Category", icon: <MdCheckCircle />, desc: "Identify your participation type from the options above." },
                { title: "Complete Payment", icon: <MdCreditCard />, desc: "Proceed with the payment via the secure gateway." },
                { title: "Receive Confirmation", icon: <MdReceipt />, desc: "Get your registration receipt and conference kit details." },
             ].map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-sm relative group hover:-translate-y-2 transition-transform duration-300"
               >
                 <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-3xl text-slate-400 mb-6 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors border-4 border-white shadow-lg">
                    {step.icon}
                 </div>
                 <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                 <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
