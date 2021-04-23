import {Link} from 'react-router-dom';

const Welcome = () => (
    <section>
        <h2>Välkommen till denna Quiz!</h2>
        <p>Vill du sätta igång?</p>
        <Link to="/game/1"> 
            <button >Ja!</button>
        </Link>
    </section>
)

export default Welcome;