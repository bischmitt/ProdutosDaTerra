// Função para o menu abrir e fechar
$(document).ready(function() {
	$("body").on('click', '.menuHamburguer', function() {
		$("nav.menu").toggleClass("exibe_menu");
	});
});

// Função para aplicar efeito nos links do menu
/* $(".item_menu").click(function(){
    // Na função aplico esse click dentro de um parágrafo e uso o fadeTo para inserir um efeito, com velocidade, que são os 1000 milissegundos e opacidade, que são o 0.4.
    $(".item_menu").fadeTo(1000, 0.5);
}) */

/*     $(".logo").click(function () {
        $(".logo").animate({
            position: 'relative',
            left: '500px',
            transition: '3000ms',
    }); */



// Lista de imagens a serem exibidas
let vtBanner = ["Imagens/banner1_metade.png", "Imagens/banner2.png", "Imagens/banner3_metade.png", "Imagens/banner4.png"];
let max = vtBanner.length - 1;
let i = 0;

$("#btnAnte").prepend($('<img>', {/* src: '../Imagens/arrowleft.svg' */}));
$("#btnProx").prepend($('<img>', {/* src: '../Imagens/arrowright.svg' */}));
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

//********************CÓDIGO PARA O BANNER ROTATIVO************************/
function mostrarParagrafo() {
     $(".escondido").slideDown("slow").toggle();

}
//********************CÓDIGO PARA MOSTRAR DESCRIÇÃO DOS DESENVOLVEDORES******************** */
function mostrar1() {
    $(".escondido, .esconder1").slideDown("slow").toggle();
}
function mostrar2() {
    $(".escondido, .esconder2").slideDown("slow").toggle();
}
function mostrar3() {
    $(".escondido, .esconder3").slideDown("slow").toggle();
}
function mostrar4() {
    $(".escondido, .esconder4").slideDown("slow").toggle();
}