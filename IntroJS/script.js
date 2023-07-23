const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");
let formValido = false;

function validaNome(nomeCompleto) {
  const nomeArray = nomeCompleto.split(" ");
  return nomeArray.length >= 2;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const numeroConta = document.getElementById("numero-conta");
  const valorDeposito = document.getElementById("valor");
  const msgSucess = `O valor de: <b>${valorDeposito.value}</b> despositado para o Cliente: <b>${nomeBeneficiario.value}</b> - Conta:<b>${numeroConta.value}</b> foi enviado com sucesso!`;
  const errorMsg = `O nome precisa ser completo!`;

  formValido = validaNome(nomeBeneficiario.value);

  if (formValido) {
    const containerMsgSucess = document.querySelector(".msgSucess");
    containerMsgSucess.innerHTML = msgSucess;
    containerMsgSucess.style.display = "block";

    nomeBeneficiario.value = " ";
    numeroConta.value = " ";
    valorDeposito.value = " ";
  } else {
    nomeBeneficiario.style.border = "1px solid red";
    const containerMsgSucess = document.querySelector(".errorMsg");
    containerMsgSucess.innerHTML = errorMsg;
    containerMsgSucess.style.display = "block";
  }
});

nomeBeneficiario.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  formValido = validaNome(e.target.value);
  if (!formValido) {
    nomeBeneficiario.classList.add('error')
    document.querySelector(".errorMsg").style.display="block"
  } else {
    nomeBeneficiario.classList.remove('error')
    document.querySelector(".errorMsg").style.display = "none";
  }
});
