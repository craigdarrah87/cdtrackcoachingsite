/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ff2a2a",
          white: "#ffffff",
          black: "#0b0b0b"
        }
      },
      fontFamily: {
        display: ["var(--font-zing-rust)"],
        sans: ["var(--font-zing-sans)", "system-ui", "ui-sans-serif", "Helvetica", "Arial"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(255,42,42,0.35)"
      }
    },
  },
  plugins: [],
};
