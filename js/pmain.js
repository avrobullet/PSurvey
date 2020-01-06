
/*Beginning questioning*/
function beginQuestions()
{
    /*Show question HTML layer*/
    document.getElementById("mainQuestionLayer").style.display = "block";
    /*Hide intro HTML layer*/
    document.getElementById("mainIntroLayer").style.display = "none";
}
/*Return to introductions*/
function introReturn()
{
    /*Hide question HTML layer*/
    document.getElementById("mainQuestionLayer").style.display = "none";
    /*Show intro HTML layer*/
    document.getElementById("mainIntroLayer").style.display = "block";
}
/*Testing prev button*/
function prevButtonPress()
{
    var elem = document.getElementById("prevButton");
    if (elem.value=="Previous!") elem.value = "Hello There!";
    else elem.value = "Previous!";
}
/*Testing next button*/
function nextButtonPress()
{
    var elem = document.getElementById("nextButton");
    if (elem.value=="Next!") elem.value = "Hello There!";
    else elem.value = "Next!";
}


/*Hide the various layers of the survey*/
function toggleLayers()
{

}















