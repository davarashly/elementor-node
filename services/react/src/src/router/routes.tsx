import React from "react"
import { capitalize } from "../utils"
import Home from "../pages/Home"
import Users from "../pages/Users"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import NotFound from "../pages/404"
import { PagePathName, Path } from "./types"
import Logout from "../pages/Logout"

const AppPaths: Record<PagePathName, Path> = {
  home: { path: "/", title: capitalize("home"), pageElement: <Home /> },
  users: {
    path: "users",
    title: capitalize("users"),
    pageElement: <Users />,
  },
  "sign-in": {
    path: "sign-in",
    title: capitalize("sign-in"),
    pageElement: <SignIn />,
  },
  "sign-up": {
    path: "sign-up",
    title: capitalize("sign-up"),
    pageElement: <SignUp />,
  },
  logout: {
    path: "logout",
    title: "Logout",
    pageElement: <Logout />,
  },
  "not-found": {
    path: "*",
    title: "Not Found",
    pageElement: <NotFound />,
  },
}

export default AppPaths
