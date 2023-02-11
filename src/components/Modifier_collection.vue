<script setup>
import { reactive, onMounted } from "vue";
import Modif_Form from "./Modif_Form.vue";
import LivreItem from "./LivreItem.vue";
import Livre from "../Livre";

const listeL = reactive([]);

// -- l'url de l'API
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/22/livres";

// -- req AJAX pour récupérer les todos
//    et les stocker dans le state listeC
function getLivres() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- vider la liste des choses
      listeL.splice(0, listeL.length);
      // pour chaque donnée renvoyée par l'API
      //  créer un objet instance de la classe Chose
      //  et l'ajouter dans la liste listeC
      dataJSON.forEach((v) =>
        listeL.push(new Livre(v.id, v.titre, v.qte, v.prix))
      );
    })
    .catch((error) => console.log(error));
}
// -- fonction du cycle de vie du composant
// exécutée 1 seule fois à la création
onMounted(() => {
  getLivres();
});
</script>

<template>
  <h3>Liste des livres</h3>
  <Modif_Form @addC="handlerAdd"></Modif_Form>
  <ul>
    <LivreItem v-for="livre of listeL" :key="livre.id" :livre="livre" />
  </ul>
</template>

<style scoped></style>
