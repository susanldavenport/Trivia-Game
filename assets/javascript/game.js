var questionArray = [
'What is the name of the typeface Wes Anderson uses in his movies?', 
'Who has Anderson written the most screenplays with?', 
'Anderson includes a reference to what classic show in all of his movies?', 
'In Life Aquatic, what artist did guitar player Seu Jeorge pay tribute to throughout multiple scenes of the movie?', 
'What actor was originally considered for the role of M. Gustave in Grand Budapest Hotel', 
'In what year does Moonrise Kingdom take place?'];

var answerArray = [
['Arial', 'Futura', 'Georgia', 'Monotype'], 
['Bill Murray', 'Angelica Houston', 'Owen Wilson', 'John Malkovich'],
['The Addams Family', 'Dick Van Dyke', 'Buck Rogers', 'The Peanuts'],
['Elvis', 'David Bowie', 'Elton John', 'John Lennon'],
['Kevin Spacey', 'Johnny Depp', 'Stanley Tucci', 'Edward Norton'], 
['1968', '1967', '1966', '1965']
];

var correctAnswers = [
'Futura', 
'Owen Wilson', 
'The Peanuts', 
'David Bowie', 
'Johnny Depp', 
'1965'
];

var timer = 5;
var userGuess;
var userCorrect = 0;
var userIncorrect = 0;
var userTimeout = 0;
var questionCounter = 0;


//______________VARIABLES_____________________

$(document).ready(function() {
// question timer (20 seconds?)
    function twentySeconds() {
        intervalId = setInterval(decrement, 1000);
        } //end twentySeconds function

        function decrement() {
            timer--;
            $("#timerSection").html("<h2>" + timer + "</h2>");
        
            if (timer === 0) {
                stop();
                alert("Time Up!");
                }   
            } //end decrement function

            function stop() {
                clearInterval(intervalId);
            } //end stop function

    //run timer
    twentySeconds();
// ___________________________-

function openingPage() {
  openScreen = "<p class='text-center main-button-container'><a class='btn btn-warning btn-md btn-block start-button' href='#' role='button'>Start</a></p>";
  $("#mainArea").append(openScreen);
}

openingPage();

$("#mainArea").on("click", ".start-button", function(event){
  generateQuestions();
  twentySeconds();
  }); // end start-button

  
  $("body").on("click", ".answer", function(event){  
    // clickSound.play();
    userGuess = $(this).text();
    if (userGuess === correctAnswers[questionCounter]) {
      // alert("correct");
      clearInterval(timer);
      generateWin();
    } else {
        // alert("wrong answer!");
        clearInterval(twentySeconds);
        generateLoss();
    };
  });// Close .answer click

  $("body").on("click", ".reset-button", function(event){
    // clickSound.play();
    resetGame();
}); // Closes reset-button click

function generateQuestions() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
  $("#mainArea").html(gameHTML);
}; //end generate question

function generateWin() {
  userCorrect++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>";
  $("#mainArea").html(gameHTML);
  
  setTimeout(wait, 3000);  //end generatewin
}

function generateLoss() {
  userIncorrect++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='/assets/images/x.gif'>";
  $("#mainArea").html(gameHTML);
  setTimeout(wait, 3000); 
}
//end generate loss

function wait() {
  //ternary operator replacing if/else for generate more questions
questionCounter < 7 ? 
  (questionCounter++,
  generateQuestions(),
  counter = 30,
  twentySeconds() ):
  
 (finalScreen())
}; //end function

function finalScreen() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + userCorrect + "</p>" + "<p>Wrong Answers: " + userIncorrect + "</p>" + "<p>Unanswered: " + userTimeout + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-block reset-button' href='#' role='button'>Reset!</a></p>";
  $("#mainArea").html(gameHTML);
}

function resetGame() {
  questionCounter = 0;
  userCorrect = 0;
  userIncorrect = 0;
  userTimeout = 0;
  timer= 20;
  generateQuestions();
  twentySeconds();
}

});//end document
















// display question and answer arrays
    // for( var i = 0; i < questionArray.length; i++) {
    //     var question = questionArray[i];
    //     console.log(question);
    // }
    // $('#question').append(question);

    // for (var i = 0; i < answerArray.length; i++){
    //     var answer = answerArray[i];
    //     // console.log(answer[i]);
    // }

    // $('#answer-b').append(answer[1]);
    // $('#answer-a').append(answer[0]);
    // $('#answer-c').append(answer[2]);
    // $('#answer-d').append(answer[3]);

// create buttons containing answers
// when user clicks on button ans. change color, move to next question, reset timer
// if user does not click a button, wrong++, move to next question, reset timer
    // 
// after last question, display no. of answers right and wrong
// link to someone elses game 

// var clickSound = new Audio (meow.mp3); 
  
