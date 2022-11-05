
////////////A'S = ALEX. D'S = DEANNA ////////////////////////

let titlefont;
var snd1A,snd2A,snd3A, snd4A, snd5A;
var img1A,img2A,img3A, img4A, img5A;
var snd1D, snd2D, snd4D;
var img1D, img2D, img3D, img4D, img5D, img6D, img7D;
var ghost, asterisk;

var anim1;

var nextbtnanim, nextbtnsprite;
var helpbtnanim, helpbtnsprite;
var myButton;



// var duration;
// var  slideWidth = 500;

function preload() {

  snd1A = loadSound("assets/Floor.mp3");
  snd2A= loadSound("assets/door.mp3");
  snd3A = loadSound("assets/Goofy Yell.mp3");
  snd4A = loadSound("assets/Clean.mp3");
  snd5A = loadSound("assets/tada.mp3");
  snd6A = loadSound("assets/cricket.mp3");
  img1A = loadImage("assets/Fneighborhood.jpg");
  img2A = loadImage("assets/living.jpg");
  img3A = loadImage("assets/fog.jpg");
  img4A = loadImage("assets/Hallway.jpg");
  img5A = loadImage("assets/bedroom.png");
  img6A = loadImage("assets/house.jpg");



  snd1D = loadSound("assets/swoosh.mp3");
  snd2D = loadSound("assets/creepymusic1.mp3");
  snd4D = loadSound("assets/creepymusic2.mp3");
  img1D = loadImage("assets/foggyroad.jpg");
  img2D = loadImage("assets/foggytown.jpg");
  img3D = loadImage("assets/foggystore.jpg");
  img4D = loadImage("assets/foggychurch.jpg");
  img6D = loadImage("assets/insidechurch.jpg");
  img7D = loadImage("assets/insidestore.jpg");
titlefont = loadFont("assets/UnfinishedScreamAlternative.ttf");

  //NOTES on animation assets naming. You must only use numbers at the end of the file name.
  // i.e. animation_001 is fine. animation1_001 is not good. it confuses the loading function.
  // one technique with for managing sprites is to load them, and then move them off the canvas until needed

   helpbtnanim = loadAnimation('assets/help_u.png',
   'assets/help_r.png', 'assets/help_d.png');
   helpbtnsprite = createSprite(-500,0); //create and move 'off stage'
   helpbtnsprite.addAnimation('normal',helpbtnanim);
   nextbtnanim = loadAnimation('assets/next_btn_u.png',
   'assets/next_btn_r.png', 'assets/next_btn_d.png');
    nextbtnsprite = createSprite(-500,0);
    nextbtnsprite.addAnimation('normal',nextbtnanim);


}

// global manager object
var mgr;

function setup() {
    createCanvas(1080, 1080);


    mgr = new SceneManager();
    click1 = new Clickable();
    click2 = new Clickable();
    click3 = new Clickable();
    click4 = new Clickable();
    click5 = new Clickable();
    click6 = new Clickable();
    click7 = new Clickable();
    click8 = new Clickable();
    click9 = new Clickable();
    click10 = new Clickable();
    click11 = new Clickable();
    click12 = new Clickable();
    click13 = new Clickable();
    click14 = new Clickable();
    click15 = new Clickable();
    click16 = new Clickable();
    click17 = new Clickable();
    click18 = new Clickable();
    click19 = new Clickable();
    click20 = new Clickable();
    click21 = new Clickable();
  getAudioContext().suspend();
  //////////////Alex's scenese//////////////////
    mgr.addScene (intro);
    mgr.addScene (main);
   mgr.addScene (hope);
   mgr.addScene (dumb);
   mgr.addScene (final);

     //////////////////////Deanna's Scenes////////////////////
     mgr.addScene (road);
     mgr.addScene (town);
     mgr.addScene (store);
     mgr.addScene (insidestore);
     mgr.addScene (church);
     mgr.addScene (insidechurch);

          mgr.addScene (help);
    mgr.showNextScene();


    //pausing sprite animations
    helpbtnsprite.animation.stop();
    nextbtnsprite.animation.stop();


}

function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
    // if (getAudioContext().state !== 'running') {
    //    text('click to start audio', width/2, height/2);
    //  } else {
    //    text('audio is enabled', width/2, height/2);
    //  }

}

function mousePressed()
{

//   for (let i = 0; i < numBalls; i++) {
//  balls[i] = new Ball(
//    random(width+10),
//    random(height+10),
//    random(30, 70),
//    i,
//    balls
//  );
//
//   fill(200,200,255,100);
// balls.forEach(ball => {
// ball.collide();
// ball.move();
// ball.display();
// // dirt = dirt-5;
// });
// }

   // pass the mousePressed message into the SceneManager
  // mgr.mousePressed();
  // if (getAudioContext().state !== 'running') {
  //   getAudioContext().resume();
  // }

}

//  function mouseMoved()
//  {
//    // pass the mouseMoved message into the SceneManager
//    mgr.handleEvent("mouseDragged");
// }
//
///alex code for dirt scrubbing//////////////
function mouseDragged(){
  dirt= dirt-1;

}

// {
//    // pass the mouseMoved message into the SceneManager
//     mgr.handleEvent("mouseDragged");
// }

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {

        case '1':
            mgr.showScene( intro );
            break;
        case '2':
            mgr.showScene( main );
            break;

            case '3':
                mgr.showScene(hope);
                break;
            case '4':
                mgr.showScene( dumb );
                break;
                case '5':
                    mgr.showScene( final );
                    break;

                        case 'q':
                            mgr.showScene( road );
                            break;
                        case 'w':
                            mgr.showScene( town );
                            break;
                        case 'e':
                            mgr.showScene( store );
                            break;
                        case 'r':
                            mgr.showScene( insidestore );
                            break;
                        case 't':
                            mgr.showScene( church );
                              break;
                        case 'y':
                            mgr.showScene( insidechurch );
                            break;
                            case 'h' :
                                mgr.showScene( help );
                                break;
    }

    mgr.keyPressed();
}



function loadAndShowNextNavBtn() {

  nextbtnsprite.position.x = width  -100;
  nextbtnsprite.position.y = height -100;
  nextbtnsprite.animation.stop();

  nextbtnsprite.onMouseOver = function() {
      this.animation.goToFrame(1);
  };

  nextbtnsprite.onMouseOut = function() {
     this.animation.goToFrame(0);
  };

  nextbtnsprite.onMousePressed = function() {
      this.animation.goToFrame(2);
  };

  nextbtnsprite.onMouseReleased = function() {
    this.animation.goToFrame(0);
    mgr.showNextScene();

  };

}









function removeAllSprites() {
  nextbtnsprite.position.x =  -500;
  nextbtnsprite.position.y =  -500;
  resetbtnsprite.position.x =  -500;
  resetbtnsprite.position.y =  -500;

}
