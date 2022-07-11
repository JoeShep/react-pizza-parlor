import { useState } from "react";
import { useavigate, useNavigate } from "react-router-dom";
import { ToppingsList } from "../toppings/ToppingsList";
import { Crusts } from "../crusts/Crusts";
import { Sizes } from "../sizes/Sizes";
import { OrderButton } from "./OrderButton"
import "./Menu.css"

export const Menu = () => {
  const [ selectedValue, setSelectedValue ] = useState( 0 )
  const [ chosenCrust, setChosenCrust ] = useState( 0 )
  const [ selectedToppings, setSelectedToppings ] = useState([])

  const navigate = useNavigate()

  const selectOrderTopping = (selectedToppingId) => {
    // Because we are using checkboxes for toppings we need to
    // decide whether to add or remove a topping id from our selectedToppings state
    // Add it if the user is selecting it, remove it if the user is deselecting it.
    // If the id is already there, then remove it. If it's not there, add it
    let selectedToppingsCopy = [...selectedToppings]
    if (selectedToppings.includes(selectedToppingId)) {
      selectedToppingsCopy = selectedToppingsCopy.filter( (toppingId) => toppingId !== selectedToppingId)
      setSelectedToppings(selectedToppingsCopy)
    } else {
      selectedToppingsCopy.push(selectedToppingId)
      setSelectedToppings(selectedToppingsCopy)
    }
  }

  const submitOrder = () => {
    const currentUser = JSON.parse(localStorage.getItem("pizza_user"))
    const newOrder = {
      crustId: chosenCrust,
      sizeId: selectedValue,
      customerId: parseInt(currentUser.id),
      timestamp: Date.now()
    }

    // Add the order obj to the db.
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
    .then( (newOrderData) => newOrderData.json() )
    .then( (newOrder) => {
        //POST X number of orderToppings to the db
        const orderToppingsPromises = selectedToppings.map( (toppingId) => {
            return fetch("http://localhost:8088/orderToppings", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                toppingId: toppingId,
                orderId: newOrder.id
              })
          })
        })

        //Promise.all(): give it an array of promise objects and you can follow it with s single .then()
        // That .then will not call its callback func until ALL the Promises have resolved.
        return Promise.all(orderToppingsPromises)
    })
    .then(
      // reset the form to empty if we are staying on this page.
      // In this version of the app we are not, so no need to do this.
      // Might come in handy for you at some point, though!
      // () => {
      //   setSelectedValue( 0 )
      //   setChosenCrust( 0 )
      //   setSelectedToppings([])
      // }

      // Instead, once an order is placed, re-route to a different view ( render a different component based on the URL)
      // history.push("/orders")
      navigate("/orders")
    )

  }

  return (
    <>
      <h1 className="menuHead">Our Menu. Build the Perfect Pie for You!</h1>
      <section className="menu">
        <Sizes selectedValue={ selectedValue } setSelectedValue={ setSelectedValue } />
        <Crusts chosenCrust={ chosenCrust} changeSelectedCrust={ setChosenCrust }/>
        <ToppingsList selectedToppings={selectedToppings} selectOrderTopping={ selectOrderTopping }/>

      </section>
      <section className="button-section">
        <OrderButton submitOrder={ submitOrder }/>
      </section>
    </>
  )



}
