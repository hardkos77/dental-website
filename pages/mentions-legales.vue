<template>
  <div class="mentions-legales-page">
    <!-- Bloc titre avec fond gris -->
    <div class="header-section text-center py-20">
      <h1 class="text-4xl font-bold mb-6">Mentions Légales</h1>
    </div>

    <!-- Contenu principal -->
    <div class="content-section max-w-4xl mx-auto px-6 pt-16 pb-8">
      <!-- Éditeur -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-[#F46767] mb-4">Éditeur du site</h2>
        <p class="text-gray-700 leading-relaxed">
          Le présent site est édité par le cabinet du Docteur Maxime Ortega, chirurgien-dentiste diplômé de la faculté dentaire de Nancy.<br />
          Cabinet dentaire Maxime Ortega<br />
          9 rue de Besançon, 25300 Doubs<br />
          Tél : <a href="tel:+330381394323" class="text-blue-500 hover:underline">03 81 39 43 23</a><br />
          Email : <a href="mailto:dr.maxime.ortega@gmail.com" class="text-blue-500 hover:underline">dr.maxime.ortega@gmail.com</a><br />
          N° SIRET : 879 715 043 00029
        </p>
      </section>

      <!-- Hébergement -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-[#F46767] mb-4">Hébergement</h2>
        <p class="text-gray-700 leading-relaxed">
          Le site est hébergé par :<br />
          <strong>o2switch</strong><br />
          Société o2switch, SARL au capital de 100 000 €<br />
          Siège social : 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France<br />
          Téléphone : <a href="tel:+33444446040" class="text-blue-500 hover:underline">04 44 44 60 40</a><br />
          Site : <a href="https://www.o2switch.fr/" target="_blank" class="text-blue-500 hover:underline">www.o2switch.fr</a><br />
          SIRET : 510 909 80700024 – RCS Clermont-Ferrand
        </p>
      </section>

      <!-- Propriété intellectuelle -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-[#F46767] mb-4">Propriété intellectuelle</h2>
        <p class="text-gray-700 leading-relaxed">
          L’ensemble du contenu du site (textes, images, animations, vidéos...) est protégé par le droit d’auteur. Toute reproduction sans autorisation est strictement interdite.
        </p>
      </section>

      <!-- Données personnelles -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-[#F46767] mb-4">Données personnelles</h2>
        <p class="text-gray-700 leading-relaxed">
          Les données collectées via les formulaires sont exclusivement utilisées dans le cadre de l’activité du cabinet. Conformément à la loi “Informatique et Libertés”, vous disposez d’un droit d’accès, de rectification et de suppression à adresser à : <a href="mailto:contact@maximeortega.fr" class="text-blue-500 hover:underline">contact@maximeortega.fr</a>
        </p>
      </section>

      <!-- Responsabilité -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-[#F46767] mb-4">Responsabilité</h2>
        <p class="text-gray-700 leading-relaxed">
          Les informations fournies sont à titre indicatif. Elles ne remplacent pas une consultation en cabinet. Le site décline toute responsabilité quant à l’usage qui pourrait en être fait.
        </p>
      </section>

      <!-- Déontologie -->
      <section>
        <h2 class="text-2xl font-semibold text-[#F46767] mb-4">Réglementation professionnelle</h2>
        <p class="text-gray-700 leading-relaxed">
          Le Dr Maxime Ortega est inscrit à l’Ordre National des Chirurgiens-Dentistes.
          <br />
          Plus d’infos : <a href="https://www.ordre-chirurgiens-dentistes.fr" target="_blank" class="text-blue-500 hover:underline">ordre-chirurgiens-dentistes.fr</a>
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
// Aucun script requis
</script>

<style scoped>
.mentions-legales-page {
  width: 100%;
}

.header-section {
  background-color: #f8f8f8;
  margin-top: 80px;
}

.content-section {
  background-color: white;
  padding-bottom: 2rem; /* Réduction espace bas */
}
</style>
