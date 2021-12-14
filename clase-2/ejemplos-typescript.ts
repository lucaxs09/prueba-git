// Declaramos variables globales
var edad: number;
var sabe_programar: boolean;
var mesActual: number = 3;// declaracion + inicialización con un valor

// Variables complejas
var nombre: string = 'Pedro'; 
var lista: Array<number>; // forma 1
var lista2: number[]; // forma 2 - mismo resultado

// Asignar valores a las variables
sabe_programar = false;
edad = 20;
nombre = 'Juan';

lista = [1,2,4];
lista2 = [12312,4,12,12,3,3];



// Estructuras de control
// Otras condiciones:  edad< 20 || edad >= 30 ...
if (edad >= 21) {  
  console.warn('Tiene más de 21 años');
} else {
  console.warn('Es menor de edad');
}

console.log('Edad 2: ', edad);
console.log('Nombre: ', nombre);

// switch (mesActual) {
//   case 1:
//     // camino alternativo si el mes es el 1
//     console.log('El mes actual es Enero');
//     break;
//   case 2:
//     // camino alternativo si el mes es el 1
//     console.log('El mes actual es Febrero');
//     break;
//   case 3:
//     console.log('El mes actual es Marzo');
//     break;

//   default:
//     console.warn('Advertencia: el valor de el mes actual no es valido');
// }


// Estructuras Repetitivas

// FOR:
// Parametro 1: desde dónde
// Parametro 2: Condicion booleana: repite siempre que se cumpla
// Parametro 3: condicion de incremento

// var contador: number;
// for(contador=1;  contador < 10; contador++){
//   console.log("Contador:", contador);
// }

// while
var encontrado: boolean = false;
var n:number = 0; // nuevo contador
while (encontrado === false){  
  n++;
    console.log('Contador: ', n);

    if (n == 5) {
      encontrado = true;
      console.log('El contador es 5. Deteniendo bucle');
    } else {
      console.log('El contador no es 5. Repitiendo bucle');
    }
}


console.log('====== FIN =======');
