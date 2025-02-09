import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { ConfigService } from './config.service';
import { Services } from '@common/utils/constansts';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [configuration],
      ignoreEnvFile: true,
    }),
  ],
  providers: [
    ConfigService,
    {
      provide: Services.CONFIG_SERVICE,
      useExisting: ConfigService,
    },
  ],
  exports: [Services.CONFIG_SERVICE],
})
export class ConfigModule {}
