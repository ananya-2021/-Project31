const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var drops = [];
var umbrella;
var lightning,img;

function preload(){
   img = loadImage("lightning.png");
}

function setup(){
    var canvas = createCanvas(400,600);

    engine = Engine.create();
    world = engine.world;
   
    for(var i=0;i<100;i++){
     drops.push(new Drop(random(0,400),random(0,600)));
    }

    umbrella = new Umbrella(180,500);

}

function draw(){
    background("black");

    Engine.update(engine);

    if(frameCount%2 === 0){
        for(var i = 0;i<100;i = i+1){
            drops[i].display();
           }
    }

    umbrella.display();
  
    if(frameCount%80===0){
        lightning = createSprite(random(0,400),10);
        lightning.addImage(img);
        lightning.scale = random(0.2,0.5);
        drawSprites();
    }

    
    
}   

