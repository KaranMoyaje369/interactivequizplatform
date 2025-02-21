import React from "react";

function Scorecard({ score, total, userAnswers, onRetakeQuiz, onViewHistory }) {
  return (
    <div className="scorecard">
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score}/{total}
      </p>
      <div className="question-results">
        <h3>Question-wise Results</h3>
        <ul>
          {userAnswers.map((answer, index) => (
            <li
              key={index}
              className={
                answer === null
                  ? "unanswered"
                  : answer
                  ? "correct"
                  : "incorrect"
              }
            >
              <strong>Question {index + 1}:</strong>{" "}
              {answer === null
                ? "Unanswered"
                : answer
                ? "Correct"
                : "Incorrect"}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={onRetakeQuiz}>Retake Exam</button>
      <button onClick={onViewHistory}>View History</button>
    </div>
  );
}

export default Scorecard;
