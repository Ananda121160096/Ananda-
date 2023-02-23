let j;
function setup() {
  // put setup code here
  createCanvas(1200,400);
  j=0;
}

function draw() {
  background(229,204,255);
  strokeWeight(4);
    fill(0);

    x1 = 399,5;
    y1 = 0;

    x2 = 399;
    y2 = 399,5;

    x1 = 180;
    y1 = 220;
    lebar1 = 35;
    tinggi1 = 150;

    x2 = 100;
    y2 = 70;
    lebar2 = 200;
    tinggi2 = 50;

    x3 = 100;
    y3 = 120;
    lebar3 = 200;
    tinggi3 = 50;

    x4 = 100;
    y4 = 170;
    lebar4 = 200;
    tinggi4 = 50;
    
    var r=1+4*Math.cos(PI*j/20)
  j+=1
    f=200

    strokeWeight(4);
    fill(255,255,204);
    stroke(255,255,204);
    rect(x1,y1,lebar1,tinggi1);

    strokeWeight(4);
    fill(255,255,102);
    stroke(255,255,102);
    rect(x2,y2,lebar2,tinggi2);

    strokeWeight(4);
    fill(204,255,153);
    stroke(204,255,153);
    rect(x3,y3,lebar3,tinggi3);

    strokeWeight(4);
    fill(255,204,204);
    stroke(255,204,204);
    rect(x4,y4,lebar4,tinggi4);

    strokeWeight(4);
    fill(204,229,255);
    stroke(204,229,255);

    strokeWeight(4);
    fill(255,255,204);
    stroke(255,255,204);
    rect(x1+f,y1,lebar1,tinggi1);

    strokeWeight(4);
    fill(255,255,102);
    stroke(255,255,102);
    rect(x2+f,y2,lebar2,tinggi2);

    strokeWeight(4);
    fill(204,255,153);
    stroke(204,255,153);
    rect(x3+f,y3,lebar3,tinggi3);

    strokeWeight(4);
    fill(255,204,204);
    stroke(255,204,204);
    rect(x4+f,y4,lebar4,tinggi4);

    strokeWeight(4+r);
    stroke(255,255,204);
    
    fill(255,255,204);
    rect(200,90,50,50)
    rect(350,90,50,50)
    rect(150,160,300,20)
  
    strokeWeight(0)
    fill(255,255,204);
    rect(40,150+7*r,50,40);
    rect(510,150+7*r,50,40);
  
// yang tidak bergerak
  
    o=600
    strokeWeight(4);
    fill(255,255,204);
    stroke(255,255,204);
    rect(x1+o,y1,lebar1,tinggi1);

    strokeWeight(4);
    fill(255,255,102);
    stroke(255,255,102);
    rect(x2+o,y2,lebar2,tinggi2);

    strokeWeight(4);
    fill(204,255,153);
    stroke(204,255,153);
    rect(x3+o,y3,lebar3,tinggi3);

    strokeWeight(4);
    fill(255,204,204);
    stroke(255,204,204);
    rect(x4+o,y4,lebar4,tinggi4);

    strokeWeight(4);
    fill(204,229,255);
    stroke(204,229,255);

    strokeWeight(4);
    fill(255,255,204);
    stroke(255,255,204);
    rect(x1+f+o,y1,lebar1,tinggi1);

    strokeWeight(4);
    fill(255,255,102);
    stroke(255,255,102);
    rect(x2+f+o,y2,lebar2,tinggi2);

    strokeWeight(4);
    fill(204,255,153);
    stroke(204,255,153);
    rect(x3+f+o,y3,lebar3,tinggi3);

    strokeWeight(4);
    fill(255,204,204);
    stroke(255,204,204);
    rect(x4+f+o,y4,lebar4,tinggi4);

    strokeWeight(4);
    stroke(255,255,204);
    
    fill(255,255,204);
    rect(200+o,90,50,50)
    rect(350+o,90,50,50)
    rect(150+o,160,300,20)
  
    strokeWeight(4);
    fill(255,255,204);
    stroke(255,255,204);
    rect(40+o,150,50,40);
    rect(510+o,150,50,40);
  
    stroke('white');
    line(600,0,600,600)
}