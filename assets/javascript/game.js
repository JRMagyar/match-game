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
    var cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14];
    var shuffled = "";
    //now we creat a function that attaches the values from shuffled array to the divs
    function reset(){
       shuffled = cards.sort(function(a, b){return 0.5 - Math.random()})
        for(i=0, c=1; i < cards.length; i++, c++){
            $("#card"+c).attr({
                value: cards[i],
                src: imagePath + "card-back.png",
                style: "visibility: visible"})
        }
        $("#win-box").text("")
    }
    
    reset();

    $("#new-game").on("click", function(){
        reset();
    })


    $(".play-card").on("click", function(){
        cardSelect = $(this).attr("value");
        $(this).attr("src", imagePath + cardSelect + ".png");
        if((firstSelect === false) && (secondSelect === false)){
            firstCardVal = cardSelect
            firstCardID = $(this).attr("id")
            firstSelect = true
        }
        else if((firstSelect === true) && (secondSelect === false) && firstCardID !== $(this).attr("id")){
            secondCardVal = cardSelect
            secondCardID = $(this).attr("id")
            secondSelect = true
        }
        if((firstSelect === true) && (secondSelect === true)){
            if(firstCardVal == secondCardVal){
                setTimeout(function(){
                    $("#" + firstCardID).attr("style", "visibility: hidden")
                    $("#" + secondCardID).attr("style", "visibility: hidden")
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














