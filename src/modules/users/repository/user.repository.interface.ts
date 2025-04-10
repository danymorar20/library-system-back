import { UserDto } from "@/users/dtos/user.dto";

export abstract class IUserRepository {
  abstract findAll(): Promise<Omit<UserDto, "password">[]>;
  abstract findById(id: string): Promise<Omit<UserDto, "password"> | null>;
  abstract findByEmail(email: string): Promise<Omit<UserDto, "password"> | null>;
  abstract create(user: UserDto): Promise<UserDto>;
}
