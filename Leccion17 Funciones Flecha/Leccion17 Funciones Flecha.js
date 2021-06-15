let miFuncion = function () {
  console.log("hola desde la funcion");
};
/*
let miFucnionFlecha = ()=>{
    console.log("hola desde mi funcion flecha");
}
*/
//const miFucnionFlecha = () => console.log("hola desde mi funion flecha");

//miFucnionFlecha();

let saludar = () => {
  return "saludos desde funcion flecha";
};

console.log(saludar());

const regresaObjeto = () => ({ nombre: "juan", apellido: "lara" });
console.log(regresaObjeto());

const funcionconParametros = (mensaje) => console.log(mensaje);

funcionconParametros("hola desde la funcion con parametros");

const funcionconVariosParametros = (op1, op2, op3) => {
  let resultado = op1 + op2 + op3;
  return resultado;
};
console.log(funcionconVariosParametros(2, 4, 6));
