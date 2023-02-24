<script setup>
import Livre from "../Livre";
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/22/livres";

document.getElementById("livres").addEventListener("click", listeLivres);

// la fonction récupère les titres des livres et les affiche
function listeLivres() {

  // url de l'API qui permet de récupérer les livres

  let fetchOptions = {method: "GET"}; //On utilise GET pour collecter des données de l'API
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json(); // données format JSON
      })
      .then((dataJSON) => {
        console.log("test2");
        let livres = dataJSON; // les livres ne sont dans aucune sous catégorie de l'API
        let resHTML = ""; // variable pour contenir le html généré
        for (let l of livres) {
          // boucle sur le tableau des livres
          resHTML = resHTML + "<li>" + l.titre + "</li>";
        }
        // insérer le HTML dans la liste "les_livres" <ul></ul> indiquée dans le template
        document.getElementById("les_livres").innerHTML = resHTML;
      })
      .catch((error) => {
        console.log(error);
      });
}


document.getElementById("livreCherche").addEventListener("click", rechercherLivre);

// ======  liste des personnes ==========
function rechercherLivre(){
  const fetchOptions = { method: "GET" };
  // récupérer la valeur saisie dans la zone de texte
  let titre = document.getElementById("title").value;
  console.log(titre);
  // --- la valeur saisie doit être ajoutée à la fin de l'URL
  fetch(url + "?search=" + titre, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        let livres = dataJSON; // les personnes sont le tableau "results"
        let resultHTML = "";
        for (let l of livres) {
          resultHTML = resultHTML + "<li>" + l.titre + "</li>";
          console.log(l);
        }
        document.getElementById("les_livres").innerHTML = resultHTML;
      })
      .catch((error) => console.log(error));
}

</script>

<template>
  <div id="recherche">
    <div id="champ_recherche"></div>
    <div id="boutton_recherche"></div>
  </div>
  <ul id="les_livres"></ul>
  <input type='text' id='title' placeholder='titre du livre recherché'/>
  <input type='button' id='livreCherche' value='Chercher les livres' />
  <img
    id="etagere_livres"
    src="../assets/étagères.png"
    alt="illustration d'un mur d'étagères remplies de livres"
  />
</template>

<style>
#les_livres li {
  list-style: none;
}

img {
  width: 100%;
  height: auto;
}
</style>
