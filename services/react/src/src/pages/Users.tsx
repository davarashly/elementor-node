import Table from "../components/Table"
import { IUser, IUserInfo } from "../interfaces"
import { TableColumn } from "../components/Table/types"
import { useEffect, useState } from "react"
import api from "../api"
import { formattedDate } from "../utils"

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [userInfo, setUserInfo] = useState<IUserInfo>()

  const refreshInMSeconds = parseInt(
    process.env.REACT_APP_REFRESH_USERS_IN_MILLISECS || "10000",
  )

  useEffect(() => {
    const handler = async () => await api.getOnlineUsers().then(setUsers)
    handler()

    const interval = setInterval(handler, refreshInMSeconds)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const userColumns: TableColumn<IUser>[] = [
    {
      key: "username",
      title: "Username",
      renderCell: (item) => (
        <span className="text-primary">{item.username}</span>
      ),
    },
    {
      key: "login-time",
      title: "Login Time",
      renderCell: (item) => (
        <span className="gray-color">{formattedDate(item.loginTime)}</span>
      ),
    },
    {
      key: "last-updated-time",
      title: "Last Updated",
      renderCell: (item) => (
        <span className="gray-color">{formattedDate(item.updatedAt)}</span>
      ),
    },
    {
      key: "last-login",
      title: "Last Login",
      renderCell: (item) => (
        <span className="gray-color">{formattedDate(item.lastLogin)}</span>
      ),
    },
    {
      key: "ip",
      title: "IP",
      renderCell: (item) => <span className="gray-color">{item.ip}</span>,
    },
  ]
  const userInfoColumns: TableColumn<IUserInfo>[] = [
    {
      key: "user-agent",
      title: "User Agent",
      width: "45%",
      renderCell: (item) => (
        <span className="gray-color">{item.userAgent}</span>
      ),
    },
    {
      key: "register-time",
      title: "Register Time",
      width: "45%",
      renderCell: (item) => (
        <span className="gray-color">{formattedDate(item.registerTime)}</span>
      ),
    },
    {
      key: "logins-count",
      title: "Logins",
      width: "10%",
      renderCell: (item) => (
        <span className="gray-color">{item.loginCount}</span>
      ),
    },
  ]

  const closeInfo = () => {
    setUserInfo(undefined)
  }

  const showInfo = (id: number) => async () => {
    try {
      const userInfo = await api.getOnlineUserInfo(id)

      setUserInfo(userInfo)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      {!!userInfo ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,.65)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="p-4 p-md-5 bg-white border-1 rounded-3 position-relative"
            style={{ maxWidth: "700px", width: "100%" }}
          >
            <span
              className="d-flex justify-content-center align-items-center"
              onClick={closeInfo}
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                cursor: "pointer",
                width: 40,
                height: 40,
                fontSize: 24,
                color: "var(--bs-gray-600)",
              }}
            >
              &times;
            </span>
            <Table
              className="p-0 d-block h-100"
              data={[userInfo]}
              columns={userInfoColumns}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <Table data={users} columns={userColumns} showInfo={showInfo} />
    </>
  )
}

export default Users
