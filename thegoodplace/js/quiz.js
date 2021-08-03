(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Have you ever used an office microwave to heat up fish?",
      answers: {
        a: "Yes",
        b: "No, that would be mean",
        c: "No, I fear the judgement of others too much"
      },
      correctAnswer: "a"
    },
    {
      question: "Have you ever taken off your shoes and socks on a commercial airline?",
      answers: {
        a: "Just the shoes",
        b: "Yes, both",
        c: "No, but I wanted to"
      },
      correctAnswer: "b"
    },
    {
      question: "Have you ever appeared on The Bachelor, The Bachelorette, or Bachelor in Paradise?",
      answers: {
        a: "No, but I've tried",
        b: "No, but I love watching them",
        c: "No, I don't even watch those shows, they're a disgrace",
        d: "What?"
      },
      correctAnswer: "d"
    },
    {
      question: "What do you do if your friend is sad?",
      answers: {
        a: "Ignore the problem and hope it goes away",
        b: "Send them a text",
        c: "Give them a hug"
      },
      correctAnswer: "a"
    },
    {
      question: "Have you ever farted and blamed someone else?",
      answers: {
        a: "Yes lol",
        b: "No, I take pride in my farts",
        c: "No, I try to be discreet"
      },
      correctAnswer: "a"
    },
    {
      question: "Have you ever volunteered for a charity?",
      answers: {
        a: "Yes, I found it rewarding",
        b: "Yes, it made me look good",
        c: "No, never"
      },
      correctAnswer: "a"
    },
    {
      question: "If you pee standing up, do you leave the toilet seat up when you're done?",
      answers: {
        a: "No, I always put it down",
        b: "All the time",
        c: "I don't pee standing up"
      },
      correctAnswer: "a"
    },
    {
      question: "When driving, how frequently do you use your indicator?",
      answers: {
        a: "Often",
        b: "When I remember",
        c: "Eh, hardly ever"
      },
      correctAnswer: "a"
    },

  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();


//Show quiz on click
var showQuiz = document.getElementById("whole-quiz"),
    quizButton = document.getElementById("quiz-button");

quizButton.addEventListener("click",
  function() {
    showQuiz.classList.toggle("show");
  }, false
);

var audio = new Audio("the-good-place.mp3");

// document.onclick = function() {
//   audio.play();
// }

quizButton.addEventListener("click",
  function() {
    audio.play();
  }, false
);
