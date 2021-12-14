var lista: Array<number>;
var lista2: number[];

lista = [2, 3, 4, 5, 7, 1, 8, 9, 10];


var contador: number = 1;
for (contador = 1; contador <= lista.length; contador++) {
  console.log('Contador:', contador);

  // buscar si el contador esta en la lista
  var encontrado: boolean = false;

  for (var contador2: number = 0; contador2 < lista.length; contador2++) {
    console.log('Buscando Posicion ', contador2);
    if (contador == lista[contador2]) {
      // el nro contador exista en la lista, en la posicion contador2
      // seguimos buscadndo
      // DETENMOS LA BUSQUEDA (STOP bucle 2)
      console.log(`El nro ${contador} está en la lista. Stop busqueda.`);
      encontrado = true;
      break;
    }
  }
  // Fin de la busqueda

  if(encontrado === false){
    // significa que el nro 'contador' no existe en la lista
    console.info("El nro que falta es el:", contador);
    break;
  }

}
