// Global variables//
var random_result;
var losses = 0;
var wins = 0;
var previous = 0;

//reset and start the game
var resetAndstart = function () {

    //resets//
    $(".crystals").empty();
    
    //crystal images
    var images = [
        'https://p.luckyretail.com/Uploadfile/20160530/002464/002464.jpg',
        'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642',
        'https://media.istockphoto.com/photos/crystal-picture-id517597267?k=6&m=517597267&s=612x612&w=0&h=PltQ4lPULSRG8ivKfslmf2qbsSEhshW_wPSJPcLRF2I=',
        'https://images-na.ssl-images-amazon.com/images/I/71GADww3MwL._SL1200_.jpg'
    ]

    //generates a random number between 19 and 120//
    random_result = Math.floor(Math.random() * 102) + 19;
    //displays the number
    $("#result").html(random_result);

    for(var i = 0; i < 4; i++){
        //generates random numbers and affixes them to the crystals//
        var random = Math.floor(Math.random() * 12) + 1;

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "dataRandom": random
            });
            
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            });
    
        $(".crystals").append(crystal);
        console.log('working');
    }   
    //resets the counter for the player
    $("#previous").html('Total score: ' + previous);

}

resetAndstart();
//setup click function and convert from string
$(document).on('click', ".crystal", function () {
    
    var num = parseInt($(this).attr('dataRandom'));

    previous+=num;
    
    $("#previous").html('Total score: ' + previous);
    
    //conditional statements for when wins and losses are displyed
    if (previous > random_result) {
        losses++;
        
        $("#losses").html('You lost: ' + losses);
        
        previous = 0;

        resetAndstart();

    }
    else if (previous === random_result) {
        wins++;

        $("#wins").html('You won: ' + wins);
        
        previous = 0;

        resetAndstart();
    }
});