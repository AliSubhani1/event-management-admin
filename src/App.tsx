import './App.css';
import Dashboard from './Pages/Dashboard';
import { persistor, store } from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Dashboard />
        </PersistGate>
      </Provider>
      </header>
    </div>
  );
}

export default App;
