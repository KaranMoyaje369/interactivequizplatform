import React from "react";

function Result({ score, total, onRetakeQuiz, onViewHistory }) {
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score}/{total}
      </p>
      <button onClick={onRetakeQuiz}>Retake Exam</button>
      <button onClick={onViewHistory}>View History</button>
    </div>
  );
}

export default Result;
