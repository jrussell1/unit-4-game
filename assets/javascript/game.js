// Global variables//

var random_result;
var losses = 0;
var wins = 0;
var previous = 0;

//crystals
//create random number between 19 and 120


var resetAndstart = function () {

    random_result = Math.floor(Math.random() * 102) + 19;

    $("#result").html('Random Result: ' + random_result);
    console.log(random_result);

    for(var i = 0; i < 4; i++){
        //generates random numbers
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "dataRandom": random
            });
    
        $(".crystals").append(crystal);
        console.log('working');
    }   
}

resetAndstart();
//setup click function and convert from string
$(".crystal").on('click', function () {
    
    var num = parseInt($(this).attr('dataRandom'));

    previous+=num;

    console.log(previous);

    if (previous > random_result){
        losses--;
        
        $("losses").html(losses);
        resetAndstart();
    }
    else if (previous === random_result){
        wins++;

        $("wins").html(wins);
        resetAndstart();
    }
});