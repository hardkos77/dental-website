<template>
  <div>
    <div class="video-container">
      <video class="lazy" autoplay muted loop playsinline id="myVideo" poster="/images/dentiste.jpg">
        <source data-src="/videos/videotest.mp4" type="video/mp4" />
      </video>

      <!-- Flèche animée cliquable -->
      <div v-show="showArrow" ref="arrow" class="scroll-arrow" @click="scrollToHero">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'FullScreenVideo',
  data() {
    return {
      showArrow: true,
    };
  },
  mounted() {
    this.initLazyLoadVideo();
    this.initArrowAnimation();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    initLazyLoadVideo() {
      const video = document.getElementById('myVideo');
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const src = video.querySelector('source');
            if (src.dataset.src && !src.src) {
              src.src = src.dataset.src;
              video.load();
            }
            video.play().catch(() => {});
            obs.unobserve(video);
          }
        });
      }, { threshold: 0.25 });
      observer.observe(video);
    },
    handleScroll() {
      this.showArrow = window.pageYOffset < 80;
    },
    initArrowAnimation() {
      gsap.to(this.$refs.arrow, {
        y: 15,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
      });
    },
    scrollToHero() {
      const target = document.getElementById('hero-title');
      if (target) {
        target.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
};
</script>

<style lang="scss">
.video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

.video-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Flèche */
.scroll-arrow {
  position: absolute;
  bottom: 8rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
  cursor: pointer;
}

@media (max-width: 640px) {
  .scroll-arrow {
    font-size: 2rem;
    bottom: 5rem;
  }
}
</style>
