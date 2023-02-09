document.getElementById("livres").addEventListener("click", listeLivres);

// ====== la fonction qui récupère les films et les affiche
function listeLivres() {
  console.log("coucou");
  // -- url de l'entrée (la route) de l'API qui permet de récupérer les films
  const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/22/livres";
  // -- option pour faire la req AJAX -> ici req GET
  let fetchOptions = { method: "GET" };
  // -- faire la req AJAX vers le serveur pour récuperer les films
  // -- req HTTP vers le serveur et attente (en asynchrone) de la réponse
  fetch(url, fetchOptions)
    .then((response) => {
      console.log("test");
      // -- réponse au sens du protocole HTTP
      return response.json(); // -- extraire les données au format JSON
    })
    .then((dataJSON) => {
      // dataJSON = les données renvoyées au format JSON
      console.log("test");
      let livres = dataJSON.results; // les films sont le tableau "results"
      let resHTML = ""; // variable pour contenir le html généré
      // boucle sur le tableau des films
      for (let l of livres) {
        resHTML = resHTML + "<li>" + l.titre + "</li>";
      }
      // insérer le HTML dans la liste <ul></ul> du fichier index.html
      document.getElementById("liste").innerHTML = resHTML;
    })
    .catch((error) => {
      // gestion des erreurs
      console.log(error);
    });
}
