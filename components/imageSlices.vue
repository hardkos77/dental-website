<template>
  <div class="image-slices">
    <div
        v-for="index in slices"
        :key="index"
        class="image-slice"
        :style="sliceStyle(index)"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
      required: true
    },
    slices: {
      type: Number,
      default: 4
    }
  },
  methods: {
    sliceStyle(index) {
      const position = (index - 1) * (100 / this.slices);
      return {
        'background-image': `url(${this.imagePath})`,
        'background-position': `${-position}% 0`,
        'background-size': `${this.slices * 100}% 100%`
      };
    }
  }
};
</script>

<style scoped>
.image-slices {
  display: flex;
  height: 300px;
  width: 100%;
}

.image-slice {
  flex-grow: 1;
  background-repeat: no-repeat;
  margin: 0 2px;
}

.image-slice:first-child {
  margin-left: 0;
}

.image-slice:last-child {
  margin-right: 0;
}
</style>
