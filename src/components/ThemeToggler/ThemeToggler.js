import React from 'react'
import styles from './ThemeToggler.module.css'

const ThemeToggler = ({ theme, setTheme }) => {
    const ThemeSelector = theme ? styles.Dark : styles.Light

    return (
        <div className={styles.ThemeToggler}>
            <button 
                className={styles.Button + ' ' + ThemeSelector}
                onClick={() => {
                    setTheme(prev => !prev)
                }}
            >
            </button>
        </div>
    )
}

export default ThemeToggler