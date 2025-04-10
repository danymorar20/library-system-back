import { Injectable } from "@nestjs/common";
import { IUserRepository } from "@/users/repository/user.repository.interface";
import { v4 as uuidv4 } from 'uuid';
import { UserDto } from "@/users/dtos/user.dto";
import { IUserService } from "@/users/service/user.service.interface";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService implements IUserService{
  constructor(private readonly userRepository: IUserRepository) {}

  async createUser(user: Omit<UserDto, "id">): Promise<Omit<UserDto, "password">> {
    const hashedPassword = await bcrypt.hash(user.password, Number(process.env.BCRYPT_SALT_ROUNDS) || 10);

    const newUser: UserDto = {
      id: uuidv4(),
      ...user,
      password: hashedPassword,
    };

    const { password, ...userCreated } = await this.userRepository.create(newUser)
    return userCreated;
  }
  
  async findAllUsers(): Promise<Omit<UserDto, "password">[]> {
    return await this.userRepository.findAll();
  }

  async findUserById(id: string): Promise<Omit<UserDto, "password"> | null> {
    return await this.userRepository.findById(id);
  }

  async findUserByEmail(email: string): Promise<Omit<UserDto, "password"> | null> {
    return await this.userRepository.findByEmail(email);
  }
}
