import React from "react";
import { ToppingsList } from "../toppings/ToppingsList";
import { Crusts } from "../crusts/Crusts";
import { Sizes } from "../sizes/Sizes";
import "./Menu.css"

export const Menu = () => {

  return (
    <>
      <h1 className="menuHead">Our Menu. Build the Perfect Pie for You!</h1>
      <section className="menu">
        <Sizes />
        <Crusts />
        <ToppingsList />
      </section>
    </>
  )



}