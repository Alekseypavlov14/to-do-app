import { useState } from 'react'

export function useViewport() {
    const [ViewportHeight, setViewportHeight] = useState(window.innerHeight * 0.01)
    const [ViewportWidth, setViewportWidth] = useState(window.innerWidth * 0.01)
 
    window.onresize = () => {
        setViewportHeight(window.innerHeight * 0.01)
        setViewportWidth(window.innerWidth * 0.01)
    }

    document.documentElement.style.setProperty('--vh', `${ViewportHeight}px`)
    document.documentElement.style.setProperty('--vw', `${ViewportWidth}px`)
}