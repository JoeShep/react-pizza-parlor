import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./PizzaParlor.css"

export const PizzaParlor = () => {
  return (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("pizza_customer")) {
            return (
              <>
                <h1>Mama Leoni's Pizza Parlor</h1>
                <p>We make only the freshest pies in the tri-state area</p>
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  )
}