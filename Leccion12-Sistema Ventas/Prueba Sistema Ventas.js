class Producto{
    static contadorProducto=0;

    constructor(nombre,precio){

        this.idProducto= ++Producto.contadorProducto;
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

class Orden{
    static contadorOrdenes=0;

    static get MAX_ORDENES(){
        return 5;
    }

    constructor(){
        this.idOrden= ++Orden.contadorOrdenes;
        this.productos=[];
        //this.contaodrProductosAgregados=0;
    }

    get getIdOrden(){
        return this.idOrden;
    }

    agregarProductos(producto){
        if(this.productos.length <= Orden.MAX_ORDENES){
            this.productos.push(producto);
            //this.productos[this.contaodrProductosAgregados++]= this.producto;
        }else{
            console.log("se exedio el limite de productos");
        }
    }
    calcularTotal(){
        let totalVenta=0;
        //sintaxis simplificada para iterar un arreglo
        for(let p of this.productos){
            totalVenta+=p.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = " ";
        for(let producto of this.productos){
            productosOrden += '\n{' + producto.toString() + "} ";
        }

        console.log( `idOrden: ${this.idOrden},Total: ${this.calcularTotal()},Productos Orden: ${productosOrden}` );
    }

}

let producto1=new Producto("audifonos",5000);
let producto2=new Producto("camisa",400);

let orden1=new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);

orden1.mostrarOrden();

let orden2= new Orden();  
let producto3=new Producto("collar",40000);
orden2.agregarProductos(producto3);
orden2.agregarProductos(producto2);
orden2.agregarProductos(producto1);

orden2.mostrarOrden();