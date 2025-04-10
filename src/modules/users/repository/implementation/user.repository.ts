import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "@/users/user.entity";
import { Repository } from "typeorm";
import { UserDto } from "@/users/dtos/user.dto";
import { IUserRepository } from "@/users/repository/user.repository.interface";

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.repository.find({
      select: [
        'id',
        'name',
        'lastName',
        'phone',
        'email',
        'status',
        'createdAt',
        'updatedAt'
      ]
    });
  }

  async create(user: UserDto): Promise<UserDto> {
    return this.repository.save(this.repository.create(user));
  }

  async findById(id: string): Promise<Omit<UserDto, "password"> | null> {
    return this.repository.findOne({
      where: { id },
      select: [
        'id',
        'name',
        'lastName',
        'phone',
        'email',
        'status',
        'createdAt',
        'updatedAt'
      ]
    });
  }

  async findByEmail(email: string): Promise<Omit<UserDto, "password"> | null> {
    return this.repository.findOne({
      where: { email },
      select: [
        'id',
        'name',
        'lastName',
        'phone',
        'email',
        'status',
        'createdAt',
        'updatedAt'
      ]
    });
  }
}
