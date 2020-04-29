$(document).ready(function () {

    var currentQuestion = 0;
    var quizQuestions = [
        Question1 = {
            question: 'What color is the sky?',
            options: ['green ', 'blue ', 'pink'],
            answer: "blue",
            askQuestion: function () {
                $('#quizquestion').html(this.question);
                for (var i = 0; i < this.options.length; i++) {
                    $('#quizoptions').append('<ul style="list-style-type:none;"><li><button id="quizOption" class="btn btn-dark">' + this.options[i]+ '</button></li><ul>');
                }
            }
        },
        Question2 = {
            question: 'Who was the first president of USA?',
            options: ['george washington', 'George Bush ', 'Abraham Lincoln'],
            answer: 'george washington',
            askQuestion: function () {
                $('#quizquestion').html(this.question);
                $('#quizoptions').html();

                for (var i = 0; i < this.options.length; i++) {
                    $('#quizoptions').append('<ul style="list-style-type:none;"><li><button id="quizOption" class="btn btn-dark">' + this.options[i]+ '</button></li><ul>');
                }
            }

        },
        Question3 = {
            question: 'Who wrote "purple rain"?',
            options: ['Beyonce ', 'Chris Pratt ', 'Prince'],
            answer: 'Prince',
            askQuestion: function () {
                $('#quizquestion').html(this.question);
                for (var i = 0; i < this.options.length; i++) {
                    $('#quizoptions').append('<ul style="list-style-type:none;"><li><button id="quizOption" class="btn btn-dark">' + this.options[i]+ '</button></li><ul>');
                }
            }
        },
        Question4 = {
            question: 'Who was the first person to walk on the moon?',
            options: ['amelia Earhart ', 'neal armstrong ', 'michael jackson'],
            answer: 'michael jackson',
            askQuestion: function () {
                $('#quizquestion').html(this.question);
                for (var i = 0; i < this.options.length; i++) {
                    $('#quizoptions').append('<ul style="list-style-type:none;"><li><button id="quizOption" class="btn btn-dark">' + this.options[i]+ '</button></li><ul>');
                }
            }
        },

        Question5 = {
            question: 'When did WWII end?',
            options: ['1945 ', '1920 ', '2010'],
            answer: '1945',
            askQuestion: function () {
                $('#quizquestion').html(this.question);
                for (var i = 0; i < this.options.length; i++) {
                    $('#quizoptions').append('<ul style="list-style-type:none;"><li><button id="quizOption" class="btn btn-dark">' + this.options[i]+ '</button></li><ul>');
                }
            }
        }

    ];

    var startQuiz = function () {
        for (var i = 0; i < quizQuestions.length; i++) {
            quizQuestions[i].askQuestion();
        
    }
}

    function startCountDown() {
        var time = 300;
  
        var interval = setInterval(function () {
           time = time - 1;
  
           if (time >= 0) {
              var minutes = Math.floor(time / 60);
              var seconds = time - (minutes * 60);
              var display = minutes + ' : ' + seconds;
  
              $("#timer").html(display);
           }
           else {
              clearInterval(interval);
  
           }
  
        }, 1000);
     }
    startQuiz();
    startCountDown();

});

