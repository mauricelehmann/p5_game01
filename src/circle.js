function Circle( posX, posY, radius ,RGBRed ,RGBGreen , RGBBlue ){

	this.posX = posX ;
	this.posY = posY ;
	this.radius = radius ;
	this.RGBRed = RGBRed ;
	this.RGBGreen = RGBGreen ;
	this.RGBBlue = RGBBlue
	//Direction can be : UP DOWN LEFT RIGHT
	this.direction = "" ;
	//show circle
	this.showCircle = showCircle ;
	//Movements
	this.move = move
	//Reset radius
	this.resetRadius = function() {
		this.radius = 50 ;
	}
	this.shoot = shoot ;

}

function move( direction ) {

	if(direction == "UP"){
		this.posY -= 10 ;
	}
	if(direction == "DOWN"){
		this.posY += 10 ;
	}
	if(direction == "LEFT"){
		this.posX -= 10 ;
	}
	if(direction == "RIGHT"){
		this.posX += 10 ;
	}
	if(direction == "UPLEFT"){
		this.posX -= 10 ;
		this.posY -= 10 ;
	}
	if(direction == "UPRIGHT"){
		this.posX += 10 ;
		this.posY -= 10 ;
	}
	if(direction == "DOWNLEFT"){
		this.posX -= 10 ;
		this.posY += 10 ;
	}
	if(direction == "DOWNRIGHT"){
		this.posX += 10 ;
		this.posY += 10 ;
	}

	this.direction = direction ;
}

function showCircle(){
 fill(this.RGBRed , this.RGBGreen , this.RGBBlue) ;
 ellipse(this.posX, this.posY, this.radius, this.radius);
}


function shoot() {
	//Fill the bulletArray with Circle objects and set the direction to go
	var bullet = new Circle(this.posX + (this.radius) , this.posY + (this.radius)  , 10 , 0 , 0 , 255 )
	bullet.direction = this.direction ;
	bulletArray.push(bullet) ;
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
