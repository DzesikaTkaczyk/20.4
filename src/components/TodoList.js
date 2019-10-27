import React from 'react';
import style from './TodoList.css';
import PropTypes from 'prop-types';

const TodoList = props => {
	const oneOfTasks = props.tasksList.map(task => {
		return (
			<li className={style.oneTask} key={task.id} onClick={() => {props.removeTodo(task.id)}}>
				<p className={style.taskText}>{task.text}</p>
				<button className={style.close}>x</button>
			</li>)
	});
	return <ul className={style.tasksList}>{oneOfTasks}</ul>;
}

TodoList.propTypes ={
	tasksList: PropTypes.array.isRequired,
	removeTodo: PropTypes.func.isRequired
};

export default TodoList;