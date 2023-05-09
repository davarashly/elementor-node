import React from "react"
import "bootstrap"
import "./App.scss"
import AppRouter from "./router"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
