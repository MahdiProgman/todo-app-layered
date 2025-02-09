import { Configuration } from '@common/interfaces/configuration.interface';
import * as dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

export default (): Configuration => ({
  app: {
    port: process.env.APP_PORT || '3000',
  },
  database: {
    type: (process.env.DB_TYPE as 'mysql' | 'mariadb') || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'todo-app',
  },
});
