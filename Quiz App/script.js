const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
const question = document.getElementById("question");
const optionOne = document.getElementById("a");
const optionTwo = document.getElementById("b");
const optionThree = document.getElementById("c");
const optionFour = document.getElementById("d");
const answerEls = document.querySelectorAll(".answers");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  question.innerHTML = quizData[currentQuestion].question;

  optionOne.nextElementSibling.innerHTML = quizData[currentQuestion].a;
  optionTwo.nextElementSibling.innerHTML = quizData[currentQuestion].b;
  optionThree.nextElementSibling.innerHTML = quizData[currentQuestion].c;
  optionFour.nextElementSibling.innerHTML = quizData[currentQuestion].d;
}

function validateSelection() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectItems() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function submitAnswer() {
  let seletionDone = validateSelection();
  if (seletionDone) {
    if (seletionDone === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      deselectItems();
      loadQuiz();
    } else {
      alert(`Score: ${score}`);
      currentQuestion = 0;
      deselectItems();
      loadQuiz();
    }
  } else {
    alert("Please select a value!");
  }
}
