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
// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"
// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
// ### 10. En partant de Nicolas, affiche Primo
// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"
// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle