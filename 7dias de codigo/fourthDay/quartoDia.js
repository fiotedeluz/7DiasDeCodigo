
alert ("vamos começar o jogo?")

//gerador de numeros aleatoros e suas variaveis
var min = 0;
var max = 10;
var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
//alert(`${numeroAleatorio}`)
console.log (numeroAleatorio)
alert (" vode deve tentar adivinhar um numero de 1 a 10, voce tem tres chances!")

for (var n = 4, n !== 0, n - 1){
    if (vidas > 0) {
        var resposta = prompt ("qual o numero?")
        if (resposta == numeroAleatorio) {
            alert("parabens")
            vidas = 0
        } else {
            var resposta = prompt ("tende denovo")
        }
        } else {
            var restart = prompt(" digite 'sim' para jogar novamente")
            if (restart == "sim") {
            vidas = 3;
        }
    }
}
