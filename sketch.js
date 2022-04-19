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
var medo; 
var tantantan, fim;
var tantan, recomeco;
var depre;
var pulacorda;
var naosouruim;
var mensagem = "Isso é uma mensagem";

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

medo = loadAnimation ("trex_collided.png");

tantantan = loadImage ("gameOver.png");
tantan = loadImage ("restart.png"); 

depre = loadSound ("die.mp3");
pulacorda = loadSound ("jump.mp3");
naosouruim = loadSound ("checkPoint.mp3");
}


function setup(){

createCanvas(windowWidth,windowHeight);

internet = createSprite(50, height-70, 20, 50);
internet.addAnimation("correndo", internetmovel);
internet.addAnimation ("scare", medo);
internet.scale = 0.5;

areia = createSprite(width/2,height-80,width,125)
areia.addImage("chão",areiamovedica);
areia.x = areia.width/2;

homeminvisivel = createSprite (width/2, height-10, width, 125);
homeminvisivel.visible = false;

fim = createSprite (width/2, height/2-50);
fim.addImage (tantantan);

recomeco = createSprite (width/2, height/2);
recomeco.addImage (tantan);
recomeco.scale = 0.5;

placar = 0; 

borda = createEdgeSprites();

var numero = Math.round(random(1, 100));
//console.log(numero);

festa = new Group();
deserto = new Group();

internet.debug = false;
internet.setCollider("circle", 0, 0, 35);

}

function draw(){
    background("white");
    //console.log (frameCount);
    //console.log (internet.y);
    //console.log(mensagem);

    internet.collide(homeminvisivel);

if(estado === JOGANDO){
    areia.velocityX = -(4 + placar/100);
    if(areia.x < 0){
        areia.x = areia.width/2;
    }
    if(keyDown("space")&& internet.y > height-120 || touches.lenght > 0 && internet.y > height-120){
        internet.velocityY = -12;
        pulacorda.play();
        touches = [];
    }
    internet.velocityY += 1;
    cloud();
    enemy();
    placar += Math.round(frameRate()/60); 
    if (placar%500 === 0 && placar > 0){
        naosouruim.play();
    }
    if (deserto.isTouching(internet)){
      estado = MORTE;  
      depre.play();
    }
    fim.visible = false;
    recomeco.visible = false;
} else if (estado === MORTE){
    areia.velocityX = 0;
    festa.setVelocityXEach (0);
    deserto.setVelocityXEach (0);
    internet.changeAnimation ("scare");
    festa.setLifetimeEach (-3.14);
    deserto.setLifetimeEach (-3.14);
    internet.velocityY = 0;
    fim.visible = true;
    recomeco.visible = true;
    if(mousePressedOver(recomeco) || touches.lenght > 0 ){
        tenteNovamente();
        touches = [];
}


}

drawSprites();
text ("Pontuação:"+ placar, 25, height/2-200);
}

function tenteNovamente(){
   estado = JOGANDO; 
   festa.destroyEach();
   deserto.destroyEach();
   placar = 0;
   internet.changeAnimation ("correndo");

    
}

function cloud(){
    if (frameCount % 60 === 0){
        algodaodoce = createSprite (width+20, height-300, 40, 10);
        algodaodoce.addImage (algodaodocecolorido);
        algodaodoce.y = Math.round(random(1, height/2));
        algodaodoce.velocityX = -3;
        algodaodoce.depth = internet.depth; 
        internet.depth += 1;
        algodaodoce.lifetime = 250;
        festa.add(algodaodoce);
    }
    
}
function enemy(){
    if (frameCount % 60 === 0){
        var cactus = createSprite (width, height-95, 10, 40);
        cactus.velocityX = -(6 + placar/100);
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
