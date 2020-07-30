
import React from 'react';
import {Provider} from 'react-redux';
import TapBar from './components/topBar/topBar.component';
import configureStore from './configureStore'
import WelcomePage from './components/welcomePage/welcomePage.component';

let store = configureStore()

const App = () => (
  <Provider store={store}>
     <TapBar/>
     <WelcomePage/>
  </Provider>
)

export default App;