$(document).ready(function(){
    
    $("#tel").mask("(00)000000-0000",({
        placeholder: "(12)12345-1234"
    }))

    $("form").validate({
        rules: {
          nome: {
            required: true,
          },
          email: {
            required: true,
            email: true,
          },
          tel: {
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
          nome: "Campo Obrigatório",
          email:"Campo Obrigatório",
          tel:"Campo Obrigatório",
          msg:"Campo Obrigatório",
        },
        
      });

})