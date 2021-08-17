//ubicamos elementos dentro del DOM
var txt = document.getElementById('txt');

//declaramos funciones de control
function reloj()
{
    //creamos un objeto de fecha
    var fecha = new Date();

    //obtenemos horas
    var horas = fecha.getHours();
    //obtenemos minutos
    var minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    //obtenemos los segundos
    var segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }

    //imprimimos en el span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}
//invocamos función reloj
reloj();
//actualizamos llamado a función reloj
setInterval( reloj, 1000 );
