import React, {useState, useEffect} from "react";
import "./Orders.css"

export const Order = ({order, deleteOrder}) => {

  const [orderToppings, setOrderToppings] = useState([])
<<<<<<< HEAD

  useEffect( () => {
    if (order.id) {
      fetch(`http://localhost:8088/orderToppings?_expand=topping&orderId=${order.id}`)
      .then( (orderToppingsData) => orderToppingsData.json())
      .then( (oT) => setOrderToppings(oT))
    }
  }, [])

  return (
    <li className="orders__item">
      <p>
        Order #{order.id} is a {order.size.circumference}-inch {order.crust.type} pizza with { orderToppings.map( (orderTopping) => orderTopping.topping.name ).join(" and ")}
      </p>
      <button className="btn--orderDelete" onClick={() => {deleteOrder(order.id)}}>delete</button>
    </li>
  )

}
=======
  const currentUser = parseInt(localStorage.getItem("pizza_customer"))

  useEffect( () => {
    fetch(`http://localhost:8088/orderToppings?_expand=topping&orderId=${order.id}`)
    .then( (orderToppingsData) => orderToppingsData.json())
    .then( (oT) => setOrderToppings(oT))
  }, [])

  return (
      <li className="orders__item" key={order.id}>
        <p>
          Order #{order.id} is a {order.size.circumference}-inch {order.crust.type} pizza with { orderToppings.map( (orderTopping) => orderTopping.topping.name ).join(" and ") }
        </p>
        { order.customerId === currentUser ? <button className="btn--orderDelete" onClick={() => deleteOrder(order.id) }>delete</button> : "" }
      </li>
  )

}



>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
