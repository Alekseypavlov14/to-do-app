import React, { useState, useEffect } from 'react'
import AddToDoPanel from '../AddToDoPanel/AddToDoPanel'
import FilterPanel from '../FilterPanel/FilterPanel'
import ThemeToggler from '../ThemeToggler/ThemeToggler'
import Title from '../Title/Title'
import ToDoList from '../ToDoList/ToDoList'
import styles from './Container.module.css'

const Container = ({ theme, setTheme }) => {
    const [todos, setTodos] = useState([])

    /* 
        todo: {
            text: String,
            done: Boolean,
        }
    */

    useEffect(() => {
        const todos = localStorage.getItem('_todos')
        setTodos(JSON.parse(todos) || [])
    }, [])

    useEffect(() => {
        localStorage.setItem('_todos', JSON.stringify(todos))
    }, [todos])

    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <Title text='TODO' />
                <ThemeToggler theme={theme} setTheme={setTheme} />
            </div>

            <AddToDoPanel theme={theme} setTodos={setTodos} />

            <ToDoList setTodos={setTodos} theme={theme} todos={todos} />

            <FilterPanel theme={theme} setTodos={setTodos} />
        </div>
    )
}

export default Container