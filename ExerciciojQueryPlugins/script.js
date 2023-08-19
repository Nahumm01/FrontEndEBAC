$(document).ready(function(){
    
    $("#nome").mask("",({
        placeholder: "Nome + Sobrenome"
    }))
    
    
    $("#email").mask("",({
        placeholder: "exemplo@email.com"
    }))
    
    $("#tel").mask("(00)00000-0000",({
        placeholder: "(XX)XXXXX-XXXX"
    }))
    
    $("#CPF").mask("000.000.000-00",({
        placeholder: "123.456.789-00"
    }))

    $("#endereco").mask("",({
        placeholder: "Rua/Bairro/Cidade"
    }))
    
    $("#CEP").mask("00000-000",({
        placeholder: "00000-000"
    }))
})