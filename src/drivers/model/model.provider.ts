import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  pipeline,
  TokenClassificationPipeline,
} from '@huggingface/transformers';
import { ConfigModel } from '@/entities/config';

export const ModelProvider: Provider<TokenClassificationPipeline> = {
  provide: TokenClassificationPipeline,
  useFactory(config: ConfigService): Promise<TokenClassificationPipeline> {
    const model: ConfigModel = config.getOrThrow('model');
    return pipeline(model.task, model.model, {
      device: model.device,
      dtype: model.dtype,
      model_file_name: model.modelFileName,
    });
  },
  inject: [ConfigService],
};
