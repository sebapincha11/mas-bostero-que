const frases = [
    { id: 0, texto: "Mas bostero que tener un barbijo de Evita." },
    { id: 1, texto: "Mas bostero que levantar el piso flotante para hacer un asado." },
    { id: 2, texto: "Mas bostero que mojarse el pelo en un boliche." },
    { id: 3, texto: "Mas bostero que desayunar puchero frío." },
    { id: 4, texto: "Más bostero que violar la perimetral." },
    { id: 5, texto: "Mas bostero que comerle la hija menor al fletero." },
    { id: 6, texto: "Más bostero que tunear un Fitito." },
    { id: 7, texto: "Mas bostero que cagar en la vereda y limpiarse con la mano." },
    { id: 8, texto: "Mas bostero que instalar un GNC en casa." },
    { id: 9, texto: "Mas bostero que tener algún diente plateado." },
    { id: 10, texto: "Mas bostero que calentar el auto acelerándolo." },
    { id: 11, texto: "Mas bostero que tirarse agua en el pelo en el medio del boliche." },
    { id: 12, texto: "Mas bostero que tener un calzoncillo preferido" },
    { id: 13, texto: "Mas bostero que desinflar los globos y guardarlos para el próximo cumpleaños" },
    { id: 14, texto: "Mas bostero que bajar la botella de la mesa para hacer lugar" },
    { id: 15, texto: "Mas bostero que encararse a la prima en año nuevo." },
    { id: 16, texto: "Mas bostero que ponerle al auto un calco de Mundo Marino" }
];

const fraseTextoElement = document.getElementById('fraseTexto');
const button = document.getElementById('button');

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}
button.addEventListener('click', () =>{
    let id = getRandomInt(17);
    let fraseRandom= frases[id].texto;
    fraseTextoElement.textContent = fraseRandom;
})

    
