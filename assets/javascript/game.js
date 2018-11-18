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
                    $("#" + firstCardID).hide()
                    $("#" + secondCardID).hide()
                    count++; 
                    if(count === 2){
                        setTimeout(function(){alert("You won!");
                        }, 200);
                    }
                }, 500);
            }
            else{
                setTimeout(function(){
                $("#" + firstCardID).attr("src", "assets/images/card-back.png");
                $("#" + secondCardID).attr("src", "assets/images/card-back.png");}, 500); 
            }
            firstSelect = false;
            secondSelect = false;
        }
    });
    
}














