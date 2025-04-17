/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C4EA2", // Royal Blue
        accent: "#00AEEF", // Sky Blue
        background: "#FAFAFA", // Light White
        deepBlue: "#1A1044", // Deep Blue
        oceanBlue: "#0073C1", // Ocean Blue
        // New modern color palette
        midnight: "#121063",
        purple: "#6366F1",
        lavender: "#A5B4FC",
        teal: "#0D9488",
        mint: "#5EEAD4",
        coral: "#F43F5E",
        amber: "#F59E0B",
        slate: "#1E293B",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: "0 4px 12px rgba(26, 16, 68, 0.15)",
        // New shadow styles
        "soft-xl": "0 20px 30px -10px rgba(0, 0, 0, 0.1)",
        "inner-lg": "inset 0 2px 10px 0 rgba(0, 0, 0, 0.05)",
        glow: "0 0 15px rgba(0, 174, 239, 0.5)",
        "3d": "0 10px 20px -5px rgba(0, 0, 0, 0.1), 0 2px 10px -3px rgba(0, 0, 0, 0.05)",
        "card-glow": "0 0 20px 5px rgba(0, 174, 239, 0.3)",
        "hero-button": "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-shine":
          "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)",
      },
      borderRadius: {
        blob: "60% 40% 30% 70% / 60% 30% 70% 40%",
        "blob-2": "40% 60% 70% 30% / 40% 70% 30% 60%",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        shine: {
          "0%": { backgroundPosition: "-100%" },
          "100%": { backgroundPosition: "200%" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(0.95)" },
        },
      },
      animation: {
        wave: "wave 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        shine: "shine 3s linear infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
      // Glass morphism
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      // 3D Transform utility classes
      transitionProperty: {
        transform: "transform",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      perspective: {
        800: "800px",
        1000: "1000px",
        1200: "1200px",
      },
      rotateY: {
        8: "8deg",
        15: "15deg",
      },
      transformOrigin: {
        center: "center",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
