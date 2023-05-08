import React from "react"
import "bootstrap"
import "./App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import NotFound from "./pages/404"
import Users from "./pages/Users"
import AuthorisedRoute from "./guard/AuthorisedRoute"
import NotAuthorisedRoute from "./guard/NotAuthorisedRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<AuthorisedRoute />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route element={<NotAuthorisedRoute />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
