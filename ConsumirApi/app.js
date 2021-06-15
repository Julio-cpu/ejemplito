var buscar = () => {
  let formulario = document.getElementById("formPais");
  let paisBuscar = formulario["pais"];

  async function getCountry(id) {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );
      let country = await response.json();

      //console.log(country.name);

      console.log(typeof country);
      console.log(Object.values(country));
      for (mensajes in country) {
        let html = ` <tr>
               <th>1</th>
               <td>${country.name}</td>
               <td>${country.email}</td>
               <td>${country.body}</td>
             </tr>`;
        document.getElementById("cuerpo").innerHTML = html;
        //console.log(html);
        
        //console.log(country.name);
      }
    } catch (eror) {
      alert("el pais debe ser ingresado en ingles");
      console.log(eror);
    }
  }
  getCountry(paisBuscar.value);
};

async function mostrarTodo() {
  async function getAllNameCountry() {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/comments/`
    );
    let country = await response.json();
    let nuevoPais = "";
    let id = 0;
    for (city of country) {
      id++;
      nuevoPais += nuevoElemento(id, city.name, city.email, city.body);
      document.getElementById("cuerpo").innerHTML = nuevoPais;
      //console.log(Object.keys(city));
    }
  }
  getAllNameCountry();
}

const nuevoElemento = (id, nombre, poblacion, capital) => {
  let html = "";
  html = ` <tr>
            <th>${id}</th>
            <td>${nombre}</td>
            <td>${poblacion}</td>
            <td>${capital}</td>
          </tr>`;
  return html;
};

