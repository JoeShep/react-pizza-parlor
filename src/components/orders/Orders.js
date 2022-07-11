import React, { useState, useEffect } from "react";
import { Order } from "./Order"

export const Orders = () => {

  const currentUser = JSON.parse(localStorage.getItem("pizza_user"))

  const [orders, setOrders] = useState([])
  //fetch all the orders
  // display all the orders

  useEffect( () => {
    const filterByUser = currentUser.staff ? "" : `&customerId=${currentUser.id}`
    fetch(`http://localhost:8088/orders?_expand=crust&_expand=size${filterByUser}`)
    .then( (ordersData) => ordersData.json())
    .then( (ordersArr) => setOrders(ordersArr))
  }, [])

  const deleteOrder = (orderId) => {
    fetch(`http://localhost:8088/orders/${orderId}`, {
      method: "DELETE"
    })
    .then( () => {
      fetch("http://localhost:8088/orders?_expand=crust&_expand=size")
      .then( (ordersData) => ordersData.json())
      .then( (ordersArr) => setOrders(ordersArr))
    })
  }

  return (
    <>
      <h1>These are {currentUser.staff ? "the" : "your"} orders</h1>
      <section className="orders__list">
        <ul>
          {orders.map( (orderObj) => <Order key={orderObj.id} order={orderObj} deleteOrder={deleteOrder}  />)}
        </ul>
      </section>
    </>
  )

}
