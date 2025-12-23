<template>
  <div class="page-container">
    <div class="header-section">
      <div class="green-bar"></div>
      <h2 class="title">Un confort technologique</h2>
    </div>

    <!-- Section de mosaïque -->
    <div class="mosaic-container mx-auto py-12 px-4">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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

    <!-- Section avec trois colonnes -->
    <div class="info-section bg-gray-100 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        <!-- Colonne 1 -->
        <div class="column">
          <h3 class="subtitle">Technologie de pointe</h3>
          <p class="text">
            Nos équipements modernes garantissent des soins précis et de haute qualité pour le confort des patients.
          </p>
        </div>

        <!-- Colonne 2 -->
        <div class="column">
          <h3 class="subtitle">Un soin personnalisé</h3>
          <p class="text">
            Chaque traitement est adapté aux besoins uniques de nos patients, avec une attention particulière au détail.
          </p>
        </div>

        <!-- Colonne 3 -->
        <div class="column">
          <h3 class="subtitle">Une expérience agréable</h3>
          <p class="text">
            Nous veillons à offrir un environnement chaleureux et apaisant, avec un accent sur le bien-être.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "MosaicAndInfo",
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
      ],
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
  padding-top: 0;
  max-width: 1200px;
}

.page-container {
  width: 100%;
  overflow: hidden;
}

.header-section {
  text-align: center;
  margin-bottom: 2rem;
}

.green-bar {
  height: 4px;
  width: 40%;
  background-color: #78fecf;
  margin-left: auto;
  margin-right: 0;
  margin-bottom: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.photo-item {
  height: 200px;
  position: relative;
  overflow: hidden;
  background-color: transparent;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.1);
}

.info-section {
  background-color: #f7f7f7;
  width: 100%;
}

.column {
  text-align: center;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.text {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}
</style>
