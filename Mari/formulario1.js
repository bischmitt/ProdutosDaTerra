//OK  -------1. CPF - Validar campo- Chamar um alert se invalido ou campo do formulário (vermelho)
        function _cpf(cpf) {
            cpf = cpf.replace(/[^\d]+/g, '');
            if (cpf == '') return false;
            if (cpf.length != 11 ||
                cpf == "00000000000" ||
                cpf == "11111111111" ||
                cpf == "22222222222" ||
                cpf == "33333333333" ||
                cpf == "44444444444" ||
                cpf == "55555555555" ||
                cpf == "66666666666" ||
                cpf == "77777777777" ||
                cpf == "88888888888" ||
                cpf == "99999999999")
                return false;
            add = 0;
            for (i = 0; i < 9; i++)
                add += parseInt(cpf.charAt(i)) * (10 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(9)))
                return false;
            add = 0;
            for (i = 0; i < 10; i++)
                add += parseInt(cpf.charAt(i)) * (11 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(10)))
                return false;
            return true;
        }
        function validarCPF(el) {
            if (!_cpf(el.value)) {
                alert("CPF inválido!" + el.value);
                // apaga o valor
                el.value = "";
            }
        }

// --------2. Data de Nascimento - Não pode ter idade negativa e mais de 130 anos ( considerar 16/03/ 2021) chamar um alert se invalido ou campo do formulário (vermelho)

var idade = function(idade(){

    if (i<=130){

          }else if (idade > 130; i<0) {
        if (!confirm("Idade incorreta. Por gentileza, verificar")) {
            continue;
        });
    
// OK --------3. CEP - Para completar os campos: Rua, Bairro, Cidade e Estado (através da API ViaCep)
// --------4. Email - ser validado - Chamar um alert se invalido ou campo do formulário (vermelho)


// --------5.  Ao clicar no botão Enviar - Exibir os campos dentro em uma div com a seguinte frase "Ola (nome ) , seu login é (email) e pode usar (CPF) como senha"
function frase() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    // Verificar se existe erro, caso exista return false
    let erro = email;
  }
    if (!verificarEmail()){
        erro = true
return false
    } else {
        document.getElementById('mensagem').innerHTML = `Olá <strong>${nome}</strong>, seu login é <strong>${email}</strong>, pode usar <strong>${cpf}</strong> como senha.`;
    }


// OK --------6. Footer

function mostraParagrafo(){
    $("#btnNews").fadeIn("slow");
}


