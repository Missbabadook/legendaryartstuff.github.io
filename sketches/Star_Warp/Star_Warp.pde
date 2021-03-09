class Star {
  float x;
  float y;
  float z;
  
  Star () {
    x = random(0, width);
    y = random(0, height);
    z = width;
  }
  
  void update() {
    z = z - 1;
  }
  
  void show() {
    fill(255);
    noStroke();
    
   float sx = map(x / z, 0, 1, 0, width);
   float sy = map(y / z, 0, 1, 0, width);
    
    ellipse(sx, sy, 8, 8);
  }
}
