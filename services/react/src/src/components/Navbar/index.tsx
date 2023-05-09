import React from "react"
import { NavLink } from "react-router-dom"
import StyledNavbar from "./StyledNavbar"
import { useAuth } from "../../context/AuthContext"

const Navbar = () => {
  const { isLoggedIn } = useAuth()

  return (
    <StyledNavbar className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className="nav-link">
                Users
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={isLoggedIn ? "/logout" : "/sign-in"}
              >
                {isLoggedIn ? "Log out" : "Sign In"}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </StyledNavbar>
  )
}

export default Navbar
