import {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
  useMemo,
} from "react"
import { IsLoggedIn } from "../utils"

type AuthContextType = {
  isLoggedIn: boolean
  setIsLoggedIn: (loggedIn: boolean) => void
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(IsLoggedIn())

  const isLoggedInContext = useMemo(
    () => ({ isLoggedIn, setIsLoggedIn }),
    [isLoggedIn],
  )

  return (
    <AuthContext.Provider value={isLoggedInContext}>
      {children}
    </AuthContext.Provider>
  )
}
