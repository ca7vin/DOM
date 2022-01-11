// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// > Event Target

// ### 1. Créer un programme qui te permet de passer le contenu de la variable pContent jusqu'a une function et en suite fait en sorte que cette function ajoute ce qu'elle a reçue en parametre dans le p de la section, sert toi du button Exo1


// ### 2. Créer un programme qui au clique du h1, le background devient gold et sa color red, Attention voici les contraintes :
// - Les couleurs sont contenu dans des variables sur le fichier main.js, sert-en pour les affecter au style de la balise h1
// - Il faut que ces variables soient envoyés en parametre dans la function via le addEventListener.

// 1

let changement = (contenu, element) => {
    element.innerText = contenu;
}

let paragraphe = document.querySelector("p")


document.querySelector("input").addEventListener('click', () => changement(pContent, paragraphe))

// 2

let changementCouleur = (event, color1, color2) => {
    event.target.style.backgroundColor = color1
    event.target.style.color = color2
}

document.querySelector("h1").addEventListener('click', (event) => changementCouleur(event, theBackground, theColor))