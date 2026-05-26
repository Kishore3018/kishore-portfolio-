/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0066FF",
        "primary-dark": "#0052CC",
        accent: "#00D9FF",
        "accent-dark": "#00B8D4",
        dark: "#0A0E27",
        "dark-secondary": "#1A1F3A",
        "dark-tertiary": "#252D47",
        surface: "#1F2937",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#E5E7EB",
            a: {
              color: "#0066FF",
              "&:hover": {
                color: "#00D9FF",
              },
            },
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(0, 102, 255, 0.3)",
        "glow-accent": "0 0 20px rgba(0, 217, 255, 0.3)",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(10px)",
      },
    },
  },
  plugins: [],
};
