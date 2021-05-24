import React from 'react';

const Home = props => {
  const { startFirstQuiz } = props;
  return (
    <div className="home">
      <h1>Codecademy Assessment Center</h1>
      <p>Click to start the first quiz:</p>
      <button id="startButton" onClick={() => startFirstQuiz()}>
        Start
      </button>
    </div>
  );
};

export default Home;
