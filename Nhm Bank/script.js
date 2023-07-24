const nomeDestino = document.getElementById("nomeDestino");
const saldoConta = document.getElementById("saldoConta");
const valorTransfer = document.getElementById("valorTransfer");
const msgSucess = `O valor de ${valorTransfer.value} foi enviado com sucesso!`;
const form = document.getElementById("form");

//Começando tirando o reload após o submit.

function validaNome(nomeCompleto) {
  const nomeEmArray = nomeCompleto.split(" ");
  return nomeEmArray.length > 2;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
 let formValido = false
 
  formValido = validaNome(nomeDestino.value);
  if (formValido) {
    alert(msgSucess);
  } else {
    alert("D");
  }
});
