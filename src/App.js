import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Game from './components/Game';
import Welcome from './components/Welcome';
import Result from './components/Result';

function App() {
  const WELCOME = 'welcome', GAME = 'game', RESULT = 'result';
  const [score, setScore] = useState(0);
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  const restartQuiz = () => {
    setCurrentScreen(GAME);
    setScore(0);
  }

  let content = null;
  switch(currentScreen) {
    case WELCOME:
      content = <Welcome
        nextScreen={() => setCurrentScreen(GAME)} />
      break;
    case GAME: 
      content = <Game 
          answeredCorrectly={() => setScore(score + 1)}
          showResult={() => setCurrentScreen(RESULT)}
      />
      break;
    default:
      content = <Result score= {score} restartQuiz={restartQuiz}  />;
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>Quiz</h1>
      </header>
      <main>
        {content}       
        Score: {score}
      </main>
    </div>
  );
}

export default App;
