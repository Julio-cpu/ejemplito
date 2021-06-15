class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }

    get getTipoEntrada(){
        return this._tipoEntrada;
    }
    get getMarca(){
        return this._marca;
    }

    set setTipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada;
    }

    set setMarca(marca){
        this._marca=marca;
    }
}
//---------------------------------------------------------------------
class Raton extends DispositivoEntrada{
    static contadorRatones=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get getIdRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, Marca:${this._marca}]`;
    }
}

let raton1=new Raton("usb","sony");
console.log(raton1.toString());
let raton2=new Raton("BT","LG");
console.log(raton2.toString());
//---------------------------------------------------------------------
class Teclado extends DispositivoEntrada{
    static contadorTeclados=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get getIdTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado [idTeclado: ${this._idTeclado}, tipoEntrada : ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}
let teclado1=new Teclado("USB","SAMSUNG");
console.log(teclado1.toString());

let teclado2=new Teclado("BT","MSI");
console.log(teclado2.toString());
//---------------------------------------------------------------------

class Monitor{
    static contadorMonitores=0;
    constructor(marca,tamano){
        this._idMonitor= ++ Monitor.contadorMonitores;
        this._marca=marca;
        this._tamano=tamano;
    }

    get getIdMonitor(){
        return this._idMonitor;
    }
    get getMarca(){
        return this._marca;
    }
    get getTamano(){
        return this._tamano;
    }
    set setMarca(marca){
        this._marca=marca;
    }
    set settamano(tamano){
        this._tamano=tamano;
    }

    toString(){
        return `Monitor [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamano}]`
    }
}
let monitor1=new Monitor("ZOWIE","19'");
console.log(monitor1.toString());
let monitor2=new Monitor("BENQ","22'");
console.log(monitor2.toString());
//---------------------------------------------------------------------

class Computadora{
    static contadorComputadoras=0
    constructor(nombre,monitor,raton,teclado){
        this._idComputadora= ++Computadora.contadorComputadoras;
        this._nombre=nombre;
        this._monitor=monitor;
        this._raton=raton;
        this._teclado=teclado;
    }

    toString(){
        return `Computadora [${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}]`;
    }
}

let computadora1= new Computadora("HP",monitor1,raton1,teclado1);
let computadora2= new Computadora("DELL",monitor2,raton2,teclado2);
console.log(computadora1.toString());
//---------------------------------------------------------------------
class Orden{
    static contadorOrdenes=0;
    constructor(){
        this._idOrden= ++Orden.contadorOrdenes;
        this._computadoras= [];
    }
    get getIdOrden(){
        return this._idOrden
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden="";
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}
//---------------------------------------------------------------------
let orden1=new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
console.log(orden1.mostrarOrden());