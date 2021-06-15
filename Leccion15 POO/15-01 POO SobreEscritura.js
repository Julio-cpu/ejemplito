class Empleado{
    constructor(nombre,sueldo){
        this._nombre=nombre;
        this._sueldo=sueldo;
    }
    //sobre escritura
    obtenerDetalles(){
        return `Empelado: [Nombre: ${this._nombre}, Sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento=departamento;
    }
    //sobre escritura agregando departamento
    obtenerDetalles(){
        return `Gerente:\n ${super.obtenerDetalles()} Departamento: ${this._departamento}]`;
    }

}

let gerente1=new Gerente('carlos',5000,"sistemas");
console.log(gerente1.obtenerDetalles());