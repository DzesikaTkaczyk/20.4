import React from 'react';
import uuid from 'uuid'
import style from './App.css';
import Title from '../components/Title';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };//keeps state and describe whats this doing
    }
    
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),//gives unique id
        };
        const data = [...this.state.data, todo];//brings up array and adds todo elements
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);//filter creates array and checks: if id of removed element is different than id of active element
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title tasks={this.state.data.length}/>
            </div>
        );
    }
}

export default App;
