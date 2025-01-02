// TODO Selectionner le boutton avec l'ID 'theme Toggle'
let button = document.getElementById("themeToggle");

// TODO Créer une variable pour suivre l'état du thème(clair/sombre)
let bg = document.querySelector("body");

// TODO Ajouter un écouteur d'événement 'click' sur le boutton
let dark = "dark";

//TODO Dans la fonction de l'écouteur:
// TODO -chager la valeur --bg-color et --text-color en fonction du thème
//TODO -mette à jour la variable d'état du thème
let isDarkTheme = false;

button.addEventListener("click", function() {
    if(bg.classList.contains("dark")) {
        bg.classList.remove("dark");
    }
    else{
        // Passer au theme sombre
        bg.classList.add("dark");
    };

});

