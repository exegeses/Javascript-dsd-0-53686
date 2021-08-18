//ubicamos elementos dentro del DOM
var txtDias = document.getElementById('dias');
var txtHoras = document.getElementById('horas');
var txtMinutos = document.getElementById('minutos');
var txtSegundos = document.getElementById('segundos');

//declaramos función de control
function countdown()
{
    var ahora = new Date();
    var final = new Date( 2021, 8, 21 );
    //conversión a timestamp en milisegundos desde 1 de enero de 1970
    var actual = ahora.getTime();
    var evento = final.getTime();
    //diferencia entre fechas expresada en milisegundos
    var diferencia = evento - actual;
    //conversiones a unidades
    var segundos = Math.floor( diferencia/1000 ); // sin decimales
        console.log(segundos);
    var minutos = Math.floor( segundos/60 );
        console.log(minutos);
    var horas = Math.floor( minutos/60 );
        console.log(horas);
    var dias = Math.floor( horas/24 );
        console.log(dias);

    //calculamos los sobrabtes de horas, minutos y segundos
    // operador módulo %
    horas   = horas%24;
    if( horas < 10 ){
        horas = "0" + horas;
    }
    minutos = minutos%60;
    if( minutos < 10 ){
        minutos = "0" + minutos;
    }
    segundos = segundos%60;
    if( segundos < 10 ){
        segundos = "0" + segundos;
    }

    //imprimimos
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}
//ejecutamos función
countdown();
//actualizamos cada 1 segundo
setInterval( countdown, 1000 );