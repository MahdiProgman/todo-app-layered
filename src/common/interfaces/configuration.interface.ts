export interface Configuration {
  app: AppConfig;
  database: DatabaseConfig;
}

export interface DatabaseConfig {
  type: 'mysql' | 'mariadb';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface AppConfig {
  port: string;
}
