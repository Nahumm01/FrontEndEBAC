const form = document.getElementById("form");
const inputNomeAtividade = document.getElementById("nomeAtividade");
const inputNotaAtividade = document.getElementById("notaAtividade");
const imgAprove = `<img src="./images/aprovado.png" alt="Emoji Celebrando" />`;
const imgReprove = `<img src="./images/reprovado.png" alt="Emoji Triste" />`;
const spanAprove = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprove = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = parseFloat(prompt("Digite a nota mínima!"));
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
  if (atividades.includes(inputNomeAtividade.value)) {
    alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`);
  } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    let linha = "<tr>";
    linha += `<td> ${inputNomeAtividade.value}  </td>`;
    linha += `<td> ${inputNotaAtividade.value}  </td>`;
    linha += `<td> ${
      inputNotaAtividade.value >= notaMinima ? imgAprove : imgReprove
    }</td>`;
    linha += "</tr>";

    linhas += linha;
  }
  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
}

function attLinha() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function attMedias() {
  const mediaFinal = calcNotaFinal();

  document.getElementById("mediaFinal").innerHTML = mediaFinal.toFixed(2);
  document.getElementById("resultadoFinal").innerHTML =
    mediaFinal >= notaMinima ? spanAprove : spanReprove;
}

function calcNotaFinal() {
  let somaNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
  }
  return somaNotas / notas.length;
}
