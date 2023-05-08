import { Test, TestingModule } from "@nestjs/testing"
import { UsersService } from "./users.service"
import { getRepositoryToken } from "@nestjs/typeorm"
import {
  UserEntity,
  UserIpEntity,
  UserLoginCountEntity,
  UserSessionEntity,
} from "./entities"

describe("UsersService", () => {
  let service: UsersService

  const userRepositoryMock = {
    findOne: jest.fn(),
    create: jest.fn(),
  }

  const userSessionRepositoryMock = {
    createQueryBuilder: jest.fn(),
    findOne: jest.fn(),
  }

  const userIpRepositoryMock = {
    findOne: jest.fn(),
  }

  const userLoginCountRepositoryMock = {
    findOne: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: userRepositoryMock,
        },
        {
          provide: getRepositoryToken(UserSessionEntity),
          useValue: userSessionRepositoryMock,
        },
        {
          provide: getRepositoryToken(UserIpEntity),
          useValue: userIpRepositoryMock,
        },
        {
          provide: getRepositoryToken(UserLoginCountEntity),
          useValue: userLoginCountRepositoryMock,
        },
      ],
    }).compile()

    service = module.get<UsersService>(UsersService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })

  describe("getOnlineUsers", () => {
    it("should return an array of online users", async () => {
      const mockOnlineUsers = [
        {
          id: 1,
          username: "testUser1",
          updatedAt: new Date(),
          loginTime: new Date(),
          lastLogin: new Date(),
          ip: "127.0.0.1",
        },
      ]

      userSessionRepositoryMock.createQueryBuilder.mockReturnValue({
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        orderBy: jest.fn().mockReturnThis(),
        addSelect: jest.fn().mockReturnThis(),
        getRawMany: jest.fn().mockResolvedValue(mockOnlineUsers),
      })

      const result = await service.getOnlineUsers()

      expect(result).toEqual(mockOnlineUsers)
      expect(userSessionRepositoryMock.createQueryBuilder).toHaveBeenCalledWith(
        "session",
      )
    })
  })

  describe("getUserInfo", () => {
    it("should return user info for a given user ID", async () => {
      const userId = 1
      const mockUserInfo = {
        registerTime: new Date(),
        loginCount: 5,
        userAgent: "Test User Agent",
      }

      userSessionRepositoryMock.createQueryBuilder.mockReturnValue({
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        orderBy: jest.fn().mockReturnThis(),
        addSelect: jest.fn().mockReturnThis(),
        getRawOne: jest.fn().mockResolvedValue(mockUserInfo),
      })

      const result = await service.getUserInfo(userId)

      expect(result).toEqual(mockUserInfo)
      expect(userSessionRepositoryMock.createQueryBuilder).toHaveBeenCalledWith(
        "session",
      )
    })

    it("should throw NotFoundException if user is not found", async () => {
      const userId = 1

      userSessionRepositoryMock.createQueryBuilder.mockReturnValue({
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        orderBy: jest.fn().mockReturnThis(),
        addSelect: jest.fn().mockReturnThis(),
        getRawOne: jest.fn().mockResolvedValue(undefined),
      })

      try {
        await service.getUserInfo(userId)
      } catch (e) {
        expect(e.message).toBe("User not found or is not online")
        expect(e.status).toBe(404)
      }

      expect(userSessionRepositoryMock.createQueryBuilder).toHaveBeenCalledWith(
        "session",
      )
    })
  })
})
