let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}
// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-competences"
let elements = document.querySelectorAll("div#liste-competences > h2")
console.log(elements);
// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet
elements = Array.from(elements)

// AVEC INNER TEXT
// let i = 0
// for (const key in competences) {
//         elements[i].innerText += " " + competences[key]
//         let percInNumb = Number(competences[key].replace("%", ""))
//         if (percInNumb < 50) {
//             elements[i].setAttribute("style", "background-color: red");
//         }
//         if (percInNumb > 50) {
//             elements[i].setAttribute("style", "background-color: green; color: white")
//         }
//         if (percInNumb == 50) {
//             elements[i].setAttribute("style", "background-color: none")
//         }
//         if (percInNumb == 100) {
//             elements[i].setAttribute("style", "background-color: gold; color: black")
//         }
//     i++
// }

// AVEC TEXT NODE ET APPEND CHILD
let i = 0;
for (const key in competences) {
    let perc = document.createTextNode(" " + competences[key])
    elements[i].appendChild(perc)
    let percInNumb = Number(competences[key].replace("%", ""))
        if (percInNumb < 50) {
            elements[i].setAttribute("style", "background-color: red");
        }
        if (percInNumb > 50) {
            elements[i].setAttribute("style", "background-color: green; color: white")
        }
        if (percInNumb == 50) {
            elements[i].style.backgroundColor = "white";
        }
        if (percInNumb == 100) {
            elements[i].style.backgroundColor = "Gold"
            elements[i].style.color = "black"
        }
    i++
}

// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir




