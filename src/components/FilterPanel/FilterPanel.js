import React, { useEffect, useRef, useState } from 'react'
import styles from './FilterPanel.module.css'

const FilterPanel = ({ theme, setFilteredTodos }) => {
    const [filterType, setFilterType] = useState(0)

    const AllRef = useRef(null)
    const ActiveRef = useRef(null)
    const CompletedRef = useRef(null)

    const refs = [
        AllRef, ActiveRef, CompletedRef
    ]

    useEffect(() => {
        refs.forEach(ref => ref.current.style.color = (theme ? 'var(--very-dark-grayish-blue)' : 'var(--dark-grayish-blue)'))
        refs[filterType].current.style.color = 'var(--bright-blue)'
    }, [filterType])

    return (
        <div className={styles.FilterPanel + ' ' + (theme ? styles.Dark : styles.Light)}>
            <div 
                onClick={() => {
                    setFilterType(0)
                    setFilteredTodos(prev => {
                        return prev.filter(todo => true)
                    })
                }} ref={AllRef} 
                className={styles.All + ' ' + styles.Selector}
            >
                All
            </div>
            <div 
                onClick={() => {
                    setFilterType(1)
                    setFilteredTodos(prev => {
                        return prev.filter(todo => todo.isActive === false)
                    })
                }} ref={ActiveRef} 
                className={styles.Active + ' ' + styles.Selector}
            >
                Active
            </div>
            <div onClick={() => setFilterType(2)} ref={CompletedRef} className={styles.Completed + ' ' + styles.Selector}>
                Completed
            </div>
        </div>
    )
}

export default FilterPanel