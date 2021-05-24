import React from 'react';
import Result from './Result';

const { getMessage } = require('../data/messages');

const Summary = props => {
  const { score, len, questions, results } = props;

  return (
    <div id="summary">
      <p>
        You got {score} out of {len} questions right.
      </p>
      <p>{getMessage()}</p>
      <br />
      <p>You had:</p>
      <div>
        {results.length
          ? questions.map(function(question, index) {
              const number = index + 1;
              return (
                <Result
                  key={index}
                  number={number}
                  question={question.text}
                  answer={results[index][0]}
                  feedback={results[index][1]}
                />
              );
            })
          : ''}
      </div>
    </div>
  );
};

export default Summary;
