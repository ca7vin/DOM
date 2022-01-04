// 1. Stock la balise body dans une variable du nom de "myBody"
// 2. Trouve une méthode pour récuperer le premier élément de "myBody" et affiche le dans un console.log
// 3. Trouve une méthode pour récuperer le dernièr élément de "myBody" et affiche le dans un console.log
// 4. Trouve une méthode pour récuperer tous les enfants de la premiere div puis stock dans une variable "exo4" et affiche la dans un console.log
// 5. Récupère le premier li, puis trouve une méthode JS pour afficher l'élément suivant( c'est a dire le second li ) et affiche le résultat dans un CL
// 6. Récupère le second élément puis trouve une méthode JS pour afficher l'élément précédant( c'est a dire le premier li ) et affiche le résultat dans un CL

let myBody = document.getElementsByTagName('body')[0];

console.log(myBody.firstElementChild);
console.log(myBody.lastElementChild);

let exo4 = document.getElementsByTagName('div')[0] 
console.log(exo4.children);

let liste = document.querySelector('li')
console.log(liste);
console.log(liste.nextElementSibling);

let liste2 = document.getElementsByTagName('li')[1]
console.log(liste2.previousElementSibling.innerText)