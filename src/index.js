import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container/Container'
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Container/>, document.getElementById('root'));
serviceWorker.unregister();
