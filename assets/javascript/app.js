$(document).ready(function () {

    // array of questions & answers

    var questionBank = [
        {
            question: "What object must be caught in order to end a Quidditch match?",
            choices: ["The Golden Snitch", "The Goblet of Fire", "The Quaffle", "The Sorceror's Stone"],
            answer: 0,
            image: "<img src=assets/images/snitch.jpeg>"
        },
        {
            question: "What is the correct version of the counter curse for Sectumsempra?",
            choices: ["Sanentur Vulnera", "Vulnera Sanentur", "Sanenera Vulntur", "Vulture Sanenera"],
            answer: 1,
            image: "<img src=assets/images/spell.jpg>"
        },
        {
            question: "What spell is used to protect yourself from spells that are dangerous?",
            choices: ["Legilimens", "Petrificus Totalus", "Protego", "Levicorpus"],
            answer: 2,
            image: "<img src=assets/images/shieldspell.jpg>"
        },
        {
            question: "How many brothers does Harry Potter’s close friend, Ron Weasley have?",
            choices: [3, 4, 5, 6],
            answer: 2,
            image: "<img src=assets/images/weasleys.jpg>"
        },
        {
            question: "Which Hogwarts professor caused Harry Potter to lose all of the bones in his broken right arm?",
            choices: ["Minerva McGonagall", "Severus Snape", "Remus Lupin", "Gilderoy Lockhart"],
            answer: 3,
            image: "<img src=assets/images/boneless.jpg>"
        },
    ]

    // initial variables declared 

    var correctCount = 0;
    var incorrectCount = 0;
    var currentQuestion = -1;
    var seconds = 30;
    var intervalId;
    var audio = new Audio("assets/images/thememusic.mp3")

    // functions to create a timer for the player to play within; if the player runs out of time, then the game is over 

    function decrement() {
        $("#timer").text("Time Left: " + seconds);
        seconds--;
        if (seconds === 0) {
            $("#timer").html("Time's up!");
            stop();
            gameStats();
        }
    }

    function run() {
        $("#timer").text("Time Left: " + seconds);
        intervalId = setInterval(decrement, 1000);
        audio.play();
    }

    function stop() {
        clearInterval(intervalId);
    }

    // function that generates new questions 3 seconds after the user guesses; the function will tell the user whether they got the correct answer or not 

    function generateQuestion() {

        clearQuestion();

        $(".answers").empty();

        $("#random-question").text(questionBank[currentQuestion + 1].question);

        for (j = 0; j < 4; j++) {
            var a = $("<button>");
            a.addClass("choice");
            a.attr("data-value", j);
            a.attr("data-name", questionBank[currentQuestion + 1].choices[j]);
            a.text(questionBank[currentQuestion + 1].choices[j]);
            $(".answers").append(a);

        }

        $(".choice").on("click", function () {
            

            var number = $(this).attr("data-value");
            var correctAnswer = questionBank[currentQuestion + 1].answer;

            if (number == questionBank[currentQuestion + 1].answer) {
                $(".answers").hide(); 
                $(".wronganswer").text("Correct Answer! " +  questionBank[currentQuestion + 1].choices[correctAnswer]);
                $(".answerimage").html(questionBank[currentQuestion + 1].image);
                correctCount++;
                currentQuestion++
                $(".choice").unbind("click")
                console.log(currentQuestion)
                if (currentQuestion + 1 < questionBank.length) {
                    setTimeout(generateQuestion, 1000 * 3);
                } else {
                    stop();
                    gameStats();
                }
            }
            else {
                $(".answers").hide(); 
                $(".wronganswer").text("Wrong Answer.  The correct answer is " + questionBank[currentQuestion + 1].choices[correctAnswer]);
                $(".answerimage").html(questionBank[currentQuestion + 1].image);
                incorrectCount++;
                currentQuestion++;
                $(".choice").unbind("click")
                if (currentQuestion + 1 < questionBank.length) {
                    setTimeout(generateQuestion, 1000 * 3);
                } else {
                    stop();
                    gameStats();
                }
            }
        })
    }

    // clears the elements holding the questions and answers so that a new one can appear

    function clearQuestion() {
        $("#random-question").empty();
        $(".answers").empty();
        $(".answers").show();
        $(".questionblock").show(); 
        $(".wronganswer").empty();
        $(".answerimage").empty(); 
    }

    // collects and displays the game stats 

    function gameStats() {
        $("#random-question").hide(); 
        $(".answers").hide();
        $(".wronganswer").hide();
        $(".answerimage").hide(); 
        $(".questionblock").hide(); 
        $("#correct-guesses").text("Correct Guesses: " + correctCount)
        $("#incorrect-guesses").text("Incorrect Guesses: " + incorrectCount)
    }

    // calls the function to begin playing the game when the user press starts 

    function letsPlay() {
        $("#timer").hide();
        $(".questionblock").hide(); 
        var a = $("<button>");
        a.text("Start");
        $(".start-button").append(a);

        $(".start-button").on("click", function () {

            $(".start-button").hide();
            $("#timer").show();
            $(".questionblock").show(); 
            
            run();
            generateQuestion();

        })
    }

    letsPlay();

})