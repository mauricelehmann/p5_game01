function Circle( posX, posY, radius ,RGBRed ,RGBGreen , RGBBlue ){

	this.posX = posX ;
	this.posY = posY ;
	this.radius = radius ;
	this.RGBRed = RGBRed ;
	this.RGBGreen = RGBGreen ;
	this.RGBBlue = RGBBlue ;

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
