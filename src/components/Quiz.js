
import React from 'react'
import { render } from 'react-dom'
import Choice from './Choice'
const {shuffleArray} = require('../functions/utility')

class Quiz extends React.Component {
    constructor() {
        super()
        this.state = {
            questionIndex: 0,
            selectedAnswer: null
        } 

        this.displayNextQuestion = this.displayNextQuestion.bind(this)
    }
    
    displayNextQuestion = (a) => {
        this.setState({ 
            questionIndex: this.questionIndex++,
            selectedAnswer: null
        })
    }

    render() {
        console.log('this.props', this.props)
        const {currentQuiz} = this.props
        const {questions} = currentQuiz

        const correctAnswer = questions[this.state.questionIndex].correctAnswer
        const incorrectAnswers = questions[this.state.questionIndex].incorrectAnswers
        const allAnswers = [correctAnswer, ...incorrectAnswers]
        shuffleArray(allAnswers)

        return (
            <div>
                <h2>{currentQuiz.title}</h2>
                <p>{currentQuiz.questions[this.state.questionIndex].text}</p>{
                    allAnswers.map(function(answer, index) {
                        const letter = String.fromCharCode(65 + index)
                        return <Choice key={index} letter={letter} answer={answer} correctAnswer={correctAnswer}/>
                    })
                }
             </div>
          )
    }
}

export default Quiz
