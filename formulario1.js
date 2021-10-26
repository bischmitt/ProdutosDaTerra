//  -------1. CPF - Validar campo- Chamar um alert se invalido ou campo do formulário (vermelho)
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
// Criei uma função validarNascimento, abri e fechei o parametro.

// --------3. CEP - Para completar os campos: Rua, Bairro, Cidade e Estado (através da API ViaCep)
// const apresentaDados = (resultado) =>{
//     for(let campo in resultado){
//         if(document.querySelector("#"+campo)){
//             console.log(campo);
//             document.querySelector("#"+campo).value = resultado[campo];
//         }
//     }
// }
// function consultaCep(){
//     let cepDigitado = document.getElementById("cep");
    
//     if(cepDigitado.value == "") {
//         cepDigitado.style.border = "1px solid red";
//     }else{
//         let cepProcurado = cepDigitado.value.replace("-","");
//         console.log(cepProcurado);

//         fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`)
//         .then(response => {response.json()
//         .then(data => console.log(apresentaDados(data)))
//         })
//         .catch(x => console.log("CEP não encontrado!"))
//     }
// }
// --------4. Email - ser validado - Chamar um alert se invalido ou campo do formulário (vermelho)

// --------5.  Ao clicar no botão Enviar - Exibir os campos dentro em uma div com a seguinte frase "Ola (nome ) , seu login é (email) e pode usar (CPF) como senha"



