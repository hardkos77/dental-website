<template>
  <div class="technologies-page">
    <div class="header-section text-center py-20">
      <h1 class="text-4xl font-bold mb-6">Technologies & Innovation</h1>
    </div>

    <div class="w-full bg-[#87CEEB] py-16 px-4">
      <div class="max-w-[1200px] mx-auto grid gap-16">
        <div
            v-for="(tech, index) in technologies"
            :key="index"
            class="grid md:grid-cols-2 gap-8 items-center"
            :class="index % 2 === 1 ? 'md:flex-row-reverse' : ''"
        >
          <div class="relative group overflow-hidden rounded-xl shadow-lg">
            <img
                :src="tech.image"
                :alt="tech.title"
                class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
                class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center p-6"
            >
              <p class="text-white text-lg">{{ tech.overlay }}</p>
            </div>
          </div>

          <div class="text-white px-2">
            <h2 class="text-3xl font-semibold text-[#F46767] mb-4">{{ tech.title }}</h2>
            <p class="text-base leading-relaxed">{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const technologies = ref([
  {
    title: "Radiographie 3D Vatech",
    image: "/images/tech-vatech.jpg",
    overlay: "Diagnostic haute précision en 3D",
    description: "Notre équipement de radiographie Vatech permet une imagerie tridimensionnelle et panoramique ultra-précise, pour une planification de traitement optimale en toute sécurité."
  },
  {
    title: "Empreinte optique Medit",
    image: "/images/tech-medit.jpg",
    overlay: "Confort & rapidité",
    description: "Le scanner intra-oral Medit remplace les empreintes traditionnelles : sans contact, rapide, confortable, il fournit des fichiers numériques d’une grande fidélité pour prothèses ou aligneurs."
  },
  {
    title: "Blanchiment encadré au fauteuil",
    image: "/images/tech-blanchiment.jpg",
    overlay: "Un sourire éclatant",
    description: "Nous utilisons un système de blanchiment professionnel en cabinet, contrôlé pour un résultat lumineux tout en préservant l’émail et la sensibilité dentaire."
  },
  {
    title: "Implantologie guidée",
    image: "/images/tech-implant.jpg",
    overlay: "Implants sur-mesure",
    description: "Grâce à la planification numérique et à l’empreinte optique, nous réalisons une pose d’implants de manière mini-invasive, avec plus de précision, moins de douleurs, et une meilleure cicatrisation."
  }
])

useHead({
  title: 'Technologies dentaires innovantes | Dr Ortega',
  meta: [
    { name: 'description', content: 'Découvrez les technologies de pointe utilisées dans notre cabinet dentaire : radiographie 3D, scanner Medit, implantologie guidée.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Technologies dentaires innovantes | Dr Ortega' },
    { property: 'og:description', content: 'Technologie dentaire moderne à Pontarlier. Équipement Vatech, Medit, implantologie assistée.' },
    { property: 'og:url', content: 'https://dentiste-ortega.fr/technologies' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dentiste-ortega.fr/technologies' }
  ]
})
</script>

<style scoped>
.technologies-page {
  width: 100%;
}

.header-section {
  background-color: #f8f8f8;
  margin-top: 80px;
}

img {
  border-radius: 12px;
  object-fit: cover;
}
</style>
