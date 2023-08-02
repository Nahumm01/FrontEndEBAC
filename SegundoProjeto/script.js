const form = document.getElementById("form");
const inputNomeAtividade = document.getElementById("nomeAtividade");
const inputNotaAtividade = document.getElementById("notaAtividade");
const imgAprove = `<img src="./images/aprovado.png" alt="Emoji Celebrando" />`;
const imgReprove = `<img src="./images/reprovado.png" alt="Emoji Triste" />`;
let linhas = "";
const atividades = [];
const notas = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addLinha();
  attLinha();
  attMedias();
});

function addLinha() {
  atividades.push(inputNomeAtividade.value);
  notas.push(parseFloat(inputNotaAtividade.value));

  let linha = "<tr>";
  linha += `<td> ${inputNomeAtividade.value}  </td>`;
  linha += `<td> ${inputNotaAtividade.value}  </td>`;
  linha += `<td> ${
    inputNotaAtividade.value >= 7 ? imgAprove : imgReprove
  }</td>`;
  linha += "</tr>";

  linhas += linha;

  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
}

function attLinha() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function attMedias() {
  const mediaFinal = calcNotaFinal();

  document.getElementById("mediaFinal").innerHTML = mediaFinal;
  document.getElementById("resultadoFinal").innerHTML = mediaFinal >= 7 ? "Aprovado" : "Reprovado"
  
  
  
  console.log(somaNotas);
  console.log(notas);
}

function calcNotaFinal() {
  let somaNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
  }
  return somaNotas / notas.length;
}
