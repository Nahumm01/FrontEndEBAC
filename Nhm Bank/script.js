const nomeDestino = document.getElementById("nomeDestino");
const saldoConta = document.getElementById("saldoConta");
const valorTransfer = document.getElementById("valorTransfer");
const form = document.getElementById("form");
let formValido = false;

//Função valida nome
function validaNome(nomeCompleto) {
  const nomeEmArray = nomeCompleto.split(" ");
  return nomeEmArray.length >= 2;
}

//Retirando o reload pós submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //Declarando as variáveis de escopo local
  const msgSucess = `O valor de: <b>${valorTransfer.value}R$</b> foi despositado com sucesso para o Cliente: <b>${nomeDestino.value} !</b>`;
  const errorMsg = `O nome precisa ser completo!`
  const msgTransfer = document.getElementById("msgTransfer");

  formValido = validaNome(nomeDestino.value);
  console.log(formValido);

  if (formValido) {
    const containerMsgSucess = document.querySelector(".msgSucess");
    containerMsgSucess.innerHTML = msgSucess;
    containerMsgSucess.style.display = "block";
    nomeDestino.value = "";
    valorTransfer.value = " ";
    saldoConta.value = " ";
    msgTransfer.value = " ";
  } else {
    nomeDestino.style.border = "1px solid red";
    const containerMsgError = document.querySelector(".errorMsg");
    containerMsgError.innerHTML = errorMsg;
    containerMsgError.style.display = "block";
  }
});

nomeDestino.addEventListener("input", function (e) {
  console.log(e.target.value);

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
