class Modal {
    abrirModal() {
        $("#modalCarrinho").css("display", "block");
    }
    fecharModal() {
        $("#modalCarrinho").css("display", "none");
    }

}

let modal = new Modal()

$("#abrirModal").click(function () {
    modal.abrirModal()
})

$("#but1").click(function () {
    modal.fecharModal()
})

$("#but2").click(function () {
    location.href = "formulario1.html";
});


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
    }
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

    notificarUsuario() {
        if (this.itensDoCarrinho.length > 0) {
            $('#car').text(this.itensDoCarrinho.length).show()
        } 
    }
   
       

    validarCarrinho(idProduto) {
        if (this.itensDoCarrinho.length == 0) {
            return true
        } else {
            let listaDeId = this.itensDoCarrinho.map(item => item.id)
            let verificaId = listaDeId.includes(idProduto, 0)
            return !verificaId
        }

    }

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
            imgDelete.setAttribute("onclick", "produto.deletar(" + this.itensDoCarrinho[i].id + ")");

        }
        

    }

    calcularPrecoTotal(preco, quantidade) {
        let resultado = Number(preco) * Number(quantidade)
        return (resultado).toFixed(2)
    }

    // mudarPrecoTotal(e) {
    //     $("#qtd").html()
    //     console.log(e.target.value)
    // }



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

}
let produto = new Produto()

$("#qtd").change(() => {

})







