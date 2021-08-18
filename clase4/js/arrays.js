var txt = document.getElementById('txt');
var txtDia = document.getElementById('txtDia');

//declaramos un array
//var nombres = new Array('Marcos', 'Joaquín', 'Serafín', 'Selene', 'Mitsuha');
var nombres = ['Marcos', 'Joaquín', 'Serafín', 'Selene', 'Mitsuha'];
    console.log(nombres);
txt.innerText = nombres[2];

/*
* mostrar el día de la semana por su nombre
* recordar que javascript utiliza un sistema de números
*
* Domingo   0
* Lunes     1
* Martes    2
* Miércoles 3
* */

//creamos un objeto de fecha
var fecha = new Date();
//obtenemos el número del día de la semana
var nDiaSemana = fecha.getDay();

/*  usando if/elseif */
/*
var diaSemana = '';
if( nDiaSemana == 0 ){
    diaSemana = 'Domingo';
}
else if( nDiaSemana == 1 ) {
    diaSemana = 'Lunes';
}
else if( nDiaSemana == 2 ) {
    diaSemana = 'Martes';
}
else if( nDiaSemana == 3 ) {
    diaSemana = 'Miércoles';
}
*/
/* usando switch() */
/*
var diaSemana = '';
switch( nDiaSemana ){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miércoles';
        break;
}
 */
/* usando un array */
var semana = [
                'Domingo', 'Lunes', 'Martes',
                'Miércoles', 'Jueves', 'Viernes',
                'Sábado'
             ];

//imprimimos
//txtDia.innerText = nDiaSemana;
//txtDia.innerText = diaSemana;
txtDia.innerText = semana[nDiaSemana];
