let quizData = [
    {
        id: 1,
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        id: 2,
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        id: 3,
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        id: 4,
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit') 
const q1 = document.getElementsByClassName('question-number-1')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.id + ". " + currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()
//     if(answer) {
//        if(answer == quizData[currentQuiz].correct) {
//            score++
//        }
//        currentQuiz++
//        if(currentQuiz < quizData.length) {
//            loadQuiz()
//        } else {
//            quiz.innerHTML = `
//            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
//            <button onclick="location.reload()">Reload</button>
//            `
//        }
//     }
// })
// send navigation bar to first question:
const nav1 = document.getElementById('q1')
nav1.addEventListener('click', () => {
    currentQuiz = 0
    loadQuiz()
})
// send navigation bar to second question:
const nav2 = document.getElementById('q2')
nav2.addEventListener('click', () => {
    currentQuiz = 1
    loadQuiz()
})
// send navigation bar to third question:
const nav3 = document.getElementById('q3')
nav3.addEventListener('click', () => {
    currentQuiz = 2
    loadQuiz()
})
// send navigation bar to fourth question:
const nav4 = document.getElementById('q4')
nav4.addEventListener('click', () => {
    currentQuiz = 3
    loadQuiz()
})
// Set the date we're counting down to
var now = new Date().getTime();
//Display in minutes
var countDownDate = now + (20 * 60 * 1000);

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML =  minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
        quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    <button onclick="location.reload()">Reload</button>`
    }
}, 1000);

//link to previous question:
const prevBtn = document.getElementById('previous')
prevBtn.addEventListener('click', () => {
    currentQuiz--
    if(currentQuiz < 0) {
        alert('You are on the first question')
    }
    loadQuiz()

})

//link to next question:
const nextBtn = document.getElementById('next')
nextBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(currentQuiz <= quizData.length-1){
    if(answer) {
       if(answer == quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } 
        else {
            alert("You have completed the quiz!, click Submit to see your score")
        } 
    } 
}})

//link to submit button:
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(currentQuiz == quizData.length-1){
    if(answer) {
         if(answer == quizData[currentQuiz].correct) {
              score++
            }
        }
    }
    quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    <button onclick="location.reload()">Reload</button>
    ` })