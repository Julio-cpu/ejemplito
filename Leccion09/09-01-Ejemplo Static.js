class Persona{
    
    static contadorPersonas=0;

    static get MAX_OBJ(){
        return 5;
    }
    constructor(nombre, apellido){
        //cada vez que se cree un objeto del tipo Persona el id aumentara en 1
        this.idPersona=++Persona.contadorPersonas;
        //-----------------------------------------
        this.nombre=nombre;
        this.apellido=apellido;
    }

    get getNombre(){
        return this.nombre;
    }

    get getApellido(){
        return this.apellido=apellido;
    }

    set setApellido(apellido){
        this.apellido=apellido;
    }

    set setNombre(nombre){
        this.nombre=nombre;
    }

    nombreCompleto(){
        return this.idPersona + " " + this.nombre + " " + this.apellido;
    }
    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("saludos desde un metodo estatico");
    }

    static saludar2(persona){
        console.log(persona.getNombre);
    }

}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre , apellido);
        this.departamento=departamento;
    }

    get getDeapartamento(){
        return this.departamento;
    }

    set setDepartamento(departamento){
        this.departamento=departamento;
    }
    //sobre escritua de metodo padre
    nombreCompleto(){
        return super.nombreCompleto() + " " + this.departamento;
    }
    toString(){
        return this.nombreCompleto();
    }
    

}

let persona1 = new Persona("juan","perez");
console.log(persona1.toString());

let empleado1= new Empleado("julio","salazar","sistemas");
console.log(empleado1.toString());

console.log(Persona.MAX_OBJ);