let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub: '50%',
    Discord: '100%',
}

// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// >*Attention, dans l'exercice précédent les éléments HTML et les propriétés dans l'objet étaient dans le même ordre ! Cette fois ci, l'ordre est différent, prend le en compte*

// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-soft-skills"







// elements = document.querySelectorAll("#liste-soft-skills > h2")
// console.log(elements);


// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet
let titres = document.querySelectorAll("#liste-soft-skills > h2")
console.log(titres);


for (const key in softSkills) {
    titres.forEach(element => {
        if (element.textContent === key) {
            element.innerText += " : " + softSkills[key];
            let percInNumb = Number(softSkills[key].replace("%", ""))
            if (percInNumb < 50) {
                element.style.backgroundColor = "red"
            }
            if (percInNumb > 50) {
                element.style.backgroundColor = "green"
            }
            if (percInNumb === 50) {
                element.style.backgroundColor = "none"
            }
            if (percInNumb === 100) {
                element.style.backgroundColor = "gold"
                element.style.color = "black"
            }
        }
    });
}














// let i = 1
// let j = 0
// for (const key in softSkills) {
//         const element = softSkills[key];
//         elements[i].innerText += " " + element
        // let percInNumb = Number(softSkills[key].replace("%", ""))
        // if (percInNumb < 50) {
        //     elements[i].setAttribute("style", "background-color: red")
        // }if (percInNumb > 50) {
        //     elements[i].setAttribute("style", "background-color: green; color: white")
        // }
        // if (percInNumb == 50) {
        //     elements[i].setAttribute("style", "background-color: none")
        // }
        // if (percInNumb == 100) {
        //     elements[i].setAttribute("style", "background-color: gold; color: black")
        // }
//         i++;
//         j++;
//         if (j === 2) {
//             i = 0;
//         } else if (j === 3) {
//             i = 3
//         }
//     }

// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir
