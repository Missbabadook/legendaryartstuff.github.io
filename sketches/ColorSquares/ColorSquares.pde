//setup only gets run once
void setup () {
  size(800, 600);
}

//draw happens every frame!
void draw () {
  noStroke();
  fill(0, 0, random(255));
  rect(mouseX, mouseY, 100, 100);
}
