<script>
import ListeLivre from "./ListeLivre.vue";
import {defineComponent} from "vue";
//import ListeLivre from "./App.vue";

export default defineComponent({
  components: {LivreRecherche}
})


// ====== recherche de personnes ======================
// -- gestion du click sur le bouton
// cible : le bouton d'id "pers"
// event : click
// action : liste des personnes vérifiant le critère de recherche
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

</template>
<style scoped>

</style>