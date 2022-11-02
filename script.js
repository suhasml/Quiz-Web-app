(function () {
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {

          // ...add an HTML radio button
          answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}"  value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question" id="question${questionNumber}" >${questionNumber + 1}. ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
      }

    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
      question: "Which of the following is not a JavaScript framework?",
      answers: {
        a: "Angular",
        b: "Django",
        c: "React",
        d: "Vue"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is not a JavaScript framework?",
      answers: {
        a: "Angular",
        b: "Django",
        c: "React",
        d: "Vue"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is not a JavaScript framework?",
      answers: {
        a: "Angular",
        b: "Django",
        c: "React",
        d: "Vue"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is not a JavaScript framework?",
      answers: {
        a: "Angular",
        b: "Django",
        c: "React",
        d: "Vue"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is not a JavaScript framework?",
      answers: {
        a: "Angular",
        b: "Django",
        c: "React",
        d: "Vue"
      },
      correctAnswer: "b"
    },
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },

  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();



const navbar = document.getElementsByClassName('navButton')
for (let i = 0; i < navbar.length; i++) {
  navbar[i].addEventListener('click', () => {
    document.getElementById(`question${i}`).scrollIntoView({ behavior: 'smooth' })
  })
}
