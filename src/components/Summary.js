
import React from 'react'

const {getMessage} = require('../data/messages')
const {quizzes} = require('../data/quizzes')

class Summary extends React.Component {
  render() {
    console.log('getMessage()', getMessage())
    console.log('getMessage()', getMessage())
    console.log('getMessage()', getMessage())
    console.log('quizzes', quizzes)
    return (
      <div>
        {"It's a summary!"}
      </div>
    )
  }
}

export default Summary
