import React, { useState } from "react";
import StartQuiz from "./components/StartQuiz";
import Quiz from "./components/Quiz";
import History from "./components/History";
import "./index.css";

function App() {
  const [view, setView] = useState("start"); // 'start', 'quiz', 'history'
  const [quizConfig, setQuizConfig] = useState(null);

  const handleStartQuiz = (config) => {
    setQuizConfig(config);
    setView("quiz");
  };

  const handleRetakeQuiz = () => {
    setView("start");
  };

  return (
    <div className="app">
      {view === "start" && <StartQuiz onStartQuiz={handleStartQuiz} />}
      {view === "quiz" && (
        <Quiz
          quizConfig={quizConfig}
          onRetakeQuiz={handleRetakeQuiz}
          onViewHistory={() => setView("history")}
        />
      )}
      {view === "history" && <History onBackToQuiz={() => setView("start")} />}
    </div>
  );
}

export default App;
