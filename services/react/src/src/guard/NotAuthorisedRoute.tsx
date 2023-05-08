import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { parseCookies } from "../utils"

const NotAuthorisedRoute = () => {
  const isLoggedIn = !!parseCookies().username

  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />
}

export default NotAuthorisedRoute
