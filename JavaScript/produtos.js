class Modal {
    abrirModal(){
        $("#modalCarrinho").css("display", "block");
    }
    fecharModal(){
        $("#modalCarrinho").css("display", "none");
    }

}

let modal = new Modal()

$("#abrirModal").click(function(){
    modal.abrirModal()
})

$("#but1").click(function(){
    modal.fecharModal()
})

class Produto {
    constructor(){
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
    enviarParaCarrinho(idEscolhido){
        this.todosOsProdutos.forEach(produto =>{
            if(produto.id == idEscolhido){
                let quantidadeDoProdutoEscolhido = $(".item" + idEscolhido + " .pesokg").val()
                produto.quantidade = Number(quantidadeDoProdutoEscolhido)
                this.itensDoCarrinho.push(this.todosOsProdutos[idEscolhido - 1])
            }
        })
    }
}
let produto = new Produto()
console.log(produto.itensDoCarrinho)
