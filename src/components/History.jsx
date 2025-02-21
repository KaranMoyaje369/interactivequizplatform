import React, { useEffect, useState } from "react";
import { getQuizResults } from "../utils/db";

function History({ onBackToQuiz }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const results = await getQuizResults();
        setHistory(results.reverse()); // Reverse to show latest first
      } catch (error) {
        console.error("Failed to fetch quiz history:", error);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="history">
      <h2>Quiz History</h2>
      <button onClick={onBackToQuiz}>Back to Quiz</button>

      {/* Latest 3 Games */}
      <div className="latest-games">
        <h3>Latest 3 Games</h3>
        {history.slice(0, 3).map((result, index) => (
          <div key={index} className="history-card">
            <p>
              Score: {result.score}/{result.totalQuestions}
            </p>
            <p>Date: {result.date}</p>
          </div>
        ))}
      </div>

      {/* Last 10 Games Table */}
      <div className="history-table">
        <h3>Last 10 Games</h3>
        <table>
          <thead>
            <tr>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {history.slice(0, 10).map((result, index) => (
              <tr key={index}>
                <td>
                  {result.score}/{result.totalQuestions}
                </td>
                <td>{result.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
