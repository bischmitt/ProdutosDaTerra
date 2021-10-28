// Classe para conter todas as funções da Calculadora

class Calculadora{
    // Criar automaticamente a partir da instância
    constructor() {
        //Lista para todos os operadores e números digitados pelo usuário
        this.dadosInseridos = new Array();
        //Lista para fins de comparação dos operadores
        this.operadoresComuns = ['+', '-', '*', '/'];
    }

    // Método que realiza o fluxo principal da calculadora e recebe como parâmetro o número ou operador digitado.
    main(elemento) {
        // Chama o método que retorna verdadeiro ou falso para validação dos dados inseridos
        if (this.validarDadosInseridos(elemento)) {
            let valor = this.transformarStringEmNumero(elemento)
            // Armazena o valor na lista já criada 
            this.dadosInseridos.push(valor);
            // Retorna os dados na tela
            this.mostrarSaida();
        } else {
            // Retorna mensagem de erro na tela
            this.mostrarErro();
        };
    }
    // Método para receber todos os comandos do usuário 
    coletarEntrada(evento) {
        // Recebe o elemento ativado pelo evento(click)
        const elementoAtual = evento.currentTarget;
        // Envia esse elemento para o método principal continuar com a execução
        this.main(elementoAtual)
    }
    // Método para calcular operações da calculadora simples
    calcular() {
        // Seleciona o elemento na DOM que representa a tela da calculadora
        let display = $("#input-display");
        // Verifica se há dígitos para calcular, se não houver retorna e não continua a execução 
        if(this.dadosInseridos.length == 0) {
            return
        }
        // Transforma todos os números e operadores em uma string
        const expressãoCompleta = this.dadosInseridos.join('')

        // Função global eval recebe uma string e realiza a operação retornando o resultado em string, exemplo: "5+2-3" = "4"
        const resultado = Number(eval(expressãoCompleta))

        // Apresenta na tela o valor do resultado
        display.val(resultado);

        // Remove todos os dígitos e operadores da lista para uma limpeza
        this.dadosInseridos.splice(0, this.dadosInseridos.length)
        // Insere o último resultado na lista
        this.dadosInseridos.push(resultado)
    }
    // Método para mostrar a saída de dígitos e operadores na tela
    mostrarSaida() {
        let display = $("#input-display");
        let dados = this.dadosInseridos;

        display.val(() => {
            return dados.join('');
        });
    }
    // Método para mostrar erro rapidamente na tela
    mostrarErro() {
        $("#input-display").val("Erro! Digite de novo.");
        setTimeout(() => this.mostrarSaida(), 1000)
    }

    // Método para fazer a transformação e evitar alguns erros
    transformarStringEmNumero(elemento) {
        if (elemento.classList.contains("botaoNumero")) {
            const numero = Number(elemento.value);
            return numero;
        } else {
            return elemento.value;
        }
    }
    // Método para validação de números e operadores inseridos
    validarDadosInseridos(elemento) {
        const operador = elemento.classList.contains("botaoOperadorComum") 
        const pontoDecimal = elemento.classList.contains("botaoDecimal");

        // Validando se a lista de dígitos está vazio e o primeiro elemento inseridos é um operador
        if (this.dadosInseridos.length == 0 && operador) {
            return false

        } else if (this.dadosInseridos.length > 1 && operador) {
            // Validando se a lista de dados possui dígitos e se o último elemento é um operador
            let ultimoElemento = this.dadosInseridos[this.dadosInseridos.length - 1];
            let tipoDoUltimoElemento = typeof ultimoElemento;
            let tipoDoElementoAtual = typeof elemento.value

            // Caso o usuário insira um operador logo em seguida de outro, troca pelo último inserido
            let trocandoOperador = tipoDoElementoAtual == tipoDoUltimoElemento 
            
            if(trocandoOperador) {
                this.dadosInseridos.splice(this.dadosInseridos.length - 1, 1);
            }

            return true;
            
        } else if(pontoDecimal) {
            // Evitar pontos decimais duplicados inseridos pelo usuário
            return this.dadosInseridos.indexOf('.') < 0 ? true : false;

        } else {
            return true
        }
    };

    // Método para remover o último dígito 
    apagarUltimoDado() {
        // Remove o último dígito na lista
        this.dadosInseridos.splice(this.dadosInseridos.length - 1, 1);
        // Remove da DOM o último dígito
        this.mostrarSaida();
    }

    // Método para remover todos os dígitos
    apagarTodosDados() {
        // Remove todos dígitos na lista
        this.dadosInseridos.length = 0;
        // Remove da DOM todos os dígitos
        this.mostrarSaida();
    }

    // Método para realizar operação de raiz
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
    
    // Método para realizar operação ao quadrado
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

    // Método para realizar operação ao cubo
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

// Criando a instância da classe Calculadora
const calculadora = new Calculadora();

// Atualizando a DOM para bloquear os botões da calculadora científica

$("#raiz").prop('disabled', true).css('cursor', 'not-allowed');
$("#quadrado").prop('disabled', true).css('cursor', 'not-allowed');
$("#cubo").prop('disabled', true).css('cursor', 'not-allowed');

// Adicionando evento de click e validação para o botão da calculadora científica para ativar operações de raiz, quadrado e cubo.
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

// Adicionando eventos de click para executar métodos do objeto calculadora
$(".botaoNumero, .botaoDecimal, .botaoOperadorComum").click((e) => calculadora.coletarEntrada(e));
$("button[value='apagar']").click(() => calculadora.apagarTodosDados());
$("button[value='remover']").click(() => calculadora.apagarUltimoDado());

$("#raiz").click(() => calculadora.raiz());
$("#quadrado").click(() => calculadora.quadrado());
$("#cubo").click(() => calculadora.cubo());

// Evento de click para o botão "=" chamar o método e realizar as operações
$("#calcular").click(() => calculadora.calcular());
