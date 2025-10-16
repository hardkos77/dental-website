<template>
  <div class="relative">
    <full-screen-video />
    <context />
    <values />
    <mosaic />
    <services />
  </div>
</template>

<script setup>
import FullScreenVideo from "~/components/fullScreenVideo.vue";
import Context from "~/components/context.vue";
import Values from "~/components/values.vue";
import Mosaic from "~/components/mosaic.vue";
import Services from "~/components/services.vue";

useHead({
  title: 'Dentiste à Pontarlier – Dr Maxime Ortega',
  meta: [
    { name: 'description', content: 'Cabinet dentaire moderne à Pontarlier, proche de la Suisse. Soins pour toute la famille.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Dentiste à Pontarlier – Dr Maxime Ortega' },
    { property: 'og:description', content: 'Cabinet moderne, soins dentaires pour tous, proche Suisse.' },
    { property: 'og:url', content: 'https://dentiste-ortega.fr/' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dentiste-ortega.fr/' },
    { rel: 'alternate', hreflang: 'fr', href: 'https://dentiste-ortega.fr/' },
    { rel: 'alternate', hreflang: 'fr-ch', href: 'https://dentiste-ortega.fr/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Dr Maxime Ortega",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "9 rue de Besançon",
          "addressLocality": "Doubs",
          "postalCode": "25300",
          "addressCountry": "FR"
        },
        "telephone": "+33-381-394-323",
        "url": "https://dentiste-ortega.fr"
      })
    }
  ]
})
</script>

<style scoped>
/* Aucune animation, fichier épuré */
</style>
