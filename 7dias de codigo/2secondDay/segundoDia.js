
var nome
var city
var idade

var nome = prompt ("qual o seu nome amigo?");
var msg1 = `ola ${nome}!`;
alert(msg1);

var city = prompt ("de onde voce é?");
var msg2 = `wow ${city}!`;
alert(msg2);

var idade = prompt("e quantos anos voce tem?");
var msg3 = `hm interresante`;
alert(msg3);

var msgFinalJovem = `caramba, então voce é de ${city} e é um jovem de apenas ${idade} anos... boa sorte com a sua jornada amigo ${nome}`;
var msgFinalVelho = `meus céus, como pode alguem de ${idade} anos vir de ${city} ate esse canto obscuro da internet... obrigado pela sua companhia amigo ${nome}... mesmo que eu nao acredite em vc`;

if (idade < 60 ) {
    alert(msgFinalJovem);
} else {
    alert(msgFinalVelho);
}
