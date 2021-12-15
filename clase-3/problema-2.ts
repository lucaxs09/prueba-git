console.clear();

var listaNotas: number[];
listaNotas = [
  7, 4.6, 9, 7.4, 6, 6, 1, 8.3, 6.4, 5.3, 2, 9.85, 7, 10, 5, 8, 6, 1, 6.8, 3,
];

// 1. ¿Cuál es la nota promedio?
var suma: number = 0;
var promedio: number;
for (var i = 0; i < listaNotas.length; i++) {
  suma += listaNotas[i];
}

promedio = suma / listaNotas.length;
console.log('1. Promedio: ', promedio);

// 2. ¿Qué porcentaje de estudiantes aprobaron el exámen?
var cant_aprobados: number = 0;
for (var i = 0; i < listaNotas.length; i++) {
  if (listaNotas[i] >= 6) {
    cant_aprobados++;
  }
}

var porcentaje: number;
porcentaje = (cant_aprobados * 100) / listaNotas.length;
console.log('2. Porcentaje Aprobados:', porcentaje, '%');

// 3. ¿Cuántos estudiantes obtuvieron una nota sobresaliente?
var cant_sobresalientes: number = 0;
for (var i = 0; i < listaNotas.length; i++) {
  if (listaNotas[i] >= 9) {
    cant_sobresalientes++;
  }
}
console.log('3. Estudiantes sobresalientes: ', cant_sobresalientes);
