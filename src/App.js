import './App.css';
import { Provider } from 'react-redux';
import store from './state/'
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <AppRoutes />
      </div>
    </Provider>

  );
}

export default App;
