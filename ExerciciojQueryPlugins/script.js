$(document).ready(function(){
       
    $("#tel").mask("(00)00000-0000",({
        placeholder: "(XX)XXXXX-XXXX"
    }))
    
    $("#CPF").mask("000.000.000-00",({
        placeholder: "123.456.789-00"
    }))
    
    $("#CEP").mask("00000-000",({
        placeholder: "00000-000"
    }))

})