
import React from 'react'

const Choice = (props) => {
    const {answer, letter, correctAnswer} = props

    return (
        <div id="options" onClick={() => console.log(correctAnswer === answer)}>
            <p id="answerLabel">{letter}.</p>
            <p id="answer">{answer}</p>
        </div>
    )
}

export default Choice
