import React from 'react'
import ToDo from './Todo'

const ToDoList = props => {
    return (
        <div>
            {props.stuffToDo.map(todo => (
                <ToDo completeTask = {props.completeTask} key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default ToDoList