import { UserDto } from "@/users/dtos/user.dto";

export abstract class IUserService {
  abstract findAllUsers(): Promise<Omit<UserDto, "password">[]>;
  abstract createUser(user: Omit<UserDto, "id">): Promise<Omit<UserDto, "password">>;
  abstract findUserById(id: string): Promise<Omit<UserDto, "password">| null>;
  abstract findUserByEmail(email: string): Promise<Omit<UserDto, "password">| null>;
}
