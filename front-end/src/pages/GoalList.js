import React from "react";
import "./GoalList.css";

const GoalList = ({ title, goals }) => {
  return (
    <div className="goal-list">
      <h2>{title}</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
