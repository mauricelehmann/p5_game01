function Circle( posX, posY, radius ,RGBRed ,RGBGreen , RGBBlue ){

	this.posX = posX ;
	this.posY = posY ;
	this.radius = radius ;
	this.RGBRed = RGBRed ;
	this.RGBGreen = RGBGreen ;
	this.RGBBlue = RGBBlue ;

	//show circle
	this.showCircle = function(){
		fill(this.RGBRed , this.RGBGreen , this.RGBBlue) ;
		ellipse(this.posX, this.posY, this.radius, this.radius);
	}
	//Movements
	this.goRight = function(){
		this.posX += 10  ;
	}
	this.goLeft = function(){
		this.posX -= 10 ;
	}
	this.goDown = function(){
		this.posY += 10
	}
	this.goUp = function(){
		this.posY -= 10
	}
	//Reset radius
	this.resetRadius = function() {
		this.radius = 50 ;
	}

	this.shoot = function() {
		
	}
}


//Global vars for tails , BETA
// var x = 100,
//   	y = 100,
//   	angle1 = 0.0,
//   	segLength = 50;


//TODO LATER
function setTail(){
	strokeWeight(20.0);
	stroke(255, 100);
}

//TODO LATER
function drawTail( x, y , angle1 , segLength ){
	//Animation circle
	dx = mainCircle.posX - x;
	dy = mainCircle.posY - y;
	angle1 = atan2(dy, dx);
	x = mainCircle.posX - (cos(angle1) * segLength);
	y = mainCircle.posY - (sin(angle1) * segLength);
	segment(x, y, angle1);
	ellipse(x, y, 20, 20);

}
//TODO LATER
function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
