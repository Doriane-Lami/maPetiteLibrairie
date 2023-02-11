<script setup>
// AFFICHER LE CONTENU DE LA LIBRAIRIE

document.getElementById("livres").addEventListener("click", listeLivres);

// la fonction récupère les titres des livres et les affiche
function listeLivres() {
  // url de l'API qui permet de récupérer les livres
  const url =
    "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/22/livres";
  let fetchOptions = { method: "GET" }; //On utilise GET pour collecter des données de l'API
  fetch(url, fetchOptions)
    .then((response) => {
      console.log("test1");
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
</script>

<template>
  <ul id="les_livres"></ul>
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
  bottom: Opx;
  width: 100%;
  height: auto;
}
</style>
