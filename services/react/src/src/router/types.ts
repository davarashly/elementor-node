import React from "react"

export type PagePathName =
  | "home"
  | "users"
  | "sign-in"
  | "sign-up"
  | "not-found"
  | "logout"

export type PagePath = Exclude<PagePathName, "home"> | "/" | "*"

export type Path = {
  path: PagePath
  title: string
  pageElement: React.JSX.Element
}
