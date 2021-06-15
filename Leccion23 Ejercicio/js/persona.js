console.log("clase persona");

class Persona{

    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido
    }

    get getNombre(){
        return this.nombre;
    }
    get getApellido(){
        return this.apellido;
    }

    set setNombre(nombre){
        this.nombre=nombre;
    }
    set setApellido(apellido){
        this.apellido=apellido; 
    }

}