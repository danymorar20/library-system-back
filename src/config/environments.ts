export const configDatabaseEnvironments = () => {
  const {
    LIBRARY_SYSTEM_DATABASE_HOST,
    DATABASE_PORT_LIBRARY_SYSTEM,
    LIBRARY_SYSTEM_DATABASE_USERNAME,
    LIBRARY_SYSTEM_DATABASE_PASSWORD,
    DATABASE_NAME_LIBRARY_SYSTEM,
    ENV,
  } = process.env;

  return {
    host: LIBRARY_SYSTEM_DATABASE_HOST,
    port: DATABASE_PORT_LIBRARY_SYSTEM,
    username: LIBRARY_SYSTEM_DATABASE_USERNAME,
    password: LIBRARY_SYSTEM_DATABASE_PASSWORD,
    database: DATABASE_NAME_LIBRARY_SYSTEM,
    synchronize: ENV === "development",
    autoLoadEntities: true,
  };
};
