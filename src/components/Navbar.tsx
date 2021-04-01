import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
        }}
        exact
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        activeStyle={{
          fontWeight: "bold",
        }}
        exact
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        activeStyle={{
          fontWeight: "bold",
        }}
        exact
        to="/discover"
      >
        Discover
      </NavLink>
    </div>
  );
}
