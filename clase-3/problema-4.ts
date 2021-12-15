console.clear();

var listaNotas1: number[] = [7, 8, 9, 7.4, 10];

var listaNotas2: number[] = [10, 8, 9, 6, 9];

var listaNotas3: number[] = [7, 1, 6, 10, 5];

console.log('Procesand listas');

for (var i = 0; i < listaNotas1.length; i++) {
  var nota1: number = listaNotas1[i];
  var nota2: number = listaNotas2[i];
  var nota3: number = listaNotas3[i];

  // C1:  notas >= 6
  if (nota1 < 6 || nota2 < 6 || nota3 < 6) {
    // desaprobo alguno de los parciales
    console.log('El estudiante ', i, ' NO Promociona');
  } else {
    // C2:  promedio > 8
    var prom: number = (nota1 + nota2 + nota3) / 3;
    if (prom >= 8) {
      console.log('El estudiante ', i, ' SI PROMOCIONA - Prom: ', prom);
    }
  }
}
