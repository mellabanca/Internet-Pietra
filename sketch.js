var internet, internetmovel;

function preload(){
  internetmovel = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  internet = createSprite(50, 160, 20, 50);
  internet.addAnimation("correndo", internetmovel);
  internet.scale = 0.5;
  
  borda = createEdgeSprites();
}

function draw(){
  background("white");
  
  if(keyDown("space")){
    internet.velocityY = -10;
  }

  internet.velocityY += 1;

  internet.collide(borda[3]);
  drawSprites();
}
