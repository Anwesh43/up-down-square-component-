import {
    useDimension, 
    useAnimatedScale
} from './hooks'
import React from 'react'
import UpDownSquare from './UpDownSquare'

const UpDownSquareComponent = (props) => {
    const { 
        scale,
        start
    } = useAnimatedScale(0.02, 20)
    const { 
        w,
        h
    } = useDimension()
    return (
      <UpDownSquare w = {w} h = {h} scale = {scale}  onClick = {start}>
      </UpDownSquare>
    )
}