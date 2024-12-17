/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: "var(--glass)",
        chawaRong: "var(--shadow)",
        borderRong: "var(--border)",

        bglight: "rgb(var(--background_light))",
        primarylight: "rgb(var(--primary_light))",
        textlight: "rgb(var(--text_light))",

        bgdark: "rgb(var(--background_dark))",
        primarydark: "rgb(var(--primary_dark))",
        textdark: "rgb(var(--text_dark))",
      },
      boxShadow: {
        chawa: "3px 3px 11.2px var(--shadow)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

