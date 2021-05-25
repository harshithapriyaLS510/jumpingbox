var canvas;
var music;
var box1,box2,box3,box4;
var ball, edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    
    canvas = createCanvas(800,600);

    box1 = createSprite(0,580,360,30);
    box1.shapeColor = "red";

    box2 = createSprite(295,580,200,30);
    box2.shapeColor = "blue";

    box3 = createSprite(515,580,200,30);
    box3.shapeColor ="green";

    box4 = createSprite(740,580,220,30);
    box4.shapeColor = "yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "black";
    ball.velocityX = 4;
    ball.velocityY = 9;

}


function draw() {
    
    background("white");

    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor = "red";
        music.play();
    }

if(box2.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.velocityX = 0;
ball.velocityY = 0;
        music.stop();
    }

    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = "green";
    }

    if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = "yellow";
    }

    drawSprites();


}
