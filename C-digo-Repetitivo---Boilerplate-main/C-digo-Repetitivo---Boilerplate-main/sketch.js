var bg ;
var BackgroundImage;

function preload(){

  BackgroundImage = loadImage("C-digo-Repetitivo---Boilerplate-main/FondoMarino.png"));
}

function setup() {
var canvas = createCanvas(1536,745)
bg.addImage("fondo",BackgroundImage);

}

function draw() {
  background(bg);  


}
