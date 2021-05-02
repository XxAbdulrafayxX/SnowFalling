var snowbackImg, snowback, snowCharacter, snowCharacterAn;

function preload(){
 snowbackImg = loadImage("snow2.jpg");
snowCharacterAn = loadAnimation("snowcharacter1.png", "snowcharacter2.png");
}



function setup() {
  createCanvas(800,400);
 snowback = createSprite();
snowback.addImage("snow background", snowbackImg);

snowCharacter = createSprite(500,300);
snowCharacter.addAnimation("snow character",snowCharacterAn);

}

function draw() {
  background("snow background");  
  drawSprites();
}