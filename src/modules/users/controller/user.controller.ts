import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { IUserService } from "@/users/service/user.service.interface";
import { UserRequestDto } from "./dtos/user-request.dto";
import { UserResponseDto } from "./dtos/user-response.dto";

@Controller("users")
export class UserController {
  constructor(private readonly userService: IUserService) {}

  @Get()
  async getAllUsers(): Promise<UserResponseDto[]> {
    return await this.userService.findAllUsers();
  }

  @Get("id/:id")
  async getUserById(@Param("id") id: string): Promise<UserResponseDto | null> {
    return await this.userService.findUserById(id)
  }

  @Get("email/:email")
  async getUserByEmail(@Param("email") email: string): Promise<UserResponseDto | null> {
    return await this.userService.findUserByEmail(email);
  }

  @Post()
  async getUsers(@Body() newUser: UserRequestDto): Promise<UserResponseDto> {
    return await this.userService.createUser(newUser);
  }
}
