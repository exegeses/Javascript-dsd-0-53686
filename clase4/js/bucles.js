var txt = document.getElementById('txt');
var txt2 = document.getElementById('txt2');

var n = 1;
while( n < 15 ){
    document.write(n+'<br>');
    n++;//n = n+1;
}

/* mostrar elementos de un array */
var celulares = [
                    'Xiaomi', 'Samsung', 'Motorola', 'Nokia',
                    'Huawei', 'HTC', 'POCO', 'LG', 'Sony'
                ];
n = 0;
var cantidad = celulares.length; //contar elementos del array
while( n < cantidad ){
    document.write( celulares[n] +'<br>');
    n++;
}