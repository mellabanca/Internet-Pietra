var internet, internetmovel;
var areia, areiamovedica, homeminvisivel;
var algodaodoce, algodaodocecolorido; 

function preload(){

internetmovel = loadAnimation("trex1.png","trex3.png","trex4.png");
areiamovedica = loadImage("ground2.png");
algodaodocecolorido = loadImage("cloud.png");
}

function setup(){

createCanvas(600,200)

internet = createSprite(50, 160, 20, 50);
internet.addAnimation("correndo", internetmovel);
internet.scale = 0.5;

areia = createSprite(200,180,400,20)
areia.addImage("chão",areiamovedica);
areia.x = areia.width/2;

homeminvisivel = createSprite (200, 190, 400, 10);
homeminvisivel.visible = false;

borda = createEdgeSprites();

var numero = Math.round(random(1, 100));
//console.log(numero);
}

function draw(){

background("white");

//console.log (internet.y);

console.log (frameCount);

areia.velocityX = -2;
if(areia.x < 0){
    areia.x = areia.width/2;
}

if(keyDown("space")&& internet.y > 150){
    internet.velocityY = -10;
}
internet.velocityY += 1;
internet.collide(homeminvisivel);

cloud();

drawSprites();
}

function cloud(){
    if (frameCount % 60 === 0){
        algodaodoce = createSprite (600, 100, 40, 10);
        algodaodoce.addImage (algodaodocecolorido);
        algodaodoce.y = Math.round(random(1, 100));
        algodaodoce.velocityX = -3;
        algodaodoce.depth = internet.depth; 
        internet.depth += 1;
        algodaodoce.lifetime = 250;
    }
    
}