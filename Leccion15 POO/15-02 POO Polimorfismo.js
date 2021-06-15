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
//dependiendo del tipo de objeto se va a llamar el metodod obtenerDetalle correspondiente al tipo de objeto
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){//verifica de que tipo es
        console.log("Es un objeto de tipo Gerente")
    }
    else if(tipo instanceof Empleado){//verifica de que tipo es
        console.log("Es un objeto de tipo Empleado")
    }
}

let empleado1= new Empleado("julio",5000);
let gerente1=new Gerente('carlos',5000,"sistemas");

imprimir(empleado1);//se le mada la referencia de tipo "Empleado" lo cual accede al metodod obtener detalle de Empelado
imprimir(gerente1);//se le mada la referencia de tipo "Gerente" lo cual accede al metodod obtener detalle de Gerente
