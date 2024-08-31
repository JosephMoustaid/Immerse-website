import React from "react";

const CreativeLearning = () => {
  // Define the SVG icon as a React component
  const CheckedIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-check-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  );

  return (
    <div className="creative-learning-container">
      <div className="creative-learning-content">
        <h2 className="creative-learning-title">Creative Learning Made Easy</h2>
        <ul className="creative-learning-list">
          <li>
            <CheckedIcon />
            Thousands of creative classes. Beginner to pro.
          </li>
          <li>
            <CheckedIcon />
            Taught by creative pros and industry icons.
          </li>
          <li>
            <CheckedIcon />
            Learning Paths to help you achieve your goals.
          </li>
          <li>
            <CheckedIcon />
            Certificates to celebrate your accomplishments.
          </li>
        </ul>
      </div>
      <div className="creative-learning-stats">
        <div className="stat-box">
          <span className="stat-number">25K+</span>
          <span className="stat-label">CLASSES</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">600K+</span>
          <span className="stat-label">MEMBERS</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">8K+</span>
          <span className="stat-label">TEACHERS</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">4.8</span>
          <span className="stat-label">APP STORE RATING</span>
        </div>
      </div>
    </div>
  );
};

export default CreativeLearning;
