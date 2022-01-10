// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc
// ### 2. Au hover du h3, son texte rétrécit d'un caractère 
// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir

let h1 = document.querySelector('h1')
let h3 = document.querySelector('h3')
let p = document.querySelector('p')

h1.addEventListener('dblclick',()=>{
h1.style.backgroundColor = "red"
h1.style.color = "white"

})

h3.addEventListener('mouseenter',()=>{
h3.style.fontSize = "10px"

})
h3.addEventListener('mouseleave',()=>{
h3.style.fontSize = "16px"

})


p.addEventListener('click',()=>{
if(p.style.backgroundColor === "blue"){
    p.style.backgroundColor = "white"
    p.style.color = "black"

}else{
p.style.backgroundColor = "blue"
p.style.color = "gold"

}

})