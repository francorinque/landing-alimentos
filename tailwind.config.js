/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e7e7e7",
        secondary: "#121111",
      },
      spacing: {
        header: "78px",
      },
      gridTemplateColumns: {
        "solutions-grid": "repeat(auto-fit,minmax(250px,450px))",
        "gallery-grid": "repeat(auto-fit,minmax(250px,450px))",
      },
    },
  },
  plugins: [],
};

// 14a51e
