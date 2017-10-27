import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configure';
import AppContainer from './components/AppContainer';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
