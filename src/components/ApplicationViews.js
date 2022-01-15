import React from "react"
import { Route } from "react-router-dom"
import { Crusts } from "./crusts/Crusts"
import { Menu } from "./menu/Menu"
import { Orders } from "./orders/Orders"

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
          <Crusts />
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