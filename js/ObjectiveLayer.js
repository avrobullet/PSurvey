
/**
 * Pauses the game and makes the objective screen visible to the player. 
 */
function goToObjective()
{
    game.paused = true;
    updateObjectiveScreen();
    document.getElementById("objectiveLayer").style.display = "block";
}

/**
 * Starts the game when the button is pressed and hides the objective screen 
 * from the player.
 */
function startGame()
{
    atLevelBeginning = false;
    document.getElementById("objectiveLayer").style.display = "none";
    game.paused = false;
}

/**
 * This function updates the objective screen info to match the corresponding
 * level the player is one. If this is their first time playing, it should 
 * default to level 1.
 */
function updateObjectiveScreen()
{
    var currentLevel;
    var bodyText = "";
    var levelName = "";
    //Gets the current level from memory, it it doesn't exist give it a default of 1.
    if (localStorage.currentLevel)
    {
       currentLevel = localStorage.currentLevel;
    }
    else
    {
        localStorage.currentLevel = 1;
        currentLevel = 1;
    }
    document.getElementById("levelNumber").innerHTML = "Level " + currentLevel;

    //Decides what text should be displayed.
    switch(currentLevel)
    {
        case "1":
            bodyText = "&quot;Hee Hee Hee, For you will never be free. Don't bother attempting to reach the portal, for you will never again be mortal.&quot;<br><br>Goal: Escape by reaching the goal in the cliff";
            levelName = "Level 1 Name";
            break;

        case "2":
            bodyText = "&quot;I've underestimated your skill, but not again I will, for this time there is no out, so you will surely strikeout.&quot;<br><br>Goal: Reach a velocity of x m/s without ever exceeding an acceleration of y m/s^2";
            levelName = "Level 2 Name";
            break;
    }

    document.getElementById("objectiveBody").innerHTML = bodyText;
    document.getElementById("levelName").innerHTML = levelName;
}