class Persona{
    
    static contadorObjeto=0;
    constructor(nombre, apellido){
        Persona.contadorObjeto++;
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
        return this.nombre + " " + this.apellido;
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

let persona1=new Persona("marianito","martinez");
console.log(persona1.nombreCompleto());

let empleado1=new Empleado("julio","salazar","sistemas");
console.log(empleado1);

//herencia de metodos
console.log(empleado1.nombreCompleto())

console.log(empleado1.toString())


//persona1.saludar(); no s posibe llamar un metodo estatico desde un objeto
Persona.saludar();

Persona.saludar2(persona1);

console.log(Persona.contadorObjeto);