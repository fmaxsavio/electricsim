let components = [];
let dragging = null;
let currentComponent = null;
function setup() {
  createCanvas(800, 600);
  // Add a battery component
  components.push(new Battery(100, 100, 50, 20));
  // Add a resistor component
  components.push(new Resistor(300, 100, 80, 20));
  // Add wire component for connections
  components.push(new Wire(200, 150, 20, 10));
}

function draw() {
  background(255);
  // Draw each component
  for (let component of components) {
    component.display();
  }
}

function mousePressed() {
  for (let component of components) {
    if (component.isMouseOver()) {
      dragging = component;
      currentComponent = component;
    }
  }
}

function mouseDragged() {
  if (dragging) {
    dragging.x = mouseX;
    dragging.y = mouseY;
  }
}

function mouseReleased() {
  dragging = null;
}

// Component classes
class Battery {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  display() {
    fill(255, 204, 0);
    rect(this.x, this.y, this.w, this.h);
    text('Battery', this.x + 10, this.y + 35);
  }
  
  isMouseOver() {
    return mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h;
  }
}

class Resistor {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    fill(200);
    rect(this.x, this.y, this.w, this.h);
    text('Resistor', this.x + 10, this.y + 35);
  }

  isMouseOver() {
    return mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h;
  }
}

class Wire {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    stroke(0);
    line(this.x, this.y, this.x + this.w, this.y + this.h);
  }

  isMouseOver() {
    return mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h;
  }
}
