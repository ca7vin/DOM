// # Instructions :
// >*Les exercices suivants doivent être résolus en utilisant getElementsByTagName*, mis à part si il est précisé d'utiliser autre chose*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Affiche le h3 qui est le premier enfant de la div content
let divContent = document.getElementsByTagName('div')[0];
console.log(divContent.firstChild)
// ### 2. Affiche le titreNiv3
let h3 = document.getElementsByTagName('h3')[1]
console.log(h3);
// ### 3. Affiche l'élément qui précède le titreNiv3
console.log(h3.previousElementSibling)
// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling
let petitParagraphe = document.getElementsByTagName('p')[1]
console.log(petitParagraphe.previousElementSibling)
// ### 5. Affiche le parent des éléments ayant comme class "important" 
let importantThings = document.getElementsByClassName('important')
importantThings = Array.from(importantThings)

importantThings.forEach(element => {
    console.log(element.parentElement)
});
// ### 6. Affiche le premier enfant, du parent de "listElements"
let exo6 = document.getElementsByTagName('ul')[0].firstElementChild
console.log(exo6)
// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"
let exo7 = document.getElementsByTagName('li')[3].nextElementSibling
console.log(exo7);
// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
let exo8 = document.getElementsByTagName('p')[3].nextElementSibling
console.log(exo8);
// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
let exo9 = document.getElementsByTagName('span')[1].parentElement.nextElementSibling
console.log(exo9);
// ### 10. En partant de Nicolas, affiche Primo
let exo10 = exo9.firstElementChild.firstElementChild
console.log(exo10.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.textContent);
// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"
let exo11 = document.querySelector('.grandParagraphe')
console.log(exo11);
// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dans une boucle
let exo12 = Array.from(document.querySelectorAll('li'))

exo12.forEach(element =>{
    console.log(element)
})