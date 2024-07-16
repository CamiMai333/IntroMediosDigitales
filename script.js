var elemento_abrir1 = document.getElementById("botonseccion1");
elemento_1 = document.getElementById ("seccion1");
var elemento_abrir2 = document.getElementById("botonseccion2");
elemento_2 = document.getElementById ("seccion2");
var elemento_abrir3 = document.getElementById("botonseccion3");
elemento_3 = document.getElementById ("seccion3");
var elemento_abrir4 = document.getElementById("botonseccion4");
elemento_4 = document.getElementById ("seccion4");
var elemento_abrir5 = document.getElementById("botonseccion5");
elemento_5 = document.getElementById ("seccion5");
var elemento_abrir6 = document.getElementById("botonseccion6");
elemento_6 = document.getElementById ("seccion6");
var elemento_abrir7 = document.getElementById("botonseccion7");
elemento_7 = document.getElementById ("seccion7");


const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const shapes = [
  "quad-circle-1",
  "quad-circle-2",
  "quad-circle-3",
  "quad-circle-4",
  "triangle-1",
  "triangle-2",
  "triangle-3",
  "triangle-4",
  "circle",
];

const pincelada = [
  "url(img/pincelada1.png)", 
  "url(img/pincelada2.jpg)", 
  "url(img/pincelada3.png)", 
  "url(img/pincelada4.jpg)", 
  "url(img/pincelada5.png)", 
  "url(img/pincelada6.png)", 
  "url(img/pincelada7.png)", 
  "url(img/pincelada8.jpg)", 
  "url(img/pincelada9.png)", 
  "url(img/pincelada10.png)",
  "url(img/pincelada11.png)",
  "url(img/pincelada12.png)",
  "url(img/pincelada13.png)",
  "url(img/pincelada14.png)",
  "url(img/pincelada15.png)",
  "url(img/pincelada16.jpg)",
  "url(img/pincelada17.png)",
  "url(img/pincelada18.jpg)",
  "url(img/pincelada19.jpg)",
  "url(img/pincelada20.jpg)",
];

const colors = ["#D9C6B0", "#261C14", "#8C6E54", "#D99771", "#A65E44", "#615346","#36281F","#96795B","#47241E", "#B66841", "#261C14", "#A65E44", "#A60522", "#042326", "#A66C24", "#A6411C",  "#AF2717", "#724039", "#AD7224", "#B20312","#503838", "#B20312", "#6E0C19", "#8C6330", "#F2C185", "#BF4011", "#592512", "#6F3B2E", "#503838", "#B48118", "#592512", "#593D25", "#8C6330", "#311D14"];

const boxes = document.querySelectorAll(".container div");
const boxes1 = document.querySelectorAll(".container1 div");

let generatePattern = () => {
  boxes.forEach((box) => {
    box.className = "";
    let i = Math.floor(Math.random() * shapes.length);
    let j = Math.floor(Math.random() * colors.length);
    let p = Math.floor(Math.random() * pincelada.length);
    box.classList.add(shapes[i]);
    box.style.backgroundImage = pincelada[p];
    box.style.backgroundColor = colors[j];
  });
  boxes1.forEach((box1) => {
    box1.className = "";
    let i = Math.floor(Math.random() * shapes.length);
    let j = Math.floor(Math.random() * colors.length);
    let p = Math.floor(Math.random() * pincelada.length);
    box1.classList.add(shapes[i]);
    box1.style.backgroundImage = pincelada[p];
    box1.style.backgroundColor = colors[j];
  });
};

btn.addEventListener("click", generatePattern);
btn1.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);




elemento_abrir1.addEventListener ("click", abrirprimeraseccion);
function abrirprimeraseccion (event) {
    event.preventDefault();
    if (elemento_1.style.display === "block") {
      elemento_1.style.display = "none";
    } else {
      elemento_1.style.display = "block";
      elemento_2.style.display = "none";
      elemento_3.style.display = "none";
      elemento_4.style.display = "none";
      elemento_5.style.display = "none";
      elemento_6.style.display = "none";
      elemento_7.style.display = "none";
    }
}

elemento_abrir2.addEventListener ("click", abrirsegundaseccion);
function abrirsegundaseccion (event) {
    event.preventDefault();
    if (elemento_2.style.display === "block") {
      elemento_2.style.display = "none";
    } else {
      elemento_2.style.display = "block";
      elemento_1.style.display = "none";
      elemento_3.style.display = "none";
      elemento_4.style.display = "none";
      elemento_5.style.display = "none";
      elemento_6.style.display = "none";
      elemento_7.style.display = "none";
  
    }
  }


elemento_abrir3.addEventListener ("click", abrirterceraseccion);
function abrirterceraseccion (event) {
    event.preventDefault();

    if ( elemento_3.style.display === "block") {
      elemento_3.style.display = "none";
    } else {
      elemento_3.style.display = "block";
      elemento_1.style.display = "none";
      elemento_2.style.display = "none";
      elemento_4.style.display = "none";
      elemento_5.style.display = "none";
      elemento_6.style.display = "none";
      elemento_7.style.display = "none";
    }

}


elemento_abrir4.addEventListener ("click", abrircuartaseccion);
function abrircuartaseccion (event) {
    event.preventDefault();
    if (elemento_4.style.display === "block") {
      elemento_4.style.display = "none";
    } else {
      elemento_4.style.display = "block";
      elemento_1.style.display = "none";
      elemento_2.style.display = "none";
      elemento_3.style.display = "none";
      elemento_5.style.display = "none";
      elemento_6.style.display = "none";
      elemento_7.style.display = "none";
    }
}


elemento_abrir5.addEventListener ("click", abrirquinaseccion);
function abrirquinaseccion (event) {
    event.preventDefault();
    if (elemento_5.style.display === "block") {
      elemento_5.style.display = "none";
    } else {
      elemento_5.style.display = "block";
      elemento_1.style.display = "none";
      elemento_2.style.display = "none";
      elemento_3.style.display = "none";
      elemento_4.style.display = "none";
      elemento_6.style.display = "none";
      elemento_7.style.display = "none";
    }
}


elemento_abrir6.addEventListener ("click", abrirsextaseccion);
function abrirsextaseccion (event) {
    event.preventDefault();
    if (elemento_6.style.display === "block") {
      elemento_6.style.display = "none";
    } else {
      elemento_6.style.display = "block";
      elemento_1.style.display = "none";
      elemento_2.style.display = "none";
      elemento_3.style.display = "none";
      elemento_4.style.display = "none";
      elemento_5.style.display = "none";
      elemento_7.style.display = "none";
    }
}


elemento_abrir7.addEventListener ("click", abrirseptimaseccion);
function abrirseptimaseccion (event) {
    event.preventDefault();
    if (elemento_7.style.display === "block") {
      elemento_7.style.display = "none";
    } else {
      elemento_7.style.display = "block";
      elemento_1.style.display = "none";
      elemento_2.style.display = "none";
      elemento_3.style.display = "none";
      elemento_4.style.display = "none";
      elemento_5.style.display = "none";
      elemento_6.style.display = "none";
    }
}

