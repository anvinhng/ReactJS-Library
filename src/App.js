// import  Calculator from './components/exercise-01/calculator';
import { Timer } from './components/exercise-02/countdown-timer';
import { NumGenerator } from './components/exercise-03/random-number';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Calculator/> */}
      {/* Calculator and Timer are not usable at the same time */}
      <Timer/>
      <NumGenerator/>
    </div>
  );
}

export default App;
