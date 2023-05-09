import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../layout"
import AuthorisedRoute from "../guard/AuthorisedRoute"
import NotAuthorisedRoute from "../guard/NotAuthorisedRoute"
import React from "react"
import AppPaths from "./routes"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppPaths.home.path} element={<Layout />}>
          <Route element={<AuthorisedRoute />}>
            <Route index element={AppPaths.home.pageElement} />
            <Route
              path={AppPaths.users.path}
              element={AppPaths.users.pageElement}
            />
            <Route
              path={AppPaths.logout.path}
              element={AppPaths.logout.pageElement}
            />
          </Route>
          <Route element={<NotAuthorisedRoute />}>
            <Route
              path={AppPaths["sign-in"].path}
              element={AppPaths["sign-in"].pageElement}
            />
            <Route
              path={AppPaths["sign-up"].path}
              element={AppPaths["sign-up"].pageElement}
            />
          </Route>
          <Route
            path={AppPaths["not-found"].path}
            element={AppPaths["not-found"].pageElement}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
