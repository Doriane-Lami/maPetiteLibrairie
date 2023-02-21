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
document.getElementById("livres").addEventListener("click", getLivres);

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
        listeL.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
      );
    })
    .catch((error) => console.log(error));
}
// -- fonction du cycle de vie du composant
// exécutée 1 seule fois à la création
onMounted(() => {
  getLivres();
});

function handlerAdd(titre, qtestock, prix) {
  console.log(titre);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(myHeaders);
  // --  le libelle de la nouvelle chose est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ titre: titre, qtestock: qtestock, prix: prix }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      console.log("coucou3");
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivres();
    })
    .catch((error) => console.log(error));
}

function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  // -- l'id de la chose à supprimer doit être
  //  ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivres();
    })
    .catch((error) => console.log(error));
}



</script>

<template>
  <h3>Liste des livres</h3>
  <Modif_Form @addL="handlerAdd"></Modif_Form>
  <ul>
    <LivreItem
      v-for="livre of listeL"
      :key="livre.id"
      :livre="livre"
      @deleteL="handlerDelete"
    />
  </ul>
</template>

<style scoped></style>
