$(document).ready(function () {
  $("#carrousselImg").slick({
    autoplay: true,
  });

  $(".menuHM").click(function () {
    $("nav").slideToggle();
  });

  $("#telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      veiculoInteresse: {
        required: false,
      },
    },
    messages: {
      nome: "Por favor insira o seu nome!",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposInc = validador.numberOfInvalids();
      if (camposInc) {
        alert(`Existem ${camposInc} campos incorretos no seu envio!`);
      }
    },
  });

  $(".listaVeiculo button").click(function(){
    const destino = $("#contato")
    const nomeVeiculo= $(this).parent().find("h3").text()

    $("#veiculoInteresse").val(nomeVeiculo) 

    $("html").animate({
        scrollTop: destino.offset().top
    }, 1000)


  })


});
