// 1

let exo1 = document.getElementsByTagName("input")[0]


let bgBlue = (exo) => {
    exo.style.backgroundColor = "blue"
}

let bgNone = (exo) => {
    exo.style.backgroundColor = "white"
}

exo1.addEventListener("focus", () => {
    bgBlue(exo1)
})

//2

let exo2 = document.getElementsByTagName("input")[1]

exo2.addEventListener("focusin", () => {
    bgBlue(exo2)
})

exo2.addEventListener("focusout", () => {
    bgNone(exo2)
})


//3

let exo3P1 = document.getElementsByClassName("premierParagraphe")[0]
let exo3P2 = document.getElementsByClassName("secondParagraphe")[0]
let exo3P3 = document.getElementsByClassName("dernierParagraphe")[0]
let exo3Btn = document.getElementsByClassName("buttonExo")[0]

exo3Btn.addEventListener("click", () => {
    exo3P1.textContent = exo3P2.textContent
    exo3P3.textContent = exo3P2.textContent
})


//4
let nomExo4 = document.getElementById("exo4")
let renameInput = document.getElementsByTagName("input")[2]
let btnExo4 = document.getElementsByTagName("button")[1]

rename = () => {
    nomExo4.textContent = renameInput.value
}

btnExo4.addEventListener("click", () => {
    rename()
})

//5
let btnExo5 = document.getElementsByTagName("button")[2]
let img = document.getElementsByTagName("img")[0]
btnExo5.addEventListener("click", () => {
    img.setAttribute('src', './src/image/tartine.png')
})

//6
let img2 = document.getElementsByTagName("img")[1]
let img3 = document.getElementsByTagName("img")[2]
var linkImg2;

img2.addEventListener("click", () =>{
    linkImg2 = img2.getAttribute("src")
    console.log(linkImg2);
})

img3.addEventListener("click", () =>{
    img3.setAttribute("src", linkImg2)
})


//7
let txt1 = document.getElementById("text1")
let txt2 = document.getElementById("text2")
let btnExo7 = document.getElementsByTagName("button")[3]
let a;

btnExo7.addEventListener("click", () => {
    a = txt1.textContent
    txt1.textContent = txt2.textContent
    txt2.textContent = a
})

