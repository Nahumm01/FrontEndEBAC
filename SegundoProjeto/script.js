const form = document.getElementById("form");
const inputNomeAtividade = document.getElementById("nomeAtividade");
const inputNotaAtividade = document.getElementById("notaAtividade");
const imgAprove = `<img src="./images/aprovado.png" alt="Emoji Celebrando" />`
const imgReprove = `<img src="./images/reprovado.png" alt="Emoji Triste" />`
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let linha = "<tr>";
  linha += `<td> ${inputNomeAtividade.value}  </td>`;
  linha += `<td> ${inputNotaAtividade.value}  </td>`;
  linha += `<td> ${
    inputNotaAtividade.value >= 7 ? imgAprove : imgReprove
  }</td>`;
  linha += "</tr>";

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;

  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
});
