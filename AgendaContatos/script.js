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

  linhas += linha
}

function attBody() {
  const bodyTable = document.getElementById("tableBody");
  bodyTable.innerHTML = linhas;

  inputNome.value = "";
  inputTel.value = "";
}
