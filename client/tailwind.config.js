/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        0.5: "0.125rem", // Adds a 2px padding if 1rem equals 16px
      },
    },
  },
  plugins: [],
};
