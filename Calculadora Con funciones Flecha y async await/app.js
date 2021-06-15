var sumar = () => {
  const forma = document.getElementById("forma");
  let op1 = forma["operadorA"];
  let op2 = forma["operadorB"];
  let resultado;

  let formTipoOp = document.forms["tipoOp"];
  let operacion = formTipoOp["tipo"];


  switch (operacion.value) {
    case "suma":
      resultado = parseInt(op1.value) + parseInt(op2.value);
      document.getElementById("resultado").innerHTML = resultado;
      console.log(resultado);
      break;
    case "resta":
      resultado = parseInt(op1.value) - parseInt(op2.value);
      document.getElementById("resultado").innerHTML = resultado;
      break;
    case "multiplicacion":
      resultado = parseInt(op1.value) * parseInt(op2.value);
      document.getElementById("resultado").innerHTML = resultado;
      break;
    case "division":
      if (parseInt(op2.value) != 0) {
        resultado = parseInt(op1.value) / parseInt(op2.value);
        document.getElementById("resultado").innerHTML = resultado;
      } else {
        alert(
          (document.getElementById("resultado").innerHTML =
            "no es posible dividir entre 0")
        );
      }
      break;
  }
};
//-------------------------------------------
var buscar = () => {
  let formulario=document.getElementById("formPais");
  let paisBuscar=formulario["pais"];

  async function getCountry(countryName) {
    try{
      let response = await fetch(
        `https://restcountries.eu/rest/v2/name/${countryName}`
        
      );
      let country = await response.json();
      for (city of country) {
        let html=` <tr>
        <th>1</th>
        <td>${city.name}</td>
        <td>${city.population}</td>
        <td>${city.capital}</td>
      </tr>`;

      document.getElementById("cuerpo").innerHTML=html;
        /* console.log(city.name);
        console.log(city.area); */
        return city;
      }

    }catch(eror){
      alert("el pais debe ser ingresado en ingles");
      console.log(eror);
    }
    
  }
  getCountry(paisBuscar.value);
  
};

async function mostrarTodo(){
  async function getAllNameCountry() {
    
      let response = await fetch(
        `https://restcountries.eu/rest/v2/all`
        
      );
      let country = await response.json();
      let nuevoPais="";
      let id=0;
      for (city of country) {
        id++;
        console.log(country);
        nuevoPais += nuevoElemento(id,city.name,city.population,city.capital);
        document.getElementById("cuerpo").innerHTML=nuevoPais;
        //  return city.name;
      }
  }
  /* (async function (){
    let nameCountry=await getAllNameCountry();
    console.log(nameCountry);
  })(); */
  getAllNameCountry();
  
}

const nuevoElemento=(id,nombre,poblacion,capital)=>{
  let html="";
  html=` <tr>
          <th>${id}</th>
          <td>${nombre}</td>
          <td>${poblacion}</td>
          <td>${capital}</td>
        </tr>`
   return html;
}
