window.onload=function(){

//declare variables

var gameOn = false;
var isCharSelected = false;
var isEnemySelected = false;

//declare objects

var Character = function(){

    this.name = "";
    this.hp = 0;
    this.ap = 0;
    this.ac = 0;
    this.dead = false;
    this.attack = function() {
        roll = Math.floor(Math.floor(Math.random() * 20) + 1);
        dmg = roll + ap;
        return dmg;
    }


};




//Functions

function newGame() {
    

}

function charSelector() {
    
    isCharSelected = true;
    $("#pc-area").append(this);
}

function enemySelector() {

    isEnemySelected = true;
    $("enemy-area").append(this);
}







//Check if game is running
// $("#newGame-btn").click(newGame);

// if (gameOn) {



//On click event selecting PC
$("#character").click(function() {

    if (isCharSelected === false) {
        
        isCharSelected = true;
        $("#pc-area").append($("#character"));
      
        var pc = new Character(20, 20, 20, false);

    } else if (isEnemySelected === false){

        isEnemySelected = true;
        $("enemy-area").append($("#character"));
        var npc = new Character(20, 20, 20, false);
    }
   
});

$("#rogue").click(function() {
    
    if (isCharSelected === false) {
        
        isCharSelected = true;
        $("#rogue").hide();
        var pc = new Character(20, 20, 20, false);

    } else if (isEnemySelected === false){

        isEnemySelected = true;
        $("#rogue").hide();
        var npc = new Character(20, 20, 20, false);
    }

    
});

$("#wizard").click(function() {

    if (isCharSelected === false) {
        
        isCharSelected = true;
        $("#wizard").hide();
        var pc = new Character(20, 20, 20, false);

    } else if (isEnemySelected === false){

        isEnemySelected = true;
        $("#wizard").hide();
        var npc = new Character(20, 20, 20, false);
    }
  
});

$("#ranger").click(function() {

    if (isCharSelected === false) {
        
        isCharSelected = true;
        $("#ranger").hide();
        var pc = new Character(20, 20, 20, false);

    } else if (isEnemySelected === false){

        isEnemySelected = true;
        $("#ranger").hide();
        var npc = new Character(20, 20, 20, false);
    }
 
});



//On click attack

$("#attack-btn").click(function() {
    //Check to make sure a character and enemy are selected
    if (isCharSelected && isEnemySelected) {

        //run method that causes characters to attack each other

        //Check is either character loses their HP
        if (npc.hp < 0) {

            isEnemySelected = false;
            //delete current instance of npc object 
            //remove child from the #enemy-area

        } else if (pc.hp < 0) {

            //Offer to restart the game
        
        }   




    } else {
        //alert to select character/enemy
    }





});

//Conditional to check when a character loses all their HP





}