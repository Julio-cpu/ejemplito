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

let persona1=new Persona('julio','salazar',22);
console.log(persona1.toString());