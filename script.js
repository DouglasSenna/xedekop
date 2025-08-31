let alimentacao = document.querySelector("#poke");
let botao = document.querySelector("#power");
let ledVermelho = document.querySelector("#ledVermelho");
let ledAmarelo = document.querySelector("#ledAmarelo");
let ledVerde = document.querySelector("#ledVerde");
let som = document.querySelector("#somLigar");

let ligado = false;

function Ligar() {
    console.log("função chamada")
  ligado = !ligado;
  botao.textContent = ligado ? "OFF" : "ON";
  alimentacao.src = ligado ? "./img/pokeon.png" : "./img/pokeoff.png";
  som.play();

  let leds = [
    { element: ledVermelho, classe: "piscando-red" },
    { element: ledAmarelo, classe: "piscando-yellow" },
    { element: ledVerde, classe: "piscando-green" },
  ];

  leds.forEach((led) => {
    if (ligado) {
      led.element.classList.add(led.classe);
    } else {
      led.element.classList.remove(led.classe);
      led.element.style.backgroundColor = "black";
    }
  });
}
