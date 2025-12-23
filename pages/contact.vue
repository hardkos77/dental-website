<template>
  <div class="contact-page">
    <div class="header-section text-center py-20">
      <h1 class="text-4xl font-bold mb-6">Contact & Accès</h1>
    </div>

    <div class="contact-container">
      <!-- Colonne gauche : Titre, accès et Google Maps -->
      <div class="contact-info">
        <h2 class="text-3xl font-semibold text-white mb-4">Notre Cabinet</h2>

        <p class="text-black text-lg font-medium">
          Nous sommes à votre écoute pour toute question ou prise de rendez-vous.
          N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
        </p>

        <p class="text-white text-lg mt-6">
          📍 9 rue de Besançon, 25300 Doubs
          <br> 🕒 Lundi à vendredi : 09:00 - 18:30 | Samedi : 09:00 - 14:00
          <br> 📞 <a href="tel:+33381394323" class="underline hover:text-teal-200">+33 3 81 39 43 23</a>
        </p>

        <div class="map-container mt-6">
          <iframe
              class="map"
              frameborder="0"
              style="border:0"
              allowfullscreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.7164081975914!2d6.349168276934019!3d46.904271240707215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c75b3f06fffd5%3A0x5a38e8b080af9381!2s9%20Rue%20de%20Besançon%2C%2025300%20Doubs!5e0!3m2!1sfr!2sfr!4v1700000000000"
          ></iframe>
        </div>
      </div>

      <!-- Colonne droite : Formulaire de contact -->
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <input type="text" v-model="form.subject" placeholder="Sujet *" required />
          </div>
          <div class="form-group">
            <input type="text" v-model="form.name" placeholder="Nom / Prénom *" required />
          </div>
          <div class="form-group">
            <input type="tel" v-model="form.phone" placeholder="Téléphone *" required />
          </div>
          <div class="form-group">
            <input type="email" v-model="form.email" placeholder="Email (facultatif)" />
          </div>
          <div class="form-group">
            <textarea v-model="form.message" placeholder="Votre message (facultatif)"></textarea>
          </div>
          <button type="submit" class="submit-btn">Envoyer</button>
        </form>

        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRuntimeConfig } from '#imports';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Contact & Accès - Cabinet Dentaire Maxime Ortega',
  meta: [
    { name: 'description', content: 'Contactez le cabinet dentaire à Doubs. Adresse, horaires, accès Google Maps et formulaire de rendez-vous en ligne.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Contact & Accès - Cabinet Dentaire Maxime Ortega' },
    { property: 'og:description', content: 'Contact, adresse, horaires et accès à votre dentiste à Doubs. Formulaire de contact disponible.' },
    { property: 'og:url', content: 'https://dentiste-ortega.fr/contact' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dentiste-ortega.fr/contact' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Dr Maxime Ortega - Dentiste",
        "telephone": "+33-381-394-323",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "9 rue de Besançon",
          "addressLocality": "Doubs",
          "postalCode": "25300",
          "addressCountry": "FR"
        },
        "openingHours": [
          "Mo-Fr 09:00-18:30",
          "Sa 09:00-14:00"
        ]
      })
    }
  ]
});

const form = ref({
  subject: '',
  name: '',
  phone: '',
  email: '',
  message: ''
});

const successMessage = ref('');

onMounted(() => {
  const config = useRuntimeConfig();
  if (!window.grecaptcha) {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${config.public.recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
});

const submitForm = async () => {
  try {
    const config = useRuntimeConfig();

    if (!window.grecaptcha || !window.grecaptcha.execute) {
      throw new Error("reCAPTCHA non prêt");
    }

    const token = await grecaptcha.execute(config.public.recaptchaSiteKey, { action: 'submit' });

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form.value, recaptchaToken: token }),
    });

    const result = await response.json().catch(() => ({
      message: "Réponse inattendue du serveur."
    }));

    if (response.ok) {
      successMessage.value = result.message || "Votre mail a bien été envoyé.";
      form.value = { subject: "", name: "", phone: "", email: "", message: "" };
    } else {
      successMessage.value = result.message || "Erreur serveur, merci de réessayer.";
    }
  } catch (err) {
    console.error("Erreur soumission formulaire :", err);
    successMessage.value = "Une erreur s'est produite.";
  }
};
</script>

<style scoped>
.contact-page {
  width: 100%;
}

.header-section {
  background-color: #f8f8f8;
  margin-top: 80px;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background-color: #87CEEB;
  padding: 50px 0;
  width: 100%;
}

.contact-info {
  text-align: center;
  color: white;
  padding: 0 50px;
}

.map-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.map {
  width: 90%;
  height: 350px;
  border-radius: 8px;
}

.contact-form {
  background-color: white;
  padding: 40px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  width: 100%;
  max-width: 400px;
}

.form-group {
  position: relative;
  margin-bottom: 30px;
}

input, textarea {
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  color: #333;
  background: transparent;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  transition: border-color 0.3s;
}

input::placeholder, textarea::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

input:focus, textarea:focus {
  border-bottom: 2px solid #78FECF;
}

textarea {
  height: 100px;
  resize: none;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #78FECF;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover {
  background-color: #66e0b8;
}

.success-message {
  color: green;
  font-size: 1rem;
  margin-top: 10px;
  text-align: center;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-info, .contact-form {
    padding: 30px;
  }

  .map {
    height: 300px;
  }
}
</style>
