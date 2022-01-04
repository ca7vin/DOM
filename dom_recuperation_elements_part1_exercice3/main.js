// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de parent/enfant/premier element/dernier element/ etc.. PART 2*
// ### 1. Récupère et affiche le premier enfant de la dernière div
// ### 2. Récupère et affiche le dernier enfant de la dernière div
// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le

// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le
// ### 5. Affiche l'élément parent de l'élément i
// ### 6. affiche l'élément parent de l'élément b
// ### 7. affiche l'élément suivant le premier enfant de la dernière div

let liste = document.getElementsByTagName('div')[2] 
console.log(liste.firstElementChild); 
console.log(liste.lastElementChild);
console.log(liste.lastElementChild.previousElementSibling.children[0]);
console.log(liste.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild);
console.log(liste.lastElementChild.previousElementSibling.children[0].parentElement);
console.log(liste.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.parentElement);
console.log(liste.firstElementChild.nextElementSibling); 

