import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Index from './Routes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Index />
      </Provider>
    </div>
  );
}

export default App;
