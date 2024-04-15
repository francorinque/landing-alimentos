/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e4effb",
        secondary: "#14a51e",
      },
      spacing: {
        header: "78px",
      },
      backgroundImage: (theme) => ({
        "custom-gradient": "linear-gradient(45deg, #4db82f, #14a51e)", // Define tu gradiente personalizado aquí
      }),
      gridTemplateColumns: {
        "solutions-grid": "repeat(auto-fit,minmax(250px,450px))",
        "gallery-grid": "repeat(auto-fit,minmax(250px,450px))",
      },
    },
  },
  plugins: [],
};

// 14a51e
