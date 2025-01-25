<template>
  <full-screen-video></full-screen-video>
  <context></context>
  <values></values>
  <mosaic></mosaic>
</template>

<script>
import FullScreenVideo from "~/components/fullScreenVideo.vue";
import Context from "~/components/context.vue";
import Values from "~/components/values.vue";
import Mosaic from "~/components/mosaic.vue";

export default {
  name: "IndexPage",
  components: {
    FullScreenVideo,
    Context,
    Values,
    Mosaic
  },
};
</script>

<style scoped lang="scss">
/* Ajoutez vos styles ici */
</style>
