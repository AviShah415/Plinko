const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos1=[];
var plinkos2=[];
var plinkos3=[];
var plinkos4=[];
var divisions=[];


var divisionHeight=300;

function setup() {
  
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

  
  ground = new Ground(240,800,480,20);

  for(var k=0; k<=width; k=k+80)
   {
     divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }
}

function draw() {
  background("black");  
  drawSprites();
  
  ground.display();

 

}