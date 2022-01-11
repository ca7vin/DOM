// <!-- > Sur base de l'html fourni :

// # 1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.

// let liElem = document.querySelectorAll("li") 
// liElem = [...liElem]



// liElem.forEach(element => {
//     element.addEventListener("click", () => {
//         sayMyName = () => {
//             alert(element.textContent)
//         }
//         sayMyName()
//     })
// });
// # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)

let liElem2 = document.querySelectorAll("li")
liElem2 = [...liElem2]

liElem2.forEach(element => {
    element.addEventListener("dblclick", () =>{
        changeContent = () => {
            let valueIns = prompt("Modifier le contenu ?")
            element.textContent = valueIns
        }
        changeContent()
    })
});



// # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser -->
let input1 = document.getElementById("li-one")
let input2 = document.getElementById("li-two")
let buttonInv = document.getElementsByTagName("input")[2]

buttonInv.addEventListener("click", () => {
    let tempo1 = input1.value
    input1.value = input2.value
    input2.value = tempo1
    
})