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

    twentySeconds();

// display question and answer arrays

// create buttons containing answers
// when user clicks on button ans. change color, move to next question, reset timer
// if user does not click a button, wrong++, move to next question, reset timer
    $('#userGuess').on('click', function(){

    });
// after last question, display no. of answers right and wrong
// link to someone elses game 

var timer = 5;
var questionArray = ['What is the name of the typeface Wes Anderson uses in his movies?', 'Who has Anderson written the most screenplays with?', 'Anderson includes a reference to what classic show in all of his movies?', 'In Life Aquatic, what artist did guitar player Seu Jeorge pay tribute to throughout multiple scenes of the movie?', 'What actor was originally considered for the role of M. Gustave in Grand Budapest Hotel', 'In what year does Moonrise Kingdom take place?'];
var answerArray = ['Arial, Futura, Georgia, Monotype', 'Bill Murray, Angelica Houston, Owen Wilson, John Malkovich', 'The Addams Family, Dick Van Dyke, Buck Rogers, The Peanuts', 'Elvis, David Bowie, Elton John, John Lennon', 'Kevin Spacey, Johnny Depp, Stanley Tucci, Edward Norton', '1968, 1967, 1966, 1965'];
var correctAnswers = ['B. Futura', 'C. Owen Wilson', 'D. The Peanuts', 'B. David Bowie', 'B. Johnny Depp', 'D. 1965'];
var userGuess;
var userCorrect = 0;
// var clickSound = new Audio (meow.mp3); 
});//end document.ready