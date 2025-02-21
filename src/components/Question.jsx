import React, { useState } from "react";

function Question({ question, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (question.type === "multiple-choice") {
      onAnswer(question.answers[index].isCorrect);
    } else if (question.type === "integer") {
      onAnswer(parseInt(question.correctAnswer, 10) === index);
    }
  };

  return (
    <div className="question-container">
      <p className="question-text">{question.text}</p>
      {question.type === "multiple-choice" ? (
        <ul className="answers-list">
          {question.answers.map((answer, index) => (
            <li
              key={index}
              className={`answer-item ${
                selectedAnswer === index ? "selected" : ""
              }`}
              onClick={() => handleAnswer(index)}
            >
              <span className="answer-text">{answer.text}</span>
            </li>
          ))}
        </ul>
      ) : (
        <input
          type="number"
          className="integer-input"
          onChange={(e) => handleAnswer(parseInt(e.target.value, 10))}
          placeholder="Enter your answer"
        />
      )}
    </div>
  );
}

export default Question;
