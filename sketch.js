var internet, internetmovel;
var areia, areiamovedica, homeminvisivel;
var algodaodoce, algodaodocecolorido; 
var obs1, obs2, obs3, obs4, obs5, obs6;
var placar;
var festa;
var deserto;
var JOGANDO = 1;
var MORTE = 0;
var estado = JOGANDO;

function preload(){

internetmovel = loadAnimation("trex1.png","trex3.png","trex4.png");
areiamovedica = loadImage("ground2.png");
algodaodocecolorido = loadImage("cloud.png");

obs1 = loadImage ("obstacle1.png");
obs2 = loadImage ("obstacle2.png");
obs3 = loadImage ("obstacle3.png");
obs4 = loadImage ("obstacle4.png");
obs5 = loadImage ("obstacle5.png");
obs6 = loadImage ("obstacle6.png");
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

placar = 0; 

borda = createEdgeSprites();

var numero = Math.round(random(1, 100));
//console.log(numero);

festa = new Group();
deserto = new Group();

}

function draw(){
    background("white");
    //console.log (frameCount);
    //console.log (internet.y);

if(estado === JOGANDO){
    areia.velocityX = -2;



} else if (estado === MORTE){
    areia.velocityX = 0;



    
}






if(areia.x < 0){
    areia.x = areia.width/2;
}

if(keyDown("space")&& internet.y > 150){
    internet.velocityY = -12;
}
internet.velocityY += 1;
internet.collide(homeminvisivel);

cloud();
enemy();

drawSprites();
text ("Pontuação:"+ placar, 500, 50);
placar += Math.round(frameCount/60); 
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
        festa.add(algodaodoce);
    }
    
}
function enemy(){
    if (frameCount % 60 === 0){
        var cactus = createSprite (600, 165, 10, 40);
        cactus.velocityX = -6;
    var number = Math.round(random(1,6)); 
    switch (number){
        case 1: cactus.addImage(obs1);
        break;
        case 2: cactus.addImage(obs2);
        break;
        case 3: cactus.addImage(obs3);
        break;
        case 4: cactus.addImage(obs4);
        break;
        case 5: cactus.addImage(obs5);
        break;
        case 6: cactus.addImage(obs6);
        break;
        default: break;
    }
    cactus.scale = 0.5;
    cactus.lifetime = 250;
    deserto.add(cactus);
}
}
