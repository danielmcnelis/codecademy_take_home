import React from 'react';

const Result = props => {
  const { number, question, answer, feedback } = props;
  const display = feedback ? 'correct' : 'incorrect';

  return (
    <div className="results">
      <div className="summaryNumber">{number}.</div>
      <div className="summaryQuestion">{question} </div>
      <div className={display}>{answer}</div>
    </div>
  );
};

export default Result;
