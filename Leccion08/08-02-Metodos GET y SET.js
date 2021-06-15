let persona = {
  nombre: "juan",
  apellido: "perez",
  email: "yo@gmail.com",
  edad: 22,
  idioma: "es",
  //metodo GET
  get lenguaje(){
    return this.idioma.toUpperCase();
  },
  //metodo SET
  set lenguaje(lenguaje){
      this.idioma = lenguaje.toUpperCase();
  },
  //metodo GET
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};
//constructor de la clase persona
function Persona(nombre,apellido,email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto= function(){
      return this.nombre + " " + this.apellido;
    }
}
//se crea un nuevo objeto Persona
//let persona1= new Persona('marianito','juarez','mj@.com');
let padre = new Persona('marianito','juarez','mj@.com');
console.log(padre.nombreCompleto());


console.log(persona.lenguaje);
//se manda a llamar el metodo set con el "="
persona.lenguaje="en";
console.log(persona.idioma);


//------------------------------------------------------------
//formas de crear objetos
let miObjeto= new Object();
let miObjeto2={};

let miCadena=new String();

let miBoolean = new Boolean();

let miArreglo= new Array();

