import React from 'react';
import style from './TodoList.css';

const TodoList = props =>
	<ul>
		{props.tasksList}
	</ul>

export default TodoList;