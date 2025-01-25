<template>
  <header class="fixed w-full top-0 left-0" :class="{ 'bg-scrolled': isScrolled, 'bg-transparent': !isScrolled }" style="z-index: 1000;">
    <nav class="container mx-auto flex items-center justify-center py-3 gap-x-8">
      <!-- Lien "Mes Services" -->
      <NuxtLink class="nav-link" to="/MyServices">Mes Services</NuxtLink>

      <span class="border-l-2 h-6 border-black"></span>

      <!-- Lien "Technologies" -->
      <NuxtLink class="nav-link" to="/Technologies">Technologies</NuxtLink>

      <!-- Logo de l'entreprise avec effet au survol -->
      <NuxtLink to="/" class="z-10 mx-12 logo-hover">
        <img src="/images/logo/logo-max.svg" alt="Logo de l'entreprise" class="h-20 md:h-24">
      </NuxtLink>

      <!-- Lien "À propos" -->
      <NuxtLink class="nav-link" to="/About">À propos</NuxtLink>

      <span class="border-l-2 h-6 border-black"></span>

      <!-- Lien "Contact & Accès" -->
      <NuxtLink class="nav-link" to="/Contact">Contact & Accès</NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20; // Vous pouvez ajuster le seuil ici
    },
  },
};
</script>

<style lang="scss">
.bg-transparent {
  background-color: transparent;
}

.bg-scrolled {
  transition: background-color 0.3s ease;
  background-color: $grey;
}

.nav-link, .border-color {
  transition: color 0.3s, border-color 0.3s;
}

.bg-transparent .nav-link,
.bg-transparent .border-l-2 {
  color: white;
  border-color: white;
}

.bg-scrolled .nav-link,
.bg-scrolled .border-l-2 {
  color: $black;
  border-color: $black;
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: #4a5568; /* text-gray-600 */
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #1a202c; /* text-gray-900 */
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -3px;
  left: 50%;
  background-color: #1F1F1F;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}

.logo-hover > img {
  transition: transform 0.5s ease;
}

.logo-hover:hover > img {
  transform: scale(1.1);
}
</style>

