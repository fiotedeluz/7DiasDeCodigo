var fruta = []
var laticinio = []
var congelado = []
var doce = []
var verdura = []

alert ("bem vindo a lista de compras")
var repetiçao = true;
while (repetiçao) {
    var produto = prompt("oque deseja adicionar a lista")
    var clasce = prompt("seu produto é uma fruta, verdura, laticinio, doce ou congelado?")

    if (clasce === `fruta`) {
       fruta.push (`${produto}`);
    } else     if (clasce === `verdura`) {
       verdura.push (`${produto}`);
    } else     if (clasce === `laticinio`) {
       laticinio.push (`${produto}`);
    } else     if (clasce === `doce`) {
       doce.push (`${produto}`);
    } else     if (clasce === `congelado`) {
       congelado.push (`${produto}`);
    } else if ( clasce != `fruta` && `verdura` && `laticinio` && `doce` && `congelado`) {
        alert("essa categoria não foi predefinida")
    }

        
    restart = prompt("digite ok para continuar adicionando")
    if (restart !== "ok") {
        repetiçao = false;
    }


}
console.log (fruta)
console.log (verdura)
console.log (laticinio)
console.log (doce)
console.log (congelado)
    
