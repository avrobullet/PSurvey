/*Keeps track of which question user is on*/
var questionMatch = new pquestioncounter();

/*Beginning questioning*/
function beginQuestions()
{
    /*Show question HTML layer*/
    document.getElementById("mainQuestionLayer").style.display = "block";
    /*Hide intro HTML layer*/
    document.getElementById("mainIntroLayer").style.display = "none";
    /*Go to first question*/
    questionTrack();
}
/*Return to introductions*/
function introReturn()
{
    /*Hide question HTML layer*/
    document.getElementById("mainQuestionLayer").style.display = "none";
    /*Show intro HTML layer*/
    document.getElementById("mainIntroLayer").style.display = "block";
}
/*Confirm answer*/
function answerButtonPress()
{
    //Write in a file.txt the answer
}
/*Testing prev button*/
function prevButtonPress()
{
    //Go to prev question
    prevQuestion()
}
/*Testing next button*/
function nextButtonPress() {
    //Go to prev question
    nextQuestion();
}