import React, { useState } from "react";
import Question from "./Question";
import Timer from "./Timer";
import Scorecard from "./Scorecard";
import questions from "../utils/questions";
import { saveQuizResult } from "../utils/db";

function Quiz({ quizConfig, onRetakeQuiz, onViewHistory }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  ); // Track answers for all questions

  const handleAnswer = (isCorrect) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = isCorrect; // Save answer for the current question
    setUserAnswers(newUserAnswers);
    if (isCorrect) setScore(score + 1);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleEndExam = () => {
    setQuizEnd(true);
    saveQuizResult({
      score,
      totalQuestions: questions.length,
      date: new Date().toLocaleString(),
    });
  };

  if (quizEnd) {
    return (
      <Scorecard
        score={score}
        total={questions.length}
        userAnswers={userAnswers}
        onRetakeQuiz={onRetakeQuiz}
        onViewHistory={onViewHistory}
      />
    );
  }

  return (
    <div className="quiz">
      <h2>Question {currentQuestion + 1}</h2>
      <Timer duration={quizConfig.timeDuration} onTimeUp={handleNext} />
      <Question
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
        key={currentQuestion} // Reset component state when question changes
      />
      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        {currentQuestion === questions.length - 1 ? (
          <button onClick={handleEndExam}>End Exam</button>
        ) : (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
