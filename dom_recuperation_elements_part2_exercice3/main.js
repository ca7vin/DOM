// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère la div dont l'id est content avec un querySelector et affiche le résultat dans la console
// ### 2. Récupère la div dont l'id est content avec un querySelectorAll et affiche le résultat dans la console
// ### 3. Récupère les li dont la class est important avec querySelector et affiche le résultat dans la console
// ### 4. Récupère les li dont la class est important avec querySelectorAll et affiche le résultat dans la console
// ### 5. Affiche avec l'aide d'un foreach le contenu de chaque li avec la dernière lettre en majuscule 
// ### 6. Récupère le p dont la class est "grandParagraphe" de la div id "content", tu dois ici utiliser un getElementById et un getElementsByClassName
// 1
let exo1 = document.querySelector("#content")
console.log(exo1)
// 2
let exo2 = document.querySelectorAll("#content")
console.log(exo2)

// 3
let exo3 = document.querySelector(".important")
console.log(exo3);
// 4
let exo4 = document.querySelectorAll(".important")
console.log(exo4);

// 5
let li = document.querySelectorAll("li")

li.forEach(element => {
    console.log(element.innerText.substring(0, element.innerText.length - 1) + element.innerText[element.innerText.length - 1].toUpperCase());
});

// 6
let para = document.getElementsByClassName("grandParagraphe")
console.log(para);

let cont = document.getElementById("content")
console.log(cont);