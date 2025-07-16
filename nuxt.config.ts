// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: "Book Store",
      meta: [{ name: "description", content: "An amazing online book store" }],
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:8080/v1/api",
    },
  },
  googleFonts: {
    families: {
      "Unica One": true,
      Syne: [400, 800],
    },
    display: "swap",
    inject: true,
    preconnect: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
  ],
});
