// # Instructions :
// >*Mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*
// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class
let p1Tartine = document.getElementsByClassName("tartine")
console.log(p1Tartine[0].innerText)
// ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"
let p1Toast = document.getElementById("toast")
console.log(p1Toast.innerText)
// ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier)
let lastParaTart = document.getElementsByClassName("tartine")
console.log(lastParaTart[1])