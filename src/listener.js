function Listener() {

    this.endGame = function(){
      //The first players reaching 100 as radius "win" the game
      if( mainCircle.radius > 100 || secondCircle.radius > 100 ){
        mainCircle.resetRadius() ;
        secondCircle.resetRadius() ;
      }
      if( dotArray.length == 0 ){
        fillDotArray() ;
        //mainCircle.resetRadius() ;
        //secondCircle.resetRadius() ;
      }
    }

    //Check collision between objects passed in args
    this.collisions = function(){
      //For each dots on the map ..
      for (var dot = 0; dot < dotArray.length; dot++) {
        //For each players passed as args in the function
        for (var i = 0; i < arguments.length; i++){
          //check if is there a collision between mainCircle and any dots
          if(isCollision(
            players[i].posX,
            players[i].posY,
            players[i].radius,
            dotArray[dot].x,
            dotArray[dot].y,
            dotArray[dot].r)){

            //Event when main ball hit a dot
            players[i].radius += 5 ;
            //Remove the dot
            dotArray.splice(dot,1) ;
            break ;
          }
        }
      }
    }
    //Special actions
    this.actions = function() {
      if(keyIsDown(32)){
        mainCircle.radius += 3 ;
      }
      if(keyIsDown(82)){
        mainCircle.radius = 50 ;
      }
    }

    //Movements for mainCircle and secondCircle
    this.movements = function(){
    	//Key mapping & movement for mainCircle
    	//Todo : Faire autrement !
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
    	//Key mapping & movement for secondCircle
    	//Todo : Faire autrement !
    	if (keyIsDown(65)) {
     	  secondCircle.goLeft() ;
     	}
     	if (keyIsDown(68)){
     	  secondCircle.goRight() ;
     	}
     	if (keyIsDown(83)) {
     	  secondCircle.goDown() ;
     	}
     	if (keyIsDown(87)) {
     	  secondCircle.goUp() ;
     	}
    }
}
