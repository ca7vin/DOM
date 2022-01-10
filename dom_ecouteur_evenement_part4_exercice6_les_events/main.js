// > Event Target

// ### 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 
// - Mettre une bordure a la div
// - Mettre le paragraphe en gras et en rouge
// - Surligné le h1
// - Effacer le h2, a chaque fois que l'on clique dessus il perd une lettre.
let div = document.getElementById("content")
let h1 = document.getElementsByTagName("h1")[0];
let p = document.getElementsByTagName("p")[0];
let h2 = document.getElementsByTagName("h2")[0];



div.addEventListener("click", (event) => {
    div.style.border = "red 5px solid"
})

h1.addEventListener("click", (event) => {
    h1.style.backgroundColor = "yellow"
})

p.addEventListener("click", (event) => {
    p.style.fontWeight = "bold"
})

h2.addEventListener("click", (event) => {
    h2.textContent = h2.textContent.substring(0, h2.textContent.length - 1)
})


// ### 2. 
// - Créer une variable contenant le texte suivant : "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
// - Rajoute au hover de la section le texte contenu dans la variable dans son paragraphe 
let textInsert = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
let section = document.getElementsByTagName("section")[0]
let par = document.getElementsByTagName("p")[1]

section.addEventListener("mouseover", (event) =>{
    par.textContent = textInsert
})