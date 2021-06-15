/*
ejemplos de tipos de datos
 */
//Tipo de dato String
var nombre= "Carlos";
console.log(typeof nombre);

nombre =12;
console.log(typeof nombre)
//tipo de dato numerico
var numero =10;
console.log(numero);

//tipo de dato object

var objeto={
    nombre: "juan",
    apellido:"perez",
    edad: 20
};

console.log(objeto);

//tipo de dato boolean
var bandera= true;
console.log(bandera);

//tipo de dato Function
function miFuncion(){}
console.log(miFuncion)

//tipo de dato Symbol
var simbolo= Symbol("mi simbolo");
console.log(simbolo)

//tipo clase es una funcion
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(Persona);

//tipo de dato undefinde
var x;
console.log(x);

//null (es tipo object)
var y= null;
console.log(y);
//tipo array
var autos = ['BMW','RENAULT','VW'];
console.log(autos);

let a =1 , b=2, c ="2"

let z= b===c;
console.log(z);