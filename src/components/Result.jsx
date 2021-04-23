import {Link} from 'react-router-dom';

const Result = ({ score, restartQuiz }) => (
    <section>
        <h2>Reultat</h2>
        <p>Du fick {score} rätta svar!</p>
        <Link to="/game/1">
            <button onClick={ restartQuiz}> Börja om </button>
        </Link>
    </section>    
)

export default Result;