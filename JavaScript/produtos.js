class Modal {
    abrirModal(){
        $("#modalCarrinho").css("display", "block");
    }
    fecharModal(){
        $("#modalCarrinho").css("display", "none");
    }

}
let modal = new Modal
$(".carrinho a").click(modal.abrirModal())
