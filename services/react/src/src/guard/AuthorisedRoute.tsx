import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const AuthorisedRoute = () => {
  const { isLoggedIn } = useAuth()

  return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default AuthorisedRoute
