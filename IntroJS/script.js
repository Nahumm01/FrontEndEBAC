const form = document.getElementById("form-deposito");

function validaNome(nomeCompleto) {
  const nomeArray = nomeCompleto.split(" ");
  return nomeArray.length >= 2;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let formValido = false;

  const nomeBeneficiario = document.getElementById("nome-beneficiario");
  const numeroConta = document.getElementById("numero-conta");
  const valorDeposito = document.getElementById("valor");
  const msgSucess = `O valor de: ${valorDeposito.value} despositado para o Cliente: ${nomeBeneficiario.value} - Conta:${numeroConta.value} foi enviado com sucesso!`;

  formValido = validaNome(nomeBeneficiario.value);

  if (formValido) {
    alert(msgSucess);

    nomeBeneficiario.value = " ";
    numeroConta.value = " ";
    valorDeposito.value = " ";
    
  } else {
    alert("O nome não está completo!");
  }
});

console.log(form);
