const inputNome = document.getElementById("nomeInput");
const inputTel = document.getElementById("telefoneInput");
const form = document.getElementById("form");

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addLinhas();
  attBody();
});

function addLinhas() {
  let linha = "<tr>";
  linha += `<td> ${inputNome.value} </td>`;
  linha += `<td> ${inputTel.value} </td>`;
  linha += "</tr>";

  linhas += linha;
}

function attBody() {
  const bodyTable = document.getElementById("tableBody");
  bodyTable.innerHTML = linhas;

  inputNome.value = "";
  inputTel.value = "";
}

//ADICIONAR VALIDAÇÃO DO CAMPO STATUS

//ADICIONAR VALIDAÇÃO DE CAMPO COM DOIS NOMES
function validaNome(nomeCompleto) {
  const nomeArray = nomeCompleto.split(" ");
  return nomeArray.length >= 2;
}

inputNome.addEventListener("input", function (e) {
  let nomeValido = validaNome(e.target.value);
  const errorNome = document.querySelector(".nomeError");
  const btnEnvio = document.querySelector(".btnEnvio")
  btnEnvio.disabled = false

  if (!nomeValido) {
    inputNome.style.outline = "1px solid red";
    errorNome.style.display = "block";
    btnEnvio.disabled = true
    btnEnvio.style.cursor = "not-allowed"
  } else {
    inputNome.style.outline = "1px solid green";
    errorNome.style.display = "none";
    btnEnvio.disabled = false
    btnEnvio.style.cursor = "pointer"
  }
});

//ADICIONAR CONDICIONAL PARA BARRAR NOMES IGUAIS

//MANIPULAR CAMPO TELEFONE PARA JA VIR COM FORMATO BR: (XX)XXXXX-XXXX
function formatarNumeroTel(numeroTel) {
  const numeroLimpo = numeroTel.replace(/\D/g, "");

  if (numeroLimpo.length >= 11) {
    const ddd = numeroLimpo.slice(0, 2);
    const numberPt1 = numeroLimpo.slice(2, 7);
    const numberPt2 = numeroLimpo.slice(7);

    return `(${ddd}) ${numberPt1}-${numberPt2}`;
  } else {
    return numeroLimpo;
  }
}

inputTel.addEventListener("input", function (e) {
  const numeroTel = e.target.value;
  const numeroTelFormatado = formatarNumeroTel(numeroTel);
  e.target.value = numeroTelFormatado;
});
