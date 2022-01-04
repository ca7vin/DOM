// # Instructions :
// >*En utilisant la methode getElementsByTagName*
// ### 1. Stock tous les titres h1 dans une variable et affiche le contenu de cette variable dans un console.log 
// ### 2. Après avoir récupéré tous les paragraphes, stock chaque sous titre h3 dans des variables différentes et affiches leur contenu dans un console.log différent
// ### 3. Après avoir récupéré tous les paragraphe, stock le second paragraphe et affiche dans un console.log
// ### 4. Après avoir récupéré tous les li, stock le 3eme li et affiche le dans un console.log



let titre = document.getElementsByTagName('h1');
console.log(titre);

let para = document.getElementsByTagName('p');

let sousTitre1 = document.getElementsByTagName('h3')[0];
let sousTitre2 = document.getElementsByTagName('h3')[1];
let sousTitre3 = document.getElementsByTagName('h3')[2];

console.log(sousTitre1);
console.log(sousTitre2);
console.log(sousTitre3);

console.log(para[1]);

let liste = document.getElementsByTagName('li');
console.log(liste[2]);