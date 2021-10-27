// Criei uma função fonte para alterar a acessibilidade
function fonte(e) {
// criei uma var e chamei minha class acessibilidade por jQuery
	var elemento = $(".acessibilidade");
	var fonte = parseInt(elemento.css('font-size'));

	var body = $("body");
	const fonteNormal = parseInt(body.css('font-size'));

// Fiz por if (se) as funções de cada butão
	if (e == 'a') {
		fonte++;
	}
	if (e == 'd'){
		fonte--;
	}
// cetei o css para alterar o fonte size (tamanho) na nossa função fonte
	elemento.css("fontSize", fonte);
	
}