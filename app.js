//FUNÇÃO PARA MOUSE ACENDER E APAGAR LANTERNA
function acendeLanterna(){
	document.getElementById('cliqueMouse').className = 'cliqueMouse2'
}

function apagaLanterna(){
	document.getElementById('cliqueMouse').className = 'cliqueMouse1'
}

//------------------------------------------

var altura = 0
var largura = 0
var vidas = 1
var tempo = 25
var criarMonstroTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?','')

//CONDIÇÃO PARA ALTERAR O NÍVEL DE VELOCIDADE DO JOGO

if(nivel === 'facil'){
	criarMonstroTempo = 1500
}
if(nivel === 'moderado'){
	criarMonstroTempo = 1000
}
if(nivel === 'impossivel'){
	criarMonstroTempo = 250
}

//FUNÇÃO CRONOMETRO

var cronometro = setInterval(function(){

	tempo -=1
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criarMonstro)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}

}, 1000)

//FUNÇÃO DE AJUSTE, CAPTURA AS DIMENSÕES DA TELA

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//FUNÇÃO DE POSICIONAMENTE ALEATÓRIO DO OBJETO HTML

function posicaoRandomica(){

	//REMOVER MONSTRO
	if(document.getElementById('monstro')){
		//
		document.getElementById('monstro').remove()

		if (vidas > 5) {
			window.location.href = 'derrota.html'
		}
		else {
			document.getElementById('v' + vidas).src = "img/lanterna/lanterna_apagada.png"
		}

		vidas++
	} 

	//FUNÇÃO POSIÇÃO RANDÔMICA
	var posicaoX = Math.floor(Math.random() * largura) - 150
	var posicaoY = Math.floor(Math.random() * altura) - 150

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//CRIAR ELEMENTO HTML
	var monstro = document.createElement('img')
	monstro.src = mudaMonstro()
	monstro.className = 'tamanho'
	monstro.style.left = posicaoX + 'px'
	monstro.style.top = posicaoY + 'px'
	monstro.style.position = 'absolute'
	monstro.id = 'monstro'
	monstro.onmousedown = function(){
		document.getElementById('monstro').className = 'opacidadeMonstro'
		this.remove()
	}


	//INCLUIR ELEMENTO HTML CRIADO AO BODY
	document.body.appendChild(monstro)

}


// FUNÇÃO QUE ALTERNA OS MONSTROS 

function mudaMonstro(){
	var numeroMonstro = Math.floor(Math.random() * 5)
	console.log(numeroMonstro)

	if (numeroMonstro === 0) {
		return 'img/monstro/monstro1.png'
	}
	if (numeroMonstro === 1) {
		return 'img/monstro/monstro2.png'
	}
	if (numeroMonstro === 2) {
		return 'img/monstro/monstro3.png'
	}
	if (numeroMonstro === 3) {
		return 'img/monstro/monstro4.png'
	}
	if (numeroMonstro === 4) {
		return 'img/monstro/monstro5.png'
	}
}