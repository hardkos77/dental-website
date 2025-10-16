<template>
  <header class="fixed w-full top-0 left-0" :class="{ 'bg-scrolled': isScrolled, 'bg-transparent': !isScrolled }" style="z-index: 1000;">
    <nav class="container mx-auto items-center justify-center py-3 gap-x-8 hidden sm:flex">
      <NuxtLink class="nav-link" to="/services">Mes Services</NuxtLink>
      <span class="border-l-2 h-6 border-black"></span>
      <NuxtLink class="nav-link" to="/technologies">Technologies</NuxtLink>
      <NuxtLink to="/" class="z-10 mx-12 logo-hover">
        <img src="/images/logo/logo-max.svg" alt="Logo de l'entreprise" class="h-20 md:h-24">
      </NuxtLink>
      <NuxtLink class="nav-link" to="/le-cabinet">Le cabinet</NuxtLink>
      <span class="border-l-2 h-6 border-black"></span>
      <NuxtLink class="nav-link" to="/contact">Contact & Accès</NuxtLink>
    </nav>

    <!-- Burger + Cross -->
    <div class="sm:hidden flex items-center justify-between px-4 py-3">
      <NuxtLink to="/">
        <img src="/images/logo/logo-max.svg" alt="Logo" class="h-16">
      </NuxtLink>
      <button @click="toggleMenu" aria-label="Menu mobile" class="p-0 m-0 bg-transparent flex items-center z-[100] transition-transform duration-300">
        <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
          v-if="isMenuOpen"
          class="sm:hidden fixed inset-0 flex flex-col items-center justify-center space-y-6 bg-white/90 z-40 transition-all duration-300"
      >
        <NuxtLink class="nav-link text-xl text-black" to="/services" @click="closeMenu">Mes Services</NuxtLink>
        <NuxtLink class="nav-link text-xl text-black" to="/technologies" @click="closeMenu">Technologies</NuxtLink>
        <NuxtLink class="nav-link text-xl text-black" to="/le-cabinet" @click="closeMenu">Le cabinet</NuxtLink>
        <NuxtLink class="nav-link text-xl text-black" to="/contact" @click="closeMenu">Contact & Accès</NuxtLink>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
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
      this.isScrolled = window.scrollY > 20;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
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
  color: #4a5568;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #1a202c;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
