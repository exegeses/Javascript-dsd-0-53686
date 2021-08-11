//ubicamos elemento dentor del DOM
var txt = document.getElementById('txt');

//ejercicio: mostrar la fecha actual
// con formato 11/08/2021

//creamos objeto de fecha & guardamos en variable
var fecha = new Date();

//obtenemos día del mes
var diaMes = fecha.getDate();
//obtenemos mes actual
var mes = fecha.getMonth() + 1;
if( mes < 10 ){
    mes = '0' + mes;
}
//obtenemos año actual
var anio = fecha.getFullYear();

//imprimimos mensaje
var fechaCompleta = diaMes + '/' + mes + '/' + anio;
txt.innerText = fechaCompleta;