const apresentaDados = (resultado) => {
    for (let campo in resultado) {
        if (document.querySelector("#" + campo)) {
            console.log(campo);
            document.querySelector("#" + campo).value = resultado[campo]
        }
    }
}

//função para validar o CEP especificamente
function consultaCEP() {
    let cepDigitado = document.getElementById("cep");

    if (cepDigitado.value == "") {
        cepDigitado.style.border = "1px solid red";
    } else {
        //tira o que tá no primeiro parâmetro e insere o que está no segundo. Nessa situação o - do CEP é apagado, caso retirado
        let cepProcurado = cepDigitado.value.replace("-", "");
        console.log(cepProcurado);

        fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`)
            .then(response => {
                response.json()
                    .then(data => console.log(apresentaDados(data)));
            })
            .catch(x => console.log("CEP não encontrado!!"));
    }
}

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

    if (document.form1.sobrenome.value == "" || document.form1.sobrenome.value.length < 3) {
        alert("Preencha campo sobrenome corretamente!");
        document.form1.sobrenome.focus();
        return false;
    }

    if (document.form1.dataNascimento.value == "" || document.form1.dataNascimento.value.length) {
        alert("Preencha campo email corretamente!");
        document.form1.dataNascimento.focus();
        return false;
    }

    if (document.form1.numeroContato.value == "" || document.form1.numeroContato.value.length < 10) {
        alert("Preencha campo Celular corretamente!");
        document.form1.numeroContato.focus();
        return false;
    }

    if (document.form1.email.value == "" || document.form1.email.value.length < 8) {
        alert("Preencha campo email corretamente!");
        document.form1.email.focus();
        return false;
    }

    if (document.form1.municipio.value == "" || document.form1.municipio.value.length) {
        alert("Preencha campo CEP corretamente!");
        document.form1.municipio.focus();
        return false;
    }

    if (document.form1.endereco.value == "" || document.form1.endereco.value.length < 5) {
        alert("Preencha campo Celular corretamente!");
        document.form1.endereco.focus();
        return false;
    }

    if (document.form1.complemento.value == "" || document.form1.complemento.value.length < 8) {
        alert("Preencha campo email corretamente!");
        document.form1.complemento.focus();
        return false;
    }

    if (document.form1.senha.value == "" || document.form1.senha.value.length < 10) {
        alert("Preencha campo senha corretamente!");
        document.form1.senha.focus();
        return false;
    }

    if (document.form1.senha.value == "" != document.form1.confirmarSenha.value) {
        alert("Preencha campo confirmar senha corretamente!");
        document.form1.confirmarSenha.focus();
        return false;
    }

    {
        alert("Cadastro enviado com sucesso!")
    }
}

