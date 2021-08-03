import React from 'react'

const ToDo = props => {
    const clickEvt = () => {
        //console.log(props.todo.task)
        props.completeTask(props.todo.id)
    }

    return (
        <div onClick={clickEvt} className={`${props.todo.completed ? 'completed': ''}`}>
            <p>{props.todo.task}</p>
        </div>
    )
}

export default ToDo