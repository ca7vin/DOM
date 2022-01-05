// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

let myObject = {
    nom: 'nicolas',
    age: 18,
}

// console.log(myObject["age"]);
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. En passant par la div dont l'id est object, récupère le h1 et le h2 dans un tableau du nom de myElements
let exo1H1 = document.querySelectorAll("#object>h1, h2")
let myElements = Array.from(exo1H1)
console.log(myElements);
// ### 2. Trouve une méthode pour créer un tableau des propriétés de ton objet
// let arr = Object.getOwnPropertyNames(myObject)
// console.log(arr);

// ### 3. Créer une boucle qui va parcourir toutes les propriétés contenu dans ton object et qui pour chacune d'elle fait un console.log de la propriétéµ
let i = 0
for (const elem in myObject) {
    if (Object.hasOwnProperty.call(myObject, elem)) {
        console.log(`${elem} : ${myObject[elem]}`);
    }
    i++
}
    
// ### 4. Efface ton console.log, trouve un moyen d'aller dans ton objet récupéré la valeur de chaque propriétés et fait un console log de ce que cela retourne
let j = 0
for (const elem in myObject) {
    if (Object.hasOwnProperty.call(myObject, elem)) {
        console.log(`${myObject[elem]}`);
    }
    j++
}
// ### 5. Rajoute un count(compteur ou index comme tu l'entends) dans ta boucle
// ### 6. Sert toi de ce count/index pour parcourir ton tableau myElement dans ta boucle et d'y insirer ce qu'on te retourne a l'énoncé 4

let k = 0
for (const elem in myObject) {
    if (Object.hasOwnProperty.call(myObject, elem)) {
        exo1H1[k].innerText = (`${elem} : ${myObject[elem]}`);
    }
    k++
}
