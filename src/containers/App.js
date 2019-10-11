import React from 'react';
import uuid from 'uuid'
import style from './App.css';
import Title from '../components/Title';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };//utrzymanie stanu aplikacji i opisanie, co robi
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),//nadaje unikatowe id
        };
        const data = [...this.state.data, todo];//przywoluje tablice i dodaje do niej elementy todo
        this.setState = ({data});//tworzy obiekt z danymi
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);//filter tworzy tablice i sprawdza czy id usuwanego elementu jest rozne od id obecnie sprawdzanego
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