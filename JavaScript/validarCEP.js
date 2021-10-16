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