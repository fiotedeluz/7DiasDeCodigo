var fruta = []
var laticinio = []
var congelado = []
var doce = []
var verdura = []

alert ("bem vindo a lista de compras")
var permissao = prompt=("voce deseja adicionar algo a sua lista")
if (permissao = "sim") {
    var clasce = prompt("seu produto é uma fruta, verdura, laticinio, doce ou congelado?")

     if (clasce = fruta) {
        var produto = prompt("e qual o produto?")
        fruta.push (`${produto}`);
     } else     if (clasce = verdura) {
        var produto = prompt("e qual o produto?")
        verdura.push (`${produto}`);
     } else     if (clasce = laticinio) {
        var produto = prompt("e qual o produto?")
        laticinio.push (`${produto}`);
     } else     if (clasce = doce) {
        var produto = prompt("e qual o produto?")
        doce.push (`${produto}`);
     } else     if (clasce = congelado) {
        var produto = prompt("e qual o produto?")
        congelado.push (`${produto}`);
     }
}