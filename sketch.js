function setup() {
  createCanvas(windowWidth,windowHeight)
  hreborn = createSprite(150,550,00,0)
  hreborn.addImage(highreb)
  hreborn.scale = 1.2

  invisground = createSprite(0,650,5000,5)
  invisground.visible = false;
}

function preload(){
  aba = loadImage("ab1.png")
  abb = loadImage("ab2.png")
  abc = loadImage("ab3.png")
  amethy = loadImage("amethyst.png")
  ast = loadImage("asteroid.png")
  highreb = loadImage("high reborn.png")
  bg = loadImage("space2bg.png")
}

function draw() {
  background(bg);  

  hreborn.collide(invisground)

  if(keyDown(UP_ARROW)){
    hreborn.y = hreborn.y-8
  }

  if(keyDown(DOWN_ARROW)){
    hreborn.y = hreborn.y+8
  }

  drawSprites();
}