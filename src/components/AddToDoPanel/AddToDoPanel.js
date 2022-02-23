import React, { useEffect, useRef, useState } from 'react'
import styles from './AddToDoPanel.module.css'

const AddToDoPanel = ({ theme, setTodos }) => {
    const [currentTodo, setCurrentTodo] = useState('')
    const InputRef = useRef(null)

    useEffect(() => {
        InputRef.current.value = currentTodo
    }, [currentTodo])

    return (
        <div className={styles.AddToDoPanel + ' ' + (theme ? styles.Dark : styles.Light)}>
            <input 
                type='text' 
                ref={InputRef}
                placeholder='Create a new todo' 
                className={styles.input} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        if ( !(/\w/.test(e.target.value)) ) return 

                        const todo = {
                            text: currentTodo,
                            isActive: true
                        }

                        setTodos(prev => prev.concat([todo]))
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