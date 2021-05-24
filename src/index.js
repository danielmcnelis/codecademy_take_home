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
    this.setState({
      currentQuiz: quizzes[0],
      nextQuiz: quizzes[1],
    });
  }

  startNextQuiz() {
    const newCurrentQuiz = this.state.nextQuiz;
    const newNextQuiz =
      this.state.quizzesTaken >= quizzes.length
        ? quizzes[0]
        : quizzes[this.state.quizzesTaken];
    this.setState({
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
