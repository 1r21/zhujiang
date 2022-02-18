module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svelte}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
