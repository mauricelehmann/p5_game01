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

}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
