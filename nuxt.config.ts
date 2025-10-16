import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({

  devtools: { enabled: true },

  plugins: [
    "~/plugins/gsap.client.js"
  ],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Disallow: '/admin',
      Allow: '/',
      Sitemap: 'https://www.dentiste-ortega.fr/sitemap.xml'
    }],
  ],

  runtimeConfig: {
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,

    public: {
      recaptchaSiteKey: process.env.SITE_KEY,

      maintenanceEnabled:
          process.env.NUXT_PUBLIC_MAINTENANCE_ENABLED === 'true' ||
          process.env.NUXT_PUBLIC_MAINTENANCE_ENABLED === '1' ||
          false,
      maintenanceUntil: process.env.NUXT_PUBLIC_MAINTENANCE_UNTIL || '',
      maintenanceContact: process.env.NUXT_PUBLIC_MAINTENANCE_CONTACT || '',
      maintenanceBypassToken: process.env.NUXT_PUBLIC_MAINTENANCE_BYPASS_TOKEN || ''
    }
  },

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
      ],
      script: [
        {
          src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
          defer: true
        }
      ]
    },
  },

  ssr: true,
  nitro: {
    preset: "static",
    prerender: {
      failOnError: false
    }
  },

  routeRules: {
    '/maintenance': { prerender: true }
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

  compatibilityDate: '2025-06-03',

});