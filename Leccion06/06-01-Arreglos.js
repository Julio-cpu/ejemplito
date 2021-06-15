const autos= ['BMW','VOLVO','RENAULT'];

console.log(autos);

console.log(autos[0]);

for(let i=0; i<=autos.length;i++){
    console.log(autos[i]);
}

/*
estructura forEach como un ARROW FUNCTION
("arreglo o lista a recorrer").forEach(("variable donde se almacena el contendio")=>{
    "codigo que se desea hacer"
})
*/
autos.forEach((i,a)=>{
    console.log(i);
    //contador no es necesario pero se le puede agregar un contador (a)
    console.log(a);
});


//validar si es un arreglo
console.log(Array.isArray(autos));

console.log(autos instanceof Array);

