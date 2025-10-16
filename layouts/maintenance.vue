<template>
  <!-- Layout minimal; la page gère son propre fond -->
  <div class="layout-maintenance">
    <slot />
  </div>
</template>

<style scoped>
.layout-maintenance{min-height:100vh}
</style>
