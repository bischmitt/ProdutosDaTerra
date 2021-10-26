//função para validação do formulário em geral
function enviardados() {
    //if para verificar se o campo nome do formulário form1 está vazio ou com menos de 2 caracteres
    if (document.form1.nome.value == "" || document.form1.nome.value.length < 3) {
        //alert trazendo a informação de que o campo não foi preenchido corretamente
        alert("Preencha campo nome corretamente!");
        //focus para levar à caixa de texto que não foi preenchida corretamente
        document.form1.nome.focus();
        //sem o return false, entra numa repetição de caixas de alert e perde a função do focus
        return false;
    }

   if (document.form1.dataNascimento.value == ""){
        alert("Preencha campo Data de nascimento corretamente!");
        document.form1.dataNascimento.focus();
        return false;
    } 

    if (document.form1.numero.value == "" || document.form1.numeroContato.value.length < 10) {
        alert("Preencha campo telefone corretamente!");
        document.form1.numeroContato.focus();
        return false;
    }


    if (document.form1.localidade.value == "" || document.form1.localidade.value.length < 3) {
        alert("Preencha campo Município corretamente!");
        document.form1.localidade.focus();
        return false;
    }

    if (document.form1.cep.value == "" || document.form1.cep.value.length < 7 ) {
        alert("Preencha campo CEP corretamente!");
        document.form1.cep.focus();
        return false;
    }

    if (document.form1.logradouro.value == "" || document.form1.logradouro.value.length < 5) {
        alert("Preencha campo Endereço corretamente!");
        document.form1.logradouro.focus();
        return false;
    }

    if (document.form1.complemento.value == ""){
        alert("Preencha campo complemento corretamente!");
        document.form1.complemento.focus();
        return false;
    }

    if (document.form1.cpf.value == "" || document.form1.cpf.value.length < 5) {
        alert("Preencha campo CPF corretamente!");
        document.form1.cpf.focus();
        return false;
    }

    if (document.form1.senha.value == "" || document.form1.senha.value.length < 10) {
        alert("Preencha campo senha corretamente!");
        document.form1.senha.focus();
        return false;
    }

    if (document.form1.confirmarSenha.value != document.form1.senha.value) {
        alert("Preencha campo confirmar senha corretamente!");
        document.form1.confirmarSenha.focus();
        return false;
    }

    {
        alert("Cadastro enviado com sucesso!")
    }
}

