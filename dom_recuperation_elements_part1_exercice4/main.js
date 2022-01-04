// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de récupération de contenu text, mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Affiche le contenu textuel du second h1
let secondH1 = document.getElementsByTagName('h1')[1];
console.log(secondH1.innerText)
// ### 2. Affiche le contenu textuel du dernier li
let lastLi = document.getElementsByTagName('li');
console.log(lastLi[3].innerText);
// ### 3. Affiche le contenu textuel du premier p en majuscule
let p1 = document.getElementsByTagName('p')[0];
console.log(p1.innerText.toUpperCase());
// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule
let li2 = Array.from(lastLi)

li2.forEach (element => {
    console.log(element.innerText.toUpperCase());
})

//OU

let exo4 = document.getElementsByTagName("li");
[...exo4].forEach(element => console.log(element.textContent.toUpperCase()));