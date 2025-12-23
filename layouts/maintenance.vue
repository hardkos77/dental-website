<template>
  <div class="layout-maintenance">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
:global(body){ margin:0; }
.layout-maintenance{
  min-height:100vh;
  width:100%;
}
</style>