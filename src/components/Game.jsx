import { useState } from "react";



const Game = ({ answeredCorrectly }) => {
    const questions = getQuestions();
    const [currentQuestion, setQuerrentQuestion ] = useState(1)
    
    const question = questions[currentQuestion - 1 ]

    return (
        <section className="game">
            <h2>Question {currentQuestion} of {questions.length} </h2>
            <h3>Fråga? </h3>


            <button onClick={answeredCorrectly}>Answer</button>
        </section>
    )

}

// <p className="option"><label><input type="radio" /> 24 maj </label> </p>
// <p className="option"><label><input type="radio" /> 24 dec </label> </p>
//<p className="option"><label><input type="radio" /> 3 nov </label> </p>

function getQuestions() {
    return [
        {
            question: 'När är det julafton',
            answers: ['24 maj', '24 dec', '3 nov'],
            correct: 1
        },
        {
            question: 'Vad heter David i mellannamn',
            answers: ['sven', 'julia', 'anders'],
            correct: 2
        },
        {
            question: 'Vad har vit för hex tal',
            answers: ['#000000', '#ffffff', '#15f36a'],
            correct: 1
        },
        {
            question: 'vad sitter bredvid t på tangentbordet',
            answers: ['y', 'b', 'n'],
            correct: 0
        },
        {
            question: 'vad är bäst',
            answers: ['teams', 'discord', 'slack'],
            correct: 1
        }
    ]
}

export default Game;