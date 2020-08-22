import React from 'react';
import BookContainer from './components/bookContainer';
import { Provider } from 'react-redux';
import store from './redux/store/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;
