const slider = document.querySelectorAll(".slider");
const nav = document.querySelector(".slider-nav");
const titulo = document.querySelector("#titulo");
const titulos = ["A Realm Reborn", "Heavensward", "Stormblood", "Shadowbringers", "Endwalker"];

const flechaDerecha = document.querySelector("#right-arrow");
const flechaIzquierda = document.querySelector("#left-arrow");

flechaDerecha.addEventListener("click", avanzar);
flechaIzquierda.addEventListener("click", retroceder);


const myTimeout = setInterval(avanzar, 5000);
function detenerTimer() {
  clearTimeout(myTimeout);
}

document.addEventListener("click", function(){
  clearTimeout(myTimeout);
});

navSlider();

let pos = 0;
function avanzar(){
  
  if(slider.item(pos+1) !== null){
    slider.item(pos).children[0].className = "ocultar";
    nav.children[pos].src = "./resources/empty-circle.png";
    slider.item(pos+1).children[0].className = "activar";
    nav.children[pos+1].src = "./resources/full-circle.png";
    pos++;
    titulo.textContent = titulos[pos];
  }

}

function retroceder(){
  if(slider.item(pos-1) !== null){
    slider.item(pos).children[0].className = "ocultar";
    nav.children[pos].src = "./resources/empty-circle.png";
    slider.item(pos-1).children[0].className = "activar";
    nav.children[pos-1].src = "./resources/full-circle.png";
    pos--;
    titulo.textContent = titulos[pos];
  }
}

function navSlider(){

  for(let i = 0; i < nav.children.length; i++){
    nav.children[i].addEventListener("click", function(){
      console.log(nav.children[i].getAttribute("data-index"));
      switch(nav.children[i].getAttribute("data-index")){
        case "0": slider.item(pos).children[0].className = "ocultar"; slider.item(0).children[0].className = "activar"; pos = 0; cambiarEstadoNav(pos); break;
        case "1": slider.item(pos).children[0].className = "ocultar"; slider.item(1).children[0].className = "activar"; pos = 1; cambiarEstadoNav(pos); break;
        case "2": slider.item(pos).children[0].className = "ocultar"; slider.item(2).children[0].className = "activar"; pos = 2; cambiarEstadoNav(pos); break;
        case "3": slider.item(pos).children[0].className = "ocultar"; slider.item(3).children[0].className = "activar"; pos = 3; cambiarEstadoNav(pos); break;
        case "4": slider.item(pos).children[0].className = "ocultar"; slider.item(4).children[0].className = "activar"; pos = 4; cambiarEstadoNav(pos);
      }
    });
  }
}

function cambiarEstadoNav(pos){
  for(let i = 0; i < nav.children.length; i++){
    if(nav.children[i] === (nav.children[pos])){
      nav.children[pos].src = "./resources/full-circle.png";
    }else{
      nav.children[i].src = "./resources/empty-circle.png";
    }
    
  }
}
