class Persona {
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad) {
      this.idPersona = ++Persona.contadorPersonas;
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
  
    get getIdPersona() {
      return this.idPersona;
    }
    get getNombre() {
      return this.nombre;
    }
    get getApellido() {
      return this.apellido;
    }
    get getEdad() {
      return this.edad;
    }
  
    set setNombre(nombre) {
      this.nombre = nombre;
    }
    set setApellido(apellido) {
      this.apellido = apellido;
    }
    set setEdad(edad) {
      this.edad = edad;
    }
  
    /*nombreCompleto() {
      return (
        this.idPersona + " " + this.nombre + " " + this.apellido + " " + this.edad
      );
    }*/
  
    toString() {
       return `${this.idPersona} ${this.nombre} ${this.apellido} ${this.edad}`;  
    } 
  }
  class Empleado extends Persona{

    static contadorEmpleados=0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this.idEmpleado=++Empleado.contadorEmpleados;
        this.sueldo=sueldo;
    }

    get getIdEmpleado(){
        return this.idEmpleado;
    }
    get getSueldo(){
        return this.sueldo;
    }

    set setSueldo(sueldo){
        this.sueldo=sueldo;
    }

    toString(){
        return `${super.toString()} ${this.idEmpleado} ${this.sueldo}`;
    }
}
class Cliente extends Persona{
    static contadorCliente=0;
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this.idCliente= ++Cliente.contadorCliente;
        this.fechaRegistro=fechaRegistro;
    }

    get getIdCliente(){
        return this.idCliente;
    }
    get getFechaRegistro(){
        return this.fechaRegistro;
    }

    set setFechaRegistro(fechaRegistro){
        this.fechaRegistro=fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this.idCliente} ${this.fechaRegistro}`;
    }
}  
//Persona
let persona1=new Persona('julio','salazar',22);
console.log(persona1.toString());
let persona2=new Persona('miguel','sainz',30);
console.log(persona2.toString());
//-----------------------------------------------------------------

//Empleado
let empleado1=new Empleado('karla','gomez',30,2000);
console.log(empleado1.toString());
let empleado2=new Empleado('maria','gomez',22,7000);
console.log(empleado2.toString());
//-----------------------------------------------------------------

//Cliente
let cliente1=new Cliente('miguel','cervantes',30,new Date());
console.log(cliente1.toString())
let cliente2=new Cliente ('manuel','cota',90,new Date());
console.log(cliente2.toString());
//-----------------------------------------------------------------