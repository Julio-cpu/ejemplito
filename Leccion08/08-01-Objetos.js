let persona = {
  nombre: "juan",
  apellido: "perez",
  email: "yo@gmail.com",
  edad: 22,
  nombreCompleto: function(){
    return this.nombre + " " + this.apellido;
  }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());

//for in para recorrer propiedades de un objeto
for(propiedad in persona){
    console.log(propiedad); 
    console.log(persona[propiedad]);
}

//agregar propiedades
persona.apellido="manito";
console.log(persona);
//eliminar propiedades
delete persona.email;
console.log(persona);


//imprimir objetos
for (i in persona){
    console.log(persona[i]);
}

let personaArray= Object .values(persona);
console.log(personaArray);
//imprimir como JSON
let personaString= JSON.stringify(persona);
console.log(personaString);