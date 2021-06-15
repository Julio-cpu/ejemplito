const personas = [
  new Persona("juan", "perez"),
  new Persona("karma", "martinez"),
];

function mostrarPersonas() {
  console.log("Mostrar Persona");
  let texto = "";
  let id = 0;
  for (let p of personas) {
    id++;
    texto += `<li>${id} - ${p.getNombre} ${p.getApellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersonas() {
  console.log("agregacion de una persona nueva");
  const forma = document.forms["forma"];
  const nombre = forma["nombre"]; //recupera el valor del formulario con el id nombre
  const apellido = forma["apellido"];

  if (nombre.value != "" && apellido.value != "") {
    const nuevaPersona = new Persona(nombre.value, apellido.value);
    console.log(nuevaPersona);
    personas.push(nuevaPersona);
    mostrarPersonas();
  }

}

function eliminarPersonas() {
  const forma = document.forms["formaElim"];
  //const id= forma["id"];

  personas.pop(forma["id"].value  );
  //console.log(forma["id"].value);
  mostrarPersonas();
}
