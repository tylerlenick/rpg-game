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
    
    gameOn = true;
    $(".enemy-chars").hide();
    $("#select-enemy").hide();

}

function charSelector() {
    
}





//Check if game is running
// $("#newGame-btn").click(newGame);

// if (gameOn) {



//On click event selecting PC
$("#paladin").click(function() {

    if (isCharSelected === false) {
        
        isCharSelected = true;
        $("#paladin").hide();
        $("paladin-pc").show();
        $("attack-btn").show();
        var pc = new Character(20, 20, 20, false);

    } else if (isEnemySelected === false){

        isEnemySelected = true;
        $("#paladin").hide();
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

//Conditional to check when a character loses all their HP





}