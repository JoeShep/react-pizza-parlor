import React, { useState, useEffect } from "react";
import { Order } from "./Order"

export const Orders = () => {

<<<<<<< HEAD
  const currentUser = JSON.parse(localStorage.getItem("pizza_user"))

=======
>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
  const [orders, setOrders] = useState([])
  //fetch all the orders
  // display all the orders

  useEffect( () => {
<<<<<<< HEAD
    const filterByUser = currentUser.staff ? "" : `&customerId=${currentUser.id}`
    fetch(`http://localhost:8088/orders?_expand=crust&_expand=size${filterByUser}`)
=======
    fetch("http://localhost:8088/orders?_expand=crust&_expand=size")
>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
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
<<<<<<< HEAD
      <h1>These are {currentUser.staff ? "the" : "your"} orders</h1>
=======
      <h1>These are the Orders</h1>
>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
      <section className="orders__list">
        <ul>
          {orders.map( (orderObj) => <Order key={orderObj.id} order={orderObj} deleteOrder={deleteOrder}  />)}
        </ul>
      </section>
    </>
  )

<<<<<<< HEAD
}
=======
}
>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
