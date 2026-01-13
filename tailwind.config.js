/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

module.exports = {
  darkMode: 'class', // We will default to light mode, but keep this for future proofing
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --------------------
      // CORPORATE COLOR PALETTE (Purple & Yellow)
      // --------------------
      colors: {
        // --- PRIMARY: Deep Purple (Conference Identity) ---
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6", // Base Purple
          600: "#7c3aed",
          700: "#6d28d9", // Deep Purple (Header BG)
          800: "#5b21b6",
          900: "#4c1d95", // Darkest Purple
          950: "#2e1065",
        },

        // --- SECONDARY: Mustard/Golden Yellow (Tracks & Highlights) ---
        secondary: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308", // Base Gold (Track Bubbles)
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },

        // --- NEUTRALS: Clean Grays for Readability ---
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },

        // --- SEMANTIC TOKENS (Light Mode Default) ---
        light: {
          bg: "#FFFFFF",        // Main background
          card: "#FFFFFF",      // Card background
          text: "#111827",      // Main text (Almost Black)
          muted: "#6B7280",     // Muted text (Gray)
          border: "#E5E7EB",    // Borders
          divider: "#F3F4F6",   // Dividers
          link: "#6d28d9",      // Links (Primary Purple)
        },

        // --- SEMANTIC TOKENS (Dark Mode Support) ---
        dark: {
          bg: "#111827",
          card: "#1F2937",
          text: "#F9FAFB",
          muted: "#9CA3AF",
          border: "#374151",
          divider: "#1F2937",
          link: "#a78bfa",
        },
      },

      // --------------------
      // TYPOGRAPHY
      // --------------------
      fontFamily: {
        // Use standard sans for body, specific font for headings if imported
        body: ["Inter", "system-ui", "sans-serif"], 
        heading: ["Montserrat", "Inter", "sans-serif"], 
      },

      // --------------------
      // BACKGROUND IMAGES & GRADIENTS
      // --------------------
      backgroundImage: {
        // Subtle corporate gradients, removing the neon ones
        "gradient-corporate": "linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)", // Purple gradient
        "gradient-gold": "linear-gradient(135deg, #facc15 0%, #eab308 100%)", // Gold gradient
        "radial-purple": "radial-gradient(circle at center, #8b5cf6 0%, #4c1d95 100%)",
      },

      // --------------------
      // SHADOWS (Clean Corporate Style)
      // --------------------
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        header: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      },

      // --------------------
      // ANIMATIONS (Subtle)
      // --------------------
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },

      // --------------------
      // BORDERS
      // --------------------
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem', // Good for the "Tracks" bubbles
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        ':root': {
          '--font-body': '"Inter", sans-serif',
          '--font-heading': '"Montserrat", sans-serif',
        },
      });

      addComponents({
        ".container": {
          "@apply max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8": {},
        },
        ".h1": {
          "@apply font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight": {},
        },
        ".h2": {
          "@apply font-heading font-bold text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug": {},
        },
        ".h3": {
          "@apply font-heading font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white leading-snug": {},
        },
        ".body-text": {
          "@apply font-body text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed": {},
        },
        ".btn-primary": {
          "@apply bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors shadow-sm": {},
        },
        ".btn-secondary": {
          "@apply bg-secondary-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-secondary-400 transition-colors shadow-sm": {},
        },
      });
    }),
  ],
};