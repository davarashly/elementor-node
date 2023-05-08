import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { parseCookies } from "../utils"

const AuthorisedRoute = () => {
  const isLoggedIn = !!parseCookies().username

  return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default AuthorisedRoute
