
function paint() {

    function desenhaQuadrado(x, y, tamanho, cor) {

        pincel.fillStyle = cor;
        pincel.fillRect(x, y, tamanho, tamanho)
        pincel.fill();
    }

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();

    }

    function desenhaPaletaDeCores() {

        desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
        desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
        desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');
        desenhaQuadrado(xAmarelo, yQuadrados, tamanhoQuadrados, 'yellow');

    }

    function lidaComMovimentoDoMouse(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

        if(desenha && podeDesenharNaArea(x,y)) {

            desenhaCirculo(x, y, 5, corAtual);
        }
    }

    function habilitaDesenhar() {

        desenha = true;
    }

    function desabilitaDesenhar() {

        desenha = false;
    }

    function podeDesenharNaArea(x, y) {

        if(x >= 0 && x < 3*tamanhoQuadrados && y >= 0 && y < tamanhoQuadrados) {
            return false;
        } else {
            return true;
        }

    }

    function trocaCor(evento){

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

        if (y > yQuadrados && y < yQuadrados + tamanhoQuadrados) {

            if (x > xVermelho && x < xVermelho + tamanhoQuadrados) {

                corAtual = 'red';

            } else if (x > xVerde && x < xVerde + tamanhoQuadrados) {

                corAtual = 'green';

            } else if (x > xAzul && x < xAzul + tamanhoQuadrados) {

                corAtual = 'blue';
            } else if (x > xAmarelo && x < xAmarelo + tamanhoQuadrados){

                corAtual = 'yellow';
            }

        }


    }

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'white';
    pincel.fillRect(0, 0, 1200, 800);

    var desenha = false;
    var corAtual = 'blue';
    var xVermelho = 0;
    var xVerde  = 50;
    var xAzul = 100;
    var xAmarelo = 150;
    var yQuadrados = 0;
    var tamanhoQuadrados = 50;

    desenhaPaletaDeCores(); // mostra os quadrados de seleção de cores

    tela.onmousemove = lidaComMovimentoDoMouse;

    tela.onmousedown = habilitaDesenhar;

    tela.onmouseup = desabilitaDesenhar;

    tela.onclick = trocaCor;

}