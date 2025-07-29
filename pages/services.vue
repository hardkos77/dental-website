<template>
  <div class="services-page">
    <!-- En-tête identique à Contact -->
    <div class="header-section text-center py-20">
      <h1 class="text-4xl font-bold mb-6">Nos Services Dentaires</h1>
    </div>

    <!-- Contenu principal avec fond bleu clair -->
    <div class="services-section">
      <div class="services-container grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16">
        <div
            v-for="(service, index) in services"
            :key="index"
            class="service-card p-6 rounded-xl shadow-md bg-white border border-red-100"
        >
          <h2 class="text-2xl font-semibold text-[#F46767] mb-3">{{ service.title }}</h2>
          <p class="text-gray-700 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesPage",
  data() {
    return {
      services: [
        {
          title: "Radiologie dentaire 3D",
          description: "Grâce à la radiographie Vatech tridimensionnelle et panoramique, nous assurons un diagnostic précis et rapide pour tous vos traitements dentaires."
        },
        {
          title: "Empreinte numérique Medit",
          description: "Fini les empreintes classiques inconfortables : notre scanner optique Medit propose une empreinte numérique rapide, précise et sans contact."
        },
        {
          title: "Implantologie avancée",
          description: "Remplacez vos dents manquantes grâce à des implants dentaires stables, discrets et réalisés selon les techniques les plus modernes."
        },
        {
          title: "Blanchiment dentaire",
          description: "Retrouvez un sourire éclatant avec notre protocole d'éclaircissement sûr et efficace, réalisé au cabinet sous supervision."
        },
        {
          title: "Prothèse et facettes dentaires",
          description: "Nous restaurons l'esthétique de votre sourire avec des facettes fines et naturelles, ou des prothèses sur mesure adaptées à votre besoin."
        },
        {
          title: "Soins dentaires complets",
          description: "Traitement des caries, détartrage, soins parodontaux, prothèses et implants : nous prenons soin de toutes les pathologies bucco-dentaires."
        }
      ]
    };
  }
};
</script>

<style scoped>
.services-page {
  width: 100%;
}

.header-section {
  background-color: #f8f8f8;
  margin-top: 80px;
}

.services-section {
  width: 100%;
  background-color: #87CEEB;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(244, 103, 103, 0.15);
}
</style>
