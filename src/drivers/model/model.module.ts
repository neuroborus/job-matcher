import { Module } from '@nestjs/common';
import { ModelService } from './model.service';
import { ModelProvider } from './model.provider';

@Module({
  providers: [ModelProvider, ModelService],
  exports: [ModelService],
})
export class ModelModule {}
