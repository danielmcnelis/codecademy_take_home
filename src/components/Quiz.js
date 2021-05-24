import React from 'react';
import { render } from 'react-dom';
import Choice from './Choice';
import Summary from './Summary';
const { shuffleArray } = require('../functions/utility');

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null,
      questions: [],
      score: 0,
      results: [],
      questionIndex: 0,
      currentQuestion: null,
      selectedAnswer: null,
      correctAnswer: null,
      allAnswers: [],
      userIsCorrect: null,
      feedback: '',
      waitingForSelection: true,
    };

    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.goToNextQuiz = this.goToNextQuiz.bind(this);
    this.initializeQuestion = this.initializeQuestion.bind(this);
    this.initializeQuiz = this.initializeQuiz.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  async goToNextQuestion() {
    await this.setState({
      questionIndex: this.state.questionIndex + 1,
    });

    this.initializeQuestion();
  }

  async goToNextQuiz() {
    await this.props.startNextQuiz();
    this.initializeQuiz();
  }

  selectAnswer(answer) {
    if (!this.state.waitingForSelection) return;

    const userIsCorrect = answer === this.state.correctAnswer;
    const feedback = userIsCorrect ? 'Correct!' : 'Incorrect...';
    const score = userIsCorrect ? this.state.score + 1 : this.state.score;

    this.setState({
      waitingForSelection: false,
      selectedAnswer: answer,
      results: [...this.state.results, [answer, userIsCorrect]],
      userIsCorrect,
      feedback,
      score,
    });

    return userIsCorrect;
  }

  initializeQuestion() {
    const { currentQuiz } = this.props;
    const { questions } = currentQuiz;
    if (this.state.questionIndex >= questions.length) return;

    const correctAnswer = questions[this.state.questionIndex].correctAnswer;
    const incorrectAnswers =
      questions[this.state.questionIndex].incorrectAnswers;
    const allAnswers = [correctAnswer, ...incorrectAnswers];

    shuffleArray(allAnswers);

    this.setState({
      feedback: '',
      userIsCorrect: null,
      waitingForSelection: true,
      selectedAnswer: null,
      currentQuestion: questions[this.state.questionIndex],
      correctAnswer: correctAnswer,
      allAnswers: allAnswers,
    });
  }

  async initializeQuiz() {
    const { currentQuiz } = this.props;
    const { questions } = currentQuiz;

    await this.setState({
      title: this.props.currentQuiz.title,
      questions,
      score: 0,
      results: [],
      questionIndex: 0,
    });

    this.initializeQuestion();
  }

  componentDidMount() {
    this.initializeQuiz();
  }

  render() {
    const correctAnswer = this.state.correctAnswer;
    const selectAnswer = this.selectAnswer;
    const selectedAnswer = this.state.selectedAnswer;
    const userIsCorrect = !!(
      this.state.selectedAnswer === this.state.correctAnswer
    );

    const buttonDisplay =
      this.state.questionIndex >= this.props.currentQuiz.questions.length - 1
        ? 'Summary'
        : 'Next Question';

    return (
      <div>
        {this.state.title ? (
          <div>
            <h2>{this.state.title}</h2>
            {this.state.questionIndex <
              this.props.currentQuiz.questions.length &&
            this.state.currentQuestion ? (
              <div className="flex-col">
                <p>{this.state.currentQuestion.text}</p>
                {this.state.allAnswers.map(function(answer, index) {
                  const letter = String.fromCharCode(65 + index);
                  let display;
                  if (selectedAnswer && correctAnswer === answer)
                    display = 'green';
                  if (!userIsCorrect && selectedAnswer === answer)
                    display = 'red';
                  return (
                    <Choice
                      key={index}
                      letter={letter}
                      answer={answer}
                      selectAnswer={selectAnswer}
                      display={display}
                    />
                  );
                })}
              </div>
            ) : (
              <div>
                <Summary
                  score={this.state.score}
                  len={this.props.currentQuiz.questions.length}
                  questions={this.state.questions}
                  results={this.state.results}
                />
                <button onClick={() => this.initializeQuiz()}>Retake</button>
                <button onClick={() => this.goToNextQuiz()}>
                  Go To Next Quiz
                </button>
              </div>
            )}
          </div>
        ) : (
          ''
        )}
        {this.state.waitingForSelection ||
        this.state.questionIndex >= this.props.currentQuiz.questions.length ? (
          ''
        ) : (
          <div>
            <p id="feedback">{this.state.feedback}</p>
            <button onClick={() => this.goToNextQuestion()}>
              Go To {buttonDisplay}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
