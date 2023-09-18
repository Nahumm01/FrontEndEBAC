$(document).ready(function () {
  $("#tel").mask("(00)00000-0000", {
    placeholder: "(XX)XXXXX-XXXX",
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
      },
      telefone: {
        required: true,
      },
    },
    messages: {
      nome: "<h5 class='warn'>Por favor insira o nome!</h5>",
      email: "<h5 class='warn'>Insira o email corretamente!</h5>",
      telefone: "<h5 class='warn'>Insira o seu telefone nos padrões!</h5>",
    },
  });
});
