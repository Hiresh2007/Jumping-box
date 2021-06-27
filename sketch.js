var canvas;
var music;
var Surface1;
var surface2;
var surface3;
var surface4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1  = createSprite(600,594,10000,10);
    surface1.shapeColor = rgb(50,50,255);

    surface2  = createSprite(790,50,10,10000);
    surface2.shapeColor = rgb(40,40,155);

    surface3  = createSprite(600,10,10000,10);
    surface3.shapeColor = rgb(20,20,55);

    surface4  = createSprite(8,300,10,10000);
    surface4.shapeColor = rgb(10,10,55);

    //music.play()


    //create box sprite and give velocity

     ball = createSprite(random(20,750),100, 40,40);
     ball.shapeColor = rgb(255,255,255);
     ball.velocityY = 4;
     ball.velocityX = 4;

     if(ball.isTouching(surface1)){
        ball.velocityY = 0;
        ball.velocityX = 0;
        ball.shapeColor =   rgb(40,40,155);
        
     }
     if( ball.isTouching(surface2)){
        ball.velocityY = 0;
        ball.velocityX = 0;
        ball.shapeColor = rgb(50,50,255);
        
     }
     if(ball.isTouching(surface4)){
        ball.velocityY = 0;
        ball.velocityX = 0;
        ball.shapeColor =  rgb(20,20,55);
        
     }
     if( ball.isTouching(surface3)){
        ball.velocityY = 0;
        ball.velocityX = 0;
        ball.shapeColor =  rgb(0,20,55);
     }

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    drawSprites();
}
