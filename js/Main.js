
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var attributeBars = new AttributeBars();
var atLevelBeginning = true;

var mainState = {
    preload: function() 
    {
        game.load.image('circle','../assets/Circle.png');
    },
    create: function()
    {
        //Small example to test pause features.
        game.stage.backgroundColor = '#71c5cf';
        var emitter = game.add.emitter(game.world.centerX,100,200);
        emitter.makeParticles('circle');
        emitter.start(false,5000,20);

        game.input.onDown.add(togglePause,this);
        
    },
    update: function()
    {
        //This checks if the player is beginning a new level.
        //If so, then display the objective screen.
        if(atLevelBeginning)
        {
            goToObjective();
        }
    }

};

var game = new Phaser.Game(screenWidth,screenHeight,"gameLayer");

game.state.add('main',mainState);

game.state.start('main');


/**
 * Function that toggles between the pause and unpause states of the game.
 */
function togglePause()
{
    if(game.paused)
    {
        document.getElementById("buttonLayer").style.display = "none";
        game.paused = false;
    }
    else
    {
        document.getElementById("buttonLayer").style.display = "block";
        game.paused = true;
    }
}

















