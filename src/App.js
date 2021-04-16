import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Game from './components/Game';

function App() {
  const [score, setScore] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
          <h1>Quiz</h1>
      </header>
      <main>
        <Game answeredCorrectly={() => setScore(score + 1)}/>

        Score: {score}
      </main>
    </div>
  );
}

export default App;
