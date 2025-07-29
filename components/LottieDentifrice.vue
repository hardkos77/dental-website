<template>
  <ClientOnly>
    <lottie-player
        autoplay
        loop
        src="/animations/dentifrice.json"
        style="width: 300px; height: 300px"
    />
  </ClientOnly>
</template>

<script setup>
import '@lottiefiles/vue-lottie-player';
</script>
