window.onload = function(){
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
        var cards = ["1", "1", "2", "2"];
        var shuffled =cards.sort(function(a, b){return 0.5 - Math.random()})
    //now we creat a function that attaches the values from shuffled array to the divs
    for(i=0, c=1; i < cards.length; i++, c++){
        $("#card"+c).attr("value", cards[i])
        
    }

//this section contains actual game play functions
    $(".play-card").on("click", function(){
        cardSelect = $(this).attr("value");
        $(this).attr("src", imagePath + cardSelect + ".png");
        if((firstSelect === false) && (secondSelect === false)){
            firstCardVal = cardSelect
            firstCardID = $(this).attr("id")
            firstSelect = true
        }
        else if((firstSelect === true) && (secondSelect === false)){
            secondCardVal = cardSelect
            secondCardID = $(this).attr("id")
            secondSelect = true
        }
        if((firstSelect === true) && (secondSelect === true)){
            if(firstCardVal == secondCardVal){
                setTimeout(function(){
                    $("#" + firstCardID).css("visibility", "hidden")
                    $("#" + secondCardID).css("visibility", "hidden")
                    count++; 
                    if(count === 2){
                        $("#win-box").text("You won!")
                    }
                }, 300);
            }
            else{
                setTimeout(function(){
                $("#" + firstCardID).attr("src", "assets/images/card-back.png");
                $("#" + secondCardID).attr("src", "assets/images/card-back.png");}, 300); 
            }
            firstSelect = false;
            secondSelect = false;
        }
    });
    
}














