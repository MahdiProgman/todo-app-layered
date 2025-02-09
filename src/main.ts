import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Services } from '@common/utils/constansts';
import { IConfigService } from 'config/config.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<IConfigService>(Services.CONFIG_SERVICE);

  await app.listen(configService.getAppConfiguration().port);
}
bootstrap();
