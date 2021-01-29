function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(600, 200, 50, 100);
  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
  rect1.debug = "true";
  rect2.debug = "true";
  rect1.velocityX = 3;
  rect1.velocityY = 0;
  rect2.velocityX = 3;
  rect2.velocityY = 0;
  createEdges = createEdgeSprites ();
}

function draw() {
 
 background("blue");  
  if(isTouching(rect1, rect2) ) {
      rect1.shapeColor = "red";
      rect2.shapeColor = "red";
    } else {
      rect1.shapeColor = "green";
      rect2.shapeColor = "green";
    }
    rect1.bounceOff (createEdges);
    rect2.bounceOff (createEdges);
   bounceOff (rect1, rect2);
  drawSprites();
}
