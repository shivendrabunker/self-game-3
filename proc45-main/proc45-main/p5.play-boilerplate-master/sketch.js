  var bgI;
  var leftbar,leftbarImg;
  var rightbar;  
  var player;
  var obstacle;
  var score = 0;
  
  function preload(){
    
    bgImg = loadImage("images/bckg.png")
    leftbarImg = loadImage("images/left-brick.png")
    rightbarImg = loadImage("images/rightsahi-brick.png")
    //rplayer = loadImage("images/rplayer")
    //lplayer = loadImage("images/lplayer")
  }
  

  function setup() {
    createCanvas(800,400);
    3
    leftbar = createSprite(175, 290, 50, 50);
    leftbar.addImage(leftbarImg);  
    leftbar.velocityY = 2;

    rightbar = createSprite(705,290,50,50);
    rightbar.addImage(rightbarImg);
    rightbar.velocityY = 2;
    
    player = createSprite(220,323,50,50);

    score = 0;
  }

function draw() {
  background(bgImg);  

  fill("red")
  text(mouseX + "," + mouseY , 100,100)

  if (leftbar.y > 300)
  {
    leftbar.y = 150
  }

  if (rightbar.y > 250)
  {
    rightbar.y = 150

  }

  if (keyDown("right")){
    player.x = 660
    //player.addImage(rplayer)
  }

  if(keyDown("left")){
    player.x = 220
    //player.addImage(lplayer)
  }


  // right side banana hai apko

  spawnobstacle()

  drawSprites();
}
function spawnobstacle(){
  if(frameCount % 200 === 0){
  obstacle = createSprite(220,-14,40,40)
  obstacle.velocityY = 2

  var set_position=Math.round(random(1,2));
  if (set_position==1){
    obstacle.x=220;
    }else{
      obstacle.x=660;
    }
}}
//creat points
