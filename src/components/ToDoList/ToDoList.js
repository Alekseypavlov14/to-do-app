import React from 'react'
import ToDo from '../ToDo/ToDo'
import styles from './ToDoList.module.css'

const ToDoList = ({ theme, todos }) => {
    return (
        <div className={styles.ToDoList + ' ' + (theme ? styles.Dark : styles.Light)}>
            {todos.map((todo, index) => (
                <ToDo theme={theme} todo={todo} key={index} />
            ))}
        </div>
    )
}

export default ToDoList