/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7f13ec",
        "background-light": "#f7f6f8",
        "background-dark": "#191022",
        "card-dark": "#2C1E4A",
        "text-primary-dark": "#F5F5F5",
        "text-secondary-dark": "#c992c9",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
