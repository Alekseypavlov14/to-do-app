import React, { useState } from 'react'
import styles from './ToDo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ todo, theme, setTodos, index }) => {
    const [done, setDone] = useState(false)

    return (
        <div className={styles.ToDo + ' ' + (theme ? styles.Dark : styles.Light)}>
            <button
                className={styles.Button + ' ' + (done ? styles.done : styles.active)}
                onClick={() => {
                    setDone(prev => !prev)
                    setTodos(prev => {
                        prev[index].isActive = false
                        return prev
                    })
                }}
            >
                { done && (<FontAwesomeIcon icon={ faCheck } />) }
            </button>

            <div
                className={styles.Text + ' ' + (done && styles.doneTodoText)}
                onClick={() => {
                    setDone(prev => !prev)
                    setTodos(prev => {
                        prev[index].isActive = false
                        return prev
                    })
                }}
            >
                {todo.text}
            </div>

            <button
                className={styles.closeButton}
                onClick={() => {
                    console.log('hello')
                    setTodos(prev => {
                        prev.splice(index, 1)
                        return prev
                    })
                }}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    )
}

export default ToDo