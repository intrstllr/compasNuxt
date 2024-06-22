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
            gray: "#8F8F8F",
            red: "#FF0000",
            darkRed: "#8B0000",
            green: "#00ff00",
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }

            tablet: "768px",
            // => @media (min-width: 640px) { ... }

            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
    },
    plugins: [],
    css: ["~/assets/css/tailwind.css"],
};
