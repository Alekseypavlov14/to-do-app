import React, { useState, useEffect } from 'react'
import AddToDoPanel from '../AddToDoPanel/AddToDoPanel'
import FilterPanel from '../FilterPanel/FilterPanel'
import ThemeToggler from '../ThemeToggler/ThemeToggler'
import Title from '../Title/Title'
import ToDoList from '../ToDoList/ToDoList'
import styles from './Container.module.css'

const Container = ({ theme, setTheme }) => {
    const [todos, setTodos] = useState([])

    class TodoScheme {
        add(newTodo) {
            setTodos(todos => todos.concat([newTodo]))
        }

        remove(index) {
            setTodos(todos => {
                todos.splice(index, 1)
                return todos
            })
        }

        async finish(index) {
            await setTodos(todos => {
                todos[index].done = true
                return todos
            })
        }
    }

    const Todo = new TodoScheme()

    // get todos
    useEffect(() => {
        const todos = localStorage.getItem('_todos')
        setTodos(JSON.parse(todos) || [])
    }, [])

    // save todos
    useEffect(() => {
        localStorage.setItem('_todos', JSON.stringify(todos))
    }, [todos])

    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <Title text='TODO' />
                <ThemeToggler theme={theme} setTheme={setTheme} />
            </div>

            <AddToDoPanel theme={theme} Todo={Todo} />

            <ToDoList setTodos={setTodos} theme={theme} todos={todos}  Todo={Todo}/>

            <FilterPanel theme={theme} />
        </div>
    )
}

export default Container