/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      DancingScript: "DancingScript",
    },
    extend: {
      keyframes: {
        clockwise: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        anticlockwise: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        clockwise: "clockwise 10s linear infinite",
        anticlockwise: "anticlockwise 10s linear infinite",
      },
    },
  },
  plugins: [],
};
