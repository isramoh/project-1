var phone;
var cat;
var buzz;
var catImgPosX = 0;
var checkClick = false;
var ellipseX;
var squareSize, lineWidth;

function preload(){

  phone = loadImage("../media/images/phone.jpg");
  // cat = createImg("https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg");
  //allows image to be clickable

  buzz = loadSound("../media/audio/529979__lartti__phone-vibrate.wav");
}

function setup() {
  createCanvas(windowWidth, 1000);
  ellipseX = random(100, 400);
  angleMode(DEGREES);
  buzz.setVolume(0.5);
  rectMode(CENTER);/*origin at center*/
  background(220);
  ellipse(ellipseX, 300, 50);
  ellipse(ellipseX, 350, 75);

}

function draw() {

  background("#ede9e8");
  // squareSize = random(4, 250);
  // lineWidth = random(4, 28);
  image(phone, (windowWidth/4), 0, 500, 1000);
  push();
    strokeWeight(lineWidth);
    stroke(0, 0, 255, 10);
    fill(0, random(255), 0, 10);
    square(200, 150, squareSize);
  pop();

  /* for(var i = 0; i<=width; i+=50){
    ellipse(i, i, 25);
  }*/
  // cat.mouseClicked(event =>{
  // checkClick = true;
  // if(checkClick)
  //   rect(10, 10, 100, 100)
  // }
  // );

  push();
    noStroke();
    noFill();
    rect((windowWidth/2)-20, 700, 25, 25);
    rect((windowWidth/2)-20, 740, 25, 25);
    rect((windowWidth/2)-20, 780, 25, 25);
    rect((windowWidth/2)-20, 820, 25, 25);

    rect((windowWidth/2)-100, 700, 25, 25);
    rect((windowWidth/2)-100, 740, 25, 25);
    rect((windowWidth/2)-100, 780, 25, 25);
    rect((windowWidth/2)-100, 820, 25, 25);

    rect((windowWidth/2)-180, 700, 25, 25);
    rect((windowWidth/2)-180, 740, 25, 25);
    rect((windowWidth/2)-180, 780, 25, 25);
    rect((windowWidth/2)-180, 820, 25, 25);
  pop();

  push();
    fill("black");
    rect((windowWidth/2)-125, 300, 176, 100);
  pop();

  // fill("blue");
  // beginShape();
  //   vertex(180, 82);
  //   vertex(207, 36);
  //   vertex(214, 63);
  //   vertex(407, 11);
  //   vertex(412, 30);
  //   vertex(219, 82);
  //   vertex(226, 109);
  // endShape(CLOSE);

  // arc(200, 200, 80, 80, 0, 250);

  // cat.position(catImgPosX, 0);
  // cat.size(200, 200);
  if(catImgPosX>windowWidth){
    catImgPosX = 0;
    // meow.play();
  }

  // if(mouseIsPressed){//wants something to hang around while pressed
  //   push();
  //     fill("green");
  //     ellipse(mouseX, mouseY, 50);
  //   pop();
  // }
  // let s = 'will you survive going back in time??';
  // fill("red");
  // text(s,(windowWidth/2)-125, 300);
  if(x==12){
    let s = 'will you survive going back in time?';
    fill("green");
    text(s,(windowWidth/2)-208, 300);
  }
}

let x = 0;
function mousePressed(){//want only one time after one press
  x++;
}

function keyPressed(){
  if(key=="x"){
    buzz.play();
  }
}




