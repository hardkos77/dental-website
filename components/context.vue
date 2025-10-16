<template>
  <section id="hero-title" class="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
    <!-- Spacer desktop -->
    <div class="hidden lg:flex lg:w-1/3 items-center justify-center"></div>

    <!-- Texte -->
    <div
        ref="heroTarget"
        class="text-container flex flex-col items-center justify-center text-center
             w-full px-4 py-12 min-h-screen
             lg:absolute lg:right-0 lg:items-start lg:justify-start lg:text-left lg:w-2/3 lg:py-20 lg:px-8 lg:min-h-0"
    >
      <h1 class="text-4xl font-bold mb-4">Dr Maxime Ortega - Chirurgien dentiste</h1>
      <p class="text-2xl italic mb-6">"Souriez à la vie avec confiance et laissez-nous prendre soin de votre sourire."</p>
      <div class="h-1 customline w-24 mb-4 lg:mb-6"></div>
      <div>
        <FancyButton href="/contact" text="Je prends RDV" />
      </div>
    </div>
    <!-- Triangle -->
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