import { useState } from 'react';
import './App.css';
import Score from './Components/Score';
import Trivia from './Components/Trivia';

function App() {
  const [currentPoints, setCurrentPoints] = useState();
  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <Score currentPoints={currentPoints} />
      <Trivia setCurrentPoints={setCurrentPoints} />
    </div>
  );
}

export default App;
