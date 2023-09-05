import React from 'react'

const SearchColor = () => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search"></label>
        <input      
        type="text" 
        id="search"
        role='searchbox'
        placeholder='Search Items'/>     
   </form>
  )
}

export default SearchColor;