import React, { useState, useEffect } from 'react'

export const Sizes = () => {

  const [sizes, changeSizes] = useState([]) //return an array with an initial state value and a function for changing that state

  const [selectedValue, setSelectedValue] = useState(null)

  // This is like an event listener
  useEffect( () => {
    fetch("http://localhost:8088/sizes")
    .then( data => data.json())
    .then( sizes => changeSizes(sizes))
  }, [] )


  return (
    <div className='menu--list sizes'>
      <h2>Sizes</h2>
      <select>
        <option value={selectedValue}>select a size</option>
        {sizes.map( (size) => 
          <option id={`size--${size.id}`} key={size.id} value={size.id}>
          {size.circumference}
          </option>
        )}
      </select>
    </div>
  )
  
}