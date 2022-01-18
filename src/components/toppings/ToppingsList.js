import React, { useState, useEffect } from 'react'
import "./Toppings.css"

export const ToppingsList = ({selectOrderTopping, selectedToppings}) => {

  const [toppings, changeToppings] = useState([]) //return an array with an initial state value and a function for changing that state

  // This is like an event listener
  useEffect( () => {
    fetch("http://localhost:8088/toppings")
    .then( data => data.json())
    .then( toppings => changeToppings(toppings))
  }, [] )


  return (
    <div className='menu--list toppings'>
      <h2>Toppings</h2>
      <div className='toppings--items'>
        {toppings.map( topping => 
          <label htmlFor={`topping--${topping.id}`} key={topping.id}>
            <input type="checkbox" id={`topping--${topping.id}`} onChange={() => selectOrderTopping(topping.id)} 
              checked={selectedToppings.includes(topping.id) ? true : false}
            />
            {topping.name}
          </label>
        )}
      </div>
    </div>
  )
  
}