import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS (includes Popper.js)
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

serviceWorker.unregister();
