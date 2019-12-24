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
    var tenSeconds = 10; 
    var fourSeconds = 4; 

    console.log(questionBank.length)
    
    generateQuestion(); 

    

    function generateQuestion () {

        randomNumber = Math.floor(Math.random() * (5) + 1);

        $("#random-question").text(questionBank[randomNumber].question); 
        
        for (i=0; i < 4; i++) {

            var a = $("<button>"); 
            a.addClass("choice"); 
            a.attr("data-value", i); 
            a.attr("data-name", questionBank[randomNumber].choices[i]); 
            a.text(questionBank[randomNumber].choices[i]); 
            $(".answers").append(a)
            
        }

        $(".choice").on("click", function(){
            console.log(this) 
            var number = $(this).attr("data-value"); 
            console.log(number); 
            console.log(questionBank[randomNumber].answer);

            if (number == questionBank[randomNumber].answer) {
                alert("you win"); 
            }
            else {
                alert("you lose"); 
            }
        })

    }

    function clearQuestion () {
        $("#random-question").empty(); 
        $(".answers").empty(); 
    }

    


    
    
  


   // var audio = new Audio("harry potter music")

//    setTimeout(tenSeconds, 1000 *10); 

//     function tenSeconds() {
//         $("#timer").text(seconds); 
//     }

//     function longDecrement() {
//         tenSeconds--;

//     }


   

    // generate random question from array 
    // need to distinguish between wrong and correct answers (variable for correct answer?)

    // set a timer to run for each question 

    // function to generate & display a random question and answers 

    // conditional statements

    // if right answer is clicked, display congrats view, after a few seconds run function generate new question

    // if wrong answer is clicked, display wrong answer view, after a few seconds run function generate new question

    // if timer runs out before answer is clicked, display time out view, after a few seconds run function generate new question

    // display overall game stats at end 


})