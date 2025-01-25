import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    "~/plugins/lottie-vue-player.client.js",
    "~/plugins/gsap.client.js"
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Disallow: '/admin',
      Allow: '/',
      Sitemap: 'https://www.votresitededentiste.com/sitemap.xml'
    }]
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Maxime Ortega | Dentiste France et Suisse",
      htmlAttrs: { lang: "fr" },
      meta: [
          { name: "Cabinet dentaire Pontarlier - Dentiste Suisse", content: "Dentiste" }
      ],
      link: [
          { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
          { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css' }
      ]
    },
  },
  css: [
      "~/assets/css/tailwind.css",
      "~/assets/main.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/_variables.scss"; @import "~/assets/_mixins.scss";'
        }
      }
    }
  },
  ssr: true,
});
