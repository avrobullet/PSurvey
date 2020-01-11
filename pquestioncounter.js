/*Keeps track of which question user is on*/
var questionCounter = 1;

/*Increment to the next question*/
function nextQuestion()
{
    if(questionCounter >= 5)
        questionCounter = 5;
    else
        questionCounter +=1;
    questionTrack();
}
/*Decrement to the prev question*/
function prevQuestion()
{
    if(questionCounter <= 1)
        questionCounter = 1;
    else
        questionCounter -=1;
    questionTrack();
}
/*Track which question user is one*/
function questionTrack()
{
    /*Only showing which user is on*/
    switch(questionCounter) {
        //Question 1
        case 1:
            //hide unwanted questions
            document.getElementById("question2").style.display = "none";
            document.getElementById("question3").style.display = "none";
            document.getElementById("question4").style.display = "none";
            document.getElementById("question5").style.display = "none";
            //show question in question (lmoa)
            document.getElementById("question1").style.display = "block";
            break;
        //Question 2
        case 2:
            //hide unwanted questions
            document.getElementById("question1").style.display = "none";
            document.getElementById("question3").style.display = "none";
            document.getElementById("question4").style.display = "none";
            document.getElementById("question5").style.display = "none";
            //show question in question (lmoa)
            document.getElementById("question2").style.display = "block";
            break;
        //Question 3
        case 3:
            //hide unwanted questions
            document.getElementById("question1").style.display = "none";
            document.getElementById("question2").style.display = "none";
            document.getElementById("question4").style.display = "none";
            document.getElementById("question5").style.display = "none";
            //show question in question (lmoa)
            document.getElementById("question3").style.display = "block";
            break;
        //Question 4
        case 4:
            //hide unwanted questions
            document.getElementById("question1").style.display = "none";
            document.getElementById("question2").style.display = "none";
            document.getElementById("question3").style.display = "none";
            document.getElementById("question5").style.display = "none";
            //show question in question (lmoa)
            document.getElementById("question4").style.display = "block";
            break;
        //Question 5
        case 5:
            //hide unwanted questions
            document.getElementById("question1").style.display = "none";
            document.getElementById("question2").style.display = "none";
            document.getElementById("question3").style.display = "none";
            document.getElementById("question4").style.display = "none";
            //show question in question (lmoa)
            document.getElementById("question5").style.display = "block";
            break;
        default:
    }
}
/*Test question switching*/
function questionSwitchingAlert()
{
    alert("Going to question " + questionCounter);
}