import {
  useState, useEffect
} from 'react'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                let currScale = scale 
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        clearInterval(interval)
                        setAnimated(false)
                    }
                }, delay)
            }
        }
    }
}