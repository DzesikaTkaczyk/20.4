import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

/*ReactDOM.render(
	<App />,
	document.getElementById('app')
);*/

let toDo = React.createElement(App)
ReactDOM.render(toDo, document.getElementById('app'))