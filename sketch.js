var forest,forestimg;
var cat ,catimg1,catimg2,catimg3;
var mouse , mouseimg;
function preload() {
    //load the images here
    catimg1 = loadAnimation("images/cat1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg3 = loadAnimation("images/cat4.png");
    forestimg = loadImage("images/garden.png");
    mouseimg = loadImage("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    forest=createSprite(500,400,10,10);
    forest.addImage(forestimg);
    forest.scale=1.3;
    cat = createSprite(800,650,10,10);
    cat.addAnimation("cat1",catimg1);
    cat.addAnimation("catmoving",catimg2);
    cat.addAnimation("cat2",catimg3);
    cat.scale=0.1;
    mouse=createSprite(100,650,10,10);
    mouse.addImage(mouseimg);
    mouse.scale=0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
     if(keyDown("space")){
         console.log("catmoving");
         cat.changeAnimation("catmoving",catimg2);
         cat.velocityX=-4;
     }
      
    if(cat.isTouching(mouse)){
        console.log("touch");
        cat.changeAnimation("cat2",catimg3);
        cat.velocityX=0;
    }
    mouse.debug=false;
    mouse.setCollider("rectangle",0,0,500,500);
    drawSprites();
}


//function keyPressed(){

  //For moving and changing animation write code here


//}
