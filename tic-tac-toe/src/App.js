import './App.css';
import Game from  './Components/Game/Game';
import Header from './Components/Header/Header';
import DarkMode from './Components/DarkMode/DarkMode';

function App() {
  return (
    <div className="App">
      <div>
        <Game />
        <Header />
        <DarkMode />
      </div>
    </div>
  );
}

export default App;
