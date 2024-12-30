// TODO Selectionner le boutton avec l'ID 'theme Toggle'

let themeToggle = document.getElementById("themeToggle");
// TODO Créer une variable pour suivre l'état du thème(clair/sombre)

let enfants = themeToggle.childNodes;

// TODO Ajouter un écouteur d'événement 'click' sur le boutton
enfants.forEach(function (enfant){
    enfant.className = "element";
});

//TODO Dans la fonction de l'écouteur:
// TODO -chager la valeur --bg-color et --text-color en fonction du thème
//TODO -mette à jour la variable d'état du thème
let button = document.querySelector("button");
// button.addEventListener("click", function(){
//     enfants.forEach(function(enfant){
//         enfant.className = enfant.className === "element" ? "dark" : "element";
//     });

// });
let isDarkTheme = false;
button.addEventListener("click", function(){
    if (isDarkTheme){
        document.documentElement.style.setProperty("--bg-color", "#000000");
        document.documentElement.style.setProperty("--text-color", "#ffffff");
    }else{
        document.documentElement.style.setProperty("--bg-color","#ffffff");
        document.documentElement.style.setProperty("--text-color", "#000000");
    
    };
});

