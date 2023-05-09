import { useLocation } from "react-router-dom"
import AppPaths from "../router/routes"
import { PagePathName } from "../router/types"
import { useEffect } from "react"

const useDocumentTitle = () => {
  const location = useLocation()
  const pathTitle = AppPaths[location.pathname.slice(1) as PagePathName]?.title

  useEffect(() => {
    const title = "Dashboard" + (pathTitle ? ` | ${pathTitle}` : "")

    document.title = title
  }, [location])
}

export default useDocumentTitle
