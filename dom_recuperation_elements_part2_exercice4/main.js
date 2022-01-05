// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère avec getElementsByClassName "redPurple" affiche et observe
let redPurple = document.getElementsByClassName(".redPurple")
console.log(redPurple);
// ### 2. Fais la meme chose qu'a l'exercice 1 mais avec un querySelectorAll, observe la différence
let redPurple2 = document.querySelectorAll(".redPurple")
console.log(redPurple2);
// ### 3. En utilisant querySelectorAll trouve un moyen de ne récupérer que les h1 ayant la class "redPurple"
let redPurpleH1 = document.querySelectorAll("h1.redPurple")
console.log(redPurpleH1);
// ### 4. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li, les éléments p et les éléments span
let allSelect = document.querySelectorAll("li, span, p")
console.log(allSelect);
// ### 5. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li ayant la class important et les éléments p 
let allSelect2 = document.querySelectorAll("li.important, p")
console.log(allSelect2);
// ### 6. Récupère en un seul querySelectorAll uniquement les h1 et les span ayant la class "redPurple"
let allSelect3 = document.querySelectorAll("h1.redPurple, span.redPurple")
console.log(allSelect3);
