//ubicamos elemento dentro del DOM
var txt = document.getElementById('txt');

//pedir ingreso de numero
var numero = prompt('ingrese un número')

// comparativa < 100
if ( parseInt(numero) < 100 ){
    txt.innerText = 'es menor';
}
else{
    txt.innerText = 'no es menor';
}