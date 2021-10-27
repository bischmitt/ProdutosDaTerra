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
$('#date').val("2021-10-27");
function validarData(evento) {
const dataUsuario = evento.target.value;
const data = new Date();
const dataAtual = data.getFullYear();

const menorData = dataAtual - 130;
const maiorData = new Date('March 16, 2021');

if(dataUsuario < menorData || dataUsuario > maiorData){
alert('Data invalida')
}

}


// OK --------3. CEP - Para completar os campos: Rua, Bairro, Cidade e Estado (através da API ViaCep)
const apresentaDados = (resultado) => {
for (let campo in resultado) {
if (document.querySelector("#" + campo)) {
    console.log(campo);
    document.querySelector("#" + campo).value = resultado[campo]
}
}
}

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
// --------4. Email - ser validado - Chamar um alert se invalido ou campo do formulário (vermelho)
function enviarDados1() {
if (document.form.email.value == "" || document.form.email.value.length < 8) {
alert("Preencha campo email corretamente!");
document.form.email.focus();
return false;
}
}

// --------5.  Ao clicar no botão Enviar - Exibir os campos dentro em uma div com a seguinte frase "Ola (nome ) , seu login é (email) e pode usar (CPF) como senha"



// OK --------6. Footer

function mostraParagrafo(){
$("#btnNews").fadeIn("slow");
}

//FUNÇÃO PARA VALIDAÇÃO TOTAL
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
alert("Preencha o campo Município corretamente!");
document.form1.localidade.focus();
return false;
}

if (document.form1.cep.value == "" || document.form1.cep.value.length < 7 ) {
alert("Preencha o  campo CEP corretamente!");
document.form1.cep.focus();
return false;
}

if (document.form1.logradouro.value == "" || document.form1.logradouro.value.length < 5) {
alert("Preencha o campo Endereço corretamente!");
document.form1.logradouro.focus();
return false;
}

if (document.form1.complemento.value == ""){
alert("Preencha o campo complemento corretamente!");
document.form1.complemento.focus();
return false;
}

if (document.form1.cpf.value == "" || document.form1.cpf.value.length < 5) {
alert("Preencha campo CPF corretamente!");
document.form1.cpf.focus();
return false;
}

{
alert("Cadastro enviado com sucesso!")
}
}

//********************CÓDIGO PARA O NEWSLETTER************************/
function mostrarParagrafo() {
$(".escondido").slideDown("slow").toggle();

}