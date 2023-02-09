<script setup></script>

<template></template>

<style>
html {
  font-family: "Times New Roman", Times, serif;
  margin: 0;
  padding: 0;
  background-color: white;
  width: 100%;
  text-align: justify;
  font-size: 15px;
}

h1 {
  font-size: 17px;
}

a {
  text-decoration: none;
}

#brand {
  color: rgb(171, 39, 79);
  text-align: center;
  width: 100%;
  font-size: 30px;
}

body {
  width: 100%;
  margin: 0;
  padding: 0;
}

/*bandeau de navigation*/

#bandeau {
  height: 47px;
  display: flex; /*répartit les titres sur toute la ligne du bandeau*/
  padding: 0px;
  background-color: white;
  width: 100%; /*s'étale sur toute la largeur de l'écran*/
  top: 0px; /* fixe le bandeau tout en haut de la page*/
  margin: 0 auto;
}

#bandeau li {
  flex: auto; /*met le texte du bandeau sur 1 ligne en créant des cases de différentes tailles*/
  list-style-type: none;
  text-align: center;
  line-height: auto;
  position: relative;
  display: block;
  border-bottom: 2px solid black;
  padding: 15px 0px;
  text-transform: uppercase;
  color: black;
}

#bandeau li:hover {
  color: rgb(255, 121, 0);
  border-bottom: 2px solid rgb(255, 121, 0);
}

nav #bandeau::after {
  display: table;
}

/*sous catégories du bandeau*/

nav ul li:hover .sous {
  display: block;
} /* affiche le sous menu quand la souri passe sur l'item titre */

.sous {
  display: none; /* cache le sous menu */
  text-align: center;
  position: absolute;
  z-index: 1000;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0; /* les "sous cases" sont de la même taille que les "cases titre" */
}

.sous li {
  width: 100%;
  float: none;
}

.sous li {
  font-weight: normal;
  text-transform: capitalize;
  text-align: center;
  border-bottom: none;
  padding-top: 6px;
  padding-bottom: 6px;
}

.ss_cat:hover {
  background-color: white;
  color: rgb(255, 121, 0);
}
</style>
