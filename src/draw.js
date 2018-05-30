//Globals objects
var mainCircle = new Circle(10,10,50,0,255,0) ;
var dotArray = [] ;


//Setup , run once
function setup() {
	//Canvas setup
	var canevas = createCanvas(windowWidth - 20 ,windowHeight -20 );
	//Dots setup
	fillDotArray()
}

//Draw , run constantly
function draw() {

	//Reset the background
	background(255);
	//Create an ellipse todo : make
	mainCircle.showCircle() ;
	//set dot(s)
	printDotArray() ;


	//Listening inputs for movements
	movementListener();
	//Listening inputs for actions
	actionListener();
	//Listening collision
	collisionListener();
	//Check if the game is over and reset some parameters
	endGameListener();
}
