/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        navAnimation: {
          "0%": { top: "170px", opacity: "0" },
          "100%": { top: "70px", opacity: "1" },
        },
      },
      animation: {
        navAnimation: "navAnimation 0.5s ease-in-out",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
