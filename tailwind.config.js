/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary:"#FFE1E7",
        secondary: "#BAC2C7",
        tertiary: "#41516C",
        placeholder: "#6D7080",
        disabled: "#6D7080",
        grey: "#A1B0CC",
        error: "#E94949",
        "semi-black": "#0F131C",
        dark: "#030209",
      },
    },
  },
  plugins: [],
};
