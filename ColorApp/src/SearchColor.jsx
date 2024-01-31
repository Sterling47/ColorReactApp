import React from 'react';
import colorNames from 'colornames';

const SearchColor = ({ 
      colorValue, setColorValue, setHexValue,
      isDarkText, setIsDarkText

  }) => {
    return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label >color search</label>
        <input      
            autoFocus
            type="text" 
            placeholder='type a color'
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value);  
                setHexValue(colorNames(e.target.value));
            }
        }
        />
        <button
          className='toggle'
          type='button'
          onClick={() => setIsDarkText(!isDarkText)}
        >
          Toggle text Color
        </button>     
   </form>
  )
}

export default SearchColor;