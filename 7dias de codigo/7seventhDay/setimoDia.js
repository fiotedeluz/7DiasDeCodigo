console.log ("iniciar")


//soma, subtração, multiplicação, divisão, e sair
var calculadora = true;

// as funções que executam os calculos
function soma (valor1, valor2) {
    return Number(valor1) + Number(valor2);
}

function subtraçao (valor1, valor2) {
    return Number(valor1) - Number(valor2);
}

function multiplicaçao(valor1, valor2) {
    return Number(valor1) * Number(valor2);
}

function divisao (valor1, valor2) {
    return Number(valor1) / Number(valor2);
}

// as variaveis existentes
let valor1;
let valor2;
var sinal;

// o codigo em tela
while (calculadora == true){ 

    // descobrindo que função executar ou quando sair
    var sinal = prompt("deseja fazer uma conta de soma, subtração, multiplicação, divisão ou sair?");

    if (sinal == `sair`) {
        alert("bye bye")
        calculadora = false;
        break
    } else if (sinal !== "soma" && "subtraçao" && "multiplicaçao" && "divisao") {
        alert("essa não deve ser uma das opções, tente sem acentos")
        sinal = prompt("deseja fazer uma conta de soma, subtração, multiplicação, divisão ou sair?")
    }

        if (sinal == `sair`) {
            alert("bye bye")
            calculadora = false;
            break
    }

    //preparando os numeros e o mostrador


    if (sinal == `soma`) {
        valor1 = prompt("qual o primeiro valor")
        valor2 = prompt("qual o segundo valor")
        alert (`${valor1} + ${valor2} = ${soma(valor1, valor2)}`)

    } else if (sinal == `subtraçao`) {
        valor1 = prompt("qual o primeiro valor")
        valor2 = prompt("qual o segundo valor")
        alert (`${valor1} - ${valor2} = ${subtraçao(valor1, valor2)}`)
        
    } else if (sinal == `multiplicaçao`) {
        valor1 = prompt("qual o primeiro valor")
        valor2 = prompt("qual o segundo valor")
        alert (`${valor1} * ${valor2} = ${multiplicaçao(valor1, valor2)}`)

    } else if (sinal == `divisao`) {
        valor1 = prompt("qual o primeiro valor")
        valor2 = prompt("qual o segundo valor")
        alert (`${valor1} / ${valor2} = ${divisao(valor1, valor2)}`)

    }
}