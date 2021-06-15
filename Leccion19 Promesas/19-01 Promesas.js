let miPromesa = new Promise((resolve, rejected) => {
  let expresion = true;

  if (expresion) {
    resolve("Resuelto");
  } else {
    rejected("Error");
  }
});

//miPromesa.then((valor) => console.log(valor),(error) => console.log(error));
//miPromesa.then(valor=>console.log(valor)).catch(error=>console.log(error));

let promesa=new Promise((resolver)=>{
    setTimeout(()=>{resolver("saludo con promesa y timeput"),3000});
});

  //promesa.then(valor => console.log(valor));  

  //async indica que va a devolver una promesa
async function miFuncionPromesa(){
    return "saludo con promesa y async";
}
//miFuncionPromesa().then(valor=>console.log(valor));

//async con await
async function funcionAwaitAsync(){
    let miPromesa=new Promise(resolver=>{
        resolver("promesa con await");

    });
    console.log(await miPromesa);
}
//---------------------------------------------------------------



