function tiroAoAlvo() {

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    var xAleatorio;
    var yAleatorio;

    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 1200, 800);

    var raio = 10;

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
   }

    function limpaTela() {

	    pincel.clearRect(0, 0, 1200, 800);
    }

    function desenhaAlvo(x, y) {

	    desenhaCirculo(x, y, raio+20, 'red');
	    desenhaCirculo(x, y, raio+10, 'white');
	    desenhaCirculo(x, y, raio, 'red');
    }

    function sorteiaPosicao(maximo) {

        return Math.floor(Math.random() * maximo);
    }

    function atualizaTela() {

	    limpaTela();
	    xAleatorio = sorteiaPosicao(1200);
	    yAleatorio = sorteiaPosicao(800);
	    desenhaAlvo(xAleatorio, yAleatorio);
	}

    setInterval(atualizaTela, 1000);

    function dispara(evento){

    	var x = evento.pageX - tela.offsetLeft;
    	var y = evento.pageY - tela.offsetTop;

    	if((x > xAleatorio - raio) && 
    		(x < xAleatorio + raio) && 
    		(y > yAleatorio - raio) && 
    		(y < yAleatorio + raio)){

    		alert("acertou");
    	}
    }

    tela.onclick = dispara;

}