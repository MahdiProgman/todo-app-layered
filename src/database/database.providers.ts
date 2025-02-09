import { Provider } from '@nestjs/common';
import { Services } from '@common/utils/constansts';
import { IConfigService } from 'config/config.interface';
import { DataSource } from 'typeorm';

export const databaseProviders: Provider[] = [
  {
    provide: Services.DATA_SOURCE,
    useFactory: async (configService: IConfigService) => {
      const databaseConfig = configService.getDatabaseConfiguration();

      const dataSource = new DataSource({
        ...databaseConfig,
        entities: [
          __dirname +
            '/../modules/**/infrastructure/entities/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return await dataSource.initialize();
    },
    inject: [Services.CONFIG_SERVICE],
  },
];
