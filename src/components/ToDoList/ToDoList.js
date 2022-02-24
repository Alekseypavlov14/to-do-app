import React from 'react'
import ToDo from '../ToDo/ToDo'
import styles from './ToDoList.module.css'

const ToDoList = ({ theme, todos, Todo }) => {
    const ThemeSelector = theme ? styles.Dark : styles.Light

    return (
        <div className={styles.ToDoList + ' ' + ThemeSelector}>
            <div className={styles.ToDos}>
                {todos.map((todo, index) => (
                    <ToDo index={index} Todo={Todo} theme={theme} todo={todo} key={index} />
                ))}
            </div>

            <div className={styles.footer}>
                <div className={styles.ListLength}>
                    {todos.length + ' items left'}
                </div>
                <div className={styles.ClearText}>
                    Clear Completed
                </div>
            </div>
        </div>
    )
}

export default ToDoList