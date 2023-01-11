import GameBoard from './Gameboard';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/">
          <GameBoard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
