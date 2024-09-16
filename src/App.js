import React from 'react';
import TodoForm from './components/TodoForm';
import ToDoList from './components/TodoList';
import './components/Todo.css'

const initToDos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      stuffToDo : initToDos
    }
  }

  completeTask = (id) => {
    this.setState({
      stuffToDo: this.state.stuffToDo.map(todo => {
        if (todo.id === id) {
          return ({
            ...todo,
            completed:!todo.completed})
        }
        return todo
      })
    })
  }

  addToDo = (newTask) => {
    const newToDo = {
      task:newTask,
      id:Date.now(),
      completed:false
    }

    this.setState({
      stuffToDo:[...this.state.stuffToDo,newToDo]
    })
  }

  clearToDos = () => {
    this.setState({
      ...this.state,
      stuffToDo:this.state.stuffToDo.filter(todo => {
        return (todo.completed === false)
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList completeTask={this.completeTask} stuffToDo={this.state.stuffToDo} />
        <TodoForm addToDo={this.addToDo} clearToDos={this.clearToDos}/>
      </div>
    );
  }
}

export default App;
