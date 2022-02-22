import React, { useState } from 'react'
import styles from './ToDo.module.css'

const ToDo = ({ todo, theme }) => {
    const [active, setActive] = useState(true)

    return (
        <div className={styles.ToDo + ' ' + (theme ? styles.Dark : styles.Light)}>
            <button
                className={styles.Button + ' ' + (active ? styles.active : styles.done)}
                onClick={() => setActive(prev => !prev)}
            >
                {!active && "\u2713"}
            </button>
            {todo.text}
        </div>
    )
}

export default ToDo