window.onload=function(){

//declare variables

var gameOn = false;
var isCharSelected = false;
var isEnemySelected = false;
var numWins = 0;
var finishHim = new Audio ("assets/audio/finish-him.mp3");
var flawlessVictory = new Audio ("assets/audio/flawless-victory.mp3");
var theme = new Audio ("assets/audio/theme.mp3");

//declare objects

var pc = {};
var npc = {};






//Functions





//Check if game is running
// $("#newGame-btn").click(newGame);

// if (gameOn) {



//On click event selecting PC
$(".character").click(function() {

    if (isCharSelected === false) {
        
        theme.play();
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

        pc.atk += pc.atk;

        $(".pc-area").find(".hp").text("HP: " + pc.hp);
        $(".enemy-area").find(".hp").text("HP: " + npc.hp);


              
    
        //Check is either character loses their HP
        if (npc.hp <= 0) {

            isEnemySelected = false;
            //delete current instance of npc object 
            $(".third-text").text("Enemy Defeated!");
            
            //remove child from the #enemy-area
            $(".enemy-area").empty();
            numWins++;
            finishHim.play();

            if (numWins === 3) {
                $(".fourth-text").text("FLAWLESS VICTORY!");
                flawlessVictory.play();
                $(".reset-btn").show();
            }

        } else if (pc.hp < 0) {

            //Offer to restart the game
            $(".reset-btn").show();
            $(".fourth-text").text("You lose, try again");
        }   


    } 


});

//reset button on click
$("#reset-btn").click(function() {
    history.go(0);
});




}


