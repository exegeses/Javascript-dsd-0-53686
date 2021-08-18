//ubicar elemento dentro del DOM
var caja = document.getElementById('caja');

//declaramos funciones de control
function ocultar()
{
    //display:none
    caja.style.display = 'none';
}
function mostrar()
{
    //display:block
    caja.style.display = 'block';
}
function todo(){
    if( caja.style.display == 'block') {
        ocultar();
    }
    else{
        mostrar();
    }
}