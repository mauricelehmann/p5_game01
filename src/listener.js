function Listener() {
    //Check the game
    this.endGame = endGame
    //Check collision between objects passed in args
    this.collisions = collisions
    //Special actions
    this.actions = actions
    //Movements for mainCircle and secondCircle
    this.movements = movements ;
    //Bullet's animation
    this.bulletAnimation = bulletAnimation ;
}

function endGame(){
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

function collisions( objectArray ){

  //For each dots on the map ..
  for (var dot = 0; dot < objectArray.length; dot++) {
    //For each players passed as args in the function
    for (var i = 0; i < players.length; i++){
      //check if is there a collision between mainCircle and any dots
      if(isCollision(
        players[i].posX,
        players[i].posY,
        players[i].radius,
        objectArray[dot].posX,
        objectArray[dot].posY,
        objectArray[dot].radius)){
        //Event when main ball hit a dot
        players[i].radius += 5 ;
        //Remove the dot
        objectArray.splice(dot,1) ;
        break ;
      }
    }
  }
}

//Used for huge loop actions. The loop continue while the key is pressed
function actions() {
  //Press space bar
  if(keyIsDown(32)){
    //TODO : implémenter des cadences de tirs différente selon le jeu
    //mainCircle.shoot()
  }
  //Press "R"
  if(keyIsDown(82)){
    mainCircle.radius = 50 ;
  }
}

function keyTyped() {
  //Boum boum
  if (key === 'g') {
    secondCircle.shoot()
  }
  if (key === 'l') {
    mainCircle.shoot()
  }
}

function movements(){

  //TODO : Faire de la recursivité pour cette fonction , -> keyMapping en attribut de Circle Object

  //Key mapping & movement for mainCircle
  if (keyIsDown(RIGHT_ARROW)){
    if(keyIsDown(UP_ARROW)){
      mainCircle.move("UPRIGHT") ;
    }else if(keyIsDown(DOWN_ARROW)){
      mainCircle.move("DOWNRIGHT") ;
    }else {
      mainCircle.move("RIGHT") ;
    }
  } else if (keyIsDown(LEFT_ARROW)){
    if(keyIsDown(UP_ARROW)){
      mainCircle.move("UPLEFT") ;
    }else if(keyIsDown(DOWN_ARROW)){
      mainCircle.move("DOWNLEFT") ;
    }else {
      mainCircle.move("LEFT") ;
    }
  } else if (keyIsDown(DOWN_ARROW)){
    mainCircle.move("DOWN") ;
  } else if( keyIsDown(UP_ARROW)){
    mainCircle.move("UP") ;
  }

  //Key mapping & movement for secondCircle
  //83 is "S"
  //65 is "A"
  //68 is "D"
  //87 is "W"

  if (keyIsDown(68)){
    if(keyIsDown(87)){
      secondCircle.move("UPRIGHT") ;
    }else if(keyIsDown(83)){
      secondCircle.move("DOWNRIGHT") ;
    }else {
      secondCircle.move("RIGHT") ;
    }
  } else if (keyIsDown(65)){
    if(keyIsDown(87)){
      secondCircle.move("UPLEFT") ;
    }else if(keyIsDown(83)){
      secondCircle.move("DOWNLEFT") ;
    }else {
      secondCircle.move("LEFT") ;
    }
  } else if (keyIsDown(83)){
      secondCircle.move("DOWN") ;
  } else if( keyIsDown(87)){
      secondCircle.move("UP") ;
  }

}

function bulletAnimation() {
  for (var i = 0; i < bulletArray.length; i++) {
    //Move the bullet to the player's direction since its reach the windows border
    bulletArray[i].move(bulletArray[i].direction)
    //bulletArray[i].move(bulletArray[i].direction)
    //Check if the bullet is out of the windows
    if(bulletArray[i].posX < 0 || bulletArray[i].posX > windowWidth ||  bulletArray[i].posY < 0 || bulletArray[i].posY > windowHeight){
      //Delete the bullet from the bulletArray
      bulletArray.splice(i,1)
    }
  }
}
