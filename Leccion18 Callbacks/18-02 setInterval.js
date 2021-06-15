let reloj =()=> {
    let fecha= new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
    //console.log(fecha.getHours + fecha.getMinutes + fecha.getSeconds);
}

setInterval(reloj, 1000);