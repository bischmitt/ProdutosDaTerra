// Função para o menu abrir e fechar
$(document).ready(function() {
	$("body").on('click', '.menuHamburguer', function() {
		$("nav.menu").toggleClass("exibe_menu");
	});
});


// Lista de imagens a serem exibidas
let vtBanner = ["../Imagens/banner1.png", "../Imagens/banner2.png", "../Imagens/banner3.png", "../Imagens/banner4.png"];
let max = vtBanner.length - 1;
let i = 0;

$("#btnAnte").prepend($('<img>', {src: '../Imagens/arrowleft.svg'}));
$("#btnProx").prepend($('<img>', {src: '../Imagens/arrowright.svg'}));
// quando a gente chama o css no js, as propriedades que tem palavras compostas tira o hifen e coloca a letra maiuscula, colocando a palabra em camelCase.
$("#banner").css("backgroundImage", "url(" + vtBanner[0] + ")");

$("#btnAnte").click(function () {
    troca(-1);
})

$("#btnProx").click(function () {
    troca(1);
})
setInterval(() => troca(1), 4000)

function troca(opr) {
    $("#banner").css("backgroundImage", "url(" + vtBanner[i] + ")").fadeIn(1000, function () {
        i += opr;
        if (i > max) {
            i = 0;
        } else if (i < 0) {
            i = max;
        }
        $("#banner").css("backgroundImage", "url(" + vtBanner[i] + ")").fadeIn(1000);
        $("#b" + i).prop("checked", true);
    });
}

$("input[name='banners']").click(function () {
    let getNumber = $("input[name='banners']:checked").val()
    console.log(getNumber)
    $("#banner").css("backgroundImage", "url(" + vtBanner[getNumber] + ")").fadeIn(1000);
})

