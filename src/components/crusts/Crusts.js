import React, {useState, useEffect} from "react"
import "./Crusts.css"

// STEP 1: 'Crusts' gets called by its parent
export const Crusts = ( { chosenCrust, changeSelectedCrust }) => {

  // STEP 2: We define our component's state ( with an intial value of [])
  // and we get a function for changing that state by calling useState()
  const [crusts, changeCrusts] = useState([])

  // STEP 3: We call useEffect() to tell it a function to call once the HTML of the component is in the DOM
  useEffect(
    // STEP 5 useEffect calls this function for us to get the crusts data from the db and update the crusts state.
    () => {
      fetch('http://localhost:8088/crusts')
      .then( (data) => data.json())
      .then( (crustData) => changeCrusts(crustData))
  }, [])

  // STEP 4: The function returns our JSX/HTML and it shows up in the DOM ( along with the Pizza Parlor and Toppings, etc components)
  // STEP 6: The JSX/ HTML is rendered again using our updated crusts state
  return (
    <div className='menu--list crusts'>
      <h2>Crusts</h2>
      <div className='crusts--items'>
        {crusts.map(
          (crust) => {
          return (
            <label htmlFor={`crust--${crust.id}`} key={crust.id}>
              <input
              checked={crust.id === chosenCrust ? true : false}
              type="radio"
              id={`crust--${crust.id}`}
              onChange={
                () => {
                  changeSelectedCrust(crust.id)
                }

              }

              name="crust"/>
              {crust.type}
            </label>
          )

        })}
      </div>
    </div>
  )
}
