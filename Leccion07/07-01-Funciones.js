//declaracion de una funcion
function mifucnion(a, b) {
  console.log("Suma:" + (a + b));
}

mifucnion(10, 20);

//funcion con return
function miFuncion2(a, b) {
  return a + b;
}
let resultado = miFuncion2(15, 56);
console.log(resultado);

//declaracion de un funcion tipo expresion
let x = function (a, b) {
  return a + b;
};

resultado = x(20, 10);
console.log(resultado);

//funcion self invokiing
(function () {
  console.log("ejecutando la funcion");
})();

//funcion flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(2, 3);
console.log(resultado);
//--------------------------------
let mensaje;
const imrpimirDia = () => "feliz viernes";
resultado = imrpimirDia();
console.log(resultado);
//--------------------------------
const division = (a, b) => a / b;
resultado = division(10, 5);
console.log(resultado);

//suma de argumentos
let resultadoArgumentos = sumarTodo(10, 23, 56, 35);
function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  
  return suma;
}
console.log(resultadoArgumentos);

//paso por referencia
const persona={
    nombre: 'juan',
    apellido:'perez'
}

function cambiarValorObjeto(p1){
    p1.nombre="pedro";
    p1.apellido="vazques";
}
console.log(persona);
cambiarValorObjeto(persona);
console.log(persona);


