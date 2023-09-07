import React from 'react'

const ColorBox = ({ colorValue, hexValue }) => {
  return (
    <section
        className='colorBox'
        style={{backgroundColor: colorValue}}
    >
       <p>{colorValue ? colorValue : "Empty Value"}</p>
       <p>{hexValue ? hexValue : null} </p> 
    </section>
  )
}

ColorBox.defaultProps = {
    colorValue: 'Empty Color Value.'
}

export default ColorBox