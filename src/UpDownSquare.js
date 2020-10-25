import React from 'react'
import {
  useStyle
 } from './hooks'

const UpDowSquare = ({w, h, scale, onClick}) => {
    const {parentStyle, rectStyle} = useStyle(w, h, scale)
    return (
        <div onClick = {onClick} style = {parentStyle()}>
            {[0, 1].map(i => (
                <div key = {`rect_${i}`} style = {rectStyle(i)}>
                </div>
              )
            )}
        </div>
    )   
}

export default UpDowSquare