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
$("#scorpion").click(function() {

    if (isCharSelected === false) {
        
        isCharSelected = true;
        $(".pc-area").append($("#scorpion"));
      
        var pc = {
            name: "Scorpion",
            hp: 20,
            atk: 5
        }

    } else if (isEnemySelected === false){

        isEnemySelected = true;
        $(".enemy-area").append($("#scorpion"));
        var npc = {
            name: "Scorpion",
            hp: 20,
            atk: 5
        }
        
    }
   
});

$("#kung").click(function() {
    
    if (isCharSelected === false) {
        
        isCharSelected = true;
        $(".pc-area").append($("#kung"));
        var pc = {
            name: "Kung Lao",
            hp: 20,
            atk: 5
        }

    } else if (isEnemySelected === false){

        isEnemySelected = true;
        $(".enemy-area").append($("#kung"));
        var npc = {
            name: "Kung Lao",
            hp: 20,
            atk: 5
        }
    }

    
});

$("#reptile").click(function() {

    if (isCharSelected === false) {
        
        isCharSelected = true;
        $(".pc-area").append($("#reptile"));
        var pc = new Character(20, 20, 20, false);

    } else if (isEnemySelected === false){

        isEnemySelected = true;
        $(".enemy-area").append($("#reptile"));
        var npc = new Character(20, 20, 20, false);
    }
  
});

$("#subzero").click(function() {

    if (isCharSelected === false) {
        
        isCharSelected = true;
        $(".pc-area").append($("#subzero"));
        var pc = new Character(20, 20, 20, false);

    } else if (isEnemySelected === false){

        isEnemySelected = true;
        $(".enemy-area").append($("#subzero"));
        var npc = new Character(20, 20, 20, false);
    }
 
});



//On click attack

$("#attack-btn").click(function() {
    //Check to make sure a character and enemy are selected
    if (isCharSelected && isEnemySelected) {

        //run method that causes characters to attack each other
        npc.hp -= pc.atk;
        pc.hp -= npc.atk;

        console.log("npc.hp");
        //Check is either character loses their HP
        if (npc.hp < 0) {

            isEnemySelected = false;
            //delete current instance of npc object 
            delete npc;
            
            //remove child from the #enemy-area
            $(".enemy-area").empty();

        } else if (pc.hp < 0) {

            //Offer to restart the game
        
        }   




    } else {
        //alert to select character/enemy
    }





});







}