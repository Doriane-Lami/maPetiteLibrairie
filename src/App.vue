<script setup>
import Accueil from "./components/Accueil.vue";
import ListeLivre from "./components/ListeLivre.vue";
import Modifier_collection from "./components/Modifier_collection.vue";
import StockView from "./components/StockView.vue";

import {RouterLink, RouterView} from 'vue-routeur';

</script>

<template>
  <Accueil />
  <nav id="menutop">
    <!-- RouterLink : des liens qui pointent vers le composant à afficher -->
    <!-- Voir la configuration des liens dans router/index.js -->
    <RouterLink to="/livres" class="menu">Nos livres</RouterLink>
    <RouterLink to="/stock" class="menu">Gérer le stock</RouterLink>
  </nav>
  <RouterView/>
</template>

<style></style>
