import { Module } from "@nestjs/common";
import { UserController } from "./controller/user.controller";
import { UserService } from "./service/implementation/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { IUserRepository } from "./repository/user.repository.interface";
import { UserRepository } from "./repository/implementation/user.repository";
import { IUserService } from "./service/user.service.interface";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    {
      provide: IUserService,
      useClass: UserService
    },
    {
      provide: IUserRepository,
      useClass: UserRepository
    }
  ],
  exports: [IUserService],
})
export class UserModule {}
