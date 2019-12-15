var particles = [];
var noun=['other', 'good', 'new', 'old', 'great', 'high', 'small', 'different',' large' ,'local', 'social', 'important',' long' ,'young' ,'national' ,'British' ,'right', 'early' ,'possible', 'big' ,'little' ,'political', 'able', 'late', 'general', 'full',
'far','low',
'public',
'available',
'bad',
'main',
'sure',
'clear',
'major',
'economic',
'only',
'likely',
'have',
        'do',
        'will',
        'say',
        'would',
        'can',
        'get',
        'make',
        'go',
        'see',
        'know',
        'take',
        'could',
        'think',
        'come',
        'give',
        'look',
        'may',
        'should',
        'use',
        'find',
        'want',
        'tell',
       ' must',
        'put',
        'mean',
       ' become',
        'leave',
        'work',
        'need',
        'feel',
        'seem',
        'might',
        'ask',
        'show',
        'try',
        'call',
        'provide',
        'keep',
       'hold',
        'turn',
        'follow',
       ' begin',
        'bring',
        'like',
        'going',
        'help',
        'start',
' special',
'difficult',
' certain',
'open',
' whole',
'white',
'free',
'short',
'easy',
' strong',
'European',
'central',
'similar',
'human',
'true',
'common',
'necessary',

'hard',
'private',
'poor',
'financial',
'wide',
'foreign',
'simple',
'recent',
'concerned',
'American',
'various',
'close',
' fine',
'English',

' total',
'prime',
'significant',
'industrial',
'sorry',
'dead',
'specific','BlackMan', 'fashiondesigner', 'pilot', 'busdriver', 'bartender', 'waitress', 'waiter' ,'stonemason', 'gardener','composer', 'solicitor', 'judge', 'dancer','sculptor' ,'poet', 'writer', 'photographer','Bingley', 'Web' ,'accountant', 'Darcy', 'Lucas' ,'Chapter', 'Miss', 'Darcyive' ,'economist', 'lawyer' ,'lecturer' ,'priest']
var b;
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	
	colorMode(RGB, 255, 255, 255, 1);
	
	for(var n = 0; n < 200; n++) {
		particles.push(new Particle());
	}
}

function draw() {
	clear();

	for(var n = particles.length - 1; n >= 0; n--) {
		particles[n].update();
		particles[n].draw();
	}
	
	if (mouseIsPressed == true) {
        fill(0); // White
        b=Math.floor(Math.random() * noun.length) + 1;
      }
      else {
        fill(255);   // Black
      }
      textSize(30);
      text(noun[b], mouseX, mouseY);

}

function windowResized() {
	resizeCanvas(window.innerWidth, window.innerHeight);
}

function Particle() {
	this.position = createVector(random(width), random(height));
	this.accel = createVector(0, 0);
	this.vel = p5.Vector.random2D();
	this.update = function() {
		this.vel.add(this.accel);
		this.position.add(this.vel);
		this.accel.mult(0);
		this.vel.limit(5);
		if(this.position.x > width) {
			this.position.x = 0;
		}
		if (this.position.x < 0) {
			this.position.x = width;
		}
		if (this.position.y > height) {
			this.position.y = 0;
		}
		if (this.position.y < 0) {
			this.position.y = height;
		}
	}
	this.applyForce = function(force) {
		this.accel.add(force);
	}
	this.draw = function() {
		noStroke();
		fill(0);
		ellipse(this.position.x, this.position.y, 4, 4);
		
		var dirCentre = p5.Vector.sub(this.position, createVector(width / 2, height / 2));
		
		if(dirCentre.mag() <= 200) {
			var alpha = map(dirCentre.mag(), 0, 200, 1, 0);
			stroke(100, alpha);
			strokeWeight(1);
			line(width/2, height/2, this.position.x, this.position.y);
		}
	}
}