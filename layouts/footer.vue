<template>
  <footer class="footer-container text-gray-800">
    <svg viewBox="0 0 95 18">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0
           0 1 0 0 0
           0 0 1 0 0
           0 0 0 13 -9" result="goo" />
          <xfeBlend in="SourceGraphic" in2="goo" />
        </filter>
        <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
      </defs>

      <use id="wave3" class="wave" xlink:href="#wave" x="0" y="-2"></use>
      <use id="wave2" class="wave" xlink:href="#wave" x="0" y="0"></use>
    </svg>

    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 content-center">
      <!-- Première colonne -->
      <div class="footer-column-left">
        <NuxtLink to="/contact" class="flex items-center space-x-2 mb-4">
          <h3 class="font-bold mb-4">Contact</h3>
        </NuxtLink>
        <div v-if="clientSideOnly">
          <p class="flex items-center space-x-2 clickable" @click="openGoogleMaps">
            <i class="fas fa-map-marker-alt"></i>
            <span>9 rue de Besançon, 25300 Doubs</span>
          </p>
        </div>
        <p class="flex items-center space-x-2 my-2">
          <i class="fas fa-phone"></i>
          <a href="tel:+330381394323" class="hover:text-blue-500">03 81 39 43 23</a>
        </p>
        <div class="mt-7">
          <NuxtLink to="/contact" class="btn-rendezvous">Prendre rendez-vous</NuxtLink>
        </div>
      </div>

      <!-- Deuxième colonne -->
      <div class="space-y-2 footer-column-center bg-effect">
        <h3 class="font-bold text-lg mb-5">Horaires du cabinet</h3>
        <ul class="space-y-1">
          <li>Lundi 09:00-18:30</li>
          <li>Mardi 09:00-18:30</li>
          <li>Mercredi 09:00-18:30</li>
          <li>Jeudi 10:00-12:00</li>
          <li>Vendredi 09:00-18:30</li>
          <li>Samedi 09:00-14:00</li>
        </ul>
      </div>

      <!-- Troisième colonne -->
      <div class="space-y-2 footer-column-right">
        <h3 class="font-bold text-lg mb-4">Liens du site</h3>
        <ul class="space-y-1">
          <li><i class="fas fa-arrow-right"></i> <NuxtLink to="/services" class="hover:text-[#87CEEB]">Services</NuxtLink></li>
          <li><i class="fas fa-arrow-right"></i> <NuxtLink to="/technologies" class="hover:text-[#87CEEB]">Technologies</NuxtLink></li>
          <li><i class="fas fa-arrow-right"></i> <NuxtLink to="/le-cabinet" class="hover:text-[#87CEEB]">Le cabinet</NuxtLink></li>
          <li><i class="fas fa-arrow-right"></i> <NuxtLink to="/contact" class="hover:text-[#87CEEB]">Contact & Accès</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div class="text-center text-sm mt-8 mb-0 pb-6">
      Cabinet dentaire du Dr Maxime Ortega à Doubs © {{ currentYear }} Tous droits réservés.
      <NuxtLink to="/mentions-legales" class="block mt-2 hover:text-blue-500">Mentions Légales</NuxtLink>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
  data() {
    return {
      clientSideOnly: false,
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    openGoogleMaps() {
      const address = encodeURIComponent('9 rue de Besançon, 25204 Doubs');
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
      window.open(googleMapsUrl, '_blank');
    }
  },
  mounted() {
    this.clientSideOnly = true;
  },
};
</script>

<style lang="scss">

/************************
****** FOOTER ***********
*************************/

.footer-container {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #F2F2F2;
    z-index: -1;
  }
}

.footer-container {
  .footer-column-left,
  .footer-column-center,
  .footer-column-right {
    text-align: center;

    padding: 0 1rem;

    @media (min-width: 768px) {
      text-align: left;

      &.footer-column-center {
        text-align: center;
      }

      &.footer-column-right {
        text-align: right;
      }
    }
  }

  .footer-column-left {
    padding: 0 1rem;
    text-align: center;

    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }

    .fas {
      margin-right: 0.5rem;
    }

    h3 {
      margin-left: auto;
      margin-right: auto;
    }

    .clickable,
    p {
      justify-content: center;
      text-align: center;
    }

    @media (min-width: 768px) {
      text-align: left;

      .clickable,
      p {
        justify-content: flex-start;
        text-align: left;
      }

      h3 {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
}

@media (max-width: 767px) {
  .footer-container::after {
    content: '';
    display: block;
    width: 100%;
    height: 650px;
    opacity: 0.7;
    background-color: #F6F6F6;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .footer-container::after {
    content: '';
    display: block;
    width: 100%;
    height: 300px;
    opacity: 0.7;
    background-color: #F6F6F6;
  }
}

/************************
****** FOOTER LINKS *****
*************************/

a {
  color: inherit; /* Par défaut, conserve la couleur courante */
  transition: color 0.3s ease-in-out;
}

a:hover {
  color: $blue; /* Utilise le bleu de votre palette */
}

/* Si $blue n'est pas défini dans vos variables */
a:hover {
  color: #87CEEB; /* Exemple de code couleur bleu */
}

/************************
****** SVG ANIMATION  ***
*************************/

svg {
  width:100%;
  overflow:visible;
}

.wave {
  animation: wave 3s linear;
  animation-iteration-count:infinite;
  fill: $grey;
}

.drop {
  fill: var(--col-deepblue);
  xfill: #99000055;
  animation: drop 3.2s linear infinite normal;
  stroke: var(--col-deepblue);
  stroke-width:0.5;
  transform: translateY(25px) ;
  transform-box: fill-box;
  transform-origin: 50% 100%;
}

.gooeff {
  filter: url(#goo);
}

#wave2 {
  animation-duration:5s;
  animation-direction: reverse;
  opacity: .6;
}

#wave3 {
  animation-duration: 7s;
  opacity:.3;
}

@keyframes wave {
  to {transform: translateX(-100%);}
}

/************************
****** COLUMNS ***********
*************************/

.footer-column-left {
  text-align: left;
  padding: 0 1rem;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  .fas {
    margin-right: 0.5rem;
  }
}

.footer-column-left {
  text-align: left;
}

.footer-column-center {
  text-align: center;
}

.footer-column-right {
  text-align: right;
}

/************************
****** BUTTON ***********
*************************/

.btn-rendezvous {
  @include button($white, $green);
}

.clickable {
  cursor: pointer;
}

/************************
****** TITRES ***********
*************************/

footer h3 {
  color: $black;
  position: relative;
  font-family: "Ilisarniq-Bold", monospace;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: inline-block; /* Fixe la largeur au texte uniquement */
  box-decoration-break: clone;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  padding: 0 4px;
  cursor: progress;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: $green;
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }
}

</style>
