import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

function noop() {}

if (process.env.NODE_ENV !== 'development') {
  console.log = noop;
  console.warn = noop;
  console.error = noop;
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
