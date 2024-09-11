/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        primary: "#B33165",
        secondary: "#FE8F01",
      },
      borderColor: {
        primary: "#B33165",
      },
      textColor: {
        primary: "#B33165",
        "text-black": "#18191F",
        secondary: "#FE8F01",
      },
    },
  },
  plugins: [],
};
