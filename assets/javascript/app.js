$(document).ready(function (){

 
    $("#restart").hide();
    $("#correctAnswer").hide();
    $("#quote").hide();
    $("#authorname").hide();

    // Questions
    var triviaQuestions = [
        {
            question: "Who wrote 'Alice in Wonderland'?",
            choices: ["Lewis Carrol", "Mark Twain", "Oscar Wilde", "James Joyce" ] ,
            answer: 0,
            author: "Lewis Carrol",
            img: "assets/images/alice.png"
        },
        {
            question: "Who wrote 'On the Road'?",
            choices: ["Neal Cassidy", "William S Burroughs", "Allen Ginsberg", "Jack Kerouac" ] ,
            answer: 3,
            author: "Jack Kerouac",
            img: "assets/images/ontheroad.jpg"
        },
        {
            question: "Who wrote 'Roughing It'?",
            choices: ["Lewis Carrol", "James Joyce", "Mark Twain", "J.D Salinger" ] ,
            answer: 2,
            author: "Mark Twain",
            img: "assets/images/roughingit.png"
        },
        {
            question: "Who wrote 'The Hitchhiker's Guide to the Galaxy'?",
            choices: ["Stephen Fry", "Kurt Vonnegut", "Stephen King", "Douglas Adams" ] ,
            answer: 3,
            author: "Douglas Adams",
            img: "assets/images/hitchhiker.jpg"
        },
        {
            question: "Who wrote 'Fight Club'?",
            choices: ["David Fincher", "Jack Kerouac", "Chuck Palaniuk", "Ken Kesey" ] ,
            answer: 2,
            author: "Chuck Palaniuk",
            img: "assets/images/club.png"
        },
        {
            question: "Who wrote 'One Flew Over the Cuckoo's Nest '?",
            choices: ["Timothy Leary", "Ken Kesey", "Ken Babbs", "Hunter S Thompson" ] ,
            answer: 1,
            author: "Ken Kesey",
            img: "assets/images/nest.jpg"
        },
        {
            question: "Who wrote 'Animal Farm'?",
            choices: ["William Golding", "George Orwell", "Harper Lee", "Ray Bradbury" ] ,
            answer: 1,
            author: "George Orwell",
            img: "assets/images/farm.jpeg"
        },
        {
            question: "Who wrote 'The Old Man and the Sea'?",
            choices: ["Ernest Hemingway", "F. Scott Fitzgerald", "Oscar Wilde", "William Faulkner" ] ,
            answer: 0,
            author: "Ernest Hemingway",
            img: "assets/images/sea.jpeg"
        }];

        // Game variables

    var correct = 0;
    var wrong = 0;
    var count = 7;

    var intervalID;
    var randomQuestion;
    var randomPick;
    var newArray = [];
    var gamelength = 0;
    var gamequestions = triviaQuestions.length;
    var correctanswer;



        // Start game button


        $("#start").on("click", function(){
            newGame();
            $("#start").hide();
            $("#restart").hide();
            $(".choices").show();



        });

        function newGame () {
            correctanswer;
            randomQuestion;
            randomPick;
            gamelength = 0;
            newArray = [];
            correct = 0;
            wrong = 0;
            fuckthis = triviaQuestions;
            $("#GameQuestions").show()
            $("#answerblock").show()
            $("#correctAnswers").hide();
            $("#wrongAnswers").hide();
            questions();

        }
        
        // Start timer
        function run () {
            count = 7
            clearInterval(intervalID);
            intervalID = setInterval(decrement, 1000);        
        }

        // Decrement time function
        function decrement () {
            count--;
            $("#timer").html("<h2>" + count + "</h2>");
            
            if (count === 0) {
                gamelength++;
                wrong++;
                stop();

            }
        }
        // setTimeout(nextquestion, 2000);
        // $("#quote").show();
        // $("#authorname").show();
        
        function stop () {
            clearInterval(intervalID);
            $("#questionblock").show();
            $("#correctAnswer").show();
            $("#quote").show();
            nextquestion();
            $("#authorname").show();
        }
        
        // Pick random question
        
        function questions () {
            run();
            $("#quote").hide();
            $("#authorname").hide();
            randomQuestion = Math.floor(Math.random() * triviaQuestions.length);
            randomPick = triviaQuestions[randomQuestion];
            correctanswer = triviaQuestions[randomQuestion].answer;
            $(".questions").show();
            $(".questions").html("<h2>" + randomPick.question + "</h2>");
            $(".choices").show();
            $("#answer1").html(`<h4>${randomPick.choices[0]}</h4>`);
            $("#answer2").html(`<h4>${randomPick.choices[1]}</h4>`);
            $("#answer3").html(`<h4>${randomPick.choices[2]}</h4>`);
            $("#answer4").html(`<h4>${randomPick.choices[3]}</h4>`);
            // for(var i = 0; i < triviaQuestions.length; i++) {
            //     newArray.push(triviaQuestions[i]);
            // }
            // for(var i = 0; i < randomPick.choices.length; i++) {
                
            //     console.log(gamelength);
            //     console.log(correct);
            //     console.log(gamequestions);
                
                
            // }
            
        }
        
        //click function to select answer and outcomes
        $(".btn").on("click", function (event) {
            event = parseInt($(this).attr("data-value"));
            gamelength++;
            console.log(event);
            //correct guess or wrong guess outcomes
                if (event == correctanswer) {
                    showanswer();
                    correct++;

              


                } else {

                    
                    wrong++;
                    showanswer();
                    // userGuess="";

                }
    })
    function showanswer () {
        $("#quote").html("<img src=" + randomPick.img + ">")
        $("#authorname").html("<h2>" + randomPick.author + "</h2>");
        setTimeout(nextquestion, 10000);
        $("#questionblock").show();
        $("#correctAnswer").show();
        $("#quote").show();
        $("#authorname").show();
    }

    function nextquestion () {
        if (gamelength === gamequestions ) {
            endgame();
        }
        else {
            $("#questionblock").hide();
            $("#correctAnswer").hide();
            $("#quote").show();
            $("#authorname").show();
        questions();
        // newArray.push(randomPick);
        // triviaQuestions.splice(randomQuestion,1)
        }
    }

    function endgame () {
        $("#GameQuestions").hide()
        $("#answerblock").hide()
        $("#correctAnswers").show();
        $("#wrongAnswers").show();
        $("#correctAnswers").html("<h2> Correct: "+ correct + "</h2>")
        $("#wrongAnswers").html("<h2> Wrong: "+ wrong + "</h2>")
        $("#restart").show();
        console.log(newArray);


    }

    $("#restart").on("click", function() {
        $("#restart").hide();
        $(".questions").show();
        $(".choices").show();
        newGame();
    })


 })


        
        
        
        
        
        
        
        
        // for (var i = 0; i < randomQuestion.length; i++) {
        // }







        // var btn = document.createElement("button");
        // var btnlist = document.createTextNode(randomPick.choices);
        // btn.appendChild(btnlist);
        // document.body.appendChild(btn);
        
        // randomPick = triviaQuestions[randomQuestion];
        // answersPick = triviaQuestions[randomQuestion].answer;
        // $(".choices").text("<h3>" + randomPick.choices+ "</h3>");
    //     gamechoices.addClass("answerchoice");
    //     gamechoices.html(randomPick.choice[i]);
    //     $("answers").append(gamechoices);
   
   
    // function printBtn() {
//     for (var i = 0; i < listBrand.length; i++) {
//        var btn = document.createElement("button");
//        var t = document.createTextNode(listBrand[i]);
//        btn.appendChild(t);
//        document.body.appendChild(btn);
//     }
// }

// printBtn();