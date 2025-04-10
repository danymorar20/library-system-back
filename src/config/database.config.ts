import { TypeOrmModule } from "@nestjs/typeorm";
import { MixedList } from "typeorm";
import { configDatabaseEnvironments } from "./environments";

export const LibrarySystemDatabaseConfig = (entities?: MixedList<any>) => {
  const config = configDatabaseEnvironments();
  return TypeOrmModule.forRoot({
    type: "postgres",
    host: config.host,
    port: Number(config.port),
    username: config.username,
    password: config.password,
    database: config.database,
    synchronize: config.synchronize,
    autoLoadEntities: config.autoLoadEntities,
    entities: entities ?? [],
  })
}
