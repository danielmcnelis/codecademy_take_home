import Quiz from './Quiz';
const { selectAnswer } = Quiz;

// This test does not work. This is not the correct way to import 'selectAnswer'. I do not have
// much experience with unit testing React components, but this is how I was imagining I would
// start testing whether a user clicked a correct or incorrect answer. I was reading up on it and
// I think I would have to use something like enzyme and mount the Quiz component, but that is
// not something I know how to do yet.

test('selectAnswer', () => {
  const currentQuestion = {
    text: 'Which element is used for a top-level heading?',
    correctAnswer: 'h1',
    incorrectAnswers: ['div', 'h0', 'p'],
  };
  const answer1 = 'h1';
  const answer2 = 'div';
  const answer3 = 'h0';
  const answer4 = 'p';

  expect(selectAnswer(answer1).toBe(true));
  expect(selectAnswer(answer2).toBe(false));
  expect(selectAnswer(answer3).toBe(false));
  expect(selectAnswer(answer4).toBe(false));
});
