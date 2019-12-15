
function setup() {
    createCanvas(1250, 1000, WEBGL);
  }
  
  function draw() {
    background(0);
    let radius = width * 1.5;
  
    //drag to move the world.
    orbitControl();
  
    normalMaterial();
    translate(0, 0, -600);
    for (let i = 0; i <= 12; i++) {
      for (let j = 0; j <= 12; j++) {
        push();
        let a = (j / 12) * PI;
        let b = (i / 12) * PI;
        translate(
          sin(2 * a) * radius * sin(b),
          (cos(b) * radius) / 2,
          cos(2 * a) * radius * sin(b)
        );
        if (j % 2 === 0) {
          cone(30,30);
        } else {
          box(30, 30, 30);
        }
        pop();
      }
    }
  }
  
  