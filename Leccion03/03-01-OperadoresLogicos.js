let a = 5;
let valMin = 0,
  valMax = 10;
// operador AND &&
if (a >= valMin && a <= valMax) {
  console.log("dentro del Rango");
} else {
  console.log("fuera del rango");
}
//------------------------------------------------------
let vacaciones = false;
let diaDescanso = false;
//operador OR ||

if (vacaciones || diaDescanso) {
  console.log("Puede asistir al partido de su hijo");
} else {
  console.log("NO Puede asistir al partido de su hijo");
}
//------------------------------------------------------
//Operador Ternario
let resultado = 3 > 2 ? "verdadero" : "falso";
console.log(resultado);
//------------------------------------------------------
let numero = 9;
//EXPRESION CONDICIONAL   verdadero  falso
resultado = numero % 2 == 0 ? "es par" : "impar";
console.log(resultado);
//___________________________________________________

//convertir String a Number
let miNumero = "10";
let edad = Number(miNumero); //conversion con la funcion Number()
resultado = miNumero >= 18 ? "mayor de edad" : "menor de edad";
console.log(resultado);
//___________________________________________________

//funcion isNaN valida si es un numero
let miNumero2 = "10x";
let edad2 = Number(miNumero2);
if (isNaN(edad2)) {
  console.log("la Variable no es un numero");
} else {
  resultado = miNumero >= 18 ? "mayor de edad" : "menor de edad";
  console.log(resultado);
}
