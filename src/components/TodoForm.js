import React from 'react'

export default class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            inputVal:''
        }
    }

    changeEvt = e => {
        this.setState({
            ...this.state,inputVal:e.target.value
        })
    }

    addToDo = (e) => {
        e.preventDefault()
        this.props.addToDo(this.state.inputVal)
    }

    clearToDos = (e) => {
        e.preventDefault()
        this.props.clearToDos()
    }

    render() {
        return (
            <form>
                <input onChange={this.changeEvt} type='text' name='todo' />
                <button onClick={this.addToDo}>Add Todo</button>
                <button onClick={this.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}