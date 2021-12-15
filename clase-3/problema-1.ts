// PROBLEMA 1
// Funcion que determina si un correo es válido
console.clear();

var correo1: string = 'lucaasd.asdas@da.sd';

var correoValido: boolean;
correoValido = validarCorreo(correo1);
console.log('Correo Valido:', correoValido);

function validarCorreo(correo: string): boolean {
  // Programamos algoritmo de validacion de correo
  /**
   1. No posee espacios
   2. Tiene el símbolo "@" exactamente una vez
   3. Tiene un punto después del "@"
   */

  // obtener la longitud de una cadena
  var longitud: number = correo.length;

  var tiene_arroba: boolean = false;
  var tiene_punto: boolean = false;
  var cantidad_arrobas: number = 0;

  for (let i = 0; i < correo.length; i++) {
    var letra: string = correo[i]; // obtenemos la letra de la posicion i
    console.log('Letra:', letra);

    // REGLA 1
    if (letra == ' ') {
      // no se cumple la regla 1
      console.warn('El correo tiene un espacio');
      return false;
    }

    // REGLA 2
    if (letra === '@') {
      tiene_arroba = true;
      cantidad_arrobas++;
    }
    // REGLA 3
    if (tiene_arroba && letra === '.') {
      // encontramos un punto despues del @
      tiene_punto = true;
    }
  } // fin del bucle

  // Verificamos si se encontró el arroba
  if (tiene_arroba === false) {
    // no tiene @
    console.warn('El correo no tiene el simbolo @');
    return false;
  } else {
    // tiene @
    // verificamos si tiene el punto despues del @
    if (tiene_punto == false) {
      console.warn('El correo no tiene un punto despues del @');
      return false;
    }
  }

  if (cantidad_arrobas > 1) {
    console.warn('El correo tiene mas de un @');
    return false;
  }

  return true;
}
