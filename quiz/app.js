function Question(text, choices, answer){
    this.text = text;
    this.choices= choices;
    this.answer= answer;
}

//question prototype
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

//quiz constructor
function Quiz(questions) {
    this.questions=questions;
    this.score = 0;
    this.questionIndex = 0 ; 
}

//quiz prototype
Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer){
    var question =this.getQuestion();
    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

var q1 = new Question ("What is the best programming language? ",
 ["C#" , "javascript" , "python", "asp.net"],"javascript");

var q2 = new Question ("What is the most popular programming language? ", 
["C#" , "javascript" , "visual basic", "node.js"],"javascript");

var q3 = new Question ("What is the best modern popular programming language? ", 
["C#" , "javascript" , "python", "asp.net"],"javascript");

var questions =[q1, q2, q3];

var quiz = new Quiz(questions);

// console.log(quiz.isFinish());

// console.log(quiz.getQuestion());
// quiz.guess("javascript");

// console.log(quiz.getQuestion());
// quiz.guess("python");

// console.log(quiz.getQuestion());
// quiz.guess("javascript");

// console.log(quiz.score);

// console.log(quiz.isFinish());

loadQuestion();

function loadQuestion() {
    if(quiz.isFinish()){
        showScore();
    }else{
        var question = quiz.getQuestion();
        var choices = question.choices;
    
        document.querySelector('#question').textContent =question.text;

        for (let index = 0; index < choices.length; index++) {
            var element = document.querySelector("#choice"+index);
            element.innerHTML= choices[index];
            guess("btn"+index, choices[index]);
        }
        showProgress();
    }
}

function guess(id,guess) {
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion();
    }
}

function showScore() {
    var html= `<h2>Score </h2> <h4> ${quiz.score} </h4> `;
    document.querySelector('.card-body').innerHTML = html;
}

function showProgress() {
    //console.log(quiz.isFinish());
    var totalQuestion = quiz.questions.length;
    var questionNumber = quiz.questionIndex+1;
    document.querySelector('#process').innerHTML ="Question " + questionNumber +" of "+ totalQuestion;
}