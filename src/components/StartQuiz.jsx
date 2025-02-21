import React, { useState } from "react";

function StartQuiz({ onStartQuiz }) {
  const [timeDuration, setTimeDuration] = useState(30); // Default time
  const [questionType, setQuestionType] = useState("multiple-choice"); // Default type

  const handleStart = () => {
    onStartQuiz({ timeDuration, questionType });
  };

  return (
    <div className="start-quiz">
      <h1>Start Quiz</h1>
      <div className="form-group">
        <label>Time Duration (seconds):</label>
        <input
          type="number"
          value={timeDuration}
          onChange={(e) => setTimeDuration(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Question Type:</label>
        <select
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
        >
          <option value="multiple-choice">Multiple Choice</option>
          <option value="integer">Integer Type</option>
        </select>
      </div>
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}

export default StartQuiz;
