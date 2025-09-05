export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4F46E5",
          light: "#6366F1",
          dark: "#3730A3",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "bg-pan": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "bg-pan": "bg-pan 15s ease infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease both",
      },
    },
  },
  plugins: [],
};
