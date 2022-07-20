import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="Nim">
      <Game bot={false}></Game>
    </div>
  );
}

export default App;
