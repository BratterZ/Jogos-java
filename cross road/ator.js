//Ator
let xAtor = 150;
let yAtor = 462;
let widthAtor = 35;
let heigthAtor = 30;
let hit = false;
let meusPontos = 0;


function desenhoAtor(){
  image(imagemAtor, xAtor, yAtor, widthAtor, heigthAtor);
}

function movimentoAtor(){  
  if(keyIsDown (UP_ARROW)){
    yAtor -= 1.5;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(limiteTela()){
      yAtor += 1.5;
      }
    }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 1;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 1;
  }
}

function voltarPosicao(){
  xAtor = 150;
  yAtor = 462;
}


function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], widthCarros, heigthCarros, xAtor, (yAtor + 16), 26)
    if (colisao){
      somFreiada.play();
      voltarPosicao();
      meusPontos  -= 1;
      somBuzina.play();
      somMorte.play();
      pontosMin();
    }
  }
}

function pontosMin(){
  if (meusPontos <= 0){
    meusPontos = 0;
  }
}

function mostraPontos(){
  fill(color(139,69,19));
  textAlign(CENTER);
  textSize(25);
  text (meusPontos,400, 30);
}

function adicionaPonts(){
  if (yAtor < 20){
    meusPontos += 1;
    voltarPosicao();
    somVitoria.play();
  }
  if (meusPontos >= 10){
    somVitoria.play();
    fill (color(0));
    textAlign(CENTER);
    textSize(100);
    text("GANHOU!!!", 400, 250)
  }
    
}

function limiteTela(){
  return yAtor < 490;
}
