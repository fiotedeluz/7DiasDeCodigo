console.log ("iniciar")

// as possiveis listas de produto
var fruta = ["frutas:"]
var laticinio = ["laticinios:"]
var congelado = ["congelados:"]
var doce = ["doces:"]
var verdura = ["verduras:"]

alert ("bem vindo a lista de compras")
var repetiçao = true;
while (repetiçao) { //descobrindo o produto e lista q o cliente quer
    var produto = prompt("oque deseja adicionar a lista")
    var clasce = prompt("seu produto é uma fruta, verdura, laticinio, doce ou congelado?")

    // colocando o produto escolhido na lista escolhida
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
    } else if ( clasce != `fruta` && `verdura` && `laticinio` && `doce` && `congelado`) {// ou cntando que n tem oq ele quer
        alert("essa categoria não foi predefinida")
    }

    //concluindo ou finalizando
    restart = prompt("digite ok para parar de adicionando ou rm para remover algo da lista")
    if (restart == `ok`) {
        repetiçao = false;
        //finalizando a lista

    } else if (restart == `rm`) {
        //descobrindo oque sera retirado
        var rmClasce = prompt ("vais remover uma fruta, verdura, laticinio, doce ou congelado?")
        var rmProduto = prompt ("qual o produto a remover")
        // encontrando a lista certa e retirando
        if (rmClasce == "fruta"){

        var rm = fruta.indexOf(`${rmProduto}`)
        if (rm == -1) {alert("o produto não foi encontrado")} else {
           fruta.splice (rm, 1);
        }
     
    } else if (rmClasce == "verdura"){

        var rm = verdura.indexOf(`${rmProduto}`)
        if (rm == -1) {alert("o produto não foi encontrado")} else {
            verdura.splice (rm, 1);
        }
    } else if (rmClasce == "laticinio"){

        var rm = laticinio.indexOf(`${rmProduto}`)
        if (rm == -1) {alert("o produto não foi encontrado")} else {
            laticinio.splice (rm, 1);
        }
    } else if (rmClasce == "doce"){

        var rm = doce.indexOf(`${rmProduto}`)
        if (rm == -1) {alert("o produto não foi encontrado")} else {
            doce.splice (rm, 1);
        }
    } else if (rmClasce == "congelado"){
            var rm = congelado.indexOf(`${rmProduto}`)
            if (rm == -1) {alert("o produto não foi encontrado")} else {
                congelado.splice (rm, 1);
            }
    
        }
    }
    
    console.log (fruta)
    console.log (verdura)
    console.log (laticinio)
    console.log (doce)
    console.log (congelado)
}