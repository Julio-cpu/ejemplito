const mostrarReloj = () => {
  let fecha = new Date();
  let hora = formatoHora(fecha.getHours());
  let minutos = formatoHora(fecha.getMinutes());
  let seg = formatoHora(fecha.getSeconds());

  document.getElementById("hora").innerHTML = `${hora}:${minutos}:${seg}`;

  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let año = fecha.getFullYear();

  let fechaText = `${dia}/${diaSemana}/${mes}/${año}`;
  document.getElementById("fecha").innerHTML = fechaText;

  //document.getElementById("hora").classList.toggle("animar");
//no jalo :c
  animacion();
};

const formatoHora = (hora) => {
  if (hora < 10) {
    hora = "0" + hora;
  }
  return hora;
};
setInterval(mostrarReloj, 1000);

function animacion() {
  let bandera = true;
  if (bandera) {
    document.getElementById("box1").classList.toggle("rellenar", bandera);
    setTimeout(()=>(document.getElementById("box2").classList.toggle("rellenar", bandera)),1000);
    
    
    bandera= false;   
  }
}
