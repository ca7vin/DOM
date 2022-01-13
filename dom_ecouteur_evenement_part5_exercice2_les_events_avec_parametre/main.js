// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// > Event Target

// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !
let tout = document.getElementsByTagName("div")[0].children
tout = [...tout]

tout.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element)
    })
});

// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule
tout.forEach(element => {
    element.addEventListener("dblclick", () => {
        element.textContent = element.textContent.toUpperCase()
    })
});



// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;

let btnGo = document.getElementsByTagName("input")[0];
let rndNumb = Math.floor(Math.random() * (5 - 1) + 1);

btnGo.addEventListener("click", () => {
    switch (rndNumb) {
        case 1:
            tout.forEach(element => {
                element.style.border = "1px solid gold"
            });
            break;
        case 2:
            tout.forEach(element => {
                element.style.backgroundColor = "blue"
            });
            break;
        case 3:
            tout.forEach(element => {
                element.style.backgroundColor = "red"
            })
            break;
        case 4:
            tout.forEach(element => {
                element.style.border = "5px solid gold"
            });
            break
    }
})


// CORRECTION
// // Pour l'exercice 2
// let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// // 1
// let elementsContent = document.querySelector("#content").children
// elementsContent = [...elementsContent]

// elementsContent.forEach(element => {
//     element.addEventListener("click", () => {
//         console.log(element);
//     })
// })


// // 2

// elementsContent.forEach(element => {
//     element.addEventListener("dblclick", () => {
//         element.innerText = element.textContent.substring(0, 1).toUpperCase() + element.innerText.substring(1);
//     })
// })


// // 3

// let styles = ["border: 1px solid gold", "background-color: blue", "background-color: red", "border: 5px dotted gold"]

// document.querySelector("input").addEventListener("click", () => {
//     let random = Math.floor(Math.random() * styles.length)
//     elementsContent.forEach(element => {
//         element.setAttribute("style", styles[random])
//     });
// })