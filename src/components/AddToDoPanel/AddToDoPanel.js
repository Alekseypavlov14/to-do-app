import React, { useState } from 'react'
import styles from './AddToDoPanel.module.css'

const AddToDoPanel = ({ theme, setTodos, Todo }) => {
    const [currentTodo, setCurrentTodo] = useState('')

    const ThemeSelector = theme ? styles.Dark : styles.Light

    return (
        <div className={styles.AddToDoPanel + ' ' + ThemeSelector}>
            <input 
                type='text' 
                placeholder='Create a new todo' 
                className={styles.input} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        if ( !(/\w/.test(e.target.value)) ) return 

                        Todo.add({
                            text: currentTodo,
                            done: false
                        })
                        
                        e.target.value = ''
                        setCurrentTodo('')
                        return
                    }

                    setCurrentTodo(e.target.value)
                }}
            />
        </div>
    )
}

export default AddToDoPanel