window.onload=function(){

//declare variables

var gameOn = false;
var isCharSelected = false;
var isEnemySelected = false;

//declare objects

// var Character = {
//     name: "",
//     hp: 0,
//     ap: 0,
//     ac: 0,
//     dead: false,
//     attack: function() {
//         roll = Math.floor(Math.floor(Math.random() * 20) + 1);
//         dmg = roll + ap;
//         return dmg;
//     },
//     setName: function(newName) {
//         this.name = newName;
//     }
// };

var pc = {};
var npc = {};






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
        
        $("#fight-banner").text("SELECT YOUR ENEMY");

    } else if (isEnemySelected === false && isCharSelected){

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
        $(".top-text").text(pc.name + " hits " + npc.name + " for " + pc.atk + " damage! ");
        $(".second-text").text(npc.name + " hits " + pc.name + " for " + npc.atk + " damage! ");
        $(".third-text").text(" ");
        
        npc.hp -= pc.atk;
        pc.hp -= npc.atk;

        pc.atk += 7;

        $(".pc-area").find(".hp").text("HP: " + pc.hp);
        $(".enemy-area").find(".hp").text("HP: " + npc.hp);


              
    
        //Check is either character loses their HP
        if (npc.hp <= 0) {

            isEnemySelected = false;
            //delete current instance of npc object 
            $(".third-text").text("Enemy Defeated!");
            
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


