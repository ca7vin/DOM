// > Event Target

// ### 1. Suit scrupuleusement les étapes ci-dessous
// - Récupère la div en passant par son id
let laDiv = document.getElementById("content")
// - Créer une function avec comme paramètre "e" (qui symbolise "event") 
// - L'instruction de ta function est de faire un console.log de ton paramêtre e
fEvent = (e) => {
    console.log(e.target)
}
// - Créer un écouteur d'événement "click" sur ta div et observe ce que ton console log renvoi quand tu clique sur :
//     - la div
//     - le premier h1
//     - le second h1
laDiv.addEventListener("click", (event) => {
    fEvent(event)
})
// - Ouvre ce que tu récupères dans tes console.log et cherche la propriété target, observe ce qu'il contient

// ### 2. Trouve le moyen d'afficher l'élément dans la console.log grace a la propriété target


// ### 3. Change ton console.log par une instruction qui permet de mettre sur l'élément un border red et observe en cliquant sur les éléments de ta page ce qu'il se passe
borderRed = (e) => {
    let cible = e.target
    cible.style.border = 'red 5px solid'
}

laDiv.addEventListener("click", (event) => {
    borderRed(event)
})