// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*
// > Fais des console.log pour chaque exercice afin de montrer le résultat!
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text
let exo1 = document.querySelector("h2")
console.log(exo1.innerText);
// ### 2. Trouve le moyen de modifier sa valeur par "Exercice 1"
exo1.innerText = "Exercice 1"
console.log(exo1.innerText);
// ### 3. Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.
let exo3 = exo1.nextElementSibling
exo3.innerText = "Exercice 1"
console.log(exo3);
// ### 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console
let exo4 = document.querySelector('section')
console.log(exo4.id);
console.log(exo4.getAttribute('id'));
// ### 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)
let exo5 = document.querySelector("h1")
console.log(exo5.className);
console.log(exo5.classList);
// ### 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1
let exo6 = document.querySelectorAll("h1")
exo6 = Array.from(exo6)
exo6.forEach(element => {
    console.log(element.className);
});

// ### 7. Trouve une propriété pour afficher tous les attributs du premier input
let exo7 = document.querySelector("input")
console.log(exo7.getAttributeNames());
// ### 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input
console.log(exo7.getAttribute("type"))
// ### 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"
let exo9 = document.querySelector("#inputPassword3")
exo9.setAttribute("type", "password")
console.log(exo9);

// ### 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"
let exo10 = document.querySelector("input")
console.log(exo10);
exo10.setAttribute("type", "color")
console.log(exo10);
