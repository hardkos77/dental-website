<template>
  <div class="container mx-auto px-4 py-12 relative">
    <!-- Canvas pour les flocons -->
    <canvas ref="canvas" class="absolute top-0 left-0 w-full h-full z-0"></canvas>

    <!-- Contenu principal -->
    <div class="relative z-10">
      <!-- Titre à gauche -->
      <div class="mb-12">
        <h2
            ref="title"
            class="text-4xl font-bold mb-4 text-left bg-gradient-to-r from-green to-blue text-transparent bg-clip-text"
        >
          Les valeurs du cabinet
        </h2>
        <div class="h-1 w-16 bg-green"></div> <!-- Ligne colorée sous le titre -->
      </div>

      <!-- Contenu en deux colonnes -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Colonne 1 : Paragraphes avec fond coloré -->
        <div>
          <div
              v-for="(value, index) in values"
              :key="index"
              ref="paragraphs"
              class="mb-6 p-6 rounded-lg shadow-lg opacity-0 transform translate-x-[-50px]"
              :style="{ backgroundColor: colors[index % colors.length] }"
          >
            <h3
                ref="titles"
                class="text-2xl font-semibold mb-2"
            >
              {{ value.title }}
            </h3>
            <p class="text-base">
              {{ value.description }}
            </p>
          </div>
        </div>

        <!-- Colonne 2 : Compteurs avec icônes -->
        <div class="flex flex-col items-center justify-center">
          <div
              v-for="(counter, index) in counters"
              :key="index"
              ref="counters"
              class="mb-8 text-center flex flex-col items-center opacity-0 transform translate-y-[50px]"
          >
            <!-- Icône Font Awesome -->
            <div
                class="w-20 h-20 flex items-center justify-center rounded-full mb-4 shadow-lg"
                :style="{ backgroundColor: colors[index % colors.length] }"
            >
              <i :class="counter.icon" class="text-white text-4xl"></i>
            </div>

            <!-- Compteur animé -->
            <span class="text-5xl font-bold" :style="{ color: colors[index % colors.length] }">
              {{ animatedValues[index] }}
            </span>
            <p class="text-gray-600 mt-2 text-base">{{ counter.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "ValeursDuCabinet",
  props: {
    initialCounters: {
      type: Array,
      default: () => [
        { label: "Patients satisfaits", value: 500, icon: "fas fa-smile" },
        { label: "Traitements réalisés", value: 1000, icon: "fas fa-tooth" },
      ],
    },
    values: {
      type: Array,
      default: () => [
        {
          title: "Engagement envers la santé bucco-dentaire",
          description:
              "Nous nous engageons à offrir des soins d'excellence pour préserver votre santé et votre sourire.",
        },
        {
          title: "Technologie et innovation",
          description:
              "Nous utilisons des équipements modernes et des techniques avancées pour garantir un traitement optimal.",
        },
        {
          title: "Bien-être des patients",
          description:
              "Votre confort et votre satisfaction sont notre priorité.",
        },
      ],
    },
  },
  data() {
    return {
      counters: this.initialCounters,
      animatedValues: this.initialCounters.map(() => 0),
      colors: ["#78FECF", "#87CEEB", "#F46767"], // Palette principale
      particles: [],
    };
  },
  methods: {
    animateCounters() {
      this.counters.forEach((counter, index) => {
        const targetValue = counter.value;
        gsap.to(this.animatedValues, {
          [index]: targetValue,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            this.animatedValues[index] = Math.ceil(this.animatedValues[index]);
          },
        });
      });
    },
    triggerAnimations() {
      // Animation du titre principal
      gsap.fromTo(
          this.$refs.title,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Animation des paragraphes
      gsap.fromTo(
          this.$refs.paragraphs,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, stagger: 0.3, duration: 1, ease: "power2.out" }
      );

      // Animation des titres (flottaison)
      gsap.to(this.$refs.titles, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
        stagger: 0.3,
      });

      // Animation des compteurs
      gsap.fromTo(
          this.$refs.counters,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            duration: 1,
            ease: "power2.out",
            onComplete: this.animateCounters,
          }
      );
    },
    createParticles() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      const particles = [];
      const colors = ["#78FECF", "#87CEEB", "#F46767"];
      const numParticles = 50;

      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      // Génère les particules
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 1 + 0.5,
        });
      }

      const drawParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
        });
      };

      const updateParticles = () => {
        particles.forEach((particle) => {
          particle.y += particle.speed;

          if (particle.y > canvas.height) {
            particle.y = -particle.radius;
          }
        });
      };

      const animate = () => {
        drawParticles();
        updateParticles();
        requestAnimationFrame(animate);
      };

      animate();
    },
  },
  mounted() {
    this.triggerAnimations();
    this.createParticles();
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  position: relative;
  overflow: hidden;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
