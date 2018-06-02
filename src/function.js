

//Check the collision between dots and circle ( players )
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

//Fill the dotArray[] wich contains all circle objects called "dots"
function fillDotArray(){

	for (var dot = 0; dot < 1; dot++) {
		var randX = random(windowWidth) ;
		var randY = random(windowHeight) ;
		var randR = random(5 , 15 ) ;
		var RGBRed  	= random(0,255),
				RGBGreen 	= random(0,255),
		    RGBBlue 	= random(0,255) ;
		var dotObject = new Circle(randX,randY,randR,RGBRed,RGBGreen,RGBBlue) ;
		dotArray.push(dotObject) ;
	};
}

function printDotArray( objectArray ){

	for (var dot = 0; dot < objectArray.length; dot++) {
		//Set the dot color
		fill(objectArray[dot].RGBRed , objectArray[dot].RGBreen ,objectArray[dot].RGBBlue );
		//Creating ellipse from Circle class properties
		ellipse(objectArray[dot].posX, objectArray[dot].posY, objectArray[dot].radius, objectArray[dot].radius);
	};

}

function showScore(){
	fill(0, 102, 153);
	textSize(20) ;
	text('Player 1 score : ' + mainCircle.radius, 20 , 20) ;
	text('Player 2 score : ' + secondCircle.radius, 20 , 40) ;
}

function showInput(){
	fill(0, 102, 153);
	textSize(20) ;
	text('Player 1 controles : Left arrow , right arrow , down arrow , up arrow , L to shoot', 200 , 20) ;
	text('Player 2 controles : A , S , D , S , W , G to shoot', 200 , 40) ;
}
