<template>
  <div>
    <div class="video-container" @scroll="handleScroll">
      <video class="lazy" autoplay muted loop id="myVideo" poster="/images/dentiste.jpg">
        <source data-src="/videos/videotest.mp4" type="video/mp4" alt="video cabinet dentaire" lazyload="fitvidscompatible">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullScreenVideo',
  mounted() {
    this.initLazyLoadVideo();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    initLazyLoadVideo() {
      const videoElement = document.getElementById('myVideo');

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!videoElement.src) {
              const sourceElement = videoElement.querySelector('source');
              sourceElement.src = sourceElement.dataset.src;
              videoElement.load();
            }
            videoElement.play();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });

      observer.observe(videoElement);
    },
    handleScroll() {
      const video = document.getElementById('myVideo');
      const windowHeight = window.innerHeight;
      const videoPosition = video.getBoundingClientRect().top;

      // Laissez la vidéo jouer en continu
      if (videoPosition < windowHeight && videoPosition > 0 && video.src) {
        video.play();
      }

      // Maintenir l'effet parallaxe sans mettre la vidéo en pause
      const scrollPosition = window.pageYOffset;
      video.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
  }
}
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
</style>
