console.log("calculadora");

function sumar() {
  const forma = document.getElementById("forma");
  let operador1 = forma["operadorA"];
  let operador2 = forma["operadorB"];
  let resultado = parseInt(operador1.value) + parseInt(operador2.value);

  if(isNaN(resultado)){
    resultado="La operacion no incluye la cantidad de datos requeridos";
  }

  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}

