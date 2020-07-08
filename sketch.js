var drops = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);

  if(frameCount % 1 === 0){
    var raindrop = new Drop(random(0, windowWidth), -100, 2, random(10,20));
    drops.push(raindrop);
  }

  for(var i = 0; i < drops.length; i++){
    drops[i].fall(random(7,20));
    drops[i].display();
  }
}