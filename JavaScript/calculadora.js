class Calculadora{
    constructor() {
        this.dadosInseridos = new Array();
        this.operadoresComuns = ['+', '-', '*', '/'];
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

    calcular() {
        let display = $("#input-display");
        if(this.dadosInseridos.length == 0) {
            return
        }
        const expressãoCompleta = this.dadosInseridos.join('')

        const resultado = Number(eval(expressãoCompleta))

        display.val(resultado);

        this.dadosInseridos.splice(0, this.dadosInseridos.length)
        this.dadosInseridos.push(resultado)

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

    raiz() {
        let numeros = this.dadosInseridos
        let ultimoElemento = numeros[numeros.length - 1]
        if(numeros.length == 0 || typeof ultimoElemento == 'string') {
            this.mostrarErro();
        }
        let resultado = Math.sqrt(ultimoElemento)
        this.dadosInseridos.pop()
        this.dadosInseridos.push(resultado);
        this.mostrarSaida();
    }
    
    quadrado() {
        let numeros = this.dadosInseridos
        let ultimoElemento = numeros[numeros.length - 1]
        if(numeros.length == 0 || typeof ultimoElemento == 'string') {
            this.mostrarErro();
        }
        let resultado = Math.pow(ultimoElemento, 2)
        this.dadosInseridos.pop()
        this.dadosInseridos.push(resultado);
        this.mostrarSaida();
    }

    cubo() {
        let numeros = this.dadosInseridos
        let ultimoElemento = numeros[numeros.length - 1]
        if(numeros.length == 0 || typeof ultimoElemento == 'string') {
            this.mostrarErro();
        }
        let resultado = Math.pow(ultimoElemento, 3)
        this.dadosInseridos.pop()
        this.dadosInseridos.push(resultado);
        this.mostrarSaida();
    }
}

const calculadora = new Calculadora();

$("#raiz").prop('disabled', true).css('cursor', 'not-allowed');
$("#quadrado").prop('disabled', true).css('cursor', 'not-allowed');
$("#cubo").prop('disabled', true).css('cursor', 'not-allowed');

$('.interruptor input').on('click', () => {
    if($('.interruptor input').is(':checked')) {
        $("#raiz").prop('disabled', false).css('cursor', 'pointer');
        $("#quadrado").prop('disabled', false).css('cursor', 'pointer');
        $("#cubo").prop('disabled', false).css('cursor', 'pointer');
    } else {
        $("#raiz").prop('disabled', true).css('cursor', 'not-allowed');
        $("#quadrado").prop('disabled', true).css('cursor', 'not-allowed');
        $("#cubo").prop('disabled', true).css('cursor', 'not-allowed');
    } 
})

$(".botaoNumero, .botaoDecimal, .botaoOperadorComum").click((e) => calculadora.coletarEntrada(e));
$("button[value='apagar']").click(() => calculadora.apagarTodosDados());
$("button[value='remover']").click(() => calculadora.apagarUltimoDado());

$("#raiz").click(() => calculadora.raiz());
$("#quadrado").click(() => calculadora.quadrado());
$("#cubo").click(() => calculadora.cubo());

$("#calcular").click(() => calculadora.calcular());
// $(".botaoOperador").click((e) => calculadora.coletarEntrada(e));