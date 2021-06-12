import React  from 'react'

import './App.css';
import FetchComponent from './fetch.component'

import Store from './redux/store';
import {Provider} from 'react-redux';



function App({getUser}) {

  return (
    <Provider store={Store}>
      <div className="App">
        <FetchComponent></FetchComponent>
      </div>
    </Provider>
  );
}

export default App;
