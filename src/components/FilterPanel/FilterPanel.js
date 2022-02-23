import React, { useEffect, useRef, useState } from 'react'
import styles from './FilterPanel.module.css'

const FilterPanel = ({ theme, setTodos }) => {
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
            <div onClick={() => setFilterType(0)} ref={AllRef} className={styles.All + ' ' + styles.Selector}>
                All
            </div>
            <div onClick={() => setFilterType(1)} ref={ActiveRef} className={styles.Active}>
                Active
            </div>
            <div onClick={() => setFilterType(2)} ref={CompletedRef} className={styles.Completed}>
                Completed
            </div>
        </div>
    )
}

export default FilterPanel