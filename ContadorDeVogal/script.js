//Função que mostra o texto é pula linha
function pularLinhaEmostrarTexto(palavras){
	document.write(palavras);
	document.write("<br><hr>");
	
}

const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "Á", "á", "é", "É", "í", "Í", "Ú", "ú"];
//pularLinhaEmostrarTexto(vogais);


//Pegando o input do usuário do mundo Html é passando para o JS
const entradaUsuario = document.querySelector("input");
entradaUsuario.focus();


//Criando a função verificadorDeVogais
function verificadorDeVogais(){
	
	//Criando a váriavel quantidadeVogais para armazenar quantas vogais há
	var quantidadeVogais = 0;
	
	//Passado entradaUsuario.value
	var texto = entradaUsuario.value;
	
	//Criando o loop para verficar as vogais é ir comparando com a palavra do usuário
	for(var posicao = 0; posicao < vogais.length; posicao++){
		if(vogais.includes(texto[posicao])){
			
		//váriavel que armazena a quantidade vogais
		quantidadeVogais++;
		
		}
	}
	
	//Exibindo para o usário
	pularLinhaEmostrarTexto("Aqui está as vogais: " + quantidadeVogais);
	
	entradaUsuario.value = "";
	entradaUsuario.focus();
	
}

const botaoSaida = document.querySelector("button");
botaoSaida.onclick = verificadorDeVogais;
