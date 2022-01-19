import React, { useState, useEffect } from "react";

export const Orders = () => {

  const [orders, setOrders] = useState([])
  const [orderToppings, setOrderToppings] = useState([])
  //fetch all the orders
  // display all the orders

  useEffect( () => {
    fetch("http://localhost:8088/orders?_expand=crust&_expand=size")
    .then( (ordersData) => ordersData.json())
    .then( (ordersArr) => setOrders(ordersArr))
  }, [])

  return (
    <>
      <h1>These are the Orders</h1>
      <ul>
        {orders.map( (order) => <li key={order.id}>Order #{order.id} is a {order.size.circumference}-inch {order.crust.type} pizza with...</li>)}
      </ul>
    </>
  )
}