import './App.css';
import { Provider } from 'react-redux';
import store from './state/'
import {Game} from './pages/Game'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Game />

      </div>
    </Provider>

  );
}

export default App;
