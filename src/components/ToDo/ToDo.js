import React, { useState } from 'react'
import styles from './ToDo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ todo, theme, Todo, index }) => {
    const [done, setDone] = useState(false)

    async function finishTaskHandler() {
        await setDone(prev => !prev)
        await Todo.finish(index)
    }

    const ThemeSelector = theme ? styles.Dark : styles.Light
    const DoneSelector = done ? styles.done : styles.active

    return (
        <div className={styles.ToDo + ' ' + ThemeSelector}>
            <button
                className={styles.Button + ' ' + DoneSelector}
                onClick={finishTaskHandler}
            >
                { done && (<FontAwesomeIcon icon={ faCheck } />) }
            </button>

            <div
                className={styles.Text + ' ' + (done && styles.doneTodoText)}
                onClick={finishTaskHandler}
            >
                {todo.text}
            </div>

            <button
                className={styles.closeButton}
                onClick={() => {
                    Todo.finish(index)
                }}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    )
}

export default ToDo