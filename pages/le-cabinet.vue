<template>
  <div class="cabinet-page">
    <!-- Header identique -->
    <div class="header-section text-center py-20">
      <h1 class="text-4xl font-bold mb-6">Le Cabinet</h1>
    </div>

    <!-- Bloc Dr Ortega -->
    <div class="dr-section px-6 py-16 md:flex md:items-center md:justify-center bg-white">
      <!-- <img src="/images/dr-ortega.jpg" alt="Dr Maxime Ortega" class="dr-image mb-6 md:mb-0 md:mr-8 w-full md:w-1/2 rounded-lg shadow-lg" /> -->
      <div class="dr-text md:w-1/2">
        <h2 class="text-3xl font-semibold text-[#F46767] mb-4">Dr Maxime Ortega</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Diplômé de la faculté dentaire de Nancy, le Dr Maxime Ortega vous accueille avec professionnalisme et bienveillance. Grâce à ses compétences pluridisciplinaires, il propose une prise en charge complète et personnalisée, alliant soins modernes, confort et écoute attentive pour chaque patient.
        </p>
      </div>
    </div>

    <!-- Organigramme du cabinet -->
    <div class="staff-section relative py-20 bg-[#87CEEB] overflow-hidden">
      <svg class="absolute w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#F46767" stroke-width="2" stroke-dasharray="5,5"/>
      </svg>

      <div class="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        <!-- Justine -->
        <div class="staff-card text-center p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition opacity-0">
          <!-- <img src="/images/justine.jpg" alt="Justine" class="mx-auto w-40 h-40 rounded-full object-cover mb-4" /> -->
          <h3 class="text-xl font-bold text-[#F46767]">Justine</h3>
          <p class="text-gray-600 mt-2">
            Assistante dentaire qualifiée, Justine vous accompagne avec empathie et rigueur tout au long de vos soins.
          </p>
        </div>

        <!-- Nathalie -->
        <div class="staff-card text-center p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition opacity-0">
          <!-- <img src="/images/nathalie.jpg" alt="Nathalie" class="mx-auto w-40 h-40 rounded-full object-cover mb-4" /> -->
          <h3 class="text-xl font-bold text-[#F46767]">Nathalie</h3>
          <p class="text-gray-600 mt-2">
            Responsable de l’accueil, Nathalie saura vous guider et organiser vos rendez-vous avec efficacité et sourire.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Bloc Conseil du dentiste -->
  <section class="dentist-advice-section bg-white relative z-10 pt-8">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 px-6">

      <!-- Texte -->
      <div class="max-w-xl">
        <h2 class="text-3xl font-bold text-[#78FECF] mb-6">Le conseil du dentiste</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Le brossage des dents est un geste quotidien simple, mais essentiel. Réalisé deux fois par jour pendant deux minutes avec une brosse souple et un dentifrice fluoré, il permet de prévenir l’apparition de caries, de préserver les gencives, et de maintenir une haleine fraîche. N’oubliez pas les mouvements doux et circulaires !
        </p>
      </div>

      <!-- Animation Lottie -->
      <div class="w-full md:w-auto flex justify-center">
        <LottieDentifrice class="w-[260px] h-[260px] max-w-full" />
      </div>
    </div>
  </section>

</template>

<script setup>
import { gsap } from 'gsap';
import LottieDentifrice from '@/components/LottieDentifrice.vue';

onMounted(() => {
  gsap.from('.dr-text', { opacity: 0, x: 100, duration: 1 });
  gsap.to('.staff-card', {
    opacity: 1,
    y: 0,
    stagger: 0.5,
    duration: 1,
    ease: 'power2.out',
  });
});
</script>

<style scoped>
.cabinet-page {
  width: 100%;
}

.header-section {
  background-color: #f8f8f8;
  margin-top: 80px;
}

.dr-section {
  background: white;
}

.staff-section {
  position: relative;
  background: #87CEEB;
}

.staff-card {
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}
</style>
