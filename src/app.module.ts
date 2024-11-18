import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from '@/config';
import { HealthApi } from '@/api/health';
import { CompareApi } from '@/api/compare';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    HealthApi,
    CompareApi,
  ],
})
export class AppModule {}
