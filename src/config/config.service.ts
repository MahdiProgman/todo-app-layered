import {
  AppConfig,
  Configuration,
  DatabaseConfig,
} from '@common/interfaces/configuration.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { IConfigService } from './config.interface';

@Injectable()
export class ConfigService implements IConfigService {
  constructor(private readonly configService: NestConfigService) {}

  public getEntireConfiguration(): Configuration {
    return this.configService.get<Configuration>('');
  }

  public getAppConfiguration(): AppConfig {
    return this.configService.get<AppConfig>('app');
  }

  public getDatabaseConfiguration(): DatabaseConfig {
    return this.configService.get<DatabaseConfig>('database');
  }
}
