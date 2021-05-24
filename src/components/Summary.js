import React from 'react';

const { getMessage } = require('../data/messages');
const { quizzes } = require('../data/quizzes');

const Summary = props => {
  return (
    <div>
      <p>
        You got {props.score} out of {props.len} questions right.
      </p>
      <p>{getMessage()}</p>
    </div>
  );
};

export default Summary;
