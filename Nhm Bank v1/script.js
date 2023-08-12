//VAR FORM
const form = document.getElementById("form");
let formValido = false;

//VAR INPUTS
const nomeDestino = document.getElementById("nomeDestino");
const saldoContaInput = document.getElementById("saldoConta");
const valorTransferInput = document.getElementById("valorTransfer");

//VAR MENSAGENS
const containerMsgSucess = document.querySelector(".msgSucess");
const msgTransfer = document.getElementById("msgTransfer");
const errorMsg = `O nome precisa ser completo!`;

//FUNÇÃO PARA VALIDAÇÃO DE NOME COM DOIS CAMPOS
function validaNome(nomeCompleto) {
  const nomeEmArray = nomeCompleto.split(" ");
  return nomeEmArray.length >= 2;
}

//FUNÇÃO PARA VALIDAÇÃO DE SALDO
function validaSaldo(valorTransferInput, saldoContaInput) {
  return valorTransferInput < saldoContaInput;
}

//RETIRA RELOAD PÓS SUBMIT // EXIBE MENSAGEM DE SUCESSO/ERRO
form.addEventListener("submit", function (e) {
  e.preventDefault();

  formValido = validaNome(nomeDestino.value);
  const msgSucess = `O valor de: <b>${valorTransferInput.value} R$</b> foi despositado com sucesso para o Cliente: <b>${nomeDestino.value} !</b>`;

  if (formValido) {
    containerMsgSucess.innerHTML = msgSucess;
    containerMsgSucess.style.display = "block";
    nomeDestino.value = "";
    valorTransferInput.value = " ";
    saldoContaInput.value = " ";
    msgTransfer.value = " ";
  } else {
    nomeDestino.style.border = "1px solid red";
    const containerMsgError = document.querySelector(".errorMsg");
    containerMsgError.innerHTML = errorMsg;
    containerMsgError.style.display = "block";
  }
});

//RETIRA A PERMANÊNCIA DA CAIXA DE ERRO DA VALIDAÇÃO DE NOMES
nomeDestino.addEventListener("input", function (e) {
  formValido = validaNome(e.target.value);
  console.log(formValido);
  if (!formValido) {
    nomeDestino.classList.add("error");
    document.querySelector(".errorMsg").style.display = "block";
  } else {
    nomeDestino.classList.remove("error");
    document.querySelector(".errorMsg").style.display = "none";
  }
});

//VALIDAÇÃO DE SALDO PARA TRANSFERÊNCIA
valorTransferInput.addEventListener("input", function (e) {
  const parseTransfer = parseFloat(valorTransferInput.value);
  const parseSaldo = parseFloat(saldoContaInput.value);
  const containerErrorTransfer = document.querySelector(".errorTransfer");
  const containerSucessTransfer = document.querySelector(".sucessTransfer")
  const btnEnvio = document.getElementById("btnEnvio")

  transValida = validaSaldo(parseTransfer, parseSaldo);

  if (!transValida) {
    containerErrorTransfer.style.display = "block";
    containerSucessTransfer.style.display = "none"
    btnEnvio.disabled = true
  } else {
    containerErrorTransfer.style.display = "none";
    containerSucessTransfer.style.display = "block"
    btnEnvio.disabled = false
  }

});
