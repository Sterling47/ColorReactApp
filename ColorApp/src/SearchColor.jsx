import React from 'react';
import colorNames from 'colornames';

const SearchColor = ({ colorValue, setColorValue, setHexValue }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">color search</label>
        <input      
            autoFocus
            type="text" 
            placeholder='type a color'
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value); 
                <br/>
                setHexValue(colorNames(e.target.value));
            }
        }
        />     
   </form>
  )
}

export default SearchColor;