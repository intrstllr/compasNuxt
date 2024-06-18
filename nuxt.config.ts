// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  image: {
    dir: "assets/img",
  },
  css: [
    './assets/css/tailwind..css',
  ],
})