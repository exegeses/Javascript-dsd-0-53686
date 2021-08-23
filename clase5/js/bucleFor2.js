/* array con las imágenes */
var fotos = [
                'arq1.jpg', 'arq2.jpg', 'arq3.jpg',
                'dancer1.jpg', 'dancer2.jpg', 'dancer3.jpg',
                'moda1.jpg', 'moda2.jpg', 'moda3.jpg'
            ];
var cantidad = fotos.length;

for ( var n = 0; n < cantidad; n++ ){
    document.write('<article style="display: inline-block">');
    document.write( '<img src="imagenes/'+ fotos[n] +'">' );
    document.write('</article>');
}