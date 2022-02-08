var internet, internetmovel;
var areia, areiamovedica;
function preload(){
internetmovel = loadAnimation("trex1.png","trex3.png","trex4.png");
areiamovedica = loadImage("ground2.png");
}
function setup(){
createCanvas(600,200)
internet = createSprite(50, 160, 20, 50);
internet.addAnimation("correndo", internetmovel);
internet.scale = 0.5;
areia = createSprite(200,180,400,20)
areia.addImage("chão",areiamovedica);
areia.x = areia.width/2;
borda = createEdgeSprites();
}
function draw(){
background("white");
areia.velocityX = -2;
if(areia.x < 0){
areia.x = areia.width/2;
}
if(keyDown("space")){
internet.velocityY = -10;
}
internet.velocityY += 1;
internet.collide(areia);
drawSprites();
}
