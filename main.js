//'use strict';

const quiz = {
  questions: [{
    question: 'What was the first thing Chiron gave Percy?',
    answers: [
      'A pen',
      'A quest',
      'Food',
      'Homework'
    ],
    correctAnswer: 'A pen'
  },
  {
    question: 'Who is Percys\'s bestfriend?',
    answers: [
      'Annabeth',
      'Grover',
      'Clarisse',
      'Luke'
    ],
    correctAnswer: 'Grover'
  },
  {
    question: 'What was Percy accused of stealing?',
    answers: [
      'Hades\' ember', 
      'Zues\' lightening bolt',
      'Poseidons\' Trident',
      'Hermes\' flying shoes'
    ],
    correctAnswer: 'Zues\' lightening bolt'
  },
  {
    question: 'Why does Percy go to the Underworld?',
    answers: [
      'To visit Hades',
      'To fight Hades',
      'To rescue his mom',
      'So Grover can see Persephone'
    ],
    correctAnswer: 'To rescue his mom'
  },
  {
    question: 'Who is Percys\' father?',
    answers: [
      'Hermes',
      'Ares',
      'Dionysis',
      'Poseidon'
    ],
    correctAnswer: 'Poseidon'
  },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};
  
//let score=0;
//let results='';

function generateStartPage() {
  return ` <div class="startPage">
            <h3> Do you know Percy Jackson?</h3>
            <p>Take this quiz to find out.</p>
            <button class="startQuiz" type="submit" value="submit">Start Quiz</button>
        </div>
        `;
}


function generateQuestionPage(){
  const i = quiz.currentQuestion;
  return `
      <div class="group">
        <p class="large-text">question <span class="text-yellow">${quiz.currentQuestion +1} of 5</span></p>
        <p>${quiz.questions[i].question}</p>
      </div>
      <div>
        <form action="/action_page.php" method="get">
          <div class="flex-inline">
            <div class="choice-group question">
              <input type="radio" name="choice" id="answer1"  required="">
              <label for="answer1">${quiz.questions[i].answers[0]}</label>
            </div>
            <div class="choice-group question">
              <input type="radio" name="choice" id="answer2">
              <label for="answer2">${quiz.questions[i].answers[1]}</label>
            </div>
            <div class="choice-group question">
              <input type="radio" name="choice" id="answer3">
              <label for="answer3">${quiz.questions[i].answers[2]}</label>
            </div>
            <div class="choice-group question">
              <input type="radio" name="choice" id="answer4">
              <label for="answer4">${quiz.questions[i].answers[3]}</label>
            </div>
          </div>
  
          <div class="button-group">
            <button id="submit-button" class="button" type="submit" value="submit">submit.</button>
            <button id="restart-button" class="button" type="submit" value="restart">restart.</button>
          </div>
        </form>
      </div>
      <div class="group">
        <p class="large-text">correct <span class="text-yellow">${quiz.score}</span></p>
      </div>`;
}


// function generateEndPage() {

// }

function renderStartPage() {
  $('main').html(generateStartPage());
}

function renderQuestions(){
  $('main').html(generateQuestionPage());
}

function handleStartButton() {
  $('main').on('click', '.startQuiz', function(event){
    event.preventDefault();
    renderQuestions();
  });
}

// function handleSubmitButton(){
//   $('main').on('click', '#submitButton', function(event){
//     event.preventDefault();
//     //gather the input
//     const selected = $('input:checked');
//     const answer = selected.val();
//     results = checkAnswer(answer);
//     render result or correct answer page
//     renderAnswerPage(results); //build
//   });
// }

// function handleRestartButton(){
//   $('main').on('click', '#restart-button', event => {
//     event.preventDefault();
//     //score = 0;
//     QUESTIONS.currentQuestion = 0;
//     //renderQuestionPage();
//   });
// }

// function checkAnswer(ans){
//   const i = QUESTIONS.currentQuestion;
//   if(ans ===  QUESTIONS.questions[i].correctAnswer){
//     return 'You got it right!', score++;
    
//   }
//   else{
//     return 'You got it wrong, sorry.';
//   }
    
    
  
// }

function quizApp(){
  renderStartPage();
  handleStartButton();
  //handleSubmitButton();
  //handleRestartButton();  
}

$(quizApp);