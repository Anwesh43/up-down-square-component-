import {
    useState,
    useEffect
} from 'react'

import {
    divideScale, 
    sinify
} from './utils'

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

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
    return {  
        w, 
        h
    }
}

export const useStyle = (w, h, scale) => {
    const size = Math.min(w, h) / 9 
    const x = w / 2 - size / 2
    const y = h / 2 - size / 2
    const position = 'absolute'
    const border = '1px solid green'
    const background = 'green' 
    const sf = sinify(scale)
    return {
        parentStyle() {
            const width = `${size}px`
            const height = `${size}px`
            const top = `${y}px`
            const left = `${x}px`
            const WebkitTransform = `rotate(${90 * divideScale(sf, 2, 3)}deg)`
            return {
                position, 
                width,
                top,
                left, 
                height, 
                border, 
                WebkitTransform
            }
        },

        rectStyle(i) {
            const rh = size / 2
            const height = `${rh}px`
            const width = `${size * divideScale(sf, i, 3)}px`
            const top = `${rh * i}px`
            const left = '0px'
            return {width, height, position, left, top, background}
        }
    }
}