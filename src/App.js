import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Clock} from './components/exercise-01/exercise-01';
import Game from './components/exercise-02/game';
import CurrencyExchange from './components/exercise-03/exercise-03';



function App() {
  return (
    <>
        <Clock/>
   
        <Game/>

        <CurrencyExchange/>
    </>
  );
}

export default App;