
import React from 'react'

const Home = (props) => {
    const {startQuiz} = props
    return (
        <div className="home">
        <h1>Codecemy Assessment Center</h1>
        <p>Click to start the first quiz:</p>
        <button id="startButton" onClick={() => startQuiz()}>Start</button>
        </div>
    )
}

export default Home
