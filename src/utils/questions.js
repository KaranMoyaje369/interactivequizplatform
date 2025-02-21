const questions = [
  {
    type: "multiple-choice",
    text: "Which planet is closest to the Sun?",
    answers: [
      { text: "Venus", isCorrect: false },
      { text: "Mercury", isCorrect: true },
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: false },
    ],
  },
  {
    type: "multiple-choice",
    text: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
    answers: [
      { text: "Stack", isCorrect: false },
      { text: "Queue", isCorrect: true },
      { text: "Tree", isCorrect: false },
      { text: "Graph", isCorrect: false },
    ],
  },
  {
    type: "multiple-choice",
    text: "Which of the following is primarily used for structuring web pages?",
    answers: [
      { text: "Python", isCorrect: false },
      { text: "Java", isCorrect: false },
      { text: "HTML", isCorrect: true },
      { text: "C++", isCorrect: false },
    ],
  },
  {
    type: "multiple-choice",
    text: "Which chemical symbol stands for Gold?",
    answers: [
      { text: "Au", isCorrect: true },
      { text: "Gd", isCorrect: false },
      { text: "Ag", isCorrect: false },
      { text: "Pt", isCorrect: false },
    ],
  },
  {
    type: "multiple-choice",
    text: "Which of these processes is not typically involved in refining petroleum?",
    answers: [
      { text: "Fractional distillation", isCorrect: false },
      { text: "Cracking", isCorrect: false },
      { text: "Polymerization", isCorrect: false },
      { text: "Filtration", isCorrect: true },
    ],
  },
  {
    type: "integer",
    text: "What is the value of 12 + 28?",
    correctAnswer: 40,
  },
  {
    type: "integer",
    text: "How many states are there in the United States?",
    correctAnswer: 50,
  },
  {
    type: "integer",
    text: "In which year was the Declaration of Independence signed?",
    correctAnswer: 1776,
  },
  {
    type: "integer",
    text: "What is the value of pi rounded to the nearest integer?",
    correctAnswer: 3,
  },
  {
    type: "integer",
    text: "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
    correctAnswer: 120,
  },
];

export default questions;
