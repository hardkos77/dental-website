<template>
  <div class="services-container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    <!-- Colonne gauche : Image -->
    <div class="image-container flex justify-center items-center">
      <img
          src="/images/operation.jpg"
          alt="Opération dentaire"
          class="w-full max-w-md rounded-lg"
      />
    </div>

    <!-- Colonne droite : Contenu -->
    <div class="content">
      <h2 class="text-3xl font-bold mb-4 relative">
        Nos Services
      </h2>

      <p class="text-gray-600 text-base md:text-lg mb-6">
        Découvrez une gamme complète de services dentaires, adaptés à vos besoins et garantissant votre confort et votre bien-être.
        Nous utilisons les dernières technologies pour offrir des soins d'excellence.
      </p>

      <button
          @click="goToServices"
          class="bg-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-dark transition duration-300"
      >
        Découvrir nos services
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  methods: {
    goToServices() {
      this.$router.push({ name: "myServices" });
    },
  },
};
</script>

<style scoped lang="scss">
.services-container {
  max-width: 1200px;
  margin-bottom: 0;
  padding-bottom: 0;
}

h2 {
  position: relative;
  display: inline-block;
  color: #333;
}

.underline-green {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 50%;
  height: 5px;
  background-color: #78fecf;
  border-radius: 3px;
}

button {
  background-color: #78fecf;
}

button:hover {
  background-color: #66e0b8;
}

.bg-green {
  background-color: #78fecf;
}

.bg-green-dark {
  background-color: #66e0b8;
}
@media (max-width: 767px) {
  .content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content button {
    margin-top: 1rem;
  }
}

</style>
