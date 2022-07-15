<<<<<<< HEAD
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [user, setUser] = useState({
        name: "",
        address: "",
        email: "",
        isStaff: false
    })
    const conflictDialog = useRef()

    let navigate = useNavigate()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${user.email}`)
=======
import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [customer, setCustomer] = useState({})
    const conflictDialog = useRef()

    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/customers?email=${customer.email}`)
>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
            .then(res => res.json())
            .then(user => !!user.length)
    }
    const handleRegister = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
<<<<<<< HEAD
                    fetch("http://localhost:8088/users", {
=======
                    fetch("http://localhost:8088/customers", {
>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
<<<<<<< HEAD
                        body: JSON.stringify(user)
=======
                        body: JSON.stringify(customer)
>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
<<<<<<< HEAD
                                localStorage.setItem("pizza_user", JSON.stringify({id: createdUser.id, staff: createdUser.isStaff}))
                                navigate(createdUser.isStaff ? "/orders" : "/menu")
=======
                                localStorage.setItem("pizza_customer", createdUser.id)
                                history.push("/")
>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
    }

<<<<<<< HEAD
    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
=======
    const updateCustomer = (evt) => {
        const copy = {...customer}
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
    }


    return (
        <main style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Mama Leoni's Pizza to place an order</h1>
                <fieldset>
                    <label htmlFor="name"> Full Name </label>
<<<<<<< HEAD
                    <input onChange={updateUser}
=======
                    <input onChange={updateCustomer}
>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
                           type="text" id="name" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="address"> Address </label>
<<<<<<< HEAD
                    <input onChange={updateUser} type="text" id="address" className="form-control" placeholder="Street address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateUser} type="email" id="email" className="form-control" placeholder="Email address" required />
=======
                    <input onChange={updateCustomer} type="text" id="address" className="form-control" placeholder="Street address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateCustomer} type="email" id="email" className="form-control" placeholder="Email address" required />
>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}
<<<<<<< HEAD
=======

>>>>>>> 7c21d35d8d41b07519bdf79af702b52fcee16995
