import {
  AppConfig,
  Configuration,
  DatabaseConfig,
} from '@common/interfaces/configuration.interface';

export interface IConfigService {
  getEntireConfiguration: () => Configuration;
  getAppConfiguration: () => AppConfig;
  getDatabaseConfiguration: () => DatabaseConfig;
}
