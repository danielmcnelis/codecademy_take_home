import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Summary from './components/Summary';
import './styles.css';

const { getMessage } = require('./data/messages');
const { quizzes } = require('./data/quizzes');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentQuiz: null,
      quizzesTaken: 0,
      nextQuiz: quizzes[0],
    };

    this.startFirstQuiz = this.startFirstQuiz.bind(this);
    this.startNextQuiz = this.startNextQuiz.bind(this);
    this.quizCompelted = this.quizCompelted.bind(this);
  }

  startFirstQuiz() {
    console.log('starting First quiz');
    this.setState({
      quizzesTaken: 0,
      currentQuiz: quizzes[0],
      nextQuiz: quizzes[1],
    });
  }

  startNextQuiz() {
    if (this.state.quizzesTaken > quizzes.length) return this.startFirstQuiz();
    console.log('starting Next quiz');
    const newCurrentQuiz = this.state.nextQuiz;
    const newNextQuiz = quizzes[this.state.quizzesTaken];
    this.setState({
      quizzesTaken: this.state.quizzesTaken + 1,
      currentQuiz: newCurrentQuiz,
      nextQuiz: newNextQuiz,
    });
  }

  quizCompelted() {
    this.setState({
      quizzesTaken: this.state.quizzesTaken + 1,
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.currentQuiz ? (
          <Quiz
            currentQuiz={this.state.currentQuiz}
            startNextQuiz={this.startNextQuiz}
          />
        ) : (
          <Home startFirstQuiz={this.startFirstQuiz} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
