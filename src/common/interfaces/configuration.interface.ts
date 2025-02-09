export interface Configuration {
  app: AppConfig;
  database: DatabaseConfig;
}

export interface DatabaseConfig {
  type: string;
  host: string;
  port: string;
  username: string;
  password: string;
  database: string;
}

export interface AppConfig {
  port: string;
}
