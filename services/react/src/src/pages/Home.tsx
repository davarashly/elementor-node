import { parseCookies } from "../utils"

const Home = () => {
  const { username } = parseCookies()

  return (
    <h1 className="text-center display-3 d-flex align-items-center justify-content-center flex-grow-1">
      Hello, {username}!
    </h1>
  )
}

export default Home
