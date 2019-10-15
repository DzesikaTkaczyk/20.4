import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

let toDo = React.createElement(App);
ReactDOM.render(toDo, document.getElementById('app'));