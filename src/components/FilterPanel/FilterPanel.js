import React, { useEffect, useRef, useState } from 'react'
import styles from './FilterPanel.module.css'

const FilterPanel = ({ theme }) => {
    const [currentFilterType, setCurrentFilterType] = useState(0)

    const AllRef = useRef(null)
    const ActiveRef = useRef(null)
    const CompletedRef = useRef(null)

    const refs = [
        AllRef, ActiveRef, CompletedRef
    ]

    useEffect(() => {
        const defaultColor = theme ? 'var(--very-dark-grayish-blue)' : 'var(--dark-grayish-blue)'
        const activeColor = 'var(--bright-blue)'

        refs.forEach(ref => ref.current.style.color = defaultColor)
        refs[currentFilterType].current.style.color = activeColor
    }, [currentFilterType])

    return (
        <div className={styles.FilterPanel + ' ' + (theme ? styles.Dark : styles.Light)}>
            <div 
                onClick={() => {
                    setCurrentFilterType(0)
                }} ref={AllRef} 
                className={styles.All + ' ' + styles.Selector}
            >
                All
            </div>

            <div 
                onClick={() => {
                    setCurrentFilterType(1)
                }} ref={ActiveRef} 
                className={styles.Active + ' ' + styles.Selector}
            >
                Active
            </div>

            <div onClick={() => setCurrentFilterType(2)} ref={CompletedRef} className={styles.Completed + ' ' + styles.Selector}>
                Completed
            </div>
        </div>
    )
}

export default FilterPanel