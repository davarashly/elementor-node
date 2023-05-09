import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import useDocumentTitle from "../hooks/useDocumentTitle"

const Layout = () => {
  useDocumentTitle()

  return (
    <>
      <Navbar />
      <div className="container my-4 d-flex flex-column flex-grow-1">
        <Outlet />
      </div>
    </>
  )
}
export default Layout
