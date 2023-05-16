function setup() {
  createCanvas(800, 500);
  somTrilha.loop();
}


function draw() {
  background(imagemRodovia);
  desenhoAtor();
  movimentoAtor();
  verificaColisao();
  movimentoCarros();
  loopCarros();
  desenhoCarros();
  mostraPontos();
  adicionaPonts();

}