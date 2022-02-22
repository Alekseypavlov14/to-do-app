import React from 'react'
import styles from './ThemeToggler.module.css'

const ThemeToggler = ({ theme, setTheme }) => {
    return (
        <div className={styles.ThemeToggler}>
            <button 
                className={styles.Button + ' ' + (theme ? styles.Dark : styles.Light)}
                onClick={() => {
                    setTheme(prev => !prev)
                }}
            >
            </button>
        </div>
    )
}

export default ThemeToggler