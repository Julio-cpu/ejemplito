class Empleado extends Persona{

    static contadorEmpleados=0;
    constructor(sueldo){
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