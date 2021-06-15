function miFuncion1(){
    console.log("duncion1");
}

function miFuncion2(){
    console.log("funcion2");
}

//miFuncion1();
//miFuncion2();

//funcion callback
function imprimir(mensaje){
    console.log(mensaje);
}
function sumar(op1,op2,funcionCallback){
    let resultado=op1+op2;
    funcionCallback(`Resultado:` + resultado);  
}
sumar(2,6,imprimir);
//------------------------------------------------


//llamadas asincronas con setTimeout
function miFuncionCallback(){
    console.log("salido asincrono despues de 3seg");
}

setTimeout(miFuncionCallback,3000);//despues de 3seg se manda a llamer

setTimeout(function(){console.log("saludo asincrono2")},4000);

setTimeout(()=>console.log("saludo asincrono 3"),5000);

