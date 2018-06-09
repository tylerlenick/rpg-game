window.onload=function(){

//declare variables

var gameOn = false;
var isCharSelected = false;
var isEnemySelected = false;

//declare objects

var Character = {
    name: "",
    hp: 0,
    ap: 0,
    ac: 0,
    dead: false,
    attack: function() {
        roll = Math.floor(Math.floor(Math.random() * 20) + 1);
        dmg = roll + ap;
        return dmg;
    },
    setName: function(newName) {
        this.name = newName;
    }
};

var pc = Character;
var npc = Character;






//Functions


    









//Check if game is running
// $("#newGame-btn").click(newGame);

// if (gameOn) {



//On click event selecting PC
$(".character").click(function() {

    if (isCharSelected === false) {
        
        isCharSelected = true;
        $(".pc-area").append($("#" + $(this).attr("id")));
      
        pc.name = $(this).attr("id");
        pc.hp = parseInt($(this).attr("data-hp"));
        pc.atk = parseInt($(this).attr("data-atk"));
        

    } else if (isEnemySelected === false){

        isEnemySelected = true;
        $(".enemy-area").append($("#" + $(this).attr("id")));

        npc.name = $(this).attr("id");
        npc.hp = parseInt($(this).attr("data-hp"));
        npc.atk = parseInt($(this).attr("data-atk"));
        
        
    }
   

});
//On click attack

$("#attack-btn").click(function() {
    //Check to make sure a character and enemy are selected
    if (isCharSelected && isEnemySelected) {

        //run method that causes characters to attack each other
        npc.hp -= pc.atk;
        pc.hp -= npc.atk;

        console.log(npc.hp);
        console.log(pc.hp);
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


