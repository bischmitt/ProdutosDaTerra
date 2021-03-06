//Criação de uma classe Modal. Aplicação do CSS utilizando display para esconder o modal. 
class Modal {
    abrirModal() {
        $("#modalCarrinho").css("display", "block");
    }
    fecharModal() {
        $("#modalCarrinho").css("display", "none");
    }

}
// Criação de uma variável local e atribuindo funções click para abrir e fechar o modal como também mudar de página.
let modal = new Modal()

$("#abrirModal").click(function () {
    modal.abrirModal()
})

$("#but1").click(function () {
    modal.fecharModal()
})

$("#but2").click(function () {
    location.href = "formulario.html";
});

//Criação de uma Classe Produto e adicionando uma lista de produtos com id, nome, preço e quantidade.
class Produto {
    constructor() {
        this.todosOsProdutos = [
            {
                id: 1,
                nome: "Banana",
                preco: 5.50,
                quantidade: 0.5,

            },
            {
                id: 2,
                nome: "Chuchu",
                preco: 3.50,
                quantidade: 0.5,

            },
            {
                id: 3,
                nome: "Maracujá",
                preco: 8.00,
                quantidade: 0.5,

            },
            {
                id: 4,
                nome: "Pimentão Amarelo",
                preco: 5.50,
                quantidade: 0.5,

            },
            {
                id: 5,
                nome: "Pimentão Verde",
                preco: 4.25,
                quantidade: 0.5,

            },
            {
                id: 6,
                nome: "Pimentão Vermelho",
                preco: 5.75,
                quantidade: 0.5,

            },
            {
                id: 7,
                nome: "Pitaya Branca",
                preco: 8.50,
                quantidade: 0.5,

            },
            {
                id: 8,
                nome: "Pitaya Rosa",
                preco: 10.20,
                quantidade: 0.5,

            },
            {
                id: 9,
                nome: "Quiabo",
                preco: 5.50,
                quantidade: 0.5,

            },
        ]
        this.itensDoCarrinho = new Array()
        console.log(this.itensDoCarrinho)
    }
    //Método Criado para validar os produtos e inclui-los na tabela toda vez que clicar no botão adicionar
    enviarParaCarrinho(idEscolhido) {
        let idDoProdutoEscolhido = idEscolhido;

        if (this.validarCarrinho(idEscolhido)) {
            this.todosOsProdutos.forEach(produto => {
                if (produto.id == idEscolhido) {
                    let quantidadeDoProdutoEscolhido = $(".item" + idEscolhido + " .pesokg").val()
                    Number(quantidadeDoProdutoEscolhido) == 0 ? 0.5 : produto.quantidade = Number(quantidadeDoProdutoEscolhido);
                    this.itensDoCarrinho.push(this.todosOsProdutos[idEscolhido - 1])
                }
            })

            this.enviarParaTabela(idDoProdutoEscolhido)

            $(".item" + idEscolhido + " .pesokg").val("")
        }



    }
    //Metodo criado para mostrar ao usuário todo vez que um item é adicinado ao carrinho
    notificarUsuario() {
        if (this.itensDoCarrinho.length > 0) {
            $('#car').text(this.itensDoCarrinho.length).show()
        } else {
            this.carrinhoVazio()
        }
    }

    carrinhoVazio() {
        $('#car').text('0').css("display", "none")
    }


    //Método criado para validar o produto através do if e else e adicioná-lo uma única vez no carrinho
    validarCarrinho(idProduto) {
        if (this.itensDoCarrinho.length == 0) {
            return true
        } else {
            let listaDeId = this.itensDoCarrinho.map(item => item.id)
            let verificaId = listaDeId.includes(idProduto, 0)
            return !verificaId
        }

    }
    //Método criado para adicionar os produtos no modal carrinho através de uma tabela com linhas e colunas
    enviarParaTabela(idEscolhido) {
        // declaração de uma variável para referenciar o tbody da tabela
        let tbody = document.getElementById("tbody");

        // limpar a tabela antes de ser mostrada 
        tbody.innerText = "";

        //loop para percorrer o array de Produtos
        for (let i = 0; i < this.itensDoCarrinho.length; i++) {
            // inserir um nova linha no tbody
            let novaLinha = tbody.insertRow();

            // criar cada coluna(célula) de cada linha
            let td_id = novaLinha.insertCell();
            let td_nome = novaLinha.insertCell();
            let td_quantidade = novaLinha.insertCell();
            let td_preco = novaLinha.insertCell();
            let td_precoTotal = novaLinha.insertCell();
            let td_acoes = novaLinha.insertCell();

            //alimentar as células
            td_id.innerText = this.itensDoCarrinho[i].id;
            td_nome.innerText = this.itensDoCarrinho[i].nome;
            $('<input id="qtd" type="number" min="0.5" step="0.1">').val(this.itensDoCarrinho[i].quantidade).appendTo(td_quantidade)
            td_preco.innerText = this.itensDoCarrinho[i].preco;
            td_precoTotal.innerText = this.calcularPrecoTotal(this.itensDoCarrinho[i].preco, this.itensDoCarrinho[i].quantidade);

            //para adiconar uma classe (.center) as colunas
            td_id.classList.add("center");
            td_acoes.classList.add("center");

            // criando um elemento de imagem para ser colocado na quarta coluna da linha
            let imgDelete = document.createElement("img");
            // atribuindo a esse elemento o caminho
            imgDelete.src = "../Imagens/delete.png";
            //adicionando um filho para a quarta coluna
            td_acoes.appendChild(imgDelete);

            //atribuir um método para imgDelete através do setAttribute como os parâmetros: ("evento", método)
            imgDelete.setAttribute("onclick", "produto.deletar(" + this.itensDoCarrinho[i].id + "), produto.notificarUsuario()");

        }


    }
    //Método criado para realizar o cálculo do produto e mostrar no carrinho para o usuário
    calcularPrecoTotal(preco, quantidade) {
        let resultado = Number(preco) * Number(quantidade)
        return (resultado).toFixed(2)
    }


    //Método criado para que o usuário possa deletar qualquer item no carrinho.
    deletar(id) {
        if (confirm("Deseja realmente deletar o produto de id " + id)) {
            for (let i = 0; i < this.itensDoCarrinho.length; i++) {
                if (this.itensDoCarrinho[i].id == id) {
                    this.itensDoCarrinho.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
    }

    // mudarPrecoTotal() {
    //     let mudarQtd = document.getElementsById("pesokg");
    //     let valorUnitario = document.getElementsByClassName("preco");
    //     let valorNovo = Number(mudarQtd) * Number(valorUnitario);
    //     return (valorNovo);
    //     // console.log(valorNovo)
    //     // console.log(mudarValor)
    //     // console.log(valorUnitario)
        
        
    // }




}
let produto = new Produto()









