import React, { useState, useEffect } from 'react'

export const Sizes = ( { selectedValue, setSelectedValue }) => {

  const [sizes, changeSizes] = useState([]) //return an array with an initial state value and a function for changing that state



  // This is like an event listener
  useEffect( () => {
    fetch("http://localhost:8088/sizes")
    .then( data => data.json())
    .then( sizes => changeSizes(sizes))
  }, [] )


  return (
    <div className='menu--list sizes'>
      <h2>Sizes</h2>
      <select
        onChange={
          (event) => {
            const intValueOfUserSelection = parseInt( event.target.value )
            setSelectedValue( intValueOfUserSelection )
          }
        }

        value={ selectedValue }

        >
        <option value={0} >select a size</option>
        {sizes.map(

          (size) =>
            <option id={`size--${size.id}`} key={size.id} value={size.id}>
            {size.circumference}
            </option>
        )}

      </select>
    </div>
  )

}
