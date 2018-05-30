//Variable initialisation
var x = 10 , y = 10 ;
var radius = 50 ;

//test

var mainCircle = new Circle(10,10,50,0,255,0) ;
var dotArray = [] ;



function setup() {
	//Canvas setup
	var canevas = createCanvas(windowWidth - 20 ,windowHeight -20 );
	//Dots setup
	fillDotArray() ;
	//Sound setup
	// var songRegister = {
	//   kick  : loadSound('assets/sound/') ,
	//   snare : loadSound('assets/sound/snare.mp3')
	// }
	//kick = loadSound('assets/sound/kick.waw') ;

}

function draw() {

	//Reset the background
	background(255);
	//Create an ellipse todo : make function
	fill(0,0,255);
	ellipse(mainCircle.posX,mainCircle.posY,mainCircle.radius,mainCircle.radius);
	//Listening inputs for movements
	movementListener();
	//Listening inputs for actions
	actionListener();
	//Listening collision
	collisionListener();
	//set dot(s)
	printDotArray() ;
	//Check if the game is over and reset some parameters
	endGameListener();
}
