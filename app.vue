<template>
  <div>
    <Body>
    <MyHeader v-if="!hideChrome" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <MyFooter v-if="!hideChrome" />
    </Body>
  </div>
</template>

<script>
import MyHeader from "~/layouts/header.vue";
import MyFooter from "~/layouts/footer.vue";
import { useHead } from '@unhead/vue';
import { useRoute, watchEffect, computed } from '#imports';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  },
  setup() {
    const route = useRoute()
    const hideChrome = computed(() => route.meta?.hideChrome === true)

    const toggleRecaptchaBadge = (path) => {
      const badge = document.querySelector('.grecaptcha-badge');
      if (badge) {
        badge.style.display = path === '/contact' ? 'block' : 'none';
      }
    };

    if (process.client) {
      watchEffect(() => {
        toggleRecaptchaBadge(route.path)
      });

      useHead({
        script: [
          {
            hid: 'gtag-src',
            src: 'https://www.googletagmanager.com/gtag/js?id=G-FPPRREL7GB',
            async: true
          },
          {
            hid: 'gtag-init',
            children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FPPRREL7GB');
      `
          },
          {
            id: 'cookieyes',
            src: 'https://cdn-cookieyes.com/client_data/3e9e359d7cebc49d89efe44d/script.js',
            type: 'text/javascript',
            async: true
          }
        ]
      });
    }
    return { hideChrome }
  }
};
</script>

<style lang="scss">
</style>
