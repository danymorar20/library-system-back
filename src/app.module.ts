import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './modules/users/user.entity';
import { LibrarySystemDatabaseConfig } from './config/database.config';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    LibrarySystemDatabaseConfig([UserEntity])
  ],
})
export class AppModule {}
