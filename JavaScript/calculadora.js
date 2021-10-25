class Operacoes {
    soma(num1, num2) {
        let resultado = Number(num1) + Number(num2);
        return resultado;
    }
    subtracao(num1, num2) {
        let resultado = Number(num1) - Number(num2);
        return resultado;
    }
    multiplicacao(num1, num2) {
        let resultado = Number(num1) * Number(num2);
        return resultado;
    }
    divisao(num1, num2) {
        let resultado = Number(num1) / Number(num2);
        return resultado;
    }
    raiz(num1) {
        let resultado = Math.SQRT2(num1);
        return resultado;
    }
    quadrado(num1) {
        let resultado = Math.pow(num1, 2);
        return resultado;
    }
    cubo(num1) {
        let resultado = Math.pow(num1, 3);
        return resultado;
    }
}

class Calculadora {
    constructor() {
        this.dadosInseridos = new Array();
    }

    calcular() {
        if(this.dadosInseridos.length == 0) {
            return
        }
        let operacaoCompleta = this.dadosInseridos;
        console.log(operacaoCompleta);
        
    }

    coletarEntrada(e) {
        const elementoAtual = e.currentTarget;

        if (this.validarDadosInseridos(elementoAtual)) {
            let valor = this.transformarStringEmNumero(elementoAtual);
            this.dadosInseridos.push(valor);
            this.mostrarSaida();
        } else {
            this.mostrarErro();
        };

    }

    mostrarSaida() {
        let display = $("#input-display");
        let dados = this.dadosInseridos;

        display.val(() => {
            return dados.join('');
        });
    }

    mostrarErro() {
        $("#input-display").val("Erro! Digite de novo.");
        setTimeout(() => this.mostrarSaida(), 1000)
    }

    transformarStringEmNumero(elemento) {
        if (elemento.classList.contains("botaoNumero")) {
            const numero = Number(elemento.value);
            return numero;
        } else {
            return elemento.value;
        }

    }

    validarDadosInseridos(elemento) {
        const operador = elemento.classList.contains("botaoOperadorComum") 
        const pontoDecimal = elemento.classList.contains("botaoDecimal");

        if (this.dadosInseridos.length == 0 && operador) {
            return false

        } else if (this.dadosInseridos.length > 1 && operador) {
            let ultimoElemento = this.dadosInseridos[this.dadosInseridos.length - 1];
            let tipoDoUltimoElemento = typeof ultimoElemento;
            let tipoDoElementoAtual = typeof elemento.value

            let trocandoOperador = tipoDoElementoAtual == tipoDoUltimoElemento 
            
            if(trocandoOperador) {
                this.dadosInseridos.splice(this.dadosInseridos.length - 1, 1);
            }

            return true;
            
        } else if(pontoDecimal) {
            return this.dadosInseridos.indexOf('.') < 0 ? true : false;

        } else {
            return true
        }
    };

    apagarUltimoDado() {
        this.dadosInseridos.splice(this.dadosInseridos.length - 1, 1);
        this.mostrarSaida();
    }

    apagarTodosDados() {
        this.dadosInseridos.length = 0;
        this.mostrarSaida();
    }
}

const operacoes = new Operacoes();
const calculadora = new Calculadora();

$(".botaoNumero, .botaoDecimal, .botaoOperadorComum").click((e) => calculadora.coletarEntrada(e));
$("button[value='apagar']").click(() => calculadora.apagarTodosDados());
$("button[value='remover']").click(() => calculadora.apagarUltimoDado());
$("#calcular").click(() => calculadora.calcular());
// $(".botaoOperador").click((e) => calculadora.coletarEntrada(e));