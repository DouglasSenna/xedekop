const alimentacao = document.querySelector("#poke");
const botao = document.querySelector("#power");
const ledVermelho = document.querySelector("#ledVermelho");
const ledAmarelo = document.querySelector("#ledAmarelo");
const ledVerde = document.querySelector("#ledVerde");
const som = document.querySelector("#somLigar");

let ligado = false;

function Ligar() {
  ligado = !ligado;
  botao.textContent = ligado ? "OFF" : "ON";
  alimentacao.src = ligado ? "./img/pokeon.png" : "./img/pokeoff.png";
  som = ligado ? som.play(): "";

  const leds = [
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
