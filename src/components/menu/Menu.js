import React, { useState } from "react";
import { ToppingsList } from "../toppings/ToppingsList";
import { Crusts } from "../crusts/Crusts";
import { Sizes } from "../sizes/Sizes";
import { OrderButton } from "./OrderButton"
import "./Menu.css"

export const Menu = () => {
  const [ selectedValue, setSelectedValue ] = useState( 0 )
  const  [chosenCrust, setChosenCrust] = useState( 0 )

  // current state should be tracked DONE
  // use state to create an order object DONE
  // write a fetch call to send a POST request with the order object to the api

  const submitOrder = () => {

    const newOrder = {
      crustId: chosenCrust,
      sizeId: selectedValue,
      customerId: 1,
      timestamp: Date.now()
    }

    fetch(
      "http://localhost:8088/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify( newOrder )
      }
    )
    .then(
      () => {
        setSelectedValue( 0 )
        setChosenCrust( 0 )
      }
    )
  }

  return (
    <>
      <h1 className="menuHead">Our Menu. Build the Perfect Pie for You!</h1>
      <section className="menu">
        <Sizes selectedValue={ selectedValue } setSelectedValue={ setSelectedValue } />
        <Crusts chosenCrust={ chosenCrust} changeSelectedCrust={ setChosenCrust }/>
        <ToppingsList />

      </section>
      <section className="button-section">
        <OrderButton submitOrder={ submitOrder }/>
      </section>
    </>
  )



}
