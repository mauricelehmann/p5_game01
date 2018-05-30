//Globals objects
var mainCircle = new Circle(10,10,50,0,255,0) ;
var dotArray = [] ;



var x = 100,
  	y = 100,
  	angle1 = 0.0,
  	segLength = 50;

//Setup , run once
function setup() {
	//Canvas setup
	var canevas = createCanvas(windowWidth - 20 ,windowHeight -20 );
	//Dots setup
	fillDotArray()

	//Circle animation BETA
	strokeWeight(20.0);
	stroke(255, 100);


}

//Draw , run constantly
function draw() {

	//Reset the background
	background(255);
	//Create an ellipse todo : make
	mainCircle.showCircle() ;
	//set dot(s)
	printDotArray() ;


	//Animation circle BETA
	dx = mainCircle.posX - x;
	dy = mainCircle.posY - y;
	angle1 = atan2(dy, dx);
	x = mainCircle.posX - (cos(angle1) * segLength);
	y = mainCircle.posY - (sin(angle1) * segLength);
	segment(x, y, angle1);
	ellipse(x, y, 20, 20);

	//Listening inputs for movements
	movementListener();
	//Listening inputs for actions
	actionListener();
	//Listening collision
	collisionListener();
	//Check if the game is over and reset some parameters
	endGameListener();
}
