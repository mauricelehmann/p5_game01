//Globals objects
var mainCircle = new Circle(10,10,50,0,255,0) ;
var secondCircle = new Circle(10,10,50,0,255,0) ;
var players = [ mainCircle , secondCircle ] ;
var dotArray = [] ;
var bulletArray = [] ;
var listener = new Listener() ;


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
	background(255) ;
	showScore() ;
	showInput() ;
	//Create an ellipse todo : make
	mainCircle.showCircle() ;
	secondCircle.showCircle() ;
	//set dot(s)
	printDotArray( dotArray ) ;
	printDotArray( bulletArray ) ;
	//Listening inputs for movements
	listener.movements();
	//Listening inputs for actions
	listener.actions();
	//Listening collision
	listener.collisions( dotArray );
	//Listening collision with bullets
	listener.collisions( bulletArray );
	//Check if the game is over and reset some parameters
	listener.endGame();
	//Bullet's animation
	listener.bulletAnimation();
}
