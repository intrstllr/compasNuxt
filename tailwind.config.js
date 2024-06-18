/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#0584FE",
      secondary: "#1253A2",
      black: "#09090b",
      white: "#fafafa",
      gray: "#71717a",
    },
  },
  plugins: [],
  css: ["~/assets/css/tailwind.css"],
};
