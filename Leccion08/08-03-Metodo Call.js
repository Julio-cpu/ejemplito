let persona1={
    nombre:'juan',
    apellido:'perez',
    nombreCompleto: function(titulo,tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2={
    nombre:'carlos',
    apellido:'lara',
}

//metodo call para usar el metodo de persona1 "nombreCompleto" con los datos de persona2
console.log(persona1.nombreCompleto.call(persona2));
//se le puede pasar parametros al metodo call
console.log(persona1.nombreCompleto.call(persona2,"LIC", "6543234567"))
