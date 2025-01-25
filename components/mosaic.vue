<template>
  <div class="mosaic-container mx-auto py-12 px-4">
    <div class="grid grid-cols-4 gap-4">
      <div
          v-for="(image, index) in images"
          :key="index"
          class="photo-item overflow-hidden rounded-lg shadow-lg"
          ref="photos"
      >
        <img
            :src="image"
            alt="Photo mosaïque"
            class="w-full h-full object-cover transform scale-100"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Mosaic",
  data() {
    return {
      images: [
        "/images/dentiste.jpg",
        "/images/dentiste.jpg",
        "/images/dentiste.jpg",
        "/images/dentiste.jpg",
        "/images/dentiste.jpg",
        "/images/dentiste.jpg",
        "/images/dentiste.jpg",
        "/images/dentiste.jpg",
      ], // Les chemins des 8 images
    };
  },
  methods: {
    animatePhotos() {
      gsap.fromTo(
          this.$refs.photos,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
          }
      );
    },
  },
  mounted() {
    this.animatePhotos();
  },
};
</script>

<style scoped lang="scss">
.mosaic-container {
  max-width: 1200px;
}

.photo-item {
  height: 200px; /* Hauteur de chaque photo */
  position: relative; /* Nécessaire pour les animations */
  overflow: hidden; /* Coupe tout dépassement de l'image */
  background-color: transparent; /* Supprime tout arrière-plan blanc */
}

img {
  width: 100%; /* Assure que l'image prend toute la largeur */
  height: 100%; /* Assure que l'image prend toute la hauteur */
  object-fit: cover; /* Garde le ratio et remplit le conteneur */
  transition: transform 0.3s ease-in-out; /* Ajoute l'effet de zoom */
}

img:hover {
  transform: scale(1.1); /* Zoom léger au survol */
}

</style>
