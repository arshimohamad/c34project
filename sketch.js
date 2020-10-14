//Create variables here
var dog;
var dogImg
var happyDog;
var happyDogImg;
var database;
var foodS;
var foodStock;


function preload()
{
  //load images here
  dogImg=loadImage("images/Dog.png");
  happyDogImg=loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog=createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale= 0.2;

 

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  fill("black");
  text("Note:Press UP_ARROW Key To Feed Dog Milk!",20,20);
  text("remaining food:"+foodS,20,40);
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<= 0){
    x=x
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}



