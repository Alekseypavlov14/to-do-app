import React, { useState, useEffect } from 'react'
import AddToDoPanel from '../AddToDoPanel/AddToDoPanel'
import ThemeToggler from '../ThemeToggler/ThemeToggler'
import Title from '../Title/Title'
import ToDoList from '../ToDoList/ToDoList'
import styles from './Container.module.css'

const Container = ({ theme, setTheme }) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        localStorage.setItem('todos', todos)
    }, [todos])

    useEffect(() => {
        setTodos(localStorage.getItem('todos') || [])
    }, [])

    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <Title text='TODO' />
                <ThemeToggler theme={theme} setTheme={setTheme} />
            </div>

            <AddToDoPanel theme={theme} setTodos={setTodos} />

            <ToDoList theme={theme} todos={todos} />
        </div>
    )
}

export default Container