//ubicamos elemento dentro del DOM
var dado = document.getElementById('dado');

//declaramos función de control
function tirarDado()
{
    var numeroAleatorio = Math.random();// 0 1
    console.log( numeroAleatorio );

    var numeroMultiplicado = (numeroAleatorio * 5) + 1;
    console.log( numeroMultiplicado );

    var numero = Math.round( numeroMultiplicado );
    console.log( numero );

    dado.innerHTML = '<img src="dados/dado'+numero+'.png">';
}

//invocamos función
tirarDado();