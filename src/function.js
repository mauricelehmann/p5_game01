
function isCollision( x0 , y0 , radius0 , x1 , y1 , radius1 ){

	var deltaX = Math.abs( x0 - x1 ) ,
			deltaY = Math.abs( y0 - y1 ) ,
			distance = Math.sqrt( Math.pow(deltaX,2) + Math.pow(deltaY,2)) ;

	if( distance <= (radius0 + radius1) / 2  ){
		return true ;

	} else{
		return false ;
	}
}

function movementListener(){

	//Key mapping & movement
	if (keyIsDown(LEFT_ARROW)) {
 	  mainCircle.goLeft() ;
 	}
 	if (keyIsDown(RIGHT_ARROW)){
 	  mainCircle.goRight() ;
 	}
 	if (keyIsDown(UP_ARROW)) {
 	  mainCircle.goUp() ;
 	}
 	if (keyIsDown(DOWN_ARROW)) {
 	  mainCircle.goDown() ;
 	}
}
function actionListener(){

	if(keyIsDown(32)){
 		mainCircle.radius += 3 ;
 	}
 	if(keyIsDown(82)){
 		mainCircle.radius = 50 ;
 	}
}
function collisionListener(){

	for (var dot = 0; dot < dotArray.length; dot++) {

		//check if is there a collision between mainCircle and any dots
		if(isCollision(
				mainCircle.posX,
				mainCircle.posY,
				mainCircle.radius,
				dotArray[dot].x,
				dotArray[dot].y,
				dotArray[dot].r)){

			//Event when main ball hit a dot
			mainCircle.radius += 5 ;
			//Remove the dot
			dotArray.splice(dot,1) ;
		}
	}
}


function fillDotArray(){

	for (var dot = 0; dot < 20; dot++) {

		var randX = random(windowWidth) ;
		var randY = random(windowHeight) ;
		var randR = random(5 , 15 ) ;
		var RGBRed  	= random(0,255),
			RGBGreen 	= random(0,255),
		    RGBBlue 	= random(0,255) ;

		var dotObject = new Circle(randX,randY,randR,RGBRed,RGBGreen,RGBBlue) ;
		dotArray.push({ x : dotObject.posX ,
						y : dotObject.posY ,
						r : dotObject.radius ,
						RGBRed : dotObject.RGBRed ,
						RGBreen : dotObject.RGBGreen ,
						RGBBlue : dotObject.RGBBlue }) ;
	};
}

function printDotArray(){

	for (var dot = 0; dot < dotArray.length; dot++) {
		//Set the dot color
		fill(dotArray[dot].RGBRed , dotArray[dot].RGBreen ,dotArray[dot].RGBBlue );
		//Creating ellipse from Circle class properties
		ellipse(dotArray[dot].x, dotArray[dot].y, dotArray[dot].r, dotArray[dot].r);
	};

}

function endGameListener(){

	if( dotArray.length == 0 ){
		fillDotArray() ;
		mainCircle.radius = 50 ;
	}
}

function keyPressed(){

}
