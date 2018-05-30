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
		//this.innertia += ( 5 * Math.pow(2,-10000)) ;
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
