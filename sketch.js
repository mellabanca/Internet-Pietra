var internet, internetmovel;
var solo, soloimagem;
function preload(){
internetmovel = loadAnimation("trex1.png","trex3.png","trex4.png");
soloimagem = loadImage("ground2.png");
}
function setup(){
createCanvas(600,200)
internet = createSprite(50, 160, 20, 50);
internet.addAnimation("correndo", internetmovel);
internet.scale = 0.5;
solo = createSprite(200,180,400,20)
solo.addImage("chão",soloimagem);
solo.x = solo.width/2;
borda = createEdgeSprites();
}
function draw(){
background("white");
solo.velocityX = -2;
if(solo.x < 0){
solo.x = solo.width/2;
}
if(keyDown("space")){
internet.velocityY = -10;
}
internet.velocityY += 1;
internet.collide(solo);
drawSprites();
}
