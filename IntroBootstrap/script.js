$(document).ready(function(){
       
    $("#tel").mask("(00)00000-0000",({
        placeholder: "(XX)XXXXX-XXXX"
    }))
    
    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
            },
            telefone:{
                required: true,
            },
        },
        messages:{
            nome:"Por favor insira o nome!",
            email:"Insira o email corretamente!",
            telefone:"Insira o seu telefone nos padrões!",
        },
    })
     
})

