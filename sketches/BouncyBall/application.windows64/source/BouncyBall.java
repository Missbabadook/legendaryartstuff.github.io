import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class BouncyBall extends PApplet {

float x = 600;
float y = 300;

 float xSpeed = 30;
 float ySpeed = 30;

public void setup () {
  
}

public void draw () {
  fill(random(255), random(255), random(255));
  
    x += xSpeed;
  if (x > width || x < 0) {
  xSpeed *= -1;
  }
    
 y += ySpeed;
  if (y > height || y < 0) {
  ySpeed *= -1;
  }
       
    ellipse(x, y, 50, 50);
}
  public void settings() {  size(800, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "BouncyBall" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
