import './App.css';
import { useState } from 'react';
import Game from './components/Game';
import Welcome from './components/Welcome';
import Result from './components/Result';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [score, setScore] = useState(0);

  const restartQuiz = () => {
    setScore(0);
  }

  //console.log("version: ", 4 );

  return (
    
    <div className="App">
      <header className="App-header">
          <h1>Quiz</h1>
      </header>
      <main>
        <Router >
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/game">
              <Game 
                answeredCorrectly={() => setScore(score + 1)}
              />
            </Route>
            <Route path="/game/:currentquestion">
              <Game 
                answeredCorrectly={() => setScore(score + 1)}
              />
            </Route>
            <Route path="/result">
              <Result score= {score} restartQuiz={restartQuiz}  />
            </Route>
          </Switch>
        </Router>    
        Score: {score}
      </main>
    </div>
    
  );
}

export default App;
