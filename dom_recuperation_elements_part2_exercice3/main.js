// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère la div dont l'id est content avec un querySelector et affiche le résultat dans la console
// ### 2. Récupère la div dont l'id est content avec un querySelectorAll et affiche le résultat dans la console
// ### 3. Récupère les li dont la class est important avec querySelector et affiche le résultat dans la console
// ### 4. Récupère les li dont la class est important avec querySelectorAll et affiche le résultat dans la console
// ### 5. Affiche avec l'aide d'un foreach le contenu de chaque li avec la dernière lettre en majuscule 
// ### 6. Récupère le p dont la class est "grandParagraphe" de la div id "content", tu dois ici utiliser un getElementById et un getElementsByClassName



let content = document.querySelector('#content')

console.log(content);

let content2 = document.querySelectorAll('#content')
console.log(content2);
let important = document.querySelector('.important')
let important2 = document.querySelectorAll('.important')
console.log(important);
console.log(important2);


let tb = Array.from(important2)

tb.forEach(element => {

    console.log(element.textContent.substring(0,element.textContent.length -1) + element.textContent.substring(element.textContent.length -1).toUpperCase());

});

let problemee = document.getElementById('content')

let jsp =problemee.getElementsByClassName('grandParagraphe')


console.log(jsp[0]);