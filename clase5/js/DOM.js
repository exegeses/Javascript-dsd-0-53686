/* Ubicar elementos dentro del DOM */
//var nombrex = document.getElementById('nombreID');
var enlaces =  document.getElementsByTagName('a');
console.log(enlaces);
//modificamos el segundo a
enlaces[1].style.color = '#444';

var itemsLista = document.getElementsByClassName('bullet');
console.log(itemsLista);
//modificamos el tercer li con la clase bullet
itemsLista[2].style.color = '#f60';

var h1 = document.querySelector('h1');
    h1.style.borderLeftColor = '#f60';

var list = document.querySelector("#lista");
    list.style.fontSize = "40px";

var parrafos = document.querySelectorAll('p');
console.log(parrafos);
var cantidad = parrafos.length;
console.log(cantidad);
for( var n = 0; n < cantidad; n++){
    parrafos[n].style.color = '#f60';
}