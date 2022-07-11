import React from "react"
import { Route } from "react-router-dom"
import { Menu } from "./menu/Menu"
import { Orders } from "./orders/Orders"

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Menu />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
    </>
  )
}
