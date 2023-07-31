const form = document.getElementById("form");
const inputNomeAtividade = document.getElementById("nomeAtividade");
const inputNotaAtividade = document.getElementById("notaAtividade");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let linha = "<tr>";
  linha += `<td> ${inputNomeAtividade.value}  </td>`;
  linha += `<td> ${inputNotaAtividade.value}  </td>`;
  linha += `<td> ${
    inputNotaAtividade.value >= 7 ? "Aprovado" : "Reprovado"
  }</td>`;
  linha += "</tr>";

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linha;

  alert(
    `Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value} - Adicionado com Sucesso!`
  );
});
