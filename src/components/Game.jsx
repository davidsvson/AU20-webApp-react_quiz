import { useState } from "react";



const Game = ({ answeredCorrectly, showResult }) => {
    const questions = getQuestions();
    const [currentQuestion, setQuerrentQuestion ] = useState(1)
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [decided, setDecided] = useState(false);

    const q = questions[currentQuestion - 1 ];

    const handleDecided = () => {
        setDecided(true);
        if( selectedAnswer === q.correct) {
            answeredCorrectly(); // report score back to App
        }
        setTimeout(() => {      
            if( currentQuestion === questions.length) {
                showResult();
            } else {
                setQuerrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
                setDecided(false);
            }
        }, 2000);
    }

    //let b = true;
    //let a = b ? 'hej' : 'då'; om b är true så blir a= 'hej' annars blir a='då'


    // map på en lista
    // const list = [1, 5, 7, 4];
    // const elements = list.map(item => <li key={item}> {item} </li>);
    // return (<ul> {elements} </ul>);


    const options = q.answers.map((answer, index) => (
        <p className={"option" + ((decided && index === q.correct) ? ' correct' : '')}  key={answer}>
            <label>
                <input type="radio"  name="question" disabled={decided}
                    onClick={() => setSelectedAnswer(index)} />
                {answer}
            </label>
        </p>
    ))

    return (
        <section className="game">
            <h2>Question {currentQuestion} of {questions.length} </h2>
            <h3>{q.question}</h3>
            {options}
            
            <button disabled={decided} onClick={handleDecided}>Answer</button>
        </section>
    )

}

// <p className="option"><label><input type="radio" /> 24 maj </label> </p>
// <p className="option"><label><input type="radio" /> 24 dec </label> </p>
//<p className="option"><label><input type="radio" /> 3 nov </label> </p>

function getQuestions() {
    return [
        {
            question: 'När är det julafton?',
            answers: ['24 maj', '24 dec', '3 nov'],
            correct: 1
        },
        {
            question: 'Vad heter David i mellannamn?',
            answers: ['sven', 'julia', 'anders'],
            correct: 2
        },
        {
            question: 'Vad har vit för hex tal?',
            answers: ['#000000', '#ffffff', '#15f36a'],
            correct: 1
        },
        {
            question: 'vad sitter bredvid t på tangentbordet?',
            answers: ['y', 'b', 'n'],
            correct: 0
        },
        {
            question: 'vad är bäst?',
            answers: ['teams', 'discord', 'slack'],
            correct: 1
        }
    ]
}

export default Game;