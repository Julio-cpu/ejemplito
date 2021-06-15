class Persona{
    
    constructor(nombre, apellido, telefono){
        this._nombre=nombre;
        this._apellido=apellido;
        this._telefono=telefono; 
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
}
//instancia del objeto
let persona1= new Persona("juan", "perez");
//manda a llamar el metodo set nombre
persona1.nombre="juan carlos"
//manda a llamer el metodo get nombre
console.log(persona1.nombre);