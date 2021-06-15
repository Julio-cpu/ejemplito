async function funcionConPromesa(){
    let miPromesa=new Promise(resolver=>{
        console.log("inicio de funcion");
        setTimeout(()=> resolver('promesa con await y timeout'),3000);
    });

    console.log(await miPromesa)
    console.log("fin de la funcion");
}

funcionConPromesa();