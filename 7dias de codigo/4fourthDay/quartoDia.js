alert("Vamos começar o jogo!");

// Gerador de números aleatórios e seus limites
var min = 1;
var max = 10;
var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(numeroAleatorio);

// Variáveis do jogo
var acertou = false;

alert("Você deve tentar adivinhar um número de 1 a 10. Você tem três chances!");

for (var vidas = 0; vidas < 3; vidas++) {
  var chute = parseInt(prompt("Qual é o número?"));
  //mantendo numero numero como boa pratica

  if (chute === numeroAleatorio) {
    acertou = true;
    break;
  } else {
    alert("Errou!");
  }
}

if (acertou) {
  alert("Parabéns, você acertou!");
} else {
  alert(`Não foi dessa vez... O número era ${numeroAleatorio}.`);
}

