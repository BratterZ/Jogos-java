  let xCarros = [770, 770, 770, 770, 770, 770];
  let yCarros = [60, 125, 190, 270, 330, 400];
  let veloCarros = [5.6, 6.2, 5.8, 5.4, 6.0, 6.4];
  let alteraVelo = [0.2, 0.1, -0.2, 0.1, 0.2, -0.1];
  let widthCarros = 45;
  let heigthCarros = 40;
  let widthRaio = widthCarros / 2;
  

//Funções dos carros

function desenhoCarros(){
  for (let i = 0; i < imagemCarros.length; i += 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], widthCarros, heigthCarros);
  }
}


function movimentoCarros(){
  
  for (let i = 0; i<imagemCarros.length; i +=1){
    xCarros[i] -= veloCarros[i];
  }
}



function loopCarros(){
  
  for (let i = 0; i <imagemCarros.length; i +=1){
     if (xCarros[i] + widthRaio < -30){
    xCarros[i] = 800 + widthRaio;
    veloCarros[i] += alteraVelo [i];
  }
}
  
// Carro 1  
  if (veloCarros[0] > 6.4){
    veloCarros[0] = 5.8;
  }
  
// Carro2 
  if(veloCarros[1] > 7.4){
    veloCarros[1] = 6.2;
  }
  
//Carro3
  if (veloCarros[2] < 4.6){
    veloCarros[2] = 6.2;
  }
  
//Carro4
 if (veloCarros[3] > 5.6){
    veloCarros[3] = 5.0;
  }
//Carro5
if (veloCarros[4] > 6.4){
    veloCarros[4] = 5.6;
  }
  
//Carro6
if (veloCarros[5] < 5.2){
    veloCarros[5] = 6.4;
  }
}