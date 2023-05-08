import { Test, TestingModule } from "@nestjs/testing"
import { UsersController } from "./users.controller"
import { UsersService } from "./users.service"
import { ResponseUserDTO, ResponseUserInfoDTO } from "./dto"

describe("UsersController", () => {
  let controller: UsersController
  let service: UsersService

  beforeEach(async () => {
    service = {} as UsersService
    service.getOnlineUsers = jest.fn()
    service.getUserInfo = jest.fn()

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: service }],
    }).compile()

    controller = module.get<UsersController>(UsersController)
  })

  it("should be defined", () => {
    expect(controller).toBeDefined()
  })

  describe("getOnlineUsers", () => {
    it("should return an array of online users", async () => {
      const mockOnlineUsers: ResponseUserDTO[] = [
        {
          id: 1,
          username: "testUser1",
          updatedAt: new Date(),
          loginTime: new Date(),
          lastLogin: new Date(),
          ip: "127.0.0.1",
        },
      ]

      ;(service.getOnlineUsers as jest.Mock).mockResolvedValue(mockOnlineUsers)

      const result = await controller.getOnlineUsers()

      expect(result).toEqual(mockOnlineUsers)
      expect(service.getOnlineUsers).toHaveBeenCalled()
    })
  })

  describe("getUserInfo", () => {
    it("should return user info for a given user ID", async () => {
      const userId = 1
      const mockUserInfo: ResponseUserInfoDTO = {
        registerTime: new Date(),
        loginCount: 5,
        userAgent: "Test User Agent",
      }

      ;(service.getUserInfo as jest.Mock).mockResolvedValue(mockUserInfo)

      const result = await controller.getUserInfo(userId)

      expect(result).toEqual(mockUserInfo)
      expect(service.getUserInfo).toHaveBeenCalledWith(userId)
    })
  })
})
