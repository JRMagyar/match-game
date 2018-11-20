window.onload = function(){
    //defining all global variables
    var imagePath = "assets/images/";
    let firstSelect = false;
    let secondSelect = false;
    let cardSelect = "";
    let firstCardVal = "";
    let secondCardVal = "";
    let firstCardID = "";
    let secondCardID ="";
    let count = 0;

    //This section is to try and randomize the card order
    //first all cards are placed in an array, the array is then sorted into a random order
    var cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14];
    var shuffled = "";
    //now we creat a function that attaches the values from shuffled array to the divs, this is included in the reset function that returns everything to start settings
    function reset(){
       shuffled = cards.sort(function(a, b){return 0.5 - Math.random()})
        for(i=0, c=1; i < cards.length; i++, c++){
            $("#card"+c).attr({
                value: cards[i],
                src: imagePath + "card-back.png",
                style: "visibility: visible"})
        }
        $("#win-box").text("")
        count=0;
    }
    //reset is run first in order to have all variables set for new game
    reset();
    //when clicked the new game button will run the reset function
    $("#new-game").on("click", function(){
        reset();
    })

    //All of the following code runs when user clicks a card
    $(".play-card").on("click", function(){
        //cardSelect holds the value of the card clicked
        cardSelect = $(this).attr("value");
        //the following line changes the src for the card clicked so that it displays the card with the corresponding value 
        $(this).attr("src", imagePath + cardSelect + ".png");
        //following runs when player is selecting their first card
        if((firstSelect === false) && (secondSelect === false)){
            firstCardVal = cardSelect;
            firstCardID = $(this).attr("id");
            firstSelect = true;
        }
        //last condition checks if user is selecting new card or same. the following code runs when the user selects a second card
        else if((firstSelect === true) && (secondSelect === false) && (firstCardID !== $(this).attr("id"))){
            secondCardVal = cardSelect;
            secondCardID = $(this).attr("id");
            secondSelect = true;
        }
        //following code runs when player selects the same card they first selected. It "flips" the card selected and allows user to reselect the first card
        else if((firstSelect === true) && (secondSelect === false) && (firstCardID == $(this).attr("id"))){
            $("#" + firstCardID).attr("src", imagePath + "card-back.png");
            firstSelect = false;
        }
        //the following runs when the player has selected two cards
        if((firstSelect === true) && (secondSelect === true)){
            //runs when there is a match
            if(firstCardVal == secondCardVal){
                //timeout is used so that the player can see the front of the card before it is removed from play. If there is a better way to do this I don't know it.
                setTimeout(function(){
                    //visibility: hidden is used instead of display: none so that the other cards won't move
                    $("#" + firstCardID).attr("style", "visibility: hidden");
                    $("#" + secondCardID).attr("style", "visibility: hidden");
                    count++; 
                    if(count === 14){
                        $("#win-box").text("You won!")
                    }
                }, 300);
            }
            else{
                setTimeout(function(){
                $("#" + firstCardID).attr("src", imagePath + "card-back.png");
                $("#" + secondCardID).attr("src", imagePath + "card-back.png");}, 300); 
            }
            firstSelect = false;
            secondSelect = false;
        }
    });
    
}














