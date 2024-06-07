import React from 'react'
import './Search.css'

function Search({text, placeholder}) {
  return (
    <>
      <input type={text} placeholder={placeholder}></input>
    </>
  )
}

export default Search
