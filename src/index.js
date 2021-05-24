import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Summary from './components/Summary'
import './styles.css'

const {getMessage} = require('./data/messages')
const {quizzes} = require('./data/quizzes')

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentQuiz: null,
            nextQuiz: quizzes[0]
        } 

        this.startQuiz = this.startQuiz.bind(this)
    }

    startQuiz() {
      this.setState({
        currentQuiz: quizzes[0],
        nextQuiz: quizzes[1]
      })
    }

    render() {
      return (
        <div className="app">
          {
            this.state.currentQuiz ? <Quiz currentQuiz={this.state.currentQuiz}/> : <Home startQuiz={this.startQuiz}/>
          }
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
