class Operacoes {
    soma(num1, num2){
        let resultado = Number(num1) + Number(num2);
        return resultado;
    }
    subtracao(num1, num2){
        let resultado = Number(num1) - Number(num2);
        return resultado;
    }
    multiplicacao(num1, num2){
        let resultado = Number(num1) * Number(num2);
        return resultado;
    }
    divisao(num1, num2){
        let resultado = Number(num1) / Number(num2);
        return resultado;
    }
    raiz(num1){
        let resultado = Math.SQRT2(num1);
        return resultado;
    }
    quadradro(num1){
        let resultado = Math.pow(num1, 2);
        return resultado;
    }
    cubo(num1){
        let resultado = Math.pow(num1, 3);
        return resultado;
    }
}

class Calculadora {
    constructor() {
        this.numerosInseridos = new Array();
    }

    coletarEntrada(e) {
        const elementoAtual = e.currentTarget
        ;

        if(elementoAtual.classList.contains("botaoNumero")){
            this.numerosInseridos.push(elementoAtual.value);
            console.log(this.numerosInseridos)
        } else if(elementoAtual.classList.contains("botaoOperador")){
            
        }
        
    }

    mostrarSaida() {
        $("#input-display").val()
    }
}

const operacoes = new Operacoes();
const calculadora = new Calculadora();
$(".botaoNumero").click((e) => calculadora.coletarEntrada(e))