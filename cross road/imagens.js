//Codigos de imagens

let imagemRodovia;
let imorteor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//codigos de sons

let somMorte;
let somVitoria;
let somFreiada;
let somBuzina;
let somTrilha;

function preload(){
  imagemRodovia = loadImage("Imagens/estrada.png");
  imagemAtor = loadImage("Imagens/ator-1.png");
  imagemCarro1 = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  somMorte = loadSound("sons/muU.wav");
  somVitoria = loadSound("sons/vitoria.wav");
  somTrilha = loadSound("sons/trilha.mp3");
  somBuzina = loadSound("sons/buzina.wav");
  somFreiada = loadSound("sons/freiada.wav");
}
