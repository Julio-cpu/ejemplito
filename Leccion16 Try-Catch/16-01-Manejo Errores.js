"use strict";

let resultado="hola";

try{
    if(isNaN(resultado))   throw 'no es un numero';
      
}
catch(error){
    console.log("error");
}