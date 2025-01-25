<template>
  <section class="relative min-h-screen flex overflow-hidden">
    <div class="w-1/3 flex items-center justify-center">

    </div>

    <!-- Text container -->
    <div class="text-container ml-0 lg:w-2/3 w-full z-10 lg:absolute lg:right-0 lg:py-20 lg:px-8">

    <h1 class="text-4xl font-bold mb-4">Dr Maxime Ortega - Chirurgien dentiste</h1>
      <p class="text-2xl italic mb-6">"Souriez à la vie avec confiance et laissez-nous prendre soin de votre sourire."</p>
      <div class="h-1 customline w-24 mb-6"></div>
      <div>
        <FancyButton href="/contact" text="Je prends RDV"/>
      </div>
    </div>

    <!-- Triangle background -->
    <div class="triangle top-right z-0 lg:absolute lg:w-1/2 lg:h-screen lg:right-0 lg:top-0"></div>
  </section>
</template>

<script>
import FancyButton from '~/components/fancyButton.vue'
export default {
  name: 'ContentSection',
  components: {
    FancyButton
  },
};
</script>

<style scoped lang="scss">
.relative {
  min-height: auto;
}

/************************
****** IMAGE SECTION  ***
*************************/

/************************
****** TRIANGLE ***
*************************/

.triangle {
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  height: 50vh;
  background-color: var(--blue);
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  z-index: 0;
}

/************************
****** TEXT SECTION ***
*************************/

.customline {
  background-color: #78FECF;
}

.text-container {
  position: relative;
  z-index: 100;
}

.container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 1.9rem;
}
</style>