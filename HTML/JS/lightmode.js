const root = document.documentElement;
const logo = document.getElementById("logo");
const lightMode = localStorage.getItem("light-mode");

if (lightMode) { // lightmode
    root.classList.add("light-theme"); 
  }
  logo.addEventListener("click", () => { /* ajoute une fonction lors d'un click sur le logo pour passer en light mode */
    root.classList.toggle("light-theme");
    if (root.classList.contains("light-theme")) {
      localStorage.setItem("light-mode", true); /* le local storage permet de garder en mémoire le light mode pour les autres pages du site pour ne pas avoir à reclicker sur le light moded à chaque fois */
    } else {
      localStorage.removeItem("light-mode");
    }
});