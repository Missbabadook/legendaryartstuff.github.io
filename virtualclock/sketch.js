let bgc;


function setup()  {
  createCanvas(600, 600);
  background(0);
  angleMode(DEGREES);


  bgc = color(0);
}

function draw() {

background(bgc);
  //fill(0);

  let h = hour();   // 0-23
  let m = minute(); // 0- 59
  let s = second();  // 0-59

  if  ( h < 6 ) {  //false
         // early morning
         noFill();
         stroke(106,77,255);
         ellipse(100,100,400,400);
         stroke(204,204,255);
         ellipse(100,100,200,200);
         stroke(255,153,238);
         ellipse(100,100,50,50);
        bgc = color(119,0,179);

  }  else if  (h > 10 && h < 18 ) {  //false
         // midday
         stroke(230,255,179);
         fill(255,153,153);
         ellipse(100,100,400,400);
         fill(255,163,77);
         ellipse(100,100,200,200);
         fill(255,187,153);
         ellipse(100,100,50,50);
        bgc = color(255,191,179);

  } else if  (h > 17 && h < 24 ) {  //false
         // night
         noFill();
         stroke(38,0,230);
         ellipse(100,100,400,400);
         stroke(125,25,255);
         ellipse(100,100,200,200);
         stroke(0,255,255);
         ellipse(100,100,50,50);
        bgc = color(0);
        //sundown
    } else {
        //morning
        fill(255,153,204);
        stroke(166,255,77);
        ellipse(100,100,400,400);
        fill(255,179,204);
        ellipse(100,100,200,200);
        fill(255,204,221);
        ellipse(100,100,50,50);
        bgc = color(255,231,150);
    }










  // if (h > 17 || h < 8 ) {  //false
  //      // nightime
  //      noFill();
  //      stroke(38,0,230);
  //      ellipse(100,100,400,400);
  //      stroke(125,25,255);
  //      ellipse(100,100,200,200);
  //      stroke(0,255,255);
  //      ellipse(100,100,50,50);
  //     bgc = color(0);
  //     //sundown
  // } else {
  //     //daytime
  //     fill(255,153,204);
  //     stroke(166,255,77);
  //     ellipse(100,100,400,400);
  //     fill(255,179,204);
  //     ellipse(100,100,200,200);
  //     fill(255,204,221);
  //     ellipse(100,100,50,50);
  //     bgc = color(255,231,150);
  // }


  // input, input range,scaleoutput low, scaleoutput high
  let mh = map(h,0,23,0,360);
  let mm = map(m,0,59,0,360);
  let ms = map(s,0,59,0,360);

// strokeWeight(8);
// stroke(255);
// noFill();
// ellipse(200, 200, 300, 300);

//arc 1 = hour (pink)
strokeWeight(10);
stroke(255, 204, 246);
noFill();
let end1 = map(mh, 0, width, 0, 360);
arc(width/2, height/2, 300, 300, 0, mh);

//arch 2 = minute (purple)
strokeWeight(8);
stroke(187, 153, 255);
noFill();
let end2 = map(mm, 0, width, 0, 360);
arc(width/2, height/2, 280, 280, 0, mm);

//arch 3 = second (green)
strokeWeight(6);
stroke(201, 255, 229);
noFill();
let end3 = map(ms, 0, width, 0, 360);
arc(width/2, height/2, 260, 260, 0, ms);

// pink hand = hour
// push();
//   translate(width/2,height/2);
//   rotate(mh-90);
//   noStroke();
//   fill(255, 204, 246);
//   rect(0,0,50,8,5);
//   stroke(200,100,0);
// pop();

//pink dot = hour
push();
translate(h * 10, height/2 + 190);
rotate(mh-90);
noStroke();
fill(255, 204, 246);
ellipse(0,0,20,20,5);
stroke(200,100,0);
pop();

// purple hand = minute
// push();
//   translate(width/2,height/2);
//   rotate(mm-90);
//   noStroke();
//   fill(187, 153, 255);
//   rect(0,0,70,8,5);
//   stroke(200,100,0);
// pop();

//purple dot = minute
push();
translate(m * 10, height/2 + 220);
rotate(mm-90);
noStroke();
fill(187, 153, 255);
ellipse(0,0,20,20,5);
stroke(200,100,0);
pop();



// green hand = second
// push();
//   translate(width/2,height/2);
//   rotate(ms-90);
//   noStroke();
//   fill(201, 255, 229);
//   rect(0,0,90,8,5);
//   stroke(200,100,0);
// pop();

// green dot = second
push();
translate(s *10, height/2 + 250);
rotate(mm-90);
noStroke();
fill(201, 255, 229);
ellipse(0,0,20,20,5);
stroke(200,100,0);
pop();




}
