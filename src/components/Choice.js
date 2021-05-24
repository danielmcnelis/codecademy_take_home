import React from 'react';

const Choice = props => {
  const { answer, letter, selectAnswer, display } = props;

  return (
    <div className={display} id="options" onClick={() => selectAnswer(answer)}>
      <p id="answerLabel">{letter}.</p>
      <p id="answer">{answer}</p>
    </div>
  );
};

export default Choice;
