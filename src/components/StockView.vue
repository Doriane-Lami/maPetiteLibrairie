<script setup>
import { reactive, onMounted } from "vue";
import Livre from "../Livre";


defineProps(["leLivre"]);
const emit = defineEmits(["deleteL"]);

let data = reactive({
  // La liste des produits affichée sous forme de table
  listeLivres: {},
});

const url ="https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/22/livres";

function chargeProduits() {
  let fetchOptions = { method: "GET" }; //On utilise GET pour collecter des données de l'API
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json(); // données format JSON
      })
      .then((dataJSON) => {
        data.listeLivres = dataJSON; // les livres ne sont dans aucune sous catégorie de l'API
      })
      .catch((error) => {
        console.log(error);
      });
}

function plusStock(leLivre){
  console.log(leLivre);
  leLivre.incrementerStock();
  console.log(leLivre.qtestock);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la chose modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({
      id: leLivre._id,
      titre: leLivre._titre,
      qtestock: leLivre._qtestock,
      prix: leLivre._prix,
    }),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // actualiser la liste des livres
        chargeProduits();
      })
      .catch((error) => console.log(error));
}

function moinsStock(leLivre){
  console.log(leLivre);
  leLivre.decrementerStock();
  console.log(leLivre.qtestock);

  if(leLivre.qtestock == 0){
    emit("deleteL", leLivre.id);
  }

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la chose modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({
      id: leLivre._id,
      titre: leLivre._titre,
      qtestock: leLivre._qtestock,
      prix: leLivre._prix,
    }),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // actualiser la liste des livres
        chargeProduits();
      })
      .catch((error) => console.log(error));
}

// A l'affichage du composant, on affiche la liste
onMounted(chargeProduits);

onMounted(() => {
  getLivres();
});
</script>

<template>
  <main>
    <div>
      <table>
        <caption>
          Liste des livres
        </caption>
        <tr>
          <th>Id</th>
          <th>Titre</th>
          <th>Quantité en stock</th>
          <th>Arrivage</th>
          <th>Vente</th>
          <!-- Si le tableau des produits est vide -->
        </tr>
        <tr v-if="!data.listeLivres">
          <td colspan="5">Veuillez patienter, chargement des livres...</td>
        </tr>
        <!-- Si le tableau des produits n'est pas vide -->
        <tr v-for="livre in data.listeLivres" :key="livre.id">
          <td>{{ livre.id }}</td>
          <td>{{ livre.titre }}</td>
          <td>{{ livre.qtestock }}</td>
          <td>
            <button @click="plusStock(livre)">
              Ajouter un exemplaire
            </button>
          </td>
          <td>
            <button @click="moinsStock(livre)">
              Enlever un exemplaire
            </button>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>


<style scoped>
td,
th {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #232623;
  color: rgb(255, 255, 255);
}
</style>
