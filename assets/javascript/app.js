$(document).ready(function () {

    // declare initial variables, will need: 
    // array of questions & answers

    var questionBank = [
        {
            question: "What object must be caught in order to end a Quidditch match?",
            choices: ["The Golden Snitch", "The Goblet of Fire", "The Quaffle", "The Sorceror's Stone"],
            answer: 0,
        },
        {
            question: "What is the correct version of the counter curse for Sectumsempra?",
            choices: ["Sanentur Vulnera", "Vulnera Sanentur", "Sanenera Vulntur", "Vulture Sanenera"],
            answer: 1,
        },
        {
            question: "What spell is used to protect yourself from spells that are dangerous?",
            choices: ["Legilimens", "Petrificus Totalus", "Protego", "Levicorpus"],
            answer: 2,
        },
        {
            question: "How many brothers does Harry Potter’s close friend, Ron Weasley have?",
            choices: [3, 4, 5, 6],
            answer: 2,
        },
        {
            question: "Which Hogwarts professor caused Harry Potter to lose all of the bones in his broken right arm?",
            choices: ["Minerva McGonagall", "Severus Snape", "Remus Lupin", "Gilderoy Lockhart"],
            answer: 3,
        },
    ]

    var correctCount = 0;
    var incorrectCount = 0;
    var currentQuestion = -1;



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
                $(".wronganswer").text("Correct Answer!");
                correctCount++;
                currentQuestion++
                $(".choice").unbind("click")
                console.log(currentQuestion)
                if (currentQuestion + 1 < questionBank.length) {
                    setTimeout(generateQuestion, 1000 * 2);
                } else {
                    alert("game over");
                }
            }
            else {

                $(".wronganswer").text("Wrong Answer.  The correct answer is " + questionBank[currentQuestion + 1].choices[correctAnswer]);
                incorrectCount++;
                currentQuestion++;
                $(".choice").unbind("click")
                if (currentQuestion + 1 < questionBank.length) {
                    setTimeout(generateQuestion, 1000 * 2);
                } else {
                    alert("game over");
                }


            }


        })


    }


    function clearQuestion() {
        $("#random-question").empty();
        $(".answers").empty();
        $(".wronganswer").empty();
    }

    generateQuestion();

    // var audio = new Audio("harry potter music")

})