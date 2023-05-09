import { IUser, IUserInfo } from "../interfaces"

const apiPrefix = "/api"

const API = {
  signIn: async (body: {
    username: string
    password: string
  }): Promise<string> =>
    fetch(apiPrefix + "/auth/login", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "post",
      body: JSON.stringify(body),
    }).then((r) => r.text()),
  signUp: async (body: {
    username: string
    password: string
    confirmPassword: string
  }) =>
    fetch(apiPrefix + "/auth/register", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "post",
      body: JSON.stringify(body),
    }),
  logout: async () =>
    fetch(apiPrefix + "/auth/logout", {
      method: "delete",
    }),
  getOnlineUsers: async (): Promise<IUser[]> =>
    fetch(apiPrefix + "/users/online").then((r) => r.json()),
  getOnlineUserInfo: async (id: number): Promise<IUserInfo> =>
    fetch(apiPrefix + "/users/online/" + id).then((r) => r.json()),
}

export default API
