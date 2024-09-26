function setup() {
  createCanvas(640, 480); 
  background(50); 
  
  // Kepala anjing
  fill(150, 100, 50);
  ellipse(320, 240, 150, 120);
  
  // Telinga anjing
  fill(100, 60, 30);
  ellipse(260, 210, 50, 80);
  ellipse(380, 210, 50, 80);
  
  // Mata anjing
  fill(255);
  ellipse(290, 230, 30, 20);
  ellipse(350, 230, 30, 20);
  
  fill(0);
  ellipse(290, 230, 10, 10);
  ellipse(350, 230, 10, 10);
  
  // Hidung anjing
  fill(0);
  ellipse(320, 260, 20, 15);
  
  // Mulut anjing
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(320, 280, 40, 20, 0, PI);
  
  // Badan anjing
  noStroke();
  fill(150, 100, 50);
  rect(260, 300, 120, 100);
  
  // Kaki anjing
  fill(100, 60, 30);
  rect(260, 400, 30, 40);
  rect(350, 400, 30, 40);
  
  // Ekor anjing
  stroke(150, 100, 50);
  strokeWeight(10);
  line(380, 350, 450, 320);
}
