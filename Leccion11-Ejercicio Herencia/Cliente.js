class Cliente extends Persona{
    static contadorCliente=0;
    constructor(fechaRegistro){
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
        return `${super.nombreCompleto} ${this.idCliente} ${this.fechaRegistro}`;
    }
}