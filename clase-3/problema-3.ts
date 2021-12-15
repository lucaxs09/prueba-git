console.clear();
var listado: string[];
listado = ['juan carlos', 'Judith riveRA', 'FERNANDO GAMARRA RuIZ'];

// var prueba: string = 'texto MixtO';
// var mayuscula: string = prueba.toUpperCase();
// var minusculas: string = prueba.toLowerCase();

function procesarListado(lista: string[]): string[] {
  var nuevaLista: string[] = [];

  // Recorremos la lista
  for (var i = 0; i < lista.length; i++) {
    var nombre: string = lista[i];
    // convertimos todo a minusculas
    nombre = nombre.toLowerCase();
    var nombre2: string = '';

    // Recorremos cada letra del nombre
    for (var j = 0; j < nombre.length; j++) {
      var letraActual = nombre[j];

      if (j === 0) {
        // es la primer letra
        letraActual = letraActual.toUpperCase();
      }

      if (j > 0) {
        // si la posicion actual es > 0, tenemos una letra anterior
        var letraAnterior = nombre[j - 1];
        // verificamos si la letra anterior es un espacio ' '
        if (letraAnterior === ' ') {
          // la letra anterior es un espacio, pasamos la letra
          // actual a mayúsculas
          letraActual = letraActual.toUpperCase();
        }
      }

      // concatenamos cada letra en la nueva variable
      nombre2 += letraActual;
    }

    nuevaLista.push(nombre2);
  }
  return nuevaLista;
}

var resultado: string[];
console.log('Lista inicial:', listado);
console.log('Procesando lista...');

resultado = procesarListado(listado);

console.log('Nueva lista:', resultado);
