class Producto{
    static contadorProducto=0;

    constructor(nombre,precio){

        this.idProducto= ++contadorProducto;
        this.nombre=nombre;
        this.precio=precio;
    }

    get getIdProducto(){
        return this.idProducto
    }
    get getNombre(){
        return this.nombre;
    }
    get getPrecio(){
        return this.precio;
    }

    set setNombre(nombre){
        this.nombre=nombre;
    }
    set setPrecio(precio){
        this.precio;
    }

    toString(){
        return `idProducto: ${this.idProducto}, nombre: ${this.nombre}, precio: ${this.precio}`;
    }
}

