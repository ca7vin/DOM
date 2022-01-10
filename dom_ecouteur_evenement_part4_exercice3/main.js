// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue
// ### 2. Au double clique du h3, rajoute la class text-error
// ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 
// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 
// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !


let h1 = document.querySelector('h1')
let h3 = document.querySelector('h3')
let p = document.querySelector('p')
let span = document.querySelectorAll('p:nth-of-type(2) > span')
let span2 = document.querySelectorAll('p:nth-of-type(3) > span')
let bgColor = () => {
    h1.classList.add('text-blue')
}
bgColor()

h3.addEventListener('dblclick',()=>{
    h3.classList.add('text-error')
})

p.addEventListener('click',()=>{
    p.classList.toggle('text-style')

})

span.forEach(element => {
    element.addEventListener('click',()=>{
element.classList.toggle('bolder')

    })

});
span2.forEach(element => {

    element.addEventListener('click',()=>{
        span2.forEach(element1 => {
            element1.classList.remove('bolder-red')
        });
element.classList.add('bolder-red')


    })



});