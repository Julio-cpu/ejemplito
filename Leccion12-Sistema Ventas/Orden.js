class Orden{
    static contadorOrdenes=0;

    static get MAX_ORDENES(){
        return 5;
    }

    constructor(){
        this.idOrden= ++contadorOrdenes;
        this.productos=[];
        this.contaodrProductosAgregados=0;
    }

    get getIdOrden(){
        return this.idOrden;
    }

    agregarProductos(){
        if(this.productos.length <= MAX_ORDENES){
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
            totalVenta+= p.precio;
        }
    }

}