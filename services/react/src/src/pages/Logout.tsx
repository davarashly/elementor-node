import api from "../api"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"

const Logout = () => {
  const navigate = useNavigate()
  const { setIsLoggedIn } = useAuth()

  useEffect(() => {
    api.logout().finally(() => {
      setIsLoggedIn(false)

      navigate("/")
    })
  }, [])

  return <></>
}

export default Logout
